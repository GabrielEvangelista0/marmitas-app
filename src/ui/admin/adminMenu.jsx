import Link from "next/link";
import styles from "./adminMenu.module.css"
import { FaPlateWheat } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { CiSquarePlus } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export default function AdminMenu(){
    const menuItens = [
        {
            nome: "Home",
            link: "/admin/",
            icon: <MdHomeFilled size={32}/>
        },
        {
            nome: "Pratos",
            link: "/admin/pratos",
            icon: <FaPlateWheat size={32}/>
        },
        {
            nome: "Pedidos",
            link: "/admin/pedidos",
            icon: <LuNewspaper size={32}/>
        },
        {
            nome: "Criar Prato",
            link: "/admin/criarPrato",
            icon: <CiSquarePlus size={32}/>
        }
    ]
    return(
        <nav className={styles.menu}>
            <h2 className={styles.titulo}>
                <Link href={"/admin/"}>
                    Admin Dashboard
                </Link>
            </h2>
            <ul>
                {menuItens.map((item) => (
                    <li className= {styles.item} key={item.nome}>
                        <Link className={styles.link} href={item.link}>
                            {item.icon}
                            {item.nome}
                        </Link>
                    </li>
                ))}
                    
            </ul>
            <button className={styles.sair}><IoIosLogOut size={32}/> Sair</button>
        </nav>
    )
}