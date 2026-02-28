import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RemoveDialog = ({setOpenDialog}) => {

    const [employeeId, setEmployeeId] = useState('')

    const [showText, setShowText] = useState(false)
    const router= useRouter()
    const session = useSession()

    console.log("session is", session);

    const handleSubmit = async(e)=> {
        e.preventDefault()
         try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${Number(employeeId)}`, {
                    method: 'DELETE'
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
    


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col fixed w-140 rounded-md bg-white pb-10 py-6">
        <div className="flex flex-col justify-center items-center px-4 text-center text-lg font-medium">
          <div className="flex flex-col gap-2">
                <div className="flex justify-end"><button onClick={()=>setOpenDialog(false)} className="bg-red-500 text-white px-3 py-1 cursor-pointer hover:scale-105 duration-500 transition-all rounded-md">Close</button></div>
                <h1>Enter employee id you want to remove?</h1>
                <span className="text-sm text-red-600">Note: Do not type # </span>
                <input onChange={(e)=> setEmployeeId(e.target.value)} type="text" className="outline-none border-2 border-black/30 rounded-md pl-2 py-1" placeholder="Enter employee id" name="employeeId" id="employeeId" required/>
          </div>
          <div className="flex flex-col items-center pr-3 mt-4">
            <p onClick={handleSubmit} className="text-center px-6 py-1 rounded-md text-white cursor-pointer bg-red-500 hover:scale-105 transition-all duration-500">
              Delete
            </p>

            {showText && <p className="bg-red-500 rounded-md px-2 text-white mt-4">{showText}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveDialog;
