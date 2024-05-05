import { z } from 'zod';

export const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    image: z.string().url().optional(),
    roleId: z.string(),
})

export const searchUserSchema = z.object({
    attribute: z.string().min(3),
    searchTerm: z.string().min(1),
})