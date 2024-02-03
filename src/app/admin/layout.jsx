import AdminMenu from '@/ui/admin/adminMenu'
import style from './adminLayout.module.css'

export default function Layout({ children }) {
    return (
        <main className={style.layout}>
            <AdminMenu/>
            {children}
        </main>
    )
}