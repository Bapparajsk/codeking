// context/YourContextProvider.js
"use client"
import { useState, createContext, useContext } from 'react';
import { } from 'next'

const Navigate = createContext();

const NavigateProvider = ({ children }) => {



    return (
        <Navigate.Provider value={{yourState}}>
            {children}
        </Navigate.Provider>
    );
};

const useNavigateRouter = useContext(Navigate);

export { NavigateProvider, useNavigateRouter };
