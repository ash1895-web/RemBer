import React from "react";
import Link from "next/link";

import styles from './people.module.css';

export default function People(){
    return(
        <div className='page-container'>
            <div className={styles.btnContainer}>
                <Link href='/people/add-people' className='primary-btn'>Add People</Link>
                <Link href='/people/manage-roles' className='primary-btn'>Manage Roles</Link>
            </div>
        </div>
    )
}