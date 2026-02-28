'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const DrinksSection = ({addItemToOrder}) => {

  const [drinksData, setDrinksData] = useState([])

  const fetchDrinksData = async()=> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/drinks`)
        const data = await response.json()
        setDrinksData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchDrinksData()
  },[])


  return (
    <div className='pt-8 flex gap-8 h-screen flex-wrap'>
     {drinksData?.data?.map((drinksData, index)=> {
      return (
            <div key={index} className='w-40'>
                  <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/hawaiin.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                  <h1 className='text-xl font-medium pt-1'>{drinksData?.drinksName}</h1>
                  <div className='pt-4 flex flex-col gap-2'>
                      <span onClick={()=> {addItemToOrder({name: drinksData?.drinksName, size: '510ml', price: drinksData?.smallPrice})}} className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>510ml: {drinksData?.smallPrice}$</span>
                      <span onClick={()=> {addItemToOrder({name: drinksData?.drinksName, size: '2L', price: drinksData?.largePrice})}} className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>2l: {drinksData?.largePrice}$</span>
                  </div>
          </div>
      )
     })}
    </div>
  )
}

export default DrinksSection