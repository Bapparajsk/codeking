// context/YourContextProvider.js
"use client"
import { useState } from 'react';
import Navigate from './Navigate';

const NavigateProvider = ({ children }) => {
    const [yourState, setYourState] = useState("bappa");


    return (
        <Navigate.Provider value={{yourState}}>
            {children}
        </Navigate.Provider>
    );
};

export default NavigateProvider;
