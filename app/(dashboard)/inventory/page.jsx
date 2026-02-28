import AddProductButton from '@/components/inventory/AddProductButton'
import DeleteProductButton from '@/components/inventory/DeleteProductButton'
import EditProductButton from '@/components/inventory/EditProductButton'
import React from 'react'

const Inventory = async() => {

    const fetchInventoryData = async()=> {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory`)
            const data = response.json()
            return data
        } catch (error) {
            console.log(error);
        }
    }

    const result = await fetchInventoryData();


  return (
    <div className='w-screen h-screen'>

        <div className='pl-60 pt-30'>
           <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-semibold'>Inventory</h1>
                <div className='flex gap-3'>
                    <AddProductButton />
                    <DeleteProductButton />
                    
                </div>
           </div>

           <div>
            <table className='w-full border-separate border-spacing-y-4 px-8'>
               <thead className='text-lg font-semibold'>
                <tr>
                    <td>Product Id</td>
                    <td>Product Name</td>
                    <td>Product Type</td>
                    <td>Quantity</td>
                    <td>Stock</td>
                </tr>
               </thead>

               <tbody className='text-[17px]'>
                    
                   {result?.product?.map((productData, index)=> {
                    return (
                       <tr key={index}>
                        <td>#{productData?.productId}</td>
                        <td>{productData?.productName}</td>
                        <td>{productData?.productType}</td>
                        <td>{productData?.quantity} {productData?.kg ? productData?.kg : productData?.units}</td>
                        <td>{productData?.quantity > 8 ? 'In stock' : 'Low stock'}</td>
                        <td><EditProductButton id={productData?.id} productData={productData}/></td>
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

export default Inventory