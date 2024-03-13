import "$/problem/problemLists.css"
import { useState, useEffect } from "react";
import { TopicButton } from "#/problem/TopicButton";
import { ControlButton } from "#/problem/ControlButton";
import { Problems } from "#/problem/Problems";
import { useProblem } from "@/context/problemList/ProblemProvider";
import { sort } from '@/lib/handler/problemSortHandler';
import { getButtonDetails, sortButton } from '@/lib/button/listingButton';
import { useUserDetails } from "@/context/user/UserProvider";

export const ProblemsList = () => {

    const [pinNames, setPinNames] = useState({list : '', difficulty: '', status: ''});
    const [ProblemLists, setProblemLists] = useState([]);
    const { problemLists } = useProblem();
    const { getProblemStatus } = useUserDetails();
    const buttons = getButtonDetails();

    const list = sortButton('lists');
    const Difficulty = sortButton('difficulty');
    const Status = sortButton('status');

    const setPinName = (key, name) => {
        setPinNames(prevPinNames => ({
            ...prevPinNames,
            [key]: name
        }));
    }

    const removePinName = (key) => {
        setPinNames(prevPinNames => ({
            ...prevPinNames,
            [key]: ''
        }));
    }

    useEffect(() => {
        if (problemLists) {
            console.log(problemLists);
            setProblemLists(problemLists);
        }
    }, [problemLists]);
    useEffect(() => {
        const { list, difficulty, status } = pinNames;
        if (list === '' && difficulty === '' && status === '') {
            setProblemLists(problemLists);
            return;
        }
        const ss = sort(problemLists, pinNames, getProblemStatus());
        setProblemLists(ss);

    }, [pinNames]);

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
                    <ControlButton buttonName={"Lists"} list={list} keyName={'list'} setPinName={setPinName}/>
                    <ControlButton buttonName={"Difficulty"} list={Difficulty} keyName={'difficulty'} setPinName={setPinName}/>
                    <ControlButton buttonName={"Status"} list={Status} keyName={'status'} setPinName={setPinName}/>
                    {/*<ControlButton buttonName={"Tags"}/>*/}
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
                <div className={'pin-list-box flex'}>
                    {
                        Object.keys(pinNames).map((key, idx) => {
                            if (pinNames[key] !== '') {
                                return (
                                    <div key={idx} className={"pin-list-item"}>
                                        <span>{pinNames[key]}</span>
                                        <i className="fa-solid fa-xmark" onClick={() => removePinName(key)}></i>
                                    </div>
                                )
                            }
                        })
                    }
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
                    <Problems problemLists={ProblemLists}/>
                </div>
            </div>
        </div>
    );
}