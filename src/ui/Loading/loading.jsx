import { AiOutlineLoading } from "react-icons/ai";
import style from './loading.module.css'

export default function Loading(){
    return(
        <div className={style.container}>
            <h4 className= {style.title}>Data loading...</h4>
            <AiOutlineLoading className= {style.icon}/>
        </div>
    )
}