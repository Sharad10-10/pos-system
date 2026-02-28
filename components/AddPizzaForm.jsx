'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddPizzaForm = () => {

        const [formData, setFormData] = useState({
        pizzaName: '',
        imageUrl: '',
        smallPrice:'',
        mediumPrice: '',
        largePrice: ''
    })
    const [showText, setShowText] = useState()

    const router = useRouter()

    const handleInput = (e)=> {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        }
        )
    }

      const handleSubmit = async(e)=> {
            e.preventDefault()
    
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pizza`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
    
            const data = await response.json()
            setShowText(data?.message)

             
            setFormData({
            pizzaName: '',
            imageUrl: '',
            smallPrice:'',
            mediumPrice: '',
            largePrice: ''
            })

             if(data?.success) {
                router.refresh()
            }
            
        }


  return (
    <div>
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
             <label htmlFor="">Name</label>
                <input onChange={handleInput} value={formData.pizzaName} className='outline-none border-2 border-black/30 p-1 max-w-60 rounded-md' type="text" placeholder='Enter pizza name' name='pizzaName' id='pizza' />
                <label htmlFor="">Image</label>
                <input onChange={handleInput} value={formData.imageUrl} className='outline-none border-2 border-black/30 p-1 max-w-60 rounded-md' type="text" placeholder='Enter Image' name='imageUrl' id='image' />
                <label htmlFor="">Small</label>
                <input onChange={handleInput} value={formData.smallPrice} className='outline-none border-2 border-black/30 p-1 max-w-60 rounded-md' type="text" placeholder='Enter price' name='smallPrice' id='smallPrice' />
                <label htmlFor="">Medium</label>
                <input onChange={handleInput} value={formData.mediumPrice} className='outline-none border-2 border-black/30 p-1 max-w-60 rounded-md' type="text" placeholder='Enter price' name='mediumPrice' id='mediumPrice' />
                <label htmlFor="">Large</label>
                <input onChange={handleInput} value={formData.largePrice} className='outline-none border-2 border-black/30 p-1 max-w-60 rounded-md' type="text" placeholder='Enter price' name='largePrice' id='largePrice' />

                 <div>
                    <button className='px-6 py-2 bg-[#EB675A] text-white rounded-lg cursor-pointer hover:scale-105 duration 500 transition-all'>Add New Pizza</button>
               </div>

            </form>
           {showText && <div className="flex mt-2"><p className="bg-red-500 rounded-md px-4 py-1 text-md text-white mt-2">{showText}</p></div>}
        </div>
    </div>
  )
}

export default AddPizzaForm