'use client';
import { deleteData, getData } from "@/lib/crud";
import AdmPrato from "@/ui/admin/prato/prato";
import style from  './pratos.module.css'

export default async function Page() {
    const data = await getData();
    return (
        <section className={style.container}>
            {data.length > 0 ? data.map(item => (
                <AdmPrato
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    src={item.imagemUrl}
                    id= {item.id}
                    preco={`${item.preco}R$`}
                    onClickExcluir={() => {
                        deleteData('pratos',item.id)
                    }}
                />
            )): <h2>Sem pratos</h2>}
        </section>
    )
}