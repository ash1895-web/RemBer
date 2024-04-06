'use server'

import { prisma } from "@/prisma"
import { schema } from "./schema";

export async function CreateUserAction(prevState: { success: boolean }, formData: FormData) {
    const validation = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        roleId: formData.get('role')
    })
    
    if (!validation.success) {
        return {
            success: false
        }
    }
    
    try {
        const user = await prisma.user.create({
            data: {
                name: validation.data.name,
                email: validation.data.email,
                role_id: parseInt(validation.data.roleId)
            }
        })
        
        return {
            success: true,
            userId: user.id
        }
    } catch (error) {
        return {
            success: false
        }
    }
}