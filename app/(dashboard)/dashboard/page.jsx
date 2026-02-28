import React from 'react'

const Dashboard = async() => { 

  const fetchCustomerData = async()=> {
        try {
          const response = await fetch(`${process.env.NEXTAUTH_URL}/api/customerdata`)
          const data = await response.json()
          return data

        } catch (error) {
        console.log(error); 
  }
  }

   const customerDataResult = await fetchCustomerData();
      console.log(customerDataResult);

  return (
      <div className='pl-60 pt-30'>
        <div className='inline-flex items-center gap-20 pl-6'>
          <div className='w-100 h-44 bg-white rounded-lg shadow-xl'>
            <div className='flex items-center justify-between px-8 pt-8'>
              <h1 className='text-xl font-semibold text-black/60'>Today's Sales</h1>
              <span className='h-9 w-9 rounded-full bg-green-200 pt-1'>
                <span className='pl-1.5'>💵</span>
              </span>

            </div>
            <p className='px-8 py-10 text-3xl font-bold'>${customerDataResult?.customerData?.reduce((total, order)=> {
              return (
                  total + Number(order?.totalPrice)
              )
            }, 0)}</p>
          </div>

          <div className='w-100 h-44 bg-white rounded-lg shadow-xl'>
            <div className='flex items-center justify-between px-8 pt-8'>
              <h1 className='text-xl font-semibold text-black/60'>Total Orders</h1>
              <span className='h-9 w-9 rounded-full bg-green-200 pt-1'>
                <span className='pl-1.5 text-lg'>📦</span>
              </span>
              
            </div>
            <p className='px-8 py-10 text-3xl font-bold'>{customerDataResult?.customerData?.length || 0}
           </p>
          </div>
        </div>

        <div className='w-300 mt-10 ml-6 shadow-2xl p-8 rounded-lg mb-4'>
          <div>
            <h1 className='text-xl font-bold'>Recent Orders</h1>
          </div>
         
          <div className='mt-5'>
            <table className='w-full border-separate border-spacing-y-4'>
              <thead className='text-lg font-semibold'>
                <tr>
                  <td>Order Id</td>
                  <td>Customer</td>
                  <td>Items</td>
                  <td className='pl-8'>Total</td>
                  <td>Status</td>
                  <td>Time</td>
                </tr>
            </thead>

            <tbody>
              {customerDataResult?.customerData?.map((customerData, index)=> {
                return (
                    <tr key={index}>
                      <td>#{customerData?.id}</td>
                      <td>{customerData?.customerName}</td>
                      <td className='w-80'>{customerData?.order.join(', ')}</td>
                      <td className='pl-8'>${customerData?.totalPrice}</td>
                      <td>{customerData?.orderStatus}</td>
                      <td>{new Date(customerData?.createdAt).toLocaleTimeString().slice(3)}</td>
                    </tr>
                )
              })}
              
            </tbody>
           
          </table>
          </div>

        </div>


      </div>
    
  )
}

export default Dashboard