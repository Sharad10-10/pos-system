'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SidesSection = ({addItemToOrder}) => {

  const [sidesData, setSidesData] = useState([]) 
  const fetchSidesData = async ()=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sides`)
        const data = await response?.json()
        setSidesData(data)   
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchSidesData()
  },[])




  return (
    <div className='pt-8 flex gap-x-12 gap-y-4 flex-wrap h-screen'>
         {sidesData?.data?.map((sidesData, index)=> {
          return (
               <div  key={index} className='max-w-50'>
                    <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/hawaiin.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                    <h1 className='text-xl font-medium pt-1'>{sidesData?.sidesName}</h1>
                    <div className='pt-4 flex flex-col gap-2'>
                        {sidesData?.smallPrice ? <span onClick={()=> addItemToOrder({name: sidesData?.sidesName, price: sidesData?.smallPrice, size: sidesData?.sidesName == 'Boneless Wings' || sidesData?.sidesName == 'Traditional Wings' ? 'Small (pcs)' : 'Small' })} className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Small{sidesData?.sidesName === 'Boneless wings' || sidesData?.sidesName === 'Traditional Wings' ? ' (8pcs)': ''}: {sidesData?.smallPrice}$</span> : ''}
                        {sidesData?.regularPrice ? <span onClick={()=> addItemToOrder({name: sidesData?.sidesName, price: sidesData?.regularPrice, size: sidesData?.sidesName == 'Boneless Wings' || sidesData?.sidesName == 'Traditional Wings' ? 'Regular 14(pcs)' : 'Regular' })} className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Regular{sidesData?.sidesName === 'Boneless wings' || sidesData?.sidesName === 'Traditional Wings' ? ' (14pcs)': ''}: {sidesData?.regularPrice}$</span>: ''}
                      {sidesData?.largePrice ?  <span onClick={()=> addItemToOrder({name: sidesData?.sidesName, price: sidesData?.largePrice, size: sidesData?.sidesName == 'Boneless Wings' || sidesData?.sidesName == 'Traditional Wings' ? 'Large 22(pcs)' : 'Large' })} className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Large{sidesData?.sidesName === 'Boneless wings' || sidesData?.sidesName === 'Traditional Wings' ? ' (22pcs)': ''}: {sidesData?.largePrice}$</span>: ''}
                    </div>
            </div>
    
          )
         })}
    </div>
  )
}

export default SidesSection