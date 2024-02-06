'use client';
import { useState } from "react"
import style from './admForm.module.css'

export default function AdmForm(props){
    const [values, setValues] = useState({})
    const { nome, descricao, preco, categoria, imagem } = props
    function handleInputChange(e){
        const {value, name} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(values)
    }
    return(
        <form onSubmit={handleSubmit} className={style.form}>
            <input type="text" name="nome" placeholder={nome} onChange={handleInputChange}/>
            <input type="text" name="descricao" placeholder={descricao} onChange={handleInputChange}/>
            <input type="number" name="preco" placeholder={preco} onChange={handleInputChange}/>
            <input type="text" name="categoria" placeholder={categoria} onChange={handleInputChange}/>
            <input type="file" name="imagem" placeholder={imagem} onChange={handleInputChange}/>
            <button className={style.button}>editar imagem</button>
            <button className={style.button} type="submit">editar prato</button>
        </form>
    )
}