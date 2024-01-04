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
  async function handleSubmit(e) {
    e.preventDefault()
    const data = values
    const imgRef = ref(storage, `/pratos/${image.name + values.id}`)
    uploadBytes(imgRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setValues({ ...values, imagem: url })
      });
    });
    if (data.imagem != undefined) {
      postData('/api/pratos', data)
      alert(`O prato ${JSON.stringify(data)}`)
    } else {
      alert('erro: imagem não foi enviada')
    }
  }
  useEffect(() => {
    const id = btoa(Math.random().toString())
    setValues({ ...values, id })

  }, [])
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.input} id="nome" type="text" placeholder="nome" onChange={handleInputChange} />
      <input className={style.input} id="descricao" type="text" placeholder="descrição" onChange={handleInputChange} />
      <input
        className={style.input__file}
        type="file"
        id="image"
        name="image"
        onChange={handleImageChange}
      />
      <button className={style.button} type="submit">Enviar</button>
    </form>
  )
}