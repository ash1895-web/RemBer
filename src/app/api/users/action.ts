'use server'

import { prisma } from "@/prisma"
import { schema, searchUserSchema } from "./schema";
import { User } from "@/global-types";

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

export async function SearchUserAction(prevState: { success: boolean, result: User[], submitted: boolean }, formData: FormData) {

    const validation = searchUserSchema.safeParse({
        attribute: formData.get('attribute'),
        searchTerm: formData.get('email') || formData.get('name') || formData.get('serial_number'),
    })


    if (!validation.success) {
        return {
            success: false,
            result: [],
            submitted: true,
        }
    }

    try {
        const { attribute, searchTerm } = validation.data

        let result: User[] = []

        switch (attribute) {
            case 'email':
                result = await prisma.user.findMany({
                    where: {
                        email: searchTerm
                    }
                })
                break;
            case 'serial_number':
                result = await prisma.user.findMany({
                    where: {
                        serial_number: parseInt(searchTerm)
                    }
                })
                break;
            case 'name':
                result = await prisma.user.findMany({
                    where: {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        }
                    }
                })
                break;
            default:
                break;
        }

        return {
            success: true,
            result: result,
            submitted: true,
        }

    } catch (error) {
        return {
            success: false,
            result: [],
            submitted: true,
        }
    }
}