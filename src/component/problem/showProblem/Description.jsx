import "$/problem/showProblem/description.css"
import getButton from "@/lib/button/tagButtons";
import React, {useEffect, useRef, useState} from 'react';

export const Description = () => {
    const [tagButton, setTagButton] = useState(null);
    const buttonRef = useRef();

    const hoverOnHandler = () => {
        const { boxShadow, transform} = tagButton.mouseOver();
        buttonRef.current.style.boxShadow = boxShadow;
        buttonRef.current.style.transform = transform;
    }

    const hoverOutHandler = () => {
        const { boxShadow, transform} = tagButton.mouseOut();
        buttonRef.current.style.boxShadow = boxShadow;
        buttonRef.current.style.transform = transform;
    }

    useEffect(() => {
        setTagButton(getButton("easy"))
    }, [])

    return (
        <div className={"description-card"}>
            <div className={"dp-hading flex"}>
                <span>17. Letter Combinations of a Phone Number</span>
            </div>
            <div className={"dp-tags flex"}>
                <ul>
                    <li>
                        <span
                            style={tagButton?.style()}
                            ref={buttonRef}
                            onMouseOver={hoverOnHandler}
                            onMouseOut={hoverOutHandler}
                        >
                            Easy
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}