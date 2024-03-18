"use client"

import { createContext, useContext, useRef, useState, useEffect } from 'react';

const cursor = createContext();

const CursorProvider = ({ children }) => {
    const cursorRef = useRef(true);
    const [cursorType, setCursorType] = useState({ backgroundColor: "74E291", color: "59B4C3", });

    const setCostamCursorDetails = (color) => {
        setCursorType({
            backgroundColor: color.bg,
            color: color.color
        });
    }

    return (
        <cursor.Provider value={{ cursorRef , cursorType, setCostamCursorDetails }}>
            {children}
        </cursor.Provider>
    );
};

const useCursor = () => useContext(cursor);

export { CursorProvider, useCursor };
