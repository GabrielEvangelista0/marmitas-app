import Link from "next/link";
import styles from "./menu.module.css"

export default function Menu() {
    return (
        <header className={styles.menu}>
            <h1 className={styles.menu__logo}>Logo</h1>
            <nav>
                <ul className={styles.menu__ul}>
                    <li> <Link href={'/'}>user</Link> </li>
                    <li> <Link href={'/'}>sacola</Link> </li>
                </ul>
            </nav>
        </header>
    )
}