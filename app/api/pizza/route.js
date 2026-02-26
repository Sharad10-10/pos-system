import { db } from "@/db/dbConfig"
import { pizzaSchema } from "@/db/schema"
import { NextResponse } from "next/server"

export const POST =async (request, response)=> {
    const {pizzaName, imageUrl, smallPrice, mediumPrice, largePrice} = await request.json()

 try {
        const pizza = await db.insert(pizzaSchema).values({
            pizzaName,
            imageUrl,
            smallPrice,
            mediumPrice,
            largePrice
        }).returning()

        return NextResponse.json({
            message: "Pizza Added successfully...",
            pizza: pizza[0]
        },{status: 201})

 } catch (error) {
    return NextResponse.json({
        success: false,
        message: 'Failed to add pizza!',
        error
    }, {status: 501})
 }


}


export const GET = async()=> {
   try {
        const data = await db.select().from(pizzaSchema)
            return NextResponse.json({
                success: true,
                message: "Data retrieved successfully...",
                data
            }, {status: 201})
}
 catch (error) {
    return NextResponse.json({
        success: false,
        message: 'Failed to get pizza data!',
        error
    }, {status: 501})        
   }
}