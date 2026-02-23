import { db } from "@/db/dbConfig";
import { userSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server"

export const DELETE =   async (request, {params})=> {
    const {id} = await params;
    console.log(id);

    try {
        const existingUser = await db.select().from(userSchema).where(eq(userSchema.id, id))
        if(existingUser == 0){
            return NextResponse.json({
                success: false,
                message: 'Failed to delete! User does not exist'
            })
        }

        const deleteUser = await db.delete(userSchema).where(eq(userSchema.id, id))
        return NextResponse.json({
            success: true,
            message: 'User deleted successfully...',
            deletedUser: deleteUser
        })


    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to delete user...',
            error
        })
    }
}


export const PUT = ()=> {

}