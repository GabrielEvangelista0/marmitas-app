import PratoCard from "./pratoCard";
import style from './cardapio.module.css';

export default function Cardapio(){
    return(
        <section className={style.cardapio}>
            <PratoCard 
            nome='teste'
            />
            <PratoCard 
            nome='teste'
            />
            <PratoCard 
            nome='teste'
            />
            <PratoCard 
            nome='teste'
            />
            <PratoCard 
            nome='teste'
            />
        </section>
    )
}