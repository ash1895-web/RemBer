'use client'

import { useEffect, useState } from "react"
import { User } from "@/global-types"
import Pagination from "@/app/components/pagination"
import getUsers, { getFirstUsers } from "./getUsers"

export default function ViewUsers() {
    const USER_LIST_SIZE = 3
    const [users, setUsers] = useState<User[]>([])
    const [disablePreviousBtn, setDisablePreviousBtn] = useState<boolean>(false)
    const [disableNextBtn, setDisableNextBtn] = useState<boolean>(false)

    const fetchUsers = async (direction: string) => {
        let userList: User[]

        if (users?.length) {
            let cursor: number
            if (direction === 'forward') {
                cursor = users[users.length - 1].serial_number
            } else {
                cursor = users[0].serial_number
            }
            userList = await getUsers(USER_LIST_SIZE, direction, cursor, 1)
        } else {
            userList = await getFirstUsers(USER_LIST_SIZE, direction)
        }

        if (userList.length) {
            setUsers(userList)
            if (direction === 'forward') {
                setDisablePreviousBtn(false)
            } else {
                setDisableNextBtn(false)
            }
        } else {
            if (direction === 'forward') {
                setDisableNextBtn(true)
            } else {
                setDisablePreviousBtn(true)
            }
        }
    }

    useEffect(() => {
        fetchUsers("forward")
    }, [])

    return (
        <div className="page-container">
            <p>All Users</p>
            {(disableNextBtn || disablePreviousBtn) && <p>You are at the end of list</p>}
            {users?.map((user, i) => <li key={i}>{user.name}</li>)}
            <Pagination fetchData={fetchUsers} disableNextBtn={disableNextBtn || !users.length} disablePreviousBtn={disablePreviousBtn || !users.length} />
        </div>
    )
}