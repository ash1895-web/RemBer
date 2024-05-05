'use client'

import React, { useState } from "react"
import { useFormState } from "react-dom"

import { SearchUserAction } from "@/app/api/users/action"
import { User } from "@/global-types"

type InitialState = {
    success: boolean,
    result: User[],
    submitted: boolean,
}

const initialState: InitialState = {
    success: false,
    result: [],
    submitted: false,
}

export function SearchUserForm() {
    const [state, formAction] = useFormState(SearchUserAction, initialState)
    const [searchAttribute, setSearchAttribute] = useState('email')

    return (
        <>
            <form action={formAction}>
                <label htmlFor="attribute">Search by </label>
                <select id="attribute" name="attribute" onChange={(e) => setSearchAttribute(e.target.value)}>
                    <option value='email'>Email</option>
                    <option value='serial_number'>Serial Number</option>
                    <option value='name'>Name</option>
                </select>
                {searchAttribute && <input name={searchAttribute} required />}
                <button type="submit">Search User</button>
            </form>
            {state.result && state.submitted &&
                <ul>
                    {state.result.map((user, i) =>
                        <li key={i}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </li>)}
                </ul>
            }
            {
                state.submitted && !state.result.length &&
                <p>User not Found</p>
            }
        </>
    )
}