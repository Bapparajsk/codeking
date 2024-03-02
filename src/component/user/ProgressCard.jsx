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

    const { userDetails } = useUserDetails();
    const { getSize, nameOfTotalProblem } = useProblem();

    useEffect(() => {
        if (userDetails && nameOfTotalProblem) {
            const { Easy, Medium, Hard } = userDetails.problem_difficulty;
            setProgressStatusTemplate(userDetails.problem_difficulty, setProgressStatus, nameOfTotalProblem);
            setPoint_hover(Easy + Medium + Hard);

            console.log('progressStatus ',progressStatus)
            console.log('nameOfTotalProblem ',nameOfTotalProblem)
        }

        setTotalProblemNumber(getSize);
    }, [userDetails, getSize, nameOfTotalProblem]);

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