'use client';
import { storage } from "@/lib/conectDB";
import { createData } from "@/lib/crud";
import AdmForm from "@/ui/admin/admForm/admForm";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

export default function CriarPrato() {
    const [imagem, setImagem] = useState()
    const [values, setValues] = useState({
        id: btoa(Math.random().toString)
    })
    function handleInputChange(e) {
        const { value, name } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    function handleImageChange(e) {
        const file = e.target.files[0]
        setImagem(file)
    }
    function handleSubmit(e) {
        e.preventDefault()
        ImageUpload()
        createData('pratos' ,values)
        alert('prato criado')
    }
    function ImageUpload(e) {
        //e.preventDefault()
        if (imagem && values.nome && values.descricao && values.categoria && values.preco) {
            const imageRef = ref(storage, `/pratos/${imagem.name + values.id}`);
            uploadBytes(imageRef, imagem).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setValues({
                  ...values,
                  imagem: url
                })
              });
            });
          } else {
            alert('termine de preencher o formulario')
          }
    }

    console.log(imagem)
    return (
        <section>
            <h2>
                Criar prato
            </h2>
            <AdmForm
                nome='nome'
                descricao='descriçao'
                categoria='categoria'
                preco='preco'
                submit={handleSubmit}
                change={handleInputChange}
                imageChange={handleImageChange}
                hImg='criar'
                bImg='criar'
                bP='criar'
            />
        </section>
    )
}