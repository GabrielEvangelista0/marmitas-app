
import { getDataById } from "@/lib/crud"
import AdmForm from "@/ui/admin/admForm/admForm"
import Image from "next/image"
import style from './editarPrato.module.css' 

export default async function EditarPrato({params}){
    const prato = await getDataById('pratos', params.id)
    console.log(prato)
    return(
        <section className={style.container}>
            <div className={style.info}>
            <h2> {prato.nome} </h2>
            <Image className={style.img} src={prato.imagemUrl} width={250} height={250} alt="imagem do prato" />
            </div>
            <AdmForm
            nome={prato.nome}
            descricao={prato.descricao}
            preco='preço'
            categoria= 'categoria'
            imagem={prato.imagem}
            />
        </section>
    )
}