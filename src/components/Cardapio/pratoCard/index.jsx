import styles from './styles.module.css';

export default function PratoCard(props){
    return(
        <div className={styles.card}>
            <h3>
                {props.nome}
            </h3>
        </div>
    )
}