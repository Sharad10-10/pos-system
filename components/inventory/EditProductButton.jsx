'use client'
import React, { useState } from 'react'
import InventoryDialog from './InventoryDialog'

const EditProductButton = ({id, productData}) => {
    const [openDialog, setOpenDialog] = useState(false)
    const [editMode, setEditMode] = useState(false)
   

  return (
    <div>
          <button  onClick={() => {
                setOpenDialog(true)
                setEditMode(true)}}  className='text-white bg-[#E74C3C] px-4 py-2  max-w-44 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>Edit</button>
        {openDialog && <InventoryDialog setDialogOpen={setOpenDialog} headingName={'Edit a product'} editMode={editMode} id = {id} productData = {productData}/>}
    </div>
  )
}

export default EditProductButton