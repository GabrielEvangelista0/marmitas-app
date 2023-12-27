'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

async function getData() {
  const res = await fetch('http://localhost:3000/api/teste')
  const data = await res.json()
  return data
}

export default function Admin() {
  const [data, setData] = useState([])
  const [values, setValues] = useState({})
  function handleInputChange(e) {
    const { id, value } = e.target
    setValues({ ...values, [id]: value })

  }
  function handleSubmit(e) {
    e.preventDefault()
    const data = values
    fetch('http://localhost:3000/api/teste', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getData().then(setData)
    
  }, [])
  console.log(data)
  return (
    <div>
      <h1>Admin</h1>
      <p>This is the admin page</p>
      <Link href={'/'}>Home</Link>
      <form onSubmit={handleSubmit}>
        <input id="nome" type="text" placeholder="nome" onChange={handleInputChange} />
        <input id="descricao" type="text" placeholder="descrição" onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
