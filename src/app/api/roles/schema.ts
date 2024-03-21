import {z} from 'zod';

export const roleSchema = z.object({
    name: z.string().max(10),
    description: z.string().max(50),
    permissions: z.array(z.string()).min(1),
})