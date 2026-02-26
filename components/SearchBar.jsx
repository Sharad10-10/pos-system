import React from 'react'

const SearchBar = () => {
  
  return (
    <div>
        <div className='flex items-center px-12 gap-x-50'>
            <h1 className='text-xl font-medium'>Sales Report</h1>
            <input className='outline-none border-2 border-black/40 rounded-lg p-1 w-80' type="text" name='searchBar' id='searchBar' placeholder='Search order' />
          </div>
    </div>
  )
}

export default SearchBar