import { db } from "@/db/dbConfig"
import { inventorySchema } from "@/db/schema"
import { asc } from "drizzle-orm"
import { NextResponse } from "next/server"

export const POST = async(request, response) => {
    const {productId, productName, productType, quantity, kg, units} = await request.json()

    try {

        if(!productId || !productName || !productType || !quantity) {
            return NextResponse.json({
                success: false,
                message: 'Please fill all the required fields...'
            }, {status : 404})
        }

        const product = await db.insert(inventorySchema).values({
            productId,
            productName,
            productType,
            quantity,
            kg,
            units
        }).returning()

        return NextResponse.json({
            success: true,
            message: 'Product added successfully...',
            product
        }, {status: 201})


    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to add product',
            error
        }, {status: 500})
    }

}


export const GET = async()=> {
    try {
            const product = await db.select().from(inventorySchema).orderBy(asc(inventorySchema.productId))
            return NextResponse.json({
                success: true,
                message: 'Product data retrieved successfully...',
                product
            }, {status: 200})


    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to get product data...',
            error
        }, {status: 500})
    }
}