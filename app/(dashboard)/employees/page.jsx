import Button from '@/components/overlay/Button'
import RemoveButton from '@/components/overlay/RemoveButton'
import React from 'react'

const Employees = async() => {

    const fetchUserData = async()=> {
        try {
            const response = await fetch(`${process.env.BASE_URL}/api/users`)
            const data = response.json()
            return data
        } catch (error) {
            console.log(error);
        }
    }

    const result = await fetchUserData();


  return (
    <div className='w-screen h-screen'>

        <div className='pl-60 pt-30'>
           <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-semibold'>Employees</h1>
                <div className='flex gap-3'>
                    <Button />
                    <RemoveButton />
                </div>
           </div>

           <div>
            <table className='w-full border-separate border-spacing-y-4 px-8'>
               <thead className='text-lg font-semibold'>
                <tr>
                    <td>Employee Id</td>
                    <td>Employee Name</td>
                    <td>Role</td>
                    <td>Joined</td>
                </tr>
               </thead>

               <tbody className='text-[17px]'>
                    {result?.user?.map((userData, index)=> {
                        return (
                             <tr key={index}>
                                <td>#{userData?.id}</td>
                                <td>{userData?.userName}</td>
                                <td>{userData?.userRole}</td>
                                <td>{new Date(userData?.createdAt).toLocaleDateString()}</td>
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

export default Employees