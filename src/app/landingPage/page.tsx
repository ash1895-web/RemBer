import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

import styles from './page.module.css';
import cn from 'classnames';

export default function LandingPage():JSX.Element {
    const {data:session} = useSession()

    if (session) {
        redirect('/dashboard')
    }

    return (
        <div className={styles.landingPageContainer}>
            <h1 className={styles.title}>RemBer</h1>
            <Link href='/api/auth/signin' className={cn("primaryBtn", styles.login)}>
                Login
            </Link>
        </div>
    )
}