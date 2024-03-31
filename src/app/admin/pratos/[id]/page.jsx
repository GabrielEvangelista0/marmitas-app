'use client'
import { getDataById, updateData } from "@/lib/crud"
import AdmForm from "@/ui/admin/admForm/admForm"
import Image from "next/image"
import style from './editarPrato.module.css'
import { useEffect, useState } from "react"
import Loading from "@/ui/Loading/loading"
import { deleteObject, ref } from "firebase/storage"
import { storage } from "@/lib/conectDB"

export default function EditarPrato({ params }) {
    const [values, setValues] = useState();
    const [imagem, setImagem] = useState({
		file: null,
		url: '',
	});
    console.log(imagem)
    useEffect(() => {
        const prato = getDataById('pratos', params.id)
            .then((data) => {
                //console.log(data)
                setValues(data)
            })
    }, []);

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

    function updateImage() {
        return new Promise((resolve, reject) => {
            const imageRef = ref(storage, values.imagem.ref);
            uploadBytes(imageRef, imagem.file).then((snapshot) => {
				getDownloadURL(snapshot.ref).then((url) => {
					setImagem({
						...imagem,
						url: url,
						ref: `/pratos/${imagem.file.name + values.id}`
					});
                    deleteObject(imageRef)
					resolve({
						...values,
						imagem: {
							url: url,
							ref: `/pratos/${imagem.file.name + values.id}`
						}
					});
				}).catch((error) => {
					reject(error);
				});
			});
        })
    }

    function editarPrato(e) {
        e.preventDefault();
        const pratoEditado = imagem.file == null ? values : updateData()
        updateData("pratos", values.id, pratoEditado)
        console.log(pratoEditado)
        alert('Prato editado com sucesso!')
        //window.location.reload()
    }
    return (
        values == undefined ? <Loading /> :
            <section className={style.container}>
                <div className={style.info}>
                    <h2> {values?.nome} </h2>
                    <Image className={style.img} src={values?.imagem.url} width={250} height={250} alt="imagem do prato" priority={true} />
                </div>
                <AdmForm
                    nome={values?.nome}
                    descricao={values?.descricao}
                    preco={values?.preco}
                    categoria={values?.categoria}
                    imagem={values?.imagemUrl}
                    submit={editarPrato}
                    change={handleInputChange}
                    imageChange={handleImageChange}
                />
            </section>
    )

}

