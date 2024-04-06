import { redirect } from "next/navigation"

import { prisma } from "@/prisma"
import DeleteBtn from "@/app/components/delete-btn/deleteBtn"

export default async function ViewUser({ params }: { params: { userId: string } }) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.userId
        }
    })

    const deleteUser = async () => {
        "use server"
        await prisma.user.delete({
            where: {
                id: params.userId
            }
        })
        redirect('/people/view-users')
    }

    return (
        <div className="page-container">
            {user ?
                <>
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                    <DeleteBtn id={user.id} deleteFunction={deleteUser} />
                </> :
                <p>Something went wrong</p>
            }
        </div>
    )
}