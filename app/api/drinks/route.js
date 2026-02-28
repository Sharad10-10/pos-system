import { db } from "@/db/dbConfig"
import { drinksSchema } from "@/db/schema"
import { NextResponse } from "next/server"

export const POST =async (request, response)=> {
    const {drinksName, imageUrl, smallPrice, largePrice} = await request.json()

   try {
        const drinks = await db.insert(drinksSchema).values({
            drinksName,
            imageUrl,
            smallPrice,
            largePrice
    }).returning()

    return NextResponse.json({
        success: true,
        message: "Drinks Added successfully...",
        pizza: drinks[0]
    }, {status: 201})

   } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to add drinks!",
            error
        },{status: 500}) 
   }
}


export const GET = async()=> {
    try {
        const data = await db.select().from(drinksSchema)
        return NextResponse.json({
            success: true,
            message: "Data retrieved successfully...",
            data
        },{status: 200})

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to get data!',
            error
        }, {status: 500})
    }
}