import { CreateRoleForm } from './form';
import { prisma } from '@/prisma';

export default async function CreateRole() {
    const permissions = await prisma.permission.findMany()
    return <CreateRoleForm permissions={permissions}/>
}
