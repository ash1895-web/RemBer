import { CreateUserForm } from './form';
import { prisma } from '@/prisma';

export default async function CreateRole() {
    const roles = await prisma.role.findMany()
    return <CreateUserForm roles={roles}/>
}
