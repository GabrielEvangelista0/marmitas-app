'use client';
import { storage } from "@/lib/conectDB";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import AdmForm from "@/ui/admin/admForm/admForm";
import style from './criarPrato.module.css';
import { createData } from "@/lib/crud";

export default function CriarPrato() {
    const [imagem, setImagem] = useState({
        file: '',
        url: '',
    });
    const [values, setValues] = useState({
        id: btoa(Math.random().toString()),
        nome: '',
        descricao: '',
        categoria: '',
        preco: '',
    });

    function handleInputChange(e) {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImagem({
            ...imagem,
            file: file,
        });
    }

    function ImageUpload() {
        return new Promise((resolve, reject) => {
            const imageRef = ref(storage, `/pratos/${imagem.file.name + values.id}`);
            uploadBytes(imageRef, imagem.file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImagem({
                        ...imagem,
                        url: url,
                    });

                    resolve({
                        ...values,
                        imagemUrl: url,
                    });
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const pratoData = await ImageUpload();
            createData('pratos', pratoData)
            console.log(pratoData);
            alert('Prato criado');
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
        }
    }

    return (
        <section className={style.criarPrato}>
            <h2 className={style.title}>
                Criar prato
            </h2>
            <div className={style.form}>
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
            </div>
        </section>
    );
}
