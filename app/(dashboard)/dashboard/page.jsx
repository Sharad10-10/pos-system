import React from 'react'

const Dashboard = () => { 

  
  return (
      <div className='bg-[#F5F5F5 pl-60 pt-30'>
        <div className='inline-flex items-center gap-20 pl-6'>
          <div className='w-100 h-44 bg-white rounded-lg shadow-xl'>
            <div className='flex items-center justify-between px-8 pt-8'>
              <h1 className='text-xl font-semibold text-black/60'>Today's Sales</h1>
              <span className='h-9 w-9 rounded-full bg-green-200 pt-1'>
                <span className='pl-1.5'>💵</span>
              </span>
              
            </div>
            <p className='px-8 py-10 text-3xl font-bold'>$2,000</p>
          </div>

          <div className='w-100 h-44 bg-white rounded-lg shadow-xl'>
            <div className='flex items-center justify-between px-8 pt-8'>
              <h1 className='text-xl font-semibold text-black/60'>Total Order</h1>
              <span className='h-9 w-9 rounded-full bg-green-200 pt-1'>
                <span className='pl-1.5 text-lg'>📦</span>
              </span>
              
            </div>
            <p className='px-8 py-10 text-3xl font-bold'>50</p>
          </div>
        </div>

        <div className='w-300 mt-10 ml-6 shadow-2xl p-8 rounded-lg'>
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
                  <td>Total</td>
                  <td>Status</td>
                  <td>Time</td>
                </tr>
            </thead>

            <tbody className=''>
              <tr>
                <td>#111</td>
                <td>Sarah</td>
                <td>2x Pepperoni, 1x Wings</td>
                <td>$45.99</td>
                <td>Preparing</td>
                <td>2 min ago</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>#111</td>
                <td>Sarah</td>
                <td>2x Pepperoni, 1x Wings</td>
                <td>$45.99</td>
                <td>Preparing</td>
                <td>2 min ago</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>#111</td>
                <td>Sarah</td>
                <td>2x Pepperoni, 1x Wings</td>
                <td>$45.99</td>
                <td>Preparing</td>
                <td>2 min ago</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>#111</td>
                <td>Sarah</td>
                <td>2x Pepperoni, 1x Wings</td>
                <td>$45.99</td>
                <td>Preparing</td>
                <td>2 min ago</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>#111</td>
                <td>Sarah</td>
                <td>2x Pepperoni, 1x Wings</td>
                <td>$45.99</td>
                <td>Preparing</td>
                <td>2 min ago</td>
              </tr>
            </tbody>
          </table>
          </div>

        </div>


      </div>
    
  )
}

export default Dashboard