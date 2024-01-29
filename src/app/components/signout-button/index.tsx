'use client'

import React from "react";
import { signOut } from "next-auth/react";

export default function SignoutButton(){
    return (
        <button onClick={()=>signOut()}>Sign Out</button>
    )
}