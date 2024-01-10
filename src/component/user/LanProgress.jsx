import React from "react";

export const LanProgress = props => {
    const { name, total, solve } = props.items;
    const hi = solve / total * 120;

    const handler1 = () => {
        setTimeout(() => {
            props.setName(name, solve);
        }, 150)
    }

    const handler2 = () => {
        setTimeout(() => {
            props.setDefualt();
        }, 1000);
    }
    return (
        <div className={'lan-box-progress'} style={{height: hi}} onMouseOver={handler1} onMouseOut={handler2}></div>
    )
}