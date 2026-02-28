import { db } from "@/db/dbConfig"
import { sidesSchema } from "@/db/schema"
import { NextResponse } from "next/server"

export const POST =async (request, response)=> {
    const {sidesName, imageUrl, smallPrice, regularPrice, largePrice} = await request.json()

   try {
        const sides = await db.insert(sidesSchema).values({
            sidesName,
            imageUrl,
            smallPrice,
            regularPrice,
            largePrice
        }).returning()

    return NextResponse.json({
        success: true,
        message: "Sides Added successfully...",
        sides: sides[0]
    }, {status: 201})

   } catch (error) {
         return NextResponse.json({
        success: false,
        message: "Failed to add sides...",
        error
    }, {status: 500})
   }


}


export const GET = async()=> {
   try {
        const data = await db.select().from(sidesSchema)
            return NextResponse.json({
                success: true,
                message: "Data retrieved successfully...",
                data
            },{status: 200}) 
   } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to get sides data!'
        }, {status: 500})
   }
}