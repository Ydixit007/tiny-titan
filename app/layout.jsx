import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tiny-titan : Empowers you to achieve big things with small steps.',
  description: 'Tiny-titan empowers you to break down ambitious goals into actionable steps, making progress feel achievable and fulfilling.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className && "bg-primary flex items-center"}>
        <Sidebar />
        {children}
        </body>
    </html>
  )
}
