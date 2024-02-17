"use client"

import { createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

const Navigate = createContext();

const NavigateProvider = ({ children }) => {
    const router = useRouter();
    
    return (
        <Navigate.Provider value={{router}}>
            {children}
        </Navigate.Provider>
    );
};

const useNavigateRouter = () => useContext(Navigate)

export { NavigateProvider, useNavigateRouter };
