'use client'
import React, { useState } from 'react'
import DeleteProductDialog from './DeleteProductDialog'

const DeleteProductButton = () => {
    const [openDialog, setOpenDialog] = useState(false)
  return (
    <div>
         <button onClick={()=>setOpenDialog(true)} className='text-white bg-[#E74C3C] px-4 py-2  max-w-44 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Delete a product</button>
        {openDialog && <DeleteProductDialog setOpenDialog={setOpenDialog}/>}
    </div>
  )
}

export default DeleteProductButton