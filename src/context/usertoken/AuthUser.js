'use client'

import { createContext, useContext, useState } from 'react';

const AuthUser = createContext();

export const AuthProvider = ({ children }) => {

    const  [token, setToken] = useState();

    return (
        <AuthUser.Provider value={{token, setToken}}>
            {children}
        </AuthUser.Provider>
    );
}

export const useAuthUser = () => useContext(AuthUser);