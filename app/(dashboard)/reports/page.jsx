
import ReportsTable from '@/components/reports/ReportsTable'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const Reports = async({searchParams}) => {
  
  const params = await searchParams
  const q = params?.q || ''
  console.log("q is: ", q);

 

  const fetchCustomerData = async()=> {
    
try {
      
    const response = await fetch(`${process.env.BASE_URL}/api/customerdata/${q}`,
          {
            cache: 'no-store'
          }
        )
      const data = await response.json()
      return data

} catch (error) {
  console.log(error);
}
       
}
  

  const customerDataResult = await fetchCustomerData()


  return (
    <div className='pt-30 pl-58 pr-5 w-380'>
        <div className='w-full'>

          <SearchBar />

            <ReportsTable customerDataResult={customerDataResult} />
          
               
        </div>
    </div>
  )
}

export default Reports