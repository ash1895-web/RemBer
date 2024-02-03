import { NextResponse, NextRequest } from 'next/server';
import { schema } from './schema';
import { PrismaClient } from "@/.prisma/client";

const prisma = new PrismaClient()

export const GET = async (req: Request) => {
    return NextResponse.json({ 'test': 'message' })
}

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const validation = schema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    try {
        const userAlreadyExist = await prisma.user.findUnique({ where: { email: validation.data.email } })

        if (!userAlreadyExist) {
            const userData = validation.data
            const userCreated = await prisma.user.create({ data: userData })
            return NextResponse.json(userCreated, { status: 201 })
        }
        
        return NextResponse.json(userAlreadyExist, { status: 200 })

    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}