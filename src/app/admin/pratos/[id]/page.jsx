import { getDataById } from "@/lib/crud"
import Image from "next/image"

export default async function EditarPrato({params}){
    const prato = await getDataById('pratos', params.id)
    console.log(prato)
    return(
        <section>
            <h2> {prato.nome} </h2>
            <Image src={prato.imagem} width={200} height={200} />
        </section>
    )
}