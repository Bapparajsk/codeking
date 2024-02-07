import "$/problem/showProblem/description.css"
import getButton from "@/lib/button/tagButtons";
import React, {Fragment, useEffect, useRef, useState} from 'react';
import { usePathname } from "next/navigation";
import { TopicTage } from "#/problem/showProblem/TopicTage";

export const Description = () => {
    const [tagButton, setTagButton] = useState(null);
    const buttonRef = useRef();
    const [topicIconRef, setTopicIconRef] = useState(false);
    const [showTopicName, setShowTopicName] = useState(false);

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

    const scrollToSection = () => {
        const section = document.getElementById('targetSection');
        section.scrollIntoView({ behavior: 'smooth' });
    };

    const pathName = usePathname();
    useEffect(() => {
        document.title = pathName.split("/")[2];
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
                        <span className={"topic-tag"} onClick={scrollToSection}>
                            <i className="fa-solid fa-tag fa-bounce"></i>
                            Topic
                        </span>
                    </li>
                </ul>
            </div>
            <div className={"dp-body"}>
                <p>Given an array of integers <code>nums</code> and an integer target, return indices of the two numbers
                    such that
                    they add up to target.</p>
                <p>&nbsp;</p>
                <p>You may assume that each input would have exactly one solution, and you may not use the same element
                    twice.</p>
                <p>&nbsp;</p>
                <p>You can return the answer in any order.</p>
                <p>&nbsp;</p>
                <p>
                    <strong>Example 1:</strong>
                </p>
                <pre className={"examples"}>
                    <strong>Input : </strong>
                    {`digits = "23"`}<br/>
                    <strong>Output : </strong>
                    {`["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`}
                </pre>
                <p>&nbsp;</p>
                <p>
                    <strong>Example 2:</strong>
                </p>
                <pre className={"examples"}>
                    <strong>Input : </strong>
                    {`digits = "23"`}<br/>
                    <strong>Output : </strong>
                    {`["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`}
                </pre>
                <p>&nbsp;</p>
                <p>
                    <strong>Example 2:</strong>
                </p>
                <pre className={"examples"}>
                    <strong>Input : </strong>
                    {`digits = "23"`}<br/>
                    <strong>Output : </strong>
                    {`["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`}
                </pre>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                    <strong>Constraints :</strong>
                </p>
                <ul className={"constraints"}>
                    <li>
                        <code>{`0 <= digits.length <= 4`}</code>
                    </li>
                    <li>
                        <code>digit[i]</code>
                        {` is a digit int the range `}
                        <code>{`['2', '9']`}</code>
                        .
                    </li>
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            {/*Accepted*/}
            {/*1.9M*/}
            {/*Submissions*/}
            {/*3.2M*/}
            {/*Acceptance Rate*/}
            {/*59.8%*/}
            <div className={"dp-footer"}>
                <hr/>
                <div className={"dp-footer-accepted flex"}>
                    <div className={'accepted flex'}>
                        <span>{`Accepted`}</span>
                        <div className={"parentage"}>
                            <span>1.9M</span>
                        </div>
                    </div>
                    <div className={'accepted flex'}>
                        <span>{`Submissions`}</span>
                        <div className={"parentage"}>
                            <span>3.2M</span>
                        </div>
                    </div>
                    <div className={'accepted flex'}>
                        <span>{`Acceptance Rate`}</span>
                        <div className={"parentage"}>
                            <span>59.8%</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={`dp-footer-topics`}>
                    <div
                        className={"dp-footer-topics-popup flex"}
                        onMouseOver={() => setTopicIconRef(true)}
                        onMouseOut={() => setTopicIconRef(false)}
                        onClick={() => setShowTopicName(!showTopicName)}
                    >
                        <div className={"dp-footer-popup-name"}

                        >
                            <i className={`fa-solid fa-tag ${topicIconRef ? "fa-bounce": ""} `}></i>
                            <span>Topics</span>
                        </div>
                        <div className={"dp-footer-popup-icon"}>
                            <i className={`fa-solid fa-chevron-down ${topicIconRef ? "fa-bounce": ""}`}></i>
                        </div>
                    </div>
                    <div className={"show-dp-footer-topic-names"}
                         style={{ height: showTopicName ? '50px' : '0' }}
                    >
                        <TopicTage tagName={"Hash Table"}/>
                        <TopicTage tagName={"String"}/>
                        <TopicTage tagName={"Backtracking"}/>
                        <TopicTage tagName={"Hash Table"}/>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}