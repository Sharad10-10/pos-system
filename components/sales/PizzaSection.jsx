'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const PizzaSection =({addItemToOrder}) => {

    const [pizzaData, setPizzaData] = useState([])

    const fetchPizzaData = async()=> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pizza`)
        const {data} = await response?.json()
        setPizzaData(data)
    }

  useEffect(()=> {
     fetchPizzaData()
   },[])


  return (
    <div className='pt-8 flex gap-x-12 gap-y-4 flex-wrap w-212'>
      {pizzaData.map((pizzaData, index)=> { 
           return (
               <div key={index}>
                    <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src={`/${pizzaData?.imageUrl}.jpg`} width={300} height={300} alt='pepperoni'></Image></div>
                    <h1 className='text-xl font-medium pt-1'>{pizzaData?.pizzaName}</h1>
                    <div className='pt-4 flex flex-col gap-2'>
                        <button onClick={()=>addItemToOrder({name: pizzaData?.pizzaName,size: 'Small', price: pizzaData?.smallPrice, id: crypto.randomUUID()}) } className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Small: {pizzaData?.smallPrice}$</button>
                        <button onClick={()=>addItemToOrder({name: pizzaData?.pizzaName,size: 'Medium', price: pizzaData?.mediumPrice, id: crypto.randomUUID()}) } className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Medium: {pizzaData?.mediumPrice}$</button>
                        <button onClick={()=>addItemToOrder({name: pizzaData?.pizzaName,size: 'Large', price: pizzaData?.largePrice, id: crypto.randomUUID()}) } className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Large: {pizzaData?.largePrice}$</button>
                    </div>
                </div>
           )
      })}   
    </div>
    
  )
}

export default PizzaSection