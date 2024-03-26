import Link from "next/link";

import { prisma } from "@/prisma";

export const MAXIMUM_ROLES_THAT_CAN_BE_CREATED = 5

export default async function People() {
    const roles = await prisma.role.findMany({
        take: MAXIMUM_ROLES_THAT_CAN_BE_CREATED,
        orderBy: {
            id: 'asc'
        }
    })

    return (
        <div className='page-container'>
            { roles.length < MAXIMUM_ROLES_THAT_CAN_BE_CREATED ? 
            <Link href='/people/create-role' className='primary-btn'>Create Role</Link> : <p>Max: {MAXIMUM_ROLES_THAT_CAN_BE_CREATED} roles can be created</p>}
            <div className="material-section">
                {roles.map((role, i) => <p key={i}>{role.name}</p>)}
            </div>
        </div>
    )
}
