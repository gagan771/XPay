import NextAuth from "next-auth"
import { authOptions } from "./../../../lib/auth"
import { NextAuthOptions } from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }