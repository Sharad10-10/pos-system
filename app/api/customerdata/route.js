import { db } from "@/db/dbConfig"
import { customerDataSchema } from "@/db/schema"
import { asc } from "drizzle-orm"
import { NextResponse } from "next/server"

export const POST = async(request, response)=> {

    try {
        const {customerName, phoneNumber, order, totalPrice} = await request.json()
        const customerData = await db.insert(customerDataSchema).values({
            customerName,
            phoneNumber,
            order,
            totalPrice
        }).returning()

            return NextResponse.json({
            success: true,
            message: "Customer data added successfully....",
            customerData    
   }, {status: 201})

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to add customer data!',
            error
        }, {status: 500})
    }
}


export const GET = async(request)=> {
    try {
        const customerData = await db.select().from(customerDataSchema).orderBy(asc(customerDataSchema.id))
        return NextResponse.json({
            success: true,
            message: 'Data retrieved successfully...',
            customerData
        }, {status: 200})
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to get customer data!',
            error
        }, {status:500})
    }
}