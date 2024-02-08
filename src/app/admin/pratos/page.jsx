'use client';
import { deleteData, getData } from "@/lib/crud";
import AdmPrato from "@/ui/admin/prato/prato";
import Image from "next/image";
import style from  './pratos.module.css'

export default async function Page() {
    const data = await getData();
    console.log(data)
    return (
        <section className={style.container}>
            {data.length > 0 ? data.map(item => (
                <AdmPrato
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    src={item.imagem}
                    id= {item.id}
                    //onClickExcluir={}
                />
            )): <h2>Sem pratos</h2>}
        </section>
    )
}