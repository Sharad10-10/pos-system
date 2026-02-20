'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import AddPizzaForm from './AddPizzaForm'
import AddSidesForm from './AddSidesForm'
import AddDrinksForm from './AddDrinksForm'


const MenuTabs = ({result, sidesResult, drinksResult}) => {

      const [toggleMenu, setToggleMenu] = useState('Pizza')
      const handleMenuClick = (e)=> {
          setToggleMenu(e.target.innerText)
          console.log(e.target.innerText);
      }

      console.log(sidesResult);


  return (
    <div>
         <div className='flex items-center gap-3'>
                <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Pizza</p>
                <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Sides</p>
                <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Drinks</p>
            </div>
       
          
          <div className='grid grid-cols-[40%_60%] pt-4'>
              

            {toggleMenu == 'Pizza' ? <AddPizzaForm /> : ''}
            {toggleMenu == 'Sides' ? <AddSidesForm /> : ''}
            {toggleMenu == 'Drinks' ? <AddDrinksForm /> : ''}

                {toggleMenu == 'Pizza' ? 
                 <div className='pt-8 flex gap-x-12 gap-y-4 flex-wrap'>
                    {result?.map((result,index)=> {
                        return (
                             <div key={index}>
                                <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                                    <h1 className='text-xl font-medium pt-1'>{result?.pizzaName}</h1>
                                    <div className='pt-4 flex flex-col gap-2'>
                                    <span  className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Small: {result?.smallPrice}$</span>
                                    <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Medium: {result?.mediumPrice}$</span>
                                    <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Large: {result?.largePrice}$</span>
                                </div>
                             </div>
                        )
                    })}
             </div> : ''}


                    {toggleMenu == 'Sides' ? 
                 <div className='pt-8 flex gap-x-12 gap-y-4 flex-wrap'>
                    {sidesResult?.data?.map((sidesResult,index)=> {
                        return (
                             <div key={index}>
                                <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                                    <h1 className='text-xl font-medium pt-1'>{sidesResult?.sidesName}</h1>
                                    <div className='pt-4 flex flex-col gap-2'>
                                    {sidesResult?.smallPrice ? <span  className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Small: {sidesResult?.smallPrice}$</span> : ''}
                                    {sidesResult?.regularPrice ?  <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Regular: {sidesResult?.regularPrice}$</span> : ''}
                                    {sidesResult?.largePrice ? <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>Large: {sidesResult?.largePrice}$</span> : ''}
                                </div>
                             </div>
                        )
                    })}
             </div> : ''}


             {toggleMenu == 'Drinks' ? 
                 
                 <div className='pt-8 flex gap-x-12 gap-y-4 flex-wrap'>
                    {drinksResult?.data?.map((drinksResult,index)=> {
                        return (
                             <div key={index}>
                                <div className='max-h-40 max-w-40 w-full rounded-lg overflow-hidden'><Image src='/pepperoni.jpg' width={300} height={300} alt='pepperoni'></Image></div>
                                    <h1 className='text-xl font-medium pt-1'>{drinksResult?.drinksName}</h1>
                                    <div className='pt-4 flex flex-col gap-2'>
                                    {drinksResult?.smallPrice ? <span  className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>510ml: {drinksResult?.smallPrice}$</span> : ''}
                                    {drinksResult?.largePrice ? <span className='px-3 py-1 text-sm font-semibold border-2 border-[#EB675A] rounded-xl hover:bg-[#E74C3C] cursor-pointer hover:scale-105 transition-all duration-500'>2L: {drinksResult?.largePrice}$</span> : ''}
                                </div>
                             </div>
                        )
                    })}
             </div> : ''} 
            
         


          </div>



    </div>
  )
}

export default MenuTabs