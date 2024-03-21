
'use client'
import React from "react"
import { useFormState } from "react-dom"

import { CreateRoleAction } from "../../api/roles/actions"

type InitialState = {
    success?: Boolean
}
type permissions = {
    id: number,
    name: string,
    description: string
}[]
type props = {
    permissions: permissions
}

const initialState: InitialState = {}

export function CreateRoleForm({ permissions }: props) {
    const [state, formAction] = useFormState(CreateRoleAction, initialState)

    return (
        <form action={formAction}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
            <p>Permissions</p>
            {permissions && permissions.map((permission, i) =>
                <React.Fragment key={i}>
                    <label htmlFor={permission.name}>{permission.name}</label>
                    <input type="checkbox" id={permission.name} name="permission" value={permission.id} />
                </React.Fragment>)}
            <button type="submit">Sign up</button>
            {state?.success && 'Form submitted'}
        </form>
    )
}