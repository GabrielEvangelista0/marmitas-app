'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData } from "@/utils/crud";

export default function Admin() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    getData('/api/pratos').then(setData)
  }, [])
  return (
    <main>
      <h1>Admin</h1>
      <Link href={'/'}>Home</Link>
      <section>
        <h2>Lista de pratos</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <Link href={`/pratos/${item.id}`}>
              <img src={item.image} alt="" />
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
