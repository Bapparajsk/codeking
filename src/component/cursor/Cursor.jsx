"use client"
import React, { useEffect } from 'react';

export const Cursor = () => {
    useEffect(() => {
        const cursorDot = document.getElementById('cursorDot');
        const cursorOutline = document.getElementById('cursorOutline');

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' })
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []); // Empty dependency array ensures this effect runs only onc
    return (
        <>
            <div className={'cursor-dot'} id={'cursorDot'}></div>
            <div className={'cursor-outline'} id={'cursorOutline'}></div>
        </>
    );
};