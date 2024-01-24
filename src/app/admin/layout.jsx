import AdminMenu from '@/ui/admin/adminMenu'
import style from './adminLayout.module.css'

export default function Layout({ children }) {
    return (
        <div className={style.layout}>
            <AdminMenu/>
            <section>{children}</section>
        </div>
    )
}