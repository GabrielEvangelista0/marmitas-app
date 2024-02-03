import { getData } from "@/lib/crud";
import AdmPrato from "@/ui/admin/prato/prato";
import Image from "next/image";
import style from  './pratos.module.css'

export default async function Page() {
    const data = await getData();
    console.log(data)
    return (
        <section className={style.container}>
            {data.map(item => (
                <AdmPrato
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    src={item.imagem}
                    id= {item.id}
                />
            ))}
        </section>
    )
}