import React from 'react';
import "$/problem/showProblem/editorBox.css"
import { Editor } from '@monaco-editor/react';
import {Languages} from "#/problem/showProblem/Ianguages";

export const EditorBox = () => {

    const handleClick = () => {

    }

    return (
        <div className={'editor-box flex'}>
            <div className={"editor-nav flex"}>
                <div className={"editor-lan-box flex"}>
                    <div className={"lan-box flex"} onClick={handleClick}>
                        <span>java</span>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <Languages/>
                </div>
                <div className={"editor-run-box flex"}>
                <div className={"run-box"}>
                        <span>Run</span>
                        <i className="fa-solid fa-play"></i>
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
