'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  })
  const [error, setError] = useState(false)
  const [displayMessage, setDisplayMessage] = useState('')


  const handleInput = (e)=> {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()

    const response = await signIn('credentials', {
      redirect: false,
      userName: formData.userName,
      password: formData.password
    })

    if(!response?.ok) {
      setDisplayMessage("Error! Invalid credentials")
      setError(true)
      return;
    }

    router.replace('/dashboard') 
  }



  return (
    <div className='flex justify-center items-center h-screen flex-col gap-4 bg-[#34495E] text-white'>
        <div>
            <p className='text-center text-2xl font-medium'>Login</p>
        </div>

        <div>
          <p>Please use below given credentials to login.</p>
          <p>UserName: user</p>
          <p>Password: user123</p>

        </div>

        <div className='max-w-80 w-full'>
            <form className='flex flex-col gap-3 justify-center' onSubmit={handleSubmit}>
               <div className='flex flex-col gap-1'>
                 <label htmlFor="userName" className='text-lg font-medium'>UserName</label>
                 <input type="text" value={formData.userName} autoComplete='current-userName' required onChange={handleInput} id='userName' name='userName' className='outline-none border border-white/40 p-1'/>
               </div>

               <div className='flex flex-col gap-1'>
                 <label htmlFor="password" className='text-lg font-medium'>Password</label>
                 <input type="password" value={formData.password} autoComplete='current-password' required onChange={handleInput} id='password' name='password' className='outline-none border border-white/40 p-1 '/>
               </div>

              {error && (
                 <div>
                <p className="text-white bg-red-500 rounded-md px-2 border max-w-50 border-red-500">{displayMessage}</p>
               </div>

              )}
               <div>
                 <button className='text-lg w-full bg-black px-2 py-1 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Login</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Login