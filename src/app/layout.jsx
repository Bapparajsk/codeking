import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from "#/navbar/Navbar";
import Script from "next/script";
import '@fortawesome/fontawesome-free/css/all.css';
import { NavigateProvider } from '@/context/navigation/NavigateProvider';
import { AuthProvider } from '@/context/usertoken/AuthUser';
import { UserProvider } from '@/context/user/UserProvider';
import { ProblemProvider } from "@/context/problemList/ProblemProvider";
import { Cursor } from '@/component/cursor/Cursor';
import { CursorProvider, useCursor } from '@/context/cursor/cursorProvider'; // Import the missing useCursor function

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'code king app',
}
export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={inter.className} style={{cursor: 'none'}}>
            <Script src={"https://cdn.lordicon.com/lordicon.js"}></Script>
                <UserProvider>
                    <ProblemProvider>
                        <AuthProvider>
                            <NavigateProvider>
                                <CursorProvider>
                                    <Cursor/>
                                    <Navbar/>
                                    {children}
                                </CursorProvider>
                            </NavigateProvider>
                        </AuthProvider>
                    </ProblemProvider>
                </UserProvider>
            </body>
        </html>
    );
}
