"use client"

import "$/problem/showProblem/style.css"
import { EditorBox } from "#/problem/showProblem/EditorBox";
import { ProblemDashBoard } from "#/problem/showProblem/ProblemDashBoard";

const ShowProblem = () => {

    return (
        <div className={"show-problem-main flex"}>
            <ProblemDashBoard/>
            <EditorBox/>
        </div>
    );
};

export default ShowProblem;
