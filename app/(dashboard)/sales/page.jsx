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
   <div className='flex ml-48 mt-18 pt-4'>

     <div className='pl-4 ml-2'>
      <OrderSummary orderItems = {orderItems} setOrderItems= {setOrderItems}/>
     </div>
     
     <div className='pl-6'>
      <div className='flex items-center gap-3'>
        <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Pizza</p>
        <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Sides</p>
        <p className='text-2xl rounded-xl border-2 border-[#EA5E50] px-4 py-1 hover:bg-[#E74C3C] cursor-pointer' onClick={handleMenuClick}>Drinks</p>
      </div>

      <div className='pb-12'>
       {toggleMenu == 'Pizza' ? <PizzaSection addItemToOrder = {addItemToOrder}/>: '' || toggleMenu == 'Sides' ? <SidesSection addItemToOrder = {addItemToOrder} /> : '' || toggleMenu == 'Drinks' ? <DrinksSection addItemToOrder = {addItemToOrder} /> : ''}
      </div>
     </div>

   </div>
  )
}

export default Sales