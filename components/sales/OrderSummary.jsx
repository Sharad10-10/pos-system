'use client'
import React, { useEffect, useState } from 'react'
import Overlay from '../overlay/Overlay'
import { Trash2 } from 'lucide-react'

const OrderSummary = ({orderItems, setOrderItems}) => {

         const [showOverlay, setShowOverlay] = useState(false)
         const [orderNumber, setOrderNumber] = useState(null);

            useEffect(()=> {
               setOrderNumber(Math.floor(Math.random()*(200 - 100 )) + 100)
            }, [])
        
            const triggerOverlay = ()=> {
                setShowOverlay(true)
            }


        const subtotal = orderItems.reduce((sum, item) => sum + Number(item.price), 0);
        const tax = (Number(subtotal * 0.05));
        const total = Number(subtotal + tax);


      const totalOrder =  orderItems.map((orderItem, index)=> {
        return (orderItem?.size + ' ' + orderItem?.name)
       })

        const [formData, setFormData] = useState({
            customerName: 'Pickup',
            phoneNumber: '',
            order: '',
            totalPrice: ''
        })

        const handleInput = (e)=> {
            const {name,value} = e.target
            setFormData({
                ...formData,
                [name]: value
            })
        }

        console.log(typeof(formData?.totalPrice));

        const handleSubmit = async(e)=> {
            e.preventDefault()
           
            const finalCustomerData = {
                ...formData,
                order: totalOrder,
                totalPrice: Number(total).toFixed(2),
            }

            

           try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/customerdata`,{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(finalCustomerData)
                })
        
            
                const data = await response.json()
            
                setFormData({
                    customerName: 'Pickup',
                    phoneNumber: '',
                    order: '',
                    totalPrice: ''
                })
                setOrderItems([])
             

           } catch (error) {
            console.log(error);
           }  
        }

         const removeOrderItem = (id) => {
            setOrderItems(prev =>
                prev.filter((item)=> {
                    return (item.id !== id)
                })
            )
        }


  return (
    <div className='max-h-400 border mb-4'>
        <div className='pt-2'>
            <h1 className='text-xl font-medium text-center'>Order Summary</h1>
            <div className='border-b-2 border-black/20 w-100 mx-auto pt-2' />
        </div>

        <div className='px-4 pt-4'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                    <input onChange={handleInput} value={formData.customerName} className='outline-none border-2 border-black/30 p-1 w-full rounded-md' placeholder='Customer Name' type="text" name='customerName' id='customerName' />
                    <input onChange={handleInput}  value={formData.phoneNumber} className='outline-none border-2 border-black/30 p-1 w-full rounded-md' placeholder='Phone Number' type="text" name='phoneNumber' id='phoneNumber' />
                </div>

                <div className='p-4 max-h-140 bg-white mt-8 rounded-md'>
                     <div className='flex justify-between'>
                        <h1 className='font-semibold'>Item Name</h1>
                        <h1 className='pr-10 font-semibold'>Price</h1>
                    </div>
                           <div className='pt-2'>
                                {orderItems.map((orderItem, index)=> {
                            return (
                                <div key={index} className='flex justify-between '>
                                    <div className='flex gap-2 items-center pt-2'>
                                        <h1 className='text-[17px] font-medium'>{orderItem?.size}</h1>
                                        <h1 className='text-[17px] font-semibold'>{orderItem?.name}</h1>
                                     </div>
                                    <div className='flex gap-2 items-center'>
                                        <h1 className='text-[17px] font-medium pt-2'> {orderItem?.price}$</h1>
                                        <Trash2 onClick={() => removeOrderItem(orderItem.id)} className='pt-2 ml-4 cursor-pointer text-red-600 hover:scale-105 transition-all duration-500'/>
                                    </div>
                                    
                            </div>
                            )
                           })}
                           </div>
                     
                 
                </div>

                <div className='border-b-2 border-black/30 px-8 mt-8'/>

                <div className='text-lg font-semibold flex flex-col gap-1 pt-2'>
                    <h1>Subtotal: {subtotal.toFixed(2)}$</h1>
                    <p>Hst (5%): {tax.toFixed(2)}$</p>
                    <h1>Total: {total.toFixed(2)}$</h1>
                </div>

                <div className='pt-4 pb-4'> 
                    <button onClick={triggerOverlay} className='text-white bg-[#E74C3C] px-4 py-2 w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Complete Order</button>
                </div>
            </form>
            {showOverlay && <Overlay setShowOverlay={setShowOverlay} triggerOverlay= {triggerOverlay}/>}
        </div>
    </div>
  )
}

export default OrderSummary