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
        setTagButton(getButton("Medium"))
    }, [])

    return (
        <div className={"description-card"}>
            <div className={"dp-hading flex"}>
                <span>17. Letter Combinations of a Phone Number</span>
            </div>
            <div className={"dp-tags flex"}>
                <ul className={"flex"}>
                    <li>
                        <span
                            style={tagButton?.getStyle()}
                            ref={buttonRef}
                            onMouseOver={hoverOnHandler}
                            onMouseOut={hoverOutHandler}
                        >
                            Medium
                        </span>
                    </li>
                    <li>
                        <span className={"topic-tag"}>
                            <i className="fa-solid fa-tag"></i>
                            Topic
                        </span>
                    </li>
                </ul>
            </div>
            <div className={"dp-body"}>
                <p>Given an array of integers <code>nums</code> and an integer target, return indices of the two numbers such that
                    they add up to target.</p>
                <p>&nbsp;</p>
                <p>You may assume that each input would have exactly one solution, and you may not use the same element
                    twice.</p>
                <p>&nbsp;</p>
                <p>You can return the answer in any order.</p>
            </div>
        </div>
    )
}