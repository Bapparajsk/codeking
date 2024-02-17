import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from "#/navbar/Navbar";
import Script from "next/script";
import '@fortawesome/fontawesome-free/css/all.css';
import { NavigateProvider } from '@/context/navigation/NavigateProvider';
import { AuthProvider } from '@/context/usertoken/AuthUser';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'code king app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <Script src={"https://cdn.lordicon.com/lordicon.js"}></Script>
                <AuthProvider>
                    <NavigateProvider>
                        <Navbar/>
                        {children}
                    </NavigateProvider>
                </AuthProvider> 
            </body>
        </html>
    )
}
