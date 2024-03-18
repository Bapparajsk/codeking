import "$/problem/showProblem/description.css"
import getButton from "@/lib/button/tagButtons";
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from "next/navigation";
import { TopicTage } from "#/problem/showProblem/TopicTage";
import { linkToName } from '@/lib/handler/functionHandler';
import { useAuthUser } from "@/context/usertoken/AuthUser";
import axios from "axios";

export const Description = () => {
    const [tagButton, setTagButton] = useState(null);
    const buttonRef = useRef();
    const [topicIconRef, setTopicIconRef] = useState(false);
    const [showTopicName, setShowTopicName] = useState(false);
    const [problem, setProblem] = useState();

    const hoverOnHandler = () => {
        const { boxShadow, transform} = tagButton?.mouseOver();
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
        setShowTopicName(true);
    };

    const pathName = usePathname();
    const { token } = useAuthUser();


    useEffect(() => {
        const link = pathName.split("/")[2];
        document.title = `Code King - ${ link }`;

        const fetchData = async () => {
            let problemName = linkToName(link);
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-one/${problemName}`, {headers});
                setProblem(res.data.problem);
                setTagButton(getButton(res.data.problem.difficulty));
                console.log(res.data.problem);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (
        <div className={"description-card"}>
            <div className={"dp-hading flex"}>
                <span>{problem?.number}. {problem?.hading}</span>
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
                            {problem?.difficulty}
                        </span>
                    </li>
                    <li>
                        <span
                            className={"topic-tag"}
                            onClick={scrollToSection}
                            onMouseOver={() => setTopicIconRef(true)}
                            onMouseOut={() => setTopicIconRef(false)}
                        >
                            <i className={`fa-solid fa-tag ${topicIconRef ? "fa-bounce" : ""} `}></i>
                            Topic
                        </span>
                    </li>
                </ul>
            </div>
            <div className={"dp-body"}>
                {
                    problem?.statement.map((item, idx) => {
                        let conName = item.replace(/@C/g, '<code>').replace(/#C/g, '</code>');
                        return (
                            <>
                                <p dangerouslySetInnerHTML={{__html: conName}}></p>
                                <p>&nbsp;</p>
                            </>
                        )
                    })
                }
                <p>&nbsp;</p>
                <p>
                    <strong>Example 1:</strong>
                </p>
                <pre className={"examples"}>
                    <strong>Input : </strong>
                    {problem?.example[0].example1.input}
                    <br/>
                    <strong>Output : </strong>
                    {problem?.example[0].example1.output}
                    {
                        problem?.example[0].example1.explanation &&
                        <>
                            <br />
                            <strong>Explanation : </strong>
                            {problem?.example[0].example1.explanation}
                        </>
                    }
                </pre>
                <p>&nbsp;</p>
                <p>
                    <strong>Example 2:</strong>
                </p>
                <pre className={"examples"}>
                    <strong>Input : </strong>
                    {problem?.example[0].example2.input}
                    <br/>
                    <strong>Output : </strong>
                    {problem?.example[0].example2.output}
                    {
                        problem?.example[0].example2.explanation &&
                        <>
                            <br />
                            <strong>Explanation : </strong>
                            {problem?.example[0].example2.explanation}
                        </>
                    }
                </pre>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                    <strong>Constraints :</strong>
                </p>
                <ul className={"constraints"}>
                    {
                        problem?.constraints.map((item, idx) => {
                            let conName = item.replace(/@C/g, '<code>').replace(/#C/g, '</code>');
                            return <li key={idx} dangerouslySetInnerHTML={{__html: conName}}></li>;
                        })
                    }
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
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
                            <i className={`fa-solid fa-tag ${topicIconRef ? "fa-bounce" : ""} `}></i>
                            <span>Topics</span>
                        </div>
                        <div className={"dp-footer-popup-icon"}>
                            <i className={`fa-solid fa-chevron-down ${topicIconRef ? "fa-bounce" : ""}`}></i>
                        </div>
                    </div>
                    <div className={"show-dp-footer-topic-names"}
                         id={"targetSection"}
                         style={{height: showTopicName ? '50px' : '0'}}
                    >
                        {
                            problem?.tagName.map((item, idx) => {
                                return <TopicTage key={idx} tagName={item}/>
                            })
                        }
                    </div>
                </div>
                <hr/>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p className={"dp-footer-name"}>Copyright © 2023 Code King</p>
            </div>
        </div>
    )
}