import Link from "next/link"

export default function ManagePeople() {
    return (
        <div className="page-container">
            <Link href='/people/create-user' className='primary-btn'>Create User</Link>
            <Link href='/people/view-users' className='primary-btn'>View Users</Link>
        </div>
    )
}