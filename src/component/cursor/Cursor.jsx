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

            // cursorOutline.style.left = `${posX}px`;
            // cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' })
        };

        const click = (e) => {
            cursorOutline.style.borderColor = 'red';
            cursorOutline.style.width = '10px';
            cursorOutline.style.height = '10px';
            cursorOutline.style.borderWidth = '5px'
            setTimeout(() => {
                cursorOutline.style.borderColor = '#000000B2'
                cursorOutline.style.width = '30px';
                cursorOutline.style.height = '30px';
                cursorOutline.style.borderWidth = '2px'
            }, 250)
        }

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('click', click)

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('click', click);
        };
    }, []); // Empty dependency array ensures this effect runs only onc
    return (
        <>
            <div className={'cursor-dot'} id={'cursorDot'}></div>
            <div className={'cursor-outline'} id={'cursorOutline'}></div>
        </>
    );
};