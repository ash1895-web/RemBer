import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from "next-auth/next";

const googleClientId = process.env.GOOGLE_CLIENT_ID!
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET!

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
        })
    ],
}

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}