import React, { useEffect, useState } from "react";

export const LanProgress = ({ items, setName, size, setDefaultName }) => {
    const [height, setHeight] = useState(0);
    const { name, solve } = items;
    useEffect(() => {
        const { name, solve } = items;
        if (size !== 0) {
            let hi = solve / size * 120;
            console.log(typeof hi)
            if (isNaN(hi)) {
                hi = 0
            }
            setHeight(hi)
        }
    }, [items]);

    return (
        <div className={'lan-box-progress'} style={{ height: height }} onMouseOver={() => setName(name, solve)} onMouseOut={() => setDefaultName()}></div>
    );
};
