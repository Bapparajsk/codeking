import React, {useEffect, useRef, useState} from 'react';
import "$/problem/showProblem/editorBox.css"
import { Editor } from '@monaco-editor/react';
import { Languages } from "#/problem/showProblem/Ianguages";
import { useProblem } from '@/context/problemList/ProblemProvider';
import Loader  from '@/component/Loader';
import SubmitLoader from '@/component/SubmitLoader';
import { useNavigateRouter } from "@/context/navigation/NavigateProvider";

import axios from "axios";

export const EditorBox = () => {

    const [lan_box, setLan_box] = useState(false);
    const [v, setV] = useState(1.0);
    const [currLAn, setCurrLAn] = useState("java");
    const [code, setCode] = useState('');
    const [codeDetails, setCodeDetails] = useState(undefined);
    const iconRef = useRef();
    const [codeRunIs, setCodeRunIs] = useState(false);
    const [codeSubmitIs, setCodeSubmitIs] = useState(false);
    const [runCode, setRunCode] = useState(false);

    const { currentProblem } = useProblem();
    const { setNavigate, setIsTrue } = useNavigateRouter();

    const setRunCodeFalse = () => {
        const id = setTimeout(() => {
            setRunCode(false);
        }, 5000);

        return id;
    }

    const submitCode = async () => {
        if (runCode) {
            alert('try agen 5s later');
            return;
        }
        setRunCode(true);
        let id = setRunCodeFalse();
        const headers = {'token': localStorage.getItem('token')};

        try {
            setCodeSubmitIs(true);
            const body = {
                code: code,
                lang: 'java',
                userName: 'bapparajsk',
                problemId: currentProblem._id
            }

            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/problem/submit/run-code`,
                body,
                {headers}
            );

            setCodeSubmitIs(false);
            clearTimeout(id);
            setRunCodeFalse();
            setIsTrue(true);
            setNavigate('Submissions');

        } catch (e) {

            console.log('error', e);
            setCodeSubmitIs(false);
            clearTimeout(id);
            setRunCodeFalse();

            setNavigate('Submissions');
        }
    }

    useEffect(() => {
        if (currentProblem) {
            const defaultValue = `class CodeKing {\n\tpublic ${currentProblem.codeDetails.returnType} ${currentProblem.codeDetails.functionName}(${currentProblem.codeDetails.functionParameter}) {\n       //code here\n\t}\n}`;
            setCode(defaultValue);
        }
    }, [currentProblem]);

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
        }, 50);
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
                    <button className={"run-box flex"} disabled={codeRunIs || codeSubmitIs}>
                        {
                            codeRunIs ? <Loader/> :
                                <>
                                    <span>Run</span>
                                    <i className="fa-solid fa-play fa-xs"></i>
                                </>
                        }

                    </button>
                    <button className={"submit-box flex"} disabled={codeRunIs || codeSubmitIs} onClick={submitCode}>
                        {
                            codeSubmitIs ? <SubmitLoader/> : <span>Submit</span>
                        }
                    </button>
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
                    value={code}
                    onChange={(value, event) => setCode(value)}
                />
            </div>
        </div>
    );
};
