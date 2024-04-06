'use client'

import React from "react"
import { useFormState } from "react-dom"
import { redirect } from "next/navigation"

import { CreateUserAction } from "@/app/api/users/action"

type InitialState = {
    success: boolean,
    errorMsg?: string,
    userId?: string,
}
type roles = {
    id: number,
    name: string,
}[]
type props = {
    roles: roles
}

const initialState: InitialState = {
    success: false,
}

export function CreateUserForm({roles}:props) {
    const [state, formAction] = useFormState(CreateUserAction, initialState)

    if (state.success) {
        redirect(`/people/${state.userId}`)
    }

    return (
        <form action={formAction}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="role">Role</label>
            <select id="role" name="role">
                {roles.map((role, index) => <option key={index} value={role.id}>{role.name}</option>)}
            </select>
            <button type="submit">Add User</button>
        </form>
    )
}