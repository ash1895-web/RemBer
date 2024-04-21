'use server'

import { prisma } from "@/prisma"

async function getUsers(pageSize: number, direction: string, cursor?: number, skip?:number) {
    
    return await prisma.user.findMany({
        take: direction === "backward" ? -pageSize : pageSize,
        orderBy: {
            serial_number: 'asc'
        },
        cursor: {
            serial_number: cursor
        },
        skip: skip
    })
}

export async function getFirstUsers(pageSize: number, direction: string, skip?:number) {
    
    return await prisma.user.findMany({
        take: direction === "backward" ? -pageSize : pageSize,
        orderBy: {
            serial_number: 'asc'
        },
        skip: skip
    })
}

export default getUsers