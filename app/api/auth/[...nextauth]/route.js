import { db } from "@/db/dbConfig";
import { userSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import 'dotenv/config';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials : {},

            async authorize(credentials){
                if(!credentials){
                    return null;
                }

                const user = await db.select().from(userSchema).where(eq(userSchema.userName, credentials.userName))
                if (!user.length) return null;

                const isValid = await bcrypt.compare(credentials.password, user[0].password);
                if (!isValid) return null;

                return { id: user[0].id, name: user[0].userName };
            }
        })
    ],

    session: {strategy: 'jwt'},
    pages: {signIn: '/', error: '/'},
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}