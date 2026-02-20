import { db } from "@/db/dbConfig"
import { customerDataSchema } from "@/db/schema"
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server"

export const PUT = async(request, {params})=> {
   
    const {id} = await params;
    console.log(id);

    const body = await request.json()
    console.log(body);
    const{orderStatus, paymentStatus} = body


    try {
        const customerData = await db.select().from(customerDataSchema).where(eq(customerDataSchema.id, Number(id)))
        if(customerData.length === 0) {
            return NextResponse.json({
                success:false,
                message: 'No record found...'
            },{status: 404})
        }

        const updateCostumerData = await db.update(customerDataSchema).set({
            orderStatus,
            paymentStatus
        }).where(eq(customerDataSchema.id, Number(id)))

        return NextResponse.json({
            success: true,
            message: "Fields updated...",
            updateCostumerData
        },{status: 201})

    } catch (error) {
         return NextResponse.json({
            success: false,
            message: "Failed to update fields..."
        },{status: 500})
    }
   
}