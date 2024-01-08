import Link from "next/link";
import styles from "./baner.module.css";

export default function Baner() {
    return (
        <section className={styles.baner}>
            <h2 className={styles.baner__title}>Marmitas em Promoção <span className={styles.baner__title__span}>50% de desconto</span></h2>
            <Link href={'/'} className={styles.baner__link}>
                Confira
            </Link>
            <div className={styles.baner__buttons}>
                <button className={styles.baner__buttons__button}>{'<'}</button>
                <button className={styles.baner__buttons__button}>{'>'}</button>
            </div>
        </section>
    )
}