"use client"

import {useEffect, useState} from "react";

export const Progress = ({ items }) => {

    const [pregressWidth, setPregressWidth] = useState(0)

    const { name, total_Problems , total_Solve , progress_color } = items;

    useEffect(() => {
        setPregressWidth(total_Solve / total_Problems * 250);
    }, [items]);

    return (
        <div className={'progress-shadow flex'} style={{backgroundColor: `${progress_color}56`}}>
            <div className={'progress-status flex'}>
                <p>{name}</p>
                <p><span>{total_Solve}</span> / {total_Problems}</p>
            </div>
            <div className={'main-progress'} style={{backgroundColor: progress_color, width: pregressWidth ? pregressWidth : 0}}></div>
        </div>
    );
}
