import "$/user/progresscard.css"
import { useEffect, useState } from "react";
import { Progress } from "#/user/Progress";
import { useUserDetails } from "@/context/user/UserProvider";
import { getProgressStatusTemplate, setProgressStatusTemplate } from '@/lib/templates/template';

export const ProgressCard = () => {
    const [point_hover, setPoint_hover] = useState("500");

    const { userDetails } = useUserDetails();

    const [progressStatus, setProgressStatus] = useState(getProgressStatusTemplate());
    useEffect(() => {
        console.log(userDetails);
        if (userDetails) {
            setProgressStatusTemplate(userDetails.problem_difficulty, setProgressStatus);
        }
    }, [userDetails]);
    console.log(progressStatus);
    const setPointParent = () => {
        setTimeout(() => {
            setPoint_hover(point_hover === "500" ? "16%" : "500");
        }, 1000)
    }

    return (
        <div className={'progress-card flex'}>
            <div className={'progress-card-left p-card flex'}>
                <p className={'solved'}>Solved Problems</p>
                <div
                    className={'pro-total-solves'}
                    onMouseOver={setPointParent}
                    onMouseOut={setPointParent}
                >
                    <p id={'point'}>{point_hover}</p>
                    <p>solve</p>
                </div>
                <div className={'sercail-progress flex'} style={{background: `conic-gradient(#0cefa4 ${496/3033 * 360}deg, #fff 0deg)`}}></div>
            </div>
            <div className={'progress-card-right p-card flex'}>
                <Progress items={progressStatus.Easy}/>
                <Progress items={progressStatus.Medium}/>
                <Progress items={progressStatus.Hard}/>
            </div>
        </div>
    )
}