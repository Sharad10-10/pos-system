import { db } from "@/db/dbConfig"
import { customerDataSchema } from "@/db/schema"
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
            message: "Data received successfully...",
            customerData    
   }, {status: 200})

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to add customer data',
            error
        }, {status: 500})
    }
}


export const GET = async()=> {
    try {
        const customerData = await db.select().from(customerDataSchema)
        return NextResponse.json({
            success: true,
            message: 'Data retrieved successfully...',
            customerData
        }, {status: 200})
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to get customer data...',
            error
        })
    }
}