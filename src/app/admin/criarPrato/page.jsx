'use client';
import { storage } from "@/lib/conectDB";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import AdmForm from "@/ui/admin/admForm/admForm";
import style from './criarPrato.module.css';
import { createData } from "@/lib/crud";


export default function CriarPrato() {
	// Estado para gerenciar a imagem e os valores do formulário
	const [imagem, setImagem] = useState({
		file: '',
		url: '',
	});
	const [values, setValues] = useState({
		//id: btoa(Math.random().toString()),
		nome: '',
		descricao: '',
		categoria: '',
		preco: '',
	});
	console.log(values);

	// Lidar com a mudança de entrada nos campos do formulário
	function handleInputChange(e) {
		const { value, name } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	}

	// Lidar com a mudança de imagem no formulário
	function handleImageChange(e) {
		const file = e.target.files[0];
		setImagem({
			...imagem,
			file: file,
		});
	}

	// Realizar upload da imagem e retornar uma Promise
	function ImageUpload() {
		return new Promise((resolve, reject) => {
			const imageRef = ref(storage, `/pratos/${imagem.file.name + values.id}`);
			uploadBytes(imageRef, imagem.file).then((snapshot) => {
				getDownloadURL(snapshot.ref).then((url) => {
					setImagem({
						...imagem,
						url: url,
						ref: `/pratos/${imagem.file.name + values.id}`
					});

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
		});
	}

	// Lidar com a submissão do formulário
	async function handleSubmit(e) {
		e.preventDefault();

		try {
			// Fazer upload da imagem e criar dados do prato
			const pratoData = await ImageUpload();
			createData('pratos', pratoData)
			alert('Prato criado');
			window.location.reload();
		} catch (error) {
			console.error('Erro ao fazer upload da imagem:', error);
		}
	}

	// Renderizar o componente
	return (
		<section className={style.criarPrato}>
			<h2 className={style.title}>
				Criar prato
			</h2>
			<div className={style.form}>
				{/* Utilizar o componente AdmForm para os campos de entrada e botões */}
				<AdmForm
					nome='nome'
					descricao='descrição'
					categoria='categoria'
					preco='preço'
					submit={handleSubmit}
					change={handleInputChange}
					imageChange={handleImageChange}
					bP='criar'
				/>
			</div>
		</section>
	);
}
