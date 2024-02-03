import { getData } from "@/lib/crud";
import AdmPrato from "@/ui/admin/prato/prato";
import Image from "next/image";

export default async function Page() {
    const data = await getData();
    console.log(data)
    return (
        <div>
            {data.map(item => (
                <AdmPrato
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    src={item.imagem}
                    id= {item.id}
                />
            ))}
        </div>
    )
}