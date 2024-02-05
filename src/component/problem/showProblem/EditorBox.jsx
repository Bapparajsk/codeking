import React, {useEffect, useRef, useState} from 'react';
import "$/problem/showProblem/editorBox.css"
import { Editor } from '@monaco-editor/react';
import {Languages} from "#/problem/showProblem/Ianguages";

export const EditorBox = () => {

    const [lan_box, setLan_box] = useState(false);
    const [v, setV] = useState(1.0);
    const [currLAn, setCurrLAn] = useState("java");

    const iconRef = useRef();

    const removeLanBox = () => {
        let intervalId = setInterval(() => {
            setV((prevV) => {
                const newValue = prevV - 0.1;

                if (newValue <= 0.0) {
                    clearInterval(intervalId);
                    iconRef.current.style.transform = `rotate(0deg)`;
                    setLan_box(false);
                }

                return newValue;
            });
        }, 100);
    }

    const setLan = (e) => {
        setCurrLAn(e)
        removeLanBox();
    }

    const handleClick = () => {
        const rotateDegree = lan_box ? 0 : 180;


        if (lan_box) {
            removeLanBox();
        } else {
            iconRef.current.style.transform = `rotate(180deg)`;
            setV(1.0);
            setLan_box(true);
        }
    }

    useEffect(() => {
        iconRef.current.style.transition = "all .4s ease-out";
    }, []);

    return (
        <div className={'editor-box flex'}>
            <div className={"editor-nav flex"}>
                <div className={"editor-lan-box flex"}>
                    <div className={"lan-box flex"} onClick={handleClick}>
                        <span>{currLAn}</span>
                        <i ref={iconRef} className="fa-solid fa-angle-down"></i>
                    </div>
                    {lan_box && <Languages opa={v} setLan={setLan} currLAn={currLAn}/>}
                </div>
                <div className={"editor-run-box flex"}>
                <div className={"run-box flex"}>
                        <span>Run</span>
                        <i className="fa-solid fa-play fa-xs"></i>
                    </div>
                    <div className={"submit-box"}>
                        <span>Submit</span>
                    </div>
                </div>
                <div className={"editor-setting-box flex"}>
                    <div className={"setting-box"}>
                        <i className="fa-solid fa-gear"></i>
                    </div>
                </div>
            </div>
            <div className={'editor-card'}>
                <Editor
                    width={'100%'}
                    height={'100%'}
                    language={'java'}
                    theme={"light"}
                    defaultValue={"class codeKing {\n\tpublic int solve(int n) {\n\n\t}\n}"}
                />
            </div>
        </div>
    );
};
