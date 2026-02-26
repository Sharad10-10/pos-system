import { db } from '@/db/dbConfig'
import { userSchema } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export const POST = async(request, response)=> {
    const body = await request.json()
    const {userName, password, userRole} = body

    try {
        if(!userName || !password || !userRole) {
            return NextResponse.json({
                success: false,
                message: 'Please provide all the required fields'
            },{status: 400})
        }

            const existingUser = await db.select().from(userSchema).where(eq(userSchema.userName, userName))
            if(existingUser.length > 0) {
                return NextResponse.json({
                    success: false,
                    message: 'User already exists',
                    existingUser : existingUser[0].userName
                },{status: 400})
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const user = await db.insert(userSchema).values({
                userName,
                password: hashedPassword,
                userRole
            }).returning()

            return NextResponse.json({
                success: true,
                message: 'User registered successfully...',
                user: user[0].userName
            },{status: 201})


    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to register user...',
            error
        }, {status: 500})
    }
}

export const GET = async(request)=> {
    try {
       const user = await db.select({
        id: userSchema.id,
        userName: userSchema.userName,
        userRole: userSchema.userRole,
        createdAt: userSchema.created_at
       }).from(userSchema)

       return NextResponse.json({
        success: true,
        message: 'Data retrieved successfully...',
        user
       }, {status: 201})
        
        
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to get data!',
            error
        }, {status: 501})
    }
}