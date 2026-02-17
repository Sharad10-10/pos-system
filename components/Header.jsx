'use client'
import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import { usePathname } from 'next/navigation'


const Header = () => {
  const pathName = usePathname()
  const [date, setDate] = useState();

  useEffect(()=>{
      const currentDate = new Date()
      const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  })
    setDate(formattedDate)
  },[])

  return (
    <div className='h-19 fixed w-[87%] left-[205.5px] bg-white shadow-md flex justify-between items-center px-14'>
        <div>
          <h1 className='text-2xl font-medium'>{pathName.slice(1).toUpperCase()}</h1>
          <p className='text-sm text-black/50'>{date}</p>
        </div>

        <div>
          <SignOut />
        </div>
    </div>
  )
}

export default Header