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
    const data = JSON.stringify(values)
    fetch('http://localhost:3000/api/teste', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    }).then(res => res.json()).then(data => {
      console.log(data);
      
    })
    console.log(data);
    
  }
  console.log(values);
  useEffect(() => {
    getData().then(setData)
  }, [])

  return (
    <div>
      <h1>Admin</h1>
      <p>This is the admin page</p>
      <Link href={'/'}>Home</Link>
      <form onSubmit={handleSubmit}>
        <input id="nome" type="text" placeholder="nome" onChange={handleInputChange}/>
        <input id="descricao" type="text" placeholder="descrição" onChange={handleInputChange}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
