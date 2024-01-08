import Link from "next/link";
import styles from "./menu.module.css";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

export default function Menu() {
    return (
        <header className={styles.menu}>
            <Link href={'/'} className={styles.menu__logo}><h1>Logo</h1></Link>
            <nav>
                <ul className={styles.menu__ul}>
                    <li> <Link href={'/'} className={styles.menu__link}> <FaUser /> </Link> </li>
                    <li>
                        <Link href={'/'} className={`${styles.menu__link} ${styles.sacola}`}>
                            <IoBag />
                            <div className={styles.sacola__info}>
                                <span>R$ 0,00</span>
                                <span>0 itens</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}