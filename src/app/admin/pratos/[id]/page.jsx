'use client'
import { getDataById } from "@/lib/crud"
import AdmForm from "@/ui/admin/admForm/admForm"
import Image from "next/image"
import style from './editarPrato.module.css'
import { useEffect, useState } from "react"
import Loading from "@/ui/Loading/loading"

export default function EditarPrato({ params }) {
    const [values, setValues] = useState()
    useEffect(() => {
        const prato = getDataById('pratos', params.id)
            .then((data) => {
                //console.log(data)
                setValues(data)
            })
    }, [])

    function handleInputChange(e) {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    function editarPrato(e) {
        e.preventDefault();
        console.log('editar prato')
    }
    return (
        values == undefined ? <Loading /> :
            <section className={style.container}>
                <div className={style.info}>
                    <h2> {values?.nome} </h2>
                    <Image className={style.img} src={values?.imagemUrl} width={250} height={250} alt="imagem do prato" priority={true} />
                </div>
                <AdmForm
                    nome={values?.nome}
                    descricao={values?.descricao}
                    preco={values?.preco}
                    categoria={values?.categoria}
                    imagem={values?.imagemUrl}
                    submit={editarPrato}
                    change={handleInputChange}
                />
            </section>
    )
}

