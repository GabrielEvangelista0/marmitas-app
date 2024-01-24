import { Montserrat } from 'next/font/google'
import './globals.css'
import style from './index.css'
import NavBar from '@/ui/nav/navBar'

const font = Montserrat({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Ola mundo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} ${style.body}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
