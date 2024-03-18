import "$/problem/problemLists.css"
import { useState, useEffect } from "react";
import { TopicButton } from "#/problem/TopicButton";
import { ControlButton } from "#/problem/ControlButton";
import { Problems } from "#/problem/Problems";
import { useProblem } from "@/context/problemList/ProblemProvider";
import { sort, sortByTagName } from '@/lib/handler/problemSortHandler';
import { getButtonDetails, sortButton } from '@/lib/button/listingButton';
import { useUserDetails } from "@/context/user/UserProvider";
import { ProblemSearch } from "#/problem/ProblemSearch";
import { createLink } from '@/lib/handler/functionHandler';
import { useNavigateRouter } from '@/context/navigation/NavigateProvider';



export const ProblemsList = () => {

    const [roted, setRoted] = useState(0);
    const [ProblemLists, setProblemLists] = useState([]);
    const [searchProblemByName, setSearchProblemByName] = useState('')
    const { problemLists, pinNames, setPinNames, tagNames, setTagNames } = useProblem();
    const { getProblemStatus } = useUserDetails();
    const { router } = useNavigateRouter();
    const buttons = getButtonDetails();
    
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
    
    const addTagNameinState = (name) => {
        setTagNames(prevTagNames => ({ ...prevTagNames, [name]: name }));
    }

    const removeTagNameinState = (name) => {
        // Destructure the current state
        setTagNames(prevTagNames => {
            // Create a copy of the state object
            const newState = { ...prevTagNames };
            // Remove the key from the copied state object
            delete newState[name];
            // Return the modified state
            return newState;
        });
    };

    const containskey = (key) => {
        return Object.keys(tagNames).includes(key);
    }


    useEffect(() => {
        if (problemLists) {
            setProblemLists(problemLists);
        }
    }, [problemLists]);
    
    useEffect(() => {
        const { difficulty, status } = pinNames;
        if (difficulty === '' && status === '' && Object.keys(tagNames).length === 0 && searchProblemByName === '') {
            setProblemLists(problemLists);
            return;
        }

        let sortProblem = sort(problemLists, pinNames, getProblemStatus());
        if (Object.keys(tagNames).length !== 0) {
            sortProblem = sortByTagName(sortProblem, tagNames);
        }

        if (searchProblemByName !== '') {
            if(/^-?\d*\.?\d+$/.test(searchProblemByName)) {
                sortProblem = sortProblem.filter(problem => problem.number.toString().includes(searchProblemByName));
            } else {
                sortProblem = sortProblem.filter(problem => problem.hading.toLowerCase().includes(searchProblemByName.toLowerCase()));
            }
        }

        setProblemLists(sortProblem);
    }, [pinNames, tagNames, searchProblemByName]);

    const handleOnePick = () => {
        const random = Math.floor(Math.random() * problemLists.length);
        const problem = problemLists[random];
        console.log(problem);
        router.push(`/problems/${createLink(problem.hading)}`);
    }

    const onClickHandle = (e) => {
        if (roted === 0) {
            setRoted(180);
            setTimeout(() => {
                window.addEventListener("click", windowHan);
            }, 300)

        } else {
            setRoted(0);
            setTimeout(() => {
                window.removeEventListener("click", windowHan);
            }, 300)
        }
    }

    const windowHan = (e) => {
        if(e.target.parentNode.parentNode.className === "problem-search"){
            return;
        }
        setRoted(0);
        setTimeout(() => {
            window.removeEventListener("click", windowHan);
        }, 300)
    }

    useEffect(() => {
        return () => {
            window.removeEventListener("click", windowHan);
        };
    }, [roted]);

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
                    <ControlButton
                        buttonName={"Difficulty"}
                        list={Difficulty}
                        keyName={'difficulty'}
                        setPinName={setPinName}
                    />
                    <ControlButton
                        buttonName={"Status"}
                        list={Status}
                        keyName={'status'}
                        setPinName={setPinName}
                    />

                    <div className={"pro-con-button flex"}>
                        <div className={'flex'} onClick={onClickHandle}>
                            <p>{'Tags'}</p>
                            <i className="fa-solid fa-angle-down" style={{transform: `rotate(${roted}deg)`}}></i>
                        </div>
                        {
                            roted === 180 ? <ProblemSearch tagNames={tagNames} addTagName={addTagNameinState} removeTagName={removeTagNameinState} containskey={containskey}/> : null
                        }
                    </div>

                    <div className={"control-search-box flex"}>
                        <div className={"csb-icon"}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input
                            name={"problemSearch"}
                            className={"problemSearch"}
                            placeholder={"Search questions"}
                            value={searchProblemByName}
                            onChange={(e) => setSearchProblemByName(e.target.value)}
                        />
                    </div>
                    <div className={"one-pick"} onClick={handleOnePick}>
                        <i className="fa-solid fa-shuffle fa-xl"></i>
                        <span>Pick One</span>
                    </div>
                </div>
                <div className={'pin-list-box flex'}>
                    {Object.keys(pinNames).map((key, idx) => {
                        if (pinNames[key] !== '') {
                            return (
                                <div key={idx} className={"pin-list-item"}>
                                    <span>{pinNames[key]}</span>
                                    <i className="fa-solid fa-xmark" onClick={() => removePinName(key)}></i>
                                </div>
                            );
                        }
                    })}
                    {Object.keys(tagNames).map(key => {
                        if (tagNames[key] !== '') {
                            return (
                                <div key={key} className={"pin-list-item"}>
                                    <span>{tagNames[key]}</span>
                                    <i className="fa-solid fa-xmark" onClick={() => removeTagNameinState(key)}></i>
                                </div>
                            );
                        }
                    })}
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