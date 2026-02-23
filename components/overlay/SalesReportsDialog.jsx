'use client'
import React, { useState } from 'react'

const SalesReportsDialog = ({closeDialog, displayDialog, selectedOrder, fetchCustomerData}) => {
    console.log(selectedOrder, "selectedd");
    const [formData, setFormData] = useState({
        cash: '',
        credit: '',
        debit: '',
        orderStatus: selectedOrder?.orderStatus || 'Not Ready',
        paymentStatus: selectedOrder?.paymentStatus || 'Not Paid'
    })

    
    const handleInput = (e)=> {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async(e)=> {
        e.preventDefault()
        const id = selectedOrder?.id

        try {
            const response = await fetch(`http://localhost:3000/api/customerdata/${id}`, 
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({orderStatus:formData?.orderStatus, paymentStatus:formData?.paymentStatus})
                }
            )
            const data = await response.json()
           
        } catch (error) {
            console.log(error);
        }
        closeDialog()
        fetchCustomerData()  
    }

  return (
        <>
            {displayDialog &&  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className='flex flex-col fixed w-250 rounded-md bg-white'>
        <div className='flex items-center justify-center text-center text-lg font-medium pt-4'>
            <h1>View</h1>
        </div>

        <div>
            <p onClick={closeDialog} className='fixed right-70 top-14 px-3 py-1 rounded-md text-white cursor-pointer bg-red-500 hover:scale-105 transition-all duration-500'>Close</p>
        </div>

        
        <div className='px-8 py-4 text-[17px] font-semibold'>
                 <div  className='flex flex-col justify-center gap-4'>
                <h1>Order Number: {selectedOrder?.id}</h1>
                <h1>Customer Name: {selectedOrder?.customerName}</h1>
                <h1>Phone Number: {selectedOrder?.phoneNumber}</h1>
                <h1>Order Summary: {selectedOrder?.order?.map((selectedOrder, index)=> {
                    return (
                        <span key={index}>
                            {selectedOrder}
                            {index < selectedOrder.length - 1 && ', '}
                        </span>
                    )
                })}</h1>
                <h1>Total: {selectedOrder?.totalPrice}$</h1>
            </div>
           

            <div className='mt-8'>
                <h1>Payment Type</h1>
               <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='flex gap-2'>
                            <p>Cash: </p>
                            <input type="text" onChange={handleInput} name='cash' className='outline-none pl-2 border border-black/20 rounded-md' placeholder='Amount' maxLength={5}/>
                            <span>$</span>
                        </div>
                        <div className='flex gap-2'>
                            <p>Credit: </p>
                            <input type="text" onChange={handleInput} name='credit' className='outline-none pl-2 border border-black/20 rounded-md' placeholder='Amount' maxLength={5}/>
                            <span>$</span>
                        </div>
                        <div className='flex gap-2'>
                            <p>Debit: </p>
                            <input type="text" onChange={handleInput} name='debit' className='outline-none pl-2 border border-black/20 rounded-md' placeholder='Amount' maxLength={5}/>
                            <span>$</span>
                        </div>
                        <div className='mt-4 flex gap-3'>
                            <p>Order Status:</p>
                            <select onChange={handleInput} value={selectedOrder.orderStatus}  name="orderStatus" id="orderStatus" className='border-2 border-black/20 rounded-md'>
                                <option value='Not Ready'>Not Ready</option>
                                <option value='Ready'>Ready</option>
                            </select>
                        </div>
                        <div className='mt-4 flex gap-3'>
                            <p>Payment Status:</p>
                            <select onChange={handleInput} value={selectedOrder.paymentStatus} name="paymentStatus" id="paymentStatus" className='border-2 border-black/20 rounded-md'>
                                <option value='Not Paid'>Not Paid</option>
                                <option value='Paid'>Paid</option>
                            </select>
                        </div>   
                        <div className='mt-3'>
                            <button className='w-full cursor-pointer bg-[#E74C3C] text-white hover:scale-103 transition-all duration-500 px-6 py-2 rounded-lg'>Complete</button>
                        </div>                           
                    </div>
               </form>
            </div>
        </div>
        
    </div>
  </div>}
        
        </>
  )
}

export default SalesReportsDialog