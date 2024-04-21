export interface User {
    id: string,
    name: string,
    email: string,
    image?: string|null,
    role_id?: number|null,
    role?: Role|null,
    createdAt: Date,
    serial_number: number
}

interface Role {
    id: number,
    name: string,
    description?: string,
    user: User[],
    permission: Permission[],
}

interface Permission {
    id: number,
    name: string,
    description: string,
    roles: Role[],
}