'use client';
import { useState } from "react"
import style from './admForm.module.css'

export default function AdmForm(props){
    const { nome, descricao, preco, categoria, submit, change, bImg, bP, handleImage, imageChange } = props;
    return(
        <form onSubmit={submit} className={style.form}>
            <input type="text" name="nome" placeholder={nome} onChange={change} required/>
            <input type="text" name="descricao" placeholder={descricao} onChange={change} required/>
            <input type="number" name="preco" placeholder={preco} onChange={change}/>
            <input type="text" name="categoria" placeholder={categoria} onChange={change} required/>
            <input type="file" name="imagem" onChange={imageChange} required/>
            {/*<button onClick= {handleImage} className={style.button}>{bImg} imagem</button>*/}
            <button className={style.button} type="submit">{bP} prato</button>
        </form>
    )
}