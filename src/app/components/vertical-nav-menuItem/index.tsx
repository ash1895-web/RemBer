'use client'

import React, { useState } from "react";

import styles from './verticalNavMenuItem.module.css';
import Link from "next/link";

interface props {
    title: string,
    iconName: string,
    path: string,
}

export default function VerticalNavMenuItem(props: props) {
    const [mouseInside, setMouseEntered] = useState(false)
    return (
        <div className={styles.container} onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>
            <Link href={props.path}><i className="material-symbols-outlined">{props.iconName}</i></Link>
            {mouseInside && <p>{props.title}</p>}
        </div>
    )
}