'use client'
import React, { useState } from 'react'

const InventoryDialog = ({setDialogOpen}) => {

    const [formData, setFormData]= useState({
        productId: '',
        productName: '',
        productType: '',
        quantity: '',
        kg: '',
        units: ''
    })

    const handleInput = (e)=> {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })

       
    }

     console.log(formData);

    const handleSubmit = async(e)=> {
        e.preventDefault()
        
        try {
            const response = await fetch('api/inventory', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col fixed w-120  rounded-md bg-white pb-10 pt-4">
        <div>
            <div className='flex justify-end pr-4'><button onClick={()=> setDialogOpen(false)} className='text-white bg-[#E74C3C] px-6 py-2  rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Close</button></div>
            <h1 className='text-xl font-semibold text-center'>Add Product</h1>
        </div>

        <div className='mt-4'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Product Id:</label>
                        <input onChange={handleInput} type="text" name='productId' id='productId' placeholder='Product Id' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                    </div>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Product Name:</label>
                        <input onChange={handleInput} type="text" name='productName' id='productName' placeholder='Product Name' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                    </div>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Product Type:</label>
                        <input onChange={handleInput} type="text" name='productType' id='productType' placeholder='Product Type' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                    </div>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Quantity:</label>
                        <input onChange={handleInput} type="number" name='quantity' id='quantity' placeholder='Quantity' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                        <input onChange={handleInput} name='kg' id='kg' type="text" placeholder='kg' className='w-10 px-2 py-1 rounded-md border-2 border-black/30' />
                        <input onChange={handleInput} name='units' id='units' type="text" placeholder='units' className='w-20 px-2 py-1 rounded-md border-2 border-black/30' />
                    </div>
                   <p className='text-sm text-red-500 pl-4'>Please type kg if in kg else units</p>
                    <div className='flex px-4'>
                         <button className='text-white bg-[#E74C3C] px-12 py-2 w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Complete</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default InventoryDialog