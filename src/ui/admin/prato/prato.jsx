'use client';
import Link from 'next/link';
import style from './admPrato.module.css';
import Image from 'next/image';

export default function AdmPrato(props) {
    const { nome, descricao, src, id, onClickExcluir, preco } = props;
    return (
        <div className={style.prato}>
            <Image src={src} width={100} height={100} alt='imagem do prato' priority={true} />
            <div className={style.info}>
                <h3 className={style.nome}> {nome} </h3>
                <p> {descricao} </p>
            </div>
            <p className={style.preco}>
                {preco}
            </p>
            <div className= {style.botoes}>
                <Link className={style.botao} href={`/admin/pratos/${id}`}> Editar </Link>
                <button className={`${style.botao} ${style.excluir}`} onClick={onClickExcluir}>Excluir</button>
            </div>
        </div>
    )
}