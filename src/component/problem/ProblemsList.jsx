import "$/problem/problemLists.css"
import { TopicButton } from "#/problem/TopicButton";
import { ControlButton } from "#/problem/ControlButton";
import { Problems } from "#/problem/Problems";

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
                    <div className={"control-search-box flex"}>
                        <div className={"csb-icon"}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input
                            name={"problemSearch"}
                            className={"problemSearch"}
                            placeholder={"Search questions"}
                        />
                    </div>
                    <div className={"pro-con-button"}>
                        <i className="fa-solid fa-gear fa-lg"></i>
                    </div>
                    <div className={"one-pick"}>
                        <i className="fa-solid fa-shuffle fa-xl"></i>
                        <span>Pick One</span>
                    </div>
                </div>
            </div>
            <div className={"pro-list-body flex"}>
                <div className={"problem-list-box"}>
                    <div className={"problem-list-header"}>
                        <p>Status</p>
                        <p>Title</p>
                        <p>Difficulty</p>
                        <p>Submission</p>
                    </div>
                    <Problems/>
                </div>
            </div>
        </div>
    );
}