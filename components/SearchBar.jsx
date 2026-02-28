'use client'
import debounce from 'debounce';
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {

  const searchParams = useSearchParams();
  const pathName = usePathname()
  const router = useRouter()

const handleSearch= debounce((e)=> {
   const params = new URLSearchParams(searchParams)

  if(e.target.value) {
    params.set('q', e.target.value)
  }
  else{
    params.delete('q')
  }
  router.replace(`${pathName}?${params}`)
}, 300)


  
  return (
    <div>
        <div className='flex items-center px-12 gap-x-50'>
            <h1 className='text-xl font-medium'>Sales Report</h1>
            <input onChange={handleSearch} className='outline-none border-2 border-black/40 rounded-lg p-1 w-80' type="text" name='searchBar' id='searchBar' placeholder='Search order' />
          </div>
    </div>
  )
}

export default SearchBar