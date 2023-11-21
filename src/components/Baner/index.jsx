import Link from "next/link";
import styles from "./baner.module.css";

export default function Baner(){
    return(
        <section className={styles.baner}>
            <Link href={'/'} className={styles.baner__link}>
                crie sua marmita
            </Link>
        </section>
    )
}