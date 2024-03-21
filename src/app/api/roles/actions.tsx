'use server'

import { roleSchema } from "./schema";
import { prisma } from '@/prisma';

export async function CreateRoleAction(prevState: { success?: Boolean }, formData: FormData) {
    const validation = roleSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
        permissions: formData.getAll('permission'),
    })

    try {
        if (validation.success) {
            const permissionIds = validation.data.permissions.map(item => parseInt(item));
            const role = await prisma.role.findMany({where: {name: validation.data.name}})

            if(role.length) {
                throw new Error("Role already exists");
            }
            
            await prisma.role.create({
                data: {
                    name: validation.data.name,
                    description: validation.data.description,
                    permission: {
                        connect: permissionIds.map(id => ({id}))
                    }
                }
            })
        }
        return {
            success: true
        }
    } catch (error) {
        return {
            success: false
        }
    }
}