import Link from 'next/link';
import style from './admPrato.module.css';
import Image from 'next/image';

export default function AdmPrato(props) {
    const { nome, descricao, src, id, onClickExcluir } = props;
    return (
        <div className={style.prato}>
            <Image src={src} width={100} height={100} />
            <div>
                <h3 className={style.nome}> {nome} </h3>
                <p> {descricao} </p>
            </div>
            <Link className={style.botao} href={`/admin/pratos/${id}`}> Editar </Link>
            <button className={`${style.botao} ${style.excluir}`} onClick={onClickExcluir}>Excluir</button>
        </div>
    )
}