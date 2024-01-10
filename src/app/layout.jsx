import { Inter } from 'next/font/google'
import './globals.css'
import {Navbar} from "#/navbar/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'My Page Title',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
                <Navbar/>
                {children}
            </body>
        </html>
    )
}
