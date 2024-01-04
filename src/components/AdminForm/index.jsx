import { useState } from "react"
import { postData, postImage } from "@/utils/crud";
import { storage } from "../api/dbConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminForm(props) {
    const [values, setValues] = useState({})
    const [image, setImage] = useState()

    function handleInputChange(e) {
        const { id, value } = e.target
        setValues({ ...values, [id]: value })
      }
      function handleImageChange(e) {
        setImage(e.target.files[0])
      }
      function handleSubmit(e) {
        e.preventDefault()
        const data = values
        const imgRef = ref(storage, `/pratos/${image.name + values.id}`)
        uploadBytes(imgRef, image).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setValues({ ...values, imagem: url })
          });
        });
        postData('/api/pratos', data)
      }
      useEffect(() => {
        const id = btoa(Math.random().toString())
        setValues({ ...values, id })
    
      }, [])
    return (
        <form onSubmit={handleSubmit}>
            <input id="nome" type="text" placeholder="nome" onChange={handleInputChange} />
            <input id="descricao" type="text" placeholder="descrição" onChange={handleInputChange} />
            <input type="file" id="image" name="image" onChange={handleImageChange} />
            <button type="submit">Enviar</button>
        </form>
    )
}