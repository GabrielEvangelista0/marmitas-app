import Link from "next/link";

export default function AdminMenu(){
    const menuItens = [
        {
            nome: "pratos",
            link: "/admin/pratos"
        },
        {
            nome: "pedidos",
            link: "/admin/pedidos"
        }
    ]
    return(
        <nav>
            <h2>
                <Link href={"/admin/"}>
                    Admin Dashboard
                </Link>
            </h2>
            <ul>
                {menuItens.map((item) => (
                    <li key={item.nome}>
                        <Link href={item.link}>
                            {item.nome}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}