import Image from 'next/image'
import React from 'react'

const DrinksSection = () => {
  return (
    <div className='pt-8 flex gap-12 h-screen'>
       <div className='w-40'>
                  <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                  <h1 className='text-xl font-medium pt-1'>Coke</h1>
                  <div className='pt-4 flex flex-col gap-2'>
                      <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>510ml: 2.49$</span>
                      <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>2l: 4.99$</span>
                  </div>
          </div>
       <div className='w-40'>
                  <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                  <h1 className='text-xl font-medium pt-1'>Sprite</h1>
                  <div className='pt-4 flex flex-col gap-2'>
                      <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>510ml: 2.49$</span>
                      <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>2l: 4.99$</span>
                  </div>
          </div>
       <div className='w-40'>
                  <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                  <h1 className='text-xl font-medium pt-1'>7up</h1>
                  <div className='pt-4 flex flex-col gap-2'>
                      <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>510ml: 2.49$</span>
                      <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>2l: 4.99$</span>
                  </div>
          </div>
    </div>
  )
}

export default DrinksSection