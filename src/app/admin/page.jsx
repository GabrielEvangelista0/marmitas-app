'use client';
import Link from "next/link";
import style from './style.module.css';
import React, { useEffect, useState } from "react";
import { getData } from "@/lib/crud";

export default function Admin() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData('/api/pratos').then(setData)
  }, [])
  return (
    <main className={style.main}>
      <h1>Admin</h1>
      <section className={style.conteudo}>
        <div className={style.listaDePratos}>
          <h2>Lista de pratos</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <Link className={style.item} href={`/admin/${item.id}`}>
                  <img className={style.img} src={item.imagem} alt="" />
                  <div>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href={'/admin/criarPrato'}>Novo prato</Link>
        </div>
      </section>
    </main>
  )
}
