import styles from './card.module.css';

export default function Card(props){
    const {children, width, height, title, className} = props;
    return(
        <div style={{width: width, height: height}} className={`${styles.card} ${className}`}>
            <h3 className= {styles.title}>{title}</h3>
            {children}
        </div>
    )
}