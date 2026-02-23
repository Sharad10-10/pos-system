'use client'
import SalesReportsDialog from '@/components/overlay/SalesReportsDialog'
import SearchBar from '@/components/SearchBar'
import React, { useEffect, useState } from 'react'

const Reports = () => {

  const [customerDataResult, setCustomerDataResult] = useState()
  const [displayDialog, setDisplayDialog] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState()
  
    const closeDialog = ()=> {
        setDisplayDialog(false)
    }

  const fetchCustomerData = async()=> {
    try {
        const response = await fetch('http://localhost:3000/api/customerdata')
         const data = await response.json()
         setCustomerDataResult(data)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=> {
    fetchCustomerData()
  }, [])


  return (
    <div className='pt-30 pl-58 pr-5 w-380'>
        <div className='w-full'>

          <SearchBar />

          <div>
            <div className='mt-4'>
              <table className='border-separate border-spacing-y-10 w-full text-center'>
                <thead className='text-lg font-semibold'>
                  <tr>
                    <td>Order Id</td>
                    <td>Customer Name</td>
                    <td>Order Items</td>
                    <td>Total</td>
                    <td>Date and Time</td>
                    <td>Status</td>
                    <td>Payment</td>
                    <td>Actions</td>
                  </tr>
                </thead>

               {customerDataResult?.customerData?.map((customerData, index)=> {
                return (
                   <tbody key={index} className='text-[17px]'>
                      <tr>
                        <td className='border-b-2 border-black/20 pb-2'>#{customerData?.id}</td>
                        <td className='border-b-2 border-black/20 pb-2'>{customerData?.customerName}</td>
                        <td className='w-70 border-b-2 border-black/20 pb-2'>{customerData?.order?.map((customerOrder, index)=> {
                          return (
                              <span key={index}>
                                {customerOrder}
                                {index < customerOrder.length - 1 && ', '}
                              </span>
                          )
                        })}</td>
                        <td className='border-b-2 border-black/20 pb-2'>{customerData?.totalPrice}$</td>
                        <td className='border-b-2 border-black/20 pb-2'>{new Date(customerData?.createdAt).toLocaleString('en-CA', { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true})}</td>
                        <td className='border-b-2 border-black/20 pb-2'><p className={`${customerData?.orderStatus === 'Ready' ? 'text-green-400' : 'text-red-400'}`}>{customerData?.orderStatus}</p></td>
                        <td className='border-b-2 border-black/20 pb-2'><p className={`${customerData?.paymentStatus === 'Paid' ? 'text-green-400' : 'text-red-400'}`}>{customerData?.paymentStatus}</p></td>
                        <td className='border-b-2 border-black/20 pb-2'><button  onClick={() => {
                          setSelectedOrder(customerData);   
                          setDisplayDialog(true);           
                        }}
                          
                          className='px-3 py-1 bg-[#E74C3C] cursor-pointer rounded-lg text-white hover:scale-105 transition-all duration-500'>View</button></td>
                      </tr>
                </tbody>
                )
               })}
              </table>
            </div>
          </div>

               <div><SalesReportsDialog closeDialog= {closeDialog} displayDialog= {displayDialog} selectedOrder={selectedOrder} fetchCustomerData={fetchCustomerData}/></div>
        </div>
    </div>
  )
}

export default Reports