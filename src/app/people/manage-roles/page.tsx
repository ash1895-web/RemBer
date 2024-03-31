import Link from "next/link";
import { revalidatePath } from "next/cache";

import { prisma } from "@/prisma";
import DeleteBtn from "@/app/components/delete-btn/deleteBtn";
import styles from './manage-roles.module.css';

export const MAXIMUM_ROLES_THAT_CAN_BE_CREATED = 5

export default async function People() {
    const roles = await prisma.role.findMany({
        take: MAXIMUM_ROLES_THAT_CAN_BE_CREATED,
        orderBy: {
            id: 'asc'
        },
        include: {
            permission: true,
        }
    })

    async function deleteRole(roleId:number){
        'use server'
        await prisma.role.delete({
            where: { id: roleId },
        })

        revalidatePath('/people/manage-roles')
    }

    return (
        <div className='page-container'>
            {roles.length < MAXIMUM_ROLES_THAT_CAN_BE_CREATED ?
                <Link href='/people/create-role' className='primary-btn'>Create Role</Link> : <p>Max: {MAXIMUM_ROLES_THAT_CAN_BE_CREATED} roles can be created</p>}
            <div className="material-section">
                <div className={styles.roleContainer}>
                    <h3 className={styles.roleName}>Name</h3>
                    <h3 className={styles.roleDescription}>Description</h3>
                    <h3 className={styles.permissionTagContainer}>Permissions</h3>
                </div>
                {roles.map((role, i) => 
                <div key={i} className={styles.roleContainer}>
                    <p className={styles.roleName}>{role.name}</p>
                    <p className={styles.roleDescription}>{role.description}</p>
                    <div className={styles.permissionTagContainer}>{role.permission.map((perm, i) => <span key={i} className={styles.permissionTag}>{perm.name}</span>)}</div>
                    <DeleteBtn id={role.id} deleteFunction={deleteRole}/>
                </div>
                )}
            </div>
        </div>
    )
}
