import AddPizzaForm from '@/components/AddPizzaForm'
import Image from 'next/image'
import React from 'react'

const MenuManagement = async() => {
    const fetchPizzaData = async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/pizza')
            return response.json()
        } catch (error) {
            console.log(error);
        }
    }

    const result = await fetchPizzaData()
    console.log(result);
    


  return (
    <div className='pt-30 pl-60 w-378 pb-20'>
       
          
          <div className='grid grid-cols-[40%_60%]'>
            <AddPizzaForm />

                 <div className='pt-8 flex gap-x-12 gap-y-4 flex-wrap'>
                    {result?.data?.map((data,index)=> {
                        return (
                             <div key={index}>
                                <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                                    <h1 className='text-xl font-medium pt-1'>{data?.pizzaName}</h1>
                                    <div className='pt-4 flex flex-col gap-2'>
                                    <span  className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Small: {data?.smallPrice}$</span>
                                    <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Medium: {data?.mediumPrice}$</span>
                                    <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Large: {data?.largePrice}$</span>
                                </div>
                             </div>
                        )
                    })}
             </div>
          </div>
    </div>
  )
}

export default MenuManagement