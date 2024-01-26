import React from "react";

export const LanProgress = props => {
    const { name, total, solve } = props.items;
    const hi = solve / total * 120;

    const handler1 = () => {
        props.setName(name, solve);
    }

    const handler2 = () => {
        props.setDefualt();
    }
    return (
        <div className={'lan-box-progress'} style={{height: hi}} onMouseOver={handler1} onMouseOut={handler2}></div>
    )
}