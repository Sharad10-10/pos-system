'use client'
import React, { useState } from "react";

const UserRegisterDialog = ({openDialog, closeDialog}) => {

    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        userRole: ''
    })

    const handleInput = (e)=> {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async(e)=> {
        e.preventDefault()
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }   

  return (
   <>
    {openDialog &&  <div>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="flex flex-col fixed w-110 rounded-md bg-white pb-10 py-6">
            <div className="flex items-center justify-around pl-9 text-center text-lg font-medium pt-4">
              <h1>Add User Form</h1>
                <div className="flex justify-end pr-3">
                    <p onClick={closeDialog} className="w-20 text-center px-3 py-1 rounded-md text-white cursor-pointer bg-red-500 hover:scale-105 transition-all duration-500">
                        Close
                    </p>
                 </div>
            </div>

          

                <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col gap-3 px-16">
                             <div className="flex flex-col gap-1 justify-center pl-4"> 
                                <label htmlFor="userName">User Name</label>
                                <input onChange={handleInput} className="outline-none border-2 border-black/30 rounded-md pl-2 max-w-80 py-1" type="text" placeholder="Enter user name" name="userName" id="userName" required/>
                            </div>

                            <div className="flex flex-col gap-1 justify-center pl-4">
                                <label htmlFor="password">Password</label>
                                <input onChange={handleInput} className="outline-none border-2 border-black/30 rounded-md pl-2 max-w-80 py-1" type="password" placeholder="Enter password" name="password" id="password" required/>
                            </div>

                            <div className="flex flex-col gap-1 justify-center pl-4">
                                <label htmlFor="userRole">User Role</label>
                                <input onChange={handleInput} className="outline-none border-2 border-black/30 rounded-md pl-2 max-w-80 py-1" type="text" placeholder="Enter user role" name="userRole" id="userRole" required/>
                            </div>

                            <div>
                                <button className='text-white bg-[#E74C3C] px-4 py-2 ml-4 max-w-74 w-full text-center rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Add</button>
                            </div>
                      </div>
                    </form>
                </div>



          </div>
        </div>
    </div>}
   </>
  );
};

export default UserRegisterDialog;
