import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from "#/navbar/Navbar";
import Script from "next/script";
import '@fortawesome/fontawesome-free/css/all.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'My Page Title',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar/>
                {children}
                <Script src={"https://cdn.lordicon.com/lordicon.js"}></Script>
            </body>
        </html>
    )
}
