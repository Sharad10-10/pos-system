'use client'
import React, { useState } from 'react'
import InventoryDialog from './InventoryDialog'

const AddProductButton = () => {
    const [openDialog, setOpenDialog] = useState(false)
  return (
    <div>
          <button onClick={()=> setOpenDialog(true)} className='text-white bg-[#E74C3C] px-4 py-2  max-w-44 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Add new product</button>
        {openDialog && <InventoryDialog setDialogOpen={setOpenDialog}/>}
    </div>
  )
}

export default AddProductButton