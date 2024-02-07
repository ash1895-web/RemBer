import React from "react";

import styles from "./navbar.module.css"
import SignoutButton from "../signout-button";

export default async function Navbar() {
    return (
        <div className={styles.container}>
            <SignoutButton/>
        </div>
    )
}