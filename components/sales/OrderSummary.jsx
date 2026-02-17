'use client'
import React, { useState } from 'react'

const OrderSummary = ({orderItems}) => {

        const subtotal = orderItems.reduce((sum, item) => sum + Number(item.price), 0);
        const tax = subtotal * 0.05;
        const total = subtotal + tax;
   

  return (
    <div className='max-h-400 border mb-4'>
        <div className='pt-2'>
            <h1 className='text-xl font-medium text-center'>Order Summary</h1>
            <div className='border-b-2 border-black/20 w-100 mx-auto pt-2' />
        </div>

        <div className='px-4 pt-4'>
            <form>
                <div className='flex flex-col gap-4'>
                    <input className='outline-none border-2 border-black/30 p-1 w-full rounded-md' placeholder='Customer Name' type="text" name='customerName' id='customerName' />
                    <input className='outline-none border-2 border-black/30 p-1 w-full rounded-md' placeholder='Phone Number' type="text" name='phoneNumber' id='phoneNumber' />
                </div>

                <div className='p-4 max-h-140 bg-white mt-8 rounded-md'>
                     <div className='flex justify-between'>
                        <h1 className='font-semibold'>Item Name</h1>
                        <h1 className='pr-10 font-semibold'>Price</h1>
                    </div>
                           <div className='pt-2'>
                                {orderItems.map((orderItem, index)=> {
                            return (
                                <div key={index} className='flex justify-between pr-12'>
                                    <div className='flex gap-2 items-center pt-2'>
                                        <h1 className='text-[17px] font-medium'>{orderItem?.size}</h1>
                                        <h1 className='text-[17px] font-semibold'>{orderItem?.name}</h1>
                                     </div>
                                    <div>
                                        <h1 className='text-[17px] font-medium pt-2'> {orderItem?.price}$</h1>
                                    </div>
                            </div>
                            )
                           })}
                           </div>
                     
                 
                </div>

                <div className='border-b-2 border-black/30 px-8 mt-8'/>

                <div className='text-lg font-semibold flex flex-col gap-1 pt-2'>
                    <h1>Subtotal: {subtotal}$</h1>
                    <p>Hst (5%): {tax.toFixed(2)}$</p>
                    <h1>Total: {total.toFixed(2)}$</h1>
                </div>

                <div className='pt-4 pb-4'> 
                    <button className='text-white bg-[#E74C3C] px-4 py-2 w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Complete Order</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default OrderSummary