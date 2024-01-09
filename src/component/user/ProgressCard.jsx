import "$/user/progresscard.css"
import {useState} from "react";
import {Progress} from "#/user/Progress";

export const ProgressCard = () => {
    const [point_hover, setPoint_hover] = useState("500");

    const setPointParent = () => {
        setTimeout(() => {
            setPoint_hover(point_hover === "500" ? "16%" : "500");
        }, 100)
    }

    const [progressStatus, setProgressStatus] = useState([
        {
            name: "Easy",
            total_Problems: 778,
            total_Solve: 215,
            progress_color: "#2fd19d",
        },
        {
            name: "Medium",
            total_Problems: 1591,
            total_Solve: 237,
            progress_color: "#FFC01E"
        },
        {
            name: "Hard",
            total_Problems: 664,
            total_Solve: 44,
            progress_color: "#EF4743"
        }
    ])

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
                <svg>
                    <circle className="bg" cx="57" cy="57" r="52"/>
                    <circle className="meter-1" cx="57" cy="57" r="52"/>
                </svg>
            </div>
            <div className={'progress-card-right p-card flex'}>
                {
                    progressStatus.map((item, idx) => (
                        <Progress key={idx} items={item}/>
                    ))
                }
            </div>
        </div>
    )
}