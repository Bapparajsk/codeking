import "$/problem/problemLists.css"
import {TopicButton} from "#/problem/TopicButton";
import {ControlButton} from "#/problem/ControlButton";

export const ProblemsList = () => {

    const buttons = [
        {
            iconName: "fa-solid fa-box-archive",
            buttonName: "All Topics",
            color: "#ffffff"
        },
        {
            iconName: "fa-solid fa-code-compare",
            buttonName: "Algorithms",
            color: "#c2a309",
        },
        {
            iconName: "fa-solid fa-server",
            buttonName: "Database",
            color: "#2712ed",
        },
        {
            iconName: "fa-solid fa-terminal",
            buttonName: "Shell",
            color: "#12ed57",
        },
        {
            iconName: "fa-brands fa-node-js",
            buttonName: "JavaScript",
            color: "#0ce7ef",
        }
    ]

    return (
        <div className={"problem-lists-bar"}>
            <div className={"pro-list-hading flex"}>
                <div className={"problem-control-head flex"}>
                    {
                        buttons.map(( item, idx) => {
                            return <TopicButton key={idx} details={item}/>
                        })
                    }
                </div>
                <div className={"problem-control flex"}>
                    <ControlButton buttonName={"Lists"}/>
                    <ControlButton buttonName={"Difficulty"}/>
                    <ControlButton buttonName={"Status"}/>
                    <ControlButton buttonName={"Tags"}/>
                </div>
            </div>
        </div>
    );
}