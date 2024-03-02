import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from "next-auth/next";
import { prisma } from "../../../../prisma";
import { schema } from "../../users/schema";

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
    callbacks: {
        async signIn(params) {
            try {
                const validation = schema.safeParse(params.user)
                if (validation.success) {
                    const userAlreadyExist = await prisma.user.findUnique({ where: { email: validation.data.email } })

                    if (!userAlreadyExist) {
                        await prisma.user.create({
                            data: {
                                name: validation.data.name,
                                email: validation.data.email,
                                image: validation.data.image,
                            }
                        })
                    }
                }
                return true
            } catch (error) {
                return false
            }
        },
    }
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }