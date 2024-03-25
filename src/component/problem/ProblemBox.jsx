import { useState } from "react";


const diff = (name) => {
    return <span style={{color: (name === "Easy" ? "#00B8A3" : name === "Medium" ? "#FFA427" : "#DA211A")}}>{name}</span>
}

const submissionDiff = (sub, total, diffName) => {
    const outerColor = (diffName === "Easy" ? "00800059" : diffName === "Medium" ? "FFA42751" : "DA211A68")
    const innerColor = (diffName === "Easy" ? "14c514" : diffName === "Medium" ? "FFA427FF" : "DA211AFF");

    return (
        <div style={{width: 200, height: 10, backgroundColor: `#${outerColor}`, borderRadius: 10, overflow: "hidden"}}>
            <div style={{width: (sub/total*200), height: "100%",borderRadius: 10, backgroundColor: `#${innerColor}`}}></div>
        </div>
    )
}

export const ProblemBox = ({ successful, problemNumber, problemName, difficulty, submission}) => {

    const [statusHover, setStatusHover] = useState(false);
    const [statusIcon, setStatusIcon] = useState({w: 25, h:25});

    const statusHoverInHandler = () => {
        setStatusHover(true);
        setStatusIcon({w: 30, h: 30});
    }

    const statusHoverOutHandler = () => {
        setStatusHover(false);
        setStatusIcon({w: 25, h: 25});
    }

    return (
        <>
            <hr className={"problem-box-hr"}/>
            <div className={"problem-box flex"}>
                <div
                    className={"p-box status flex"}
                    onMouseOver={statusHoverInHandler}
                    onMouseOut={statusHoverOutHandler}>

                    <lord-icon
                        src={`https://cdn.lordicon.com/${successful ? "oqdmuxru" : "nqtddedc"}.json`}
                        trigger={statusHover ? "loop" : "in"}
                        colors={`primary:# ${successful ? "16c72e" : "c71f16"}`}
                        style={{width: statusIcon.w,height: statusIcon.h}}>
                    </lord-icon>
                </div>
                <div className={"p-box title flex"}>
                    <div className={"p-title-number-box flex"}>
                        <span>{problemNumber}:</span>
                    </div>
                    <div className={"p-title-name-box flex"}>
                        <span>
                            {
                                problemName.length >= 33 ? `${problemName.substring(0, 33)}...` : problemName
                            }
                        </span>
                    </div>
                </div>
                <div className={"p-box difficulty flex"}>
                    { diff(difficulty) }
                </div>
                <div className={"p-box submission flex"}>
                    { submissionDiff(submission.sub, submission.total, difficulty) }
                </div>
            </div>
        </>
    )
}