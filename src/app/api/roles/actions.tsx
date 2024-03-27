'use server'

import { revalidatePath } from "next/cache";

import { roleSchema } from "./schema";
import { prisma } from '@/prisma';

export async function CreateRoleAction(prevState: { success: Boolean, errorMsg?: string }, formData: FormData) {
    const validation = roleSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
        permissions: formData.getAll('permission'),
    })
    
    if (!validation.success) {              
        return {
            success: false,
            errorMsg: 'Please enter correct information'
        }
    }

    try {
        const permissionIds = validation.data.permissions.map(item => parseInt(item));
        const role = await prisma.role.findMany({ where: { name: validation.data.name } })

        if (role.length) {
            throw new Error("Role already exists");
        }

        await prisma.role.create({
            data: {
                name: validation.data.name,
                description: validation.data.description,
                permission: {
                    connect: permissionIds.map(id => ({ id }))
                }
            }
        })
        
        revalidatePath('/people/manage-roles')

        return {
            success: true
        }
    } catch (error) {
        return {
            success: false,
            errorMsg: 'Something went wrong!!'
        }
    }
}