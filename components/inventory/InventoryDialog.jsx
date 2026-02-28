'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const InventoryDialog = ({setDialogOpen, headingName, editMode, id, productData}) => {

    const [formData, setFormData]= useState({
        productId: productData?.productId || '',
        productName: productData?.productName ||'',
        productType: productData?.productType || '',
        quantity: productData?.quantity || '',
        kg: productData?.kg || '',
        units: productData?.units || ''
    })
    const [showText, setShowText] = useState('')
    const router = useRouter()

    const handleInput = (e)=> {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })

       
    }


    const handleSubmit = async(e)=> {
        e.preventDefault()

        if(editMode){
             try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(formData)
            })
            const data = await response.json()
            setShowText(data?.message)

             if(data?.success) {
                router.refresh()
            }

        } catch (error) {
            console.log(error);
        }
    }

    else {
         try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(formData)
            })
            const data = await response.json()
            setShowText(data?.message)

             if(data?.success) {
                router.refresh()
            }

        } catch (error) {
            console.log(error);
        }
    }
    }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col fixed w-120  rounded-md bg-white pb-10 pt-4">
        <div>
            <div className='flex justify-end pr-4'><button onClick={()=> setDialogOpen(false)} className='text-white bg-[#E74C3C] px-6 py-2  rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Close</button></div>
            <h1 className='text-xl font-semibold text-center'>{headingName}</h1>
        </div>

        <div className='mt-4'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Product Id:</label>
                        <input onChange={handleInput} type="text" name='productId' id='productId' value={formData?.productId} placeholder='Product Id' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                    </div>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Product Name:</label>
                        <input onChange={handleInput} type="text" name='productName' id='productName' value={formData?.productName} placeholder='Product Name' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                    </div>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Product Type:</label>
                        <input onChange={handleInput} type="text" name='productType' id='productType' value={formData?.productType} placeholder='Product Type' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                    </div>
                    <div className='flex gap-2 items-center pl-4'>
                        <label htmlFor="productId">Enter Quantity:</label>
                        <input onChange={handleInput} type="number" name='quantity' id='quantity' value={formData?.quantity} placeholder='Quantity' className='outline-none border-2 border-black/30 pl-2 py-1 rounded-md' required/>
                        <input onChange={handleInput} name='kg' id='kg' type="text" value={formData?.kg} placeholder='kg' className='w-10 px-2 py-1 rounded-md border-2 border-black/30' />
                        <input onChange={handleInput} name='units' id='units' type="text" value={formData?.units} placeholder='units' className='w-20 px-2 py-1 rounded-md border-2 border-black/30' />
                    </div>
                   <p className='text-sm text-red-500 pl-4'>Please type kg if in kg else units</p>
                    <div className='flex px-4'>
                         <button className='text-white bg-[#E74C3C] px-12 py-2 w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Complete</button>
                    </div>
                </div>
            </form>

            {showText && <div className='flex justify-center'><p className={`text-md bg-red-500 ${editMode ? 'max-w-80' : 'max-w-60'} py-1 px-4 rounded-md  mt-4 text-white`}>{showText}</p></div>}
        </div>
      </div>
    </div>
  )
}

export default InventoryDialog