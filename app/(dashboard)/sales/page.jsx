'use client'
import DrinksSection from '@/components/sales/DrinksSection'
import OrderSummary from '@/components/sales/OrderSummary'
import PizzaSection from '@/components/sales/PizzaSection'
import SidesSection from '@/components/sales/SidesSection'

import React, { useState } from 'react'

const Sales = () => {

  const [orderItems, setOrderItems] = useState([])
  const [toggleMenu, setToggleMenu] = useState('Pizza')
  const handleMenuClick = (e)=> {
      setToggleMenu(e.target.innerText)
  }

    const addItemToOrder = (item)=> {
      setOrderItems(
       [ ...orderItems,
       item]
      )
    }


 
 
  return (
   <div className='bg-[#F5F5F5] w-329 grid grid-cols-[35%_65%] ml-51 mt-18 pt-4'>

     <div className='shadow-2xl pl-4'>
      <OrderSummary orderItems = {orderItems}/>
     </div>
     
     <div className='pl-6 shadow-2xl'>
      <div className='flex items-center gap-3'>
        <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Pizza</p>
        <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Sides</p>
        <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Drinks</p>
      </div>

      <div className='pb-12'>
       {toggleMenu == 'Pizza' ? <PizzaSection addItemToOrder = {addItemToOrder}/>: '' || toggleMenu == 'Sides' ? <SidesSection /> : '' || toggleMenu == 'Drinks' ? <DrinksSection /> : ''}
      </div>
     </div>

   </div>
  )
}

export default Sales