'use client'
import React, { useState } from 'react'
import UserRegisterDialog from './UserRegisterDialog'

const Button = () => {
     const [openDialog, setOpenDialog] = useState(false)
        const closeDialog=()=> {
            setOpenDialog(false)
        }
        
  return (
    <div>
        <button onClick={()=> setOpenDialog(true)} className='text-white bg-[#E74C3C] px-4 py-2  max-w-44 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Add new employee</button>
        <UserRegisterDialog openDialog={openDialog} closeDialog= {closeDialog}/>
    </div>
  )
}

export default Button