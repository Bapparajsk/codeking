'use client'

import { useState, useRef } from 'react';

export const SolveProblemCard = ({id, name, date, isSolve}) => {
    const [solveHover, setSolveHover] = useState(false);
    const ref = useRef(null);
    return (
        <div
            ref={ref}
            className={'solve-problem-card flex'}
            style={{
                backgroundColor: isSolve ? '#0BE83E7F' : '#FF204E7F',
            }}
            onMouseOver={() => {
                setSolveHover(true);
                ref.current.style.backgroundColor = isSolve ? '#0BE83E99' : '#FF204E99';
            }}
            onMouseOut={() => {
                setSolveHover(false);
                ref.current.style.backgroundColor = isSolve ? '#0BE83E7F' : '#FF204E7F';
            }}
        >
            <div className={'problem-name-number'}>
                <span>{id}</span>.
                <span>{name}</span>
            </div>
            <div className={'solve-date flex'}>
                <span>{date}</span>
                <lord-icon
                    src={`https://cdn.lordicon.com/${isSolve ? 'cgzlioyf' : 'ygvjgdmk'}.json`}
                    trigger={solveHover ? 'loop': 'in'}
                    stroke="bold"
                    state={`hover-${isSolve ? 'pinch' : 'error-2'}`}
                    colors={`primary:#${isSolve ? '1679AB' : 'FF004D'}`}
                    style={{ width: 25, height: 25 }}>
                </lord-icon>
            </div>
        </div>
    );
};
