import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
  return (
        <button className='cursor-pointer bg-[#E74C3C] text-white hover:scale-105 transition-all duration-500 px-6 py-2 rounded-lg' onClick={()=>signOut()}>Sign out</button>
  )
}

export default SignOut