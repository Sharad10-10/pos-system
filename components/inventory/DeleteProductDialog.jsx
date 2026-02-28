import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteProductDialog = ({setOpenDialog}) => {

    const [productId, setProductId] = useState('')

    const [showText, setShowText] = useState('')
    const router = useRouter()

   

    const handleSubmit = async(e)=> {
        e.preventDefault()
         try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/${productId}`, {
                    method: 'DELETE'
                })

                const data = await response.json()
                console.log(data);
               
               setShowText(data?.message)

                if(data?.success) {
                router.refresh()
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col fixed w-140 rounded-md bg-white pb-10 py-6">
        <div className="flex flex-col justify-center items-center px-4 text-center text-lg font-medium">
          <div className="flex flex-col gap-2">
                <div className="flex justify-end"><button onClick={()=>setOpenDialog(false)} className="bg-red-500 text-white px-3 py-1 cursor-pointer hover:scale-105 duration-500 transition-all rounded-md">Close</button></div>
                <h1>Enter product id you want to remove?</h1>
                <span className="text-sm text-red-600">Note: Please do not enter # </span>
                <input onChange={(e)=> setProductId(e.target.value)} type="text" className="outline-none border-2 border-black/30 rounded-md pl-2 py-1" placeholder="Enter product id" name="productId" id="productId" required/>
          </div>
          <div className="flex flex-col items-center pr-3 mt-4">
            <p onClick={handleSubmit} className="text-center px-6 py-1 rounded-md text-white cursor-pointer bg-red-500 hover:scale-105 transition-all duration-500">
              Delete
            </p>

            {showText && <p className="mt-2 bg-red-500 rounded-md px-2 text-white">{showText}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductDialog;
