import React from "react";
import '$/user/solvedProblems.css';
import { SolveProblemCard } from "#/user/SolveProblemCard";

export const SolvedProblems = () => {
    return (
        <div className={'solve-problem-box flex'}>
            <SolveProblemCard number={1} name={'Tow Sum'}/>
            <SolveProblemCard number={1} name={'Tow Sum'}/>
        </div>
    );
};

