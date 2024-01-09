import { useEffect, useState } from "react"
import { postData, postImage } from "@/utils/crud";
import { storage } from "@/app/api/dbConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import style from './style.module.css'

export default function AdminForm(props) {
  const [values, setValues] = useState({})
  const [image, setImage] = useState()

  function handleInputChange(e) {
    const { id, value } = e.target
    setValues({ ...values, [id]: value })
  }
  function handleImageChange(e) {
    setImage(e.target.files[0])
    console.log(values)
  }
  function enviarImagem() {
    if (image != undefined) {
      const imgRef = ref(storage, `/pratos/${image.name + values.id}`)
      uploadBytes(imgRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setValues({ ...values, imagem: url })
        });
      });
      alert('imagem enviada')
    }
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const data = values
    if (data.imagem != undefined) {
      postData('/api/pratos', data)
      alert(`O prato ${JSON.stringify(data)}`)
    }
  }
  useEffect(() => {
    const id = btoa(Math.random().toString())
    setValues({ ...values, id })

  }, [])
  console.log(values)
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.input} id="nome" type="text" placeholder="nome" onChange={handleInputChange} />
      <input className={style.input} id="preco" type="number" placeholder="preço" onChange={handleInputChange} />
      <textarea
        placeholder="descricao"
        id="descricao"
        onChange={handleInputChange}
        className={style.textarea}
        name="descricao"
        cols="30"
        rows="10">
        </textarea>
      <input
        className={style.input__file}
        type="file"
        id="image"
        name="image"
        onChange={handleImageChange}
      />
      <button className={style.image__button} onClick={enviarImagem} >Confirmar imagem</button>
      <button className={style.button} type="submit">Enviar Prato</button>
    </form>
  )
}