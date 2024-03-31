'use client';
import { useState } from "react"
import style from './admForm.module.css'

export default function AdmForm(props){
    const { nome, descricao, preco, categoria, submit, change, bP, imageChange } = props;
    return(
        <form onSubmit={submit} className={style.form}>
            <input type="text" name="nome" placeholder={nome} onChange={change} required/>
            <input type="number" name="preco" placeholder={preco} onChange={change}/>
            <input type="text" name="categoria" placeholder={categoria} onChange={change} required/>
    
            <textarea name="descricao" id="descricao" placeholder={descricao} onChange={change} cols="30" rows="10"></textarea>
            <input type="file" name="imagem" onChange={imageChange}/>
            <button className={style.button} type="submit">{bP} prato</button>
        </form>
    )
}