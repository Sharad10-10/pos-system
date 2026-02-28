import { db } from "@/db/dbConfig";
import { inventorySchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const DELETE = async(request, {params})=>{

  const {id} = await params;
 
  try {

    const existingProduct = await db.select().from(inventorySchema).where(eq(inventorySchema.productId, id))
    if(existingProduct.length === 0) {
        return NextResponse.json({
            success: false,
            message: 'No product found to delete!',
        }, {status: 404})
    }

    const deleteProduct = await db.delete(inventorySchema).where(eq(inventorySchema.productId , id))
    return NextResponse.json({
        success: true,
        message: 'Product deleted successfully...',
    }, {status: 200})



  } catch (error) {
    return NextResponse.json({
        success: false,
        message: 'Failed to delete product!',
        error
    }, {status: 500})
  }

}



export const PUT = async(request,{params})=> {
  
  const {id} = await params
 
const {productId, productName, productType, quantity, kg, units} = await request.json()

try {

  const product = await db.select().from(inventorySchema).where(eq(inventorySchema.id, id))
  console.log(product);
  if(product === 0){
    return NextResponse.json({
      success: false,
      message: 'No product record found!'
    },{status: 404})
  }

  const updateProduct = await db.update(inventorySchema).set({
    productId,
    productName,
    productType,
    quantity,
    kg,
    units
  }).where(eq(inventorySchema.id, id))

  return NextResponse.json({
    success: true,
    message: 'Product data updated successfully...',
  },{status: 200})


} catch (error) {
  return NextResponse.json({
    success: false,
    message: 'Failed to edit product data!',
    error
  }, {status: 500})
}
  

}