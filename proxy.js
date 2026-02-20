import { getToken } from "next-auth/jwt"
import { NextResponse } from 'next/server'

export async function proxy(request) {
  // Get the token from the request
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  })
  
  // If no token (not authenticated), redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard', '/sales', '/reports', '/employees', '/inventory', '/menu' ], 
}