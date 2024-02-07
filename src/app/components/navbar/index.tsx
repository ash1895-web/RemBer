import React from "react";

import styles from "./navbar.module.css"
import SignoutButton from "../signout-button";
import Link from "next/link";

export default async function Navbar() {
    return (
        <div className={styles.container}>
            <Link href='/settings'><i className="material-symbols-outlined">settings</i></Link>
            <SignoutButton/>
        </div>
    )
}