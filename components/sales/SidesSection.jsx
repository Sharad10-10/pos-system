import Image from 'next/image'
import React from 'react'

const SidesSection = () => {
  return (
    <div className='pt-8 flex gap-12 flex-wrap h-screen'>
          <div className='max-w-50'>
                    <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                    <h1 className='text-xl font-medium pt-1'>Boneless wings</h1>
                    <div className='pt-4 flex flex-col gap-2'>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>8pcs: 8$</span>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>14pcs: 14$</span>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>22pcs: 22$</span>
                    </div>
            </div>
          <div className='max-w-50'>
                    <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                    <h1 className='text-xl font-medium pt-1'>Bones wings</h1>
                    <div className='pt-4 flex flex-col gap-2'>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>8pcs: 8$</span>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>14pcs: 14$</span>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>22pcs: 22$</span>
                    </div>
            </div>
          <div className='max-w-50'>
                    <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                    <h1 className='text-xl font-medium pt-1'>Breadsticks</h1>
                    <div className='pt-4 flex flex-col gap-2'>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Small: 4$</span>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Large: 9$</span>
                        {/* <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>22pcs: 22$</span> */}
                    </div>
            </div>
          <div className='max-w-50'>
                    <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                    <h1 className='text-xl font-medium pt-1'>Cinnabon</h1>
                    <div className='pt-4 flex flex-col gap-2'>
                        <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Regular: 5$</span>
                    </div>
            </div>
    </div>
  )
}

export default SidesSection