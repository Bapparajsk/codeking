"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useCursor } from '@/context/cursor/cursorProvider';

export const Cursor = () => {
    const [cursorActive, setCursorActive] = useState(false);
    const cursorDot = useRef();
    const cursorOutline = useRef();
    
    const {cursorRef, cursorType } = useCursor();

    useEffect(() => {
        if (cursorRef.current) {
            const moveCursor = (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.current.style.left = `${posX}px`;
                cursorDot.current.style.top = `${posY}px`;

                cursorOutline.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, {duration: 500, fill: 'forwards'})
            };

            const click = (e) => {
                cursorOutline.current.style.borderColor = 'red';
                cursorOutline.current.style.width = '10px';
                cursorOutline.current.style.height = '10px';
                cursorOutline.current.style.borderWidth = '5px'

                setTimeout(() => {
                    cursorOutline.current.style.borderColor = '#000000B2'
                    cursorOutline.current.style.width = '30px';
                    cursorOutline.current.style.height = '30px';
                    cursorOutline.current.style.borderWidth = '2px'
                }, 250)
            }

            window.addEventListener('mousemove', moveCursor);
            window.addEventListener('click', click)

            return () => {
                window.removeEventListener('mousemove', moveCursor);
                window.removeEventListener('click', click);
            };
        }
    }, [cursorRef.current, cursorType]);
    return (
        cursorRef.current &&
        <>
            <div className={'cursor-dot'}  ref={cursorDot}></div>
            <div className={'cursor-outline'} ref={cursorOutline}></div>
        </>
    );
};
