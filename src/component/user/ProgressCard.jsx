"use client"

import "$/user/progresscard.css"
import { useEffect, useState } from "react";
import { Progress } from "#/user/Progress";
import { useUserDetails } from "@/context/user/UserProvider";
import { getProgressStatusTemplate, setProgressStatusTemplate } from '@/lib/templates/template';
import { useProblem } from '@/context/problemList/ProblemProvider';

export const ProgressCard = () => {
    const [point_hover, setPoint_hover] = useState(0);
    const [totalProblemNumber, setTotalProblemNumber] = useState(0);
    const [progressStatus, setProgressStatus] = useState(getProgressStatusTemplate());

    const { getUserProgress } = useUserDetails();
    const { getSize, getNameOfTotalProblem  } = useProblem();

    useEffect(() => {
        const init = async () => {
            const problemDifficulty = await getUserProgress();
            const { Easy, Medium, Hard } = problemDifficulty;
            const notp = await getNameOfTotalProblem();
            setProgressStatusTemplate(problemDifficulty, setProgressStatus, notp);
            setPoint_hover(Easy + Medium + Hard);
            setTotalProblemNumber(getSize());
        }
        init();
    }, []);

    return (
        <div className={'progress-card flex'}>
            <div className={'progress-card-left p-card flex'}>
                <p className={'solved'}>Solved Problems</p>
                <div className={'pro-total-solves'}>
                    <p id={'point'}><span>{point_hover}</span>/<span>{totalProblemNumber}</span></p>
                    <p>solve</p>
                </div>
                <div className={'sercail-progress flex'} style={{background: `conic-gradient(#0cefa4 ${point_hover/totalProblemNumber * 360}deg, #fff 0deg)`}}></div>
            </div>
            <div className={'progress-card-right p-card flex'}>
                <Progress items={progressStatus.Easy}/>
                <Progress items={progressStatus.Medium}/>
                <Progress items={progressStatus.Hard}/>
            </div>
        </div>
    )
}
