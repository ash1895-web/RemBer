import { prisma } from "@/prisma"

export default async function ViewUsers() {
    const allUsers = await prisma.user.findMany()
    return (
        <div className="page-container">
            <p>All Users</p>
            {allUsers.map((user, i)=> <li key={i}>{user.name}</li>)}
        </div>
    )
}