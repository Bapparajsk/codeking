"use client"

import { createContext, useContext, useState } from 'react';
const authentication = createContext();

const AuthenticationProvider = ({ children }) => {

    const [isSendOtp, setIsSendOtp] = useState(false);

    const setupConfiguration = () => {
        const storedIsSendOtp = localStorage.getItem('isSendOtp');

        if (storedIsSendOtp) {
            setIsSendOtp(true);
            return true;
        }
        if (storedIsSendOtp === undefined || storedIsSendOtp === null) {
            setIsSendOtp(true);
            localStorage.setItem('isSendOtp', true);
            return true;
        }

        return false;
    }

    return (
        <authentication.Provider value={{ isSendOtp, setupConfiguration, setIsSendOtp }}>
            {children}
        </authentication.Provider>
    );
};

const useAuthentication = () => useContext(authentication);

export { AuthenticationProvider, useAuthentication };
