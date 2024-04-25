"use client"

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const Navigate = createContext();

const NavigateProvider = ({ children }) => {

    const [navigate, setNavigate] = useState('Description');
    const [isTrue, setIsTrue] = useState(false);
    const router = useRouter();

    return (
        <Navigate.Provider value={{ router, navigate, setNavigate, isTrue, setIsTrue }}>
            {children}
        </Navigate.Provider>
    );
};

const useNavigateRouter = () => useContext(Navigate)

export { NavigateProvider, useNavigateRouter };
