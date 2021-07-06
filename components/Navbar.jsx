import Link from 'next/link'
import styles from '@styles/Navbar.module.css'

const Navbar = () => {
    return (
        <header className={`${styles.nav} d-flex`}>
            <div className={styles.logo}>
                <Link href="/">n</Link>
            </div>
            <nav className={styles.links}>
                <ul className="d-flex">
                    <li className="active">
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/mems">mems</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
