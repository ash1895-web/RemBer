'use client'

import React, { useState } from "react";

import styles from './verticalNavMenuItem.module.css';

interface props {
    title: string,
    iconName: string,
}

export default function VerticalNavMenuItem(props: props) {
    const [mouseInside, setMouseEntered] = useState(false)
    return (
        <div className={styles.container} onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>
            <i className="material-symbols-outlined">{props.iconName}</i>
            {mouseInside && <p>{props.title}</p>}
        </div>
    )
}