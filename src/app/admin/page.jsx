'use client';
import { postData, postImage } from "@/hooks/submitDB";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { storage } from "../api/dbConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function getData() {
  const res = await fetch('/api/pratos')
  const data = await res.json()
  return data
}

export default function Admin() {
  const [data, setData] = useState([])
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
    const imgRef =ref(storage, `/pratos/${image.name + values.id}`)
    uploadBytes(imgRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setValues({ ...values, imagem: url })
      });
    });
    postData('/api/pratos', data)
  }
  useEffect(() => {
    getData().then(setData)
    const id = btoa(Math.random().toString())
    setValues({ ...values, id })

  }, [])
  console.log(image)
  return (
    <div>
      <h1>Admin</h1>
      <p>This is the admin page</p>
      <Link href={'/'}>Home</Link>
      <form onSubmit={handleSubmit}>
        <input id="nome" type="text" placeholder="nome" onChange={handleInputChange} />
        <input id="descricao" type="text" placeholder="descrição" onChange={handleInputChange} />
        <input type="file" id="image" name="image" onChange={handleImageChange} />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt="" />
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
