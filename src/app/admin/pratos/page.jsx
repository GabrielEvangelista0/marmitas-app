'use client';
import { deleteData, getData } from "@/lib/crud";
import AdmPrato from "@/ui/admin/prato/prato";
import style from './pratos.module.css'
import { ref, deleteObject } from "firebase/storage";
import { storage } from "@/lib/conectDB";

export default async function Page() {
    const data = await getData();
    console.log(data)
    function deleteImage(refImage) {
        const imagemRef = ref(storage, refImage)
        deleteObject(imagemRef).then(() => {
            console.log('Imagem deletada')
        }).catch((error) => {
            console.log('Erro ao deletar imagem', error)
        });
    }
    return (
        <section className={style.container}>
            {data.length > 0 ? data.map(item => (
                <AdmPrato
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    src={item.imagem.url}
                    id={item.id}
                    preco={`${item.preco}R$`}
                    onClickExcluir={() => {
                        deleteImage(item.imagem.ref);
                        deleteData('pratos',item.id);
                    }}
                />
            )) : <h2>Sem pratos</h2>}
        </section>
    )
}