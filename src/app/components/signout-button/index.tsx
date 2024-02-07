'use client'

import React from "react";
import { signOut } from "next-auth/react";

import styles from "./signoutButton.module.css";
import cn from "classnames";

export default function SignoutButton(){
    return (
        <i className={cn("material-symbols-outlined", styles.btn)} onClick={()=>signOut()}>logout</i>
    )
}