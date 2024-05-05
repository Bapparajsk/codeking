"use client"

import "$/problem/problemLists.css"
import { useState, useEffect } from "react";
import { TopicButton } from "#/problem/TopicButton";
import { ControlButton } from "#/problem/ControlButton";
import { Problems } from "#/problem/Problems";
import { useProblem } from "@/context/problemList/ProblemProvider";
import { sortByDifficulty, sortByStatus, sortByTagName } from '@/lib/handler/problemSortHandler';
import { getButtonDetails, sortButton } from '@/lib/button/listingButton';
import { useUserDetails } from "@/context/user/UserProvider";
import { ProblemSearch } from "#/problem/ProblemSearch";
import { createLink, getpinNamesIcon, getTextCode } from '@/lib/handler/functionHandler';
import { useRouter } from 'next/navigation';


export const ProblemsList = () => {

    const [roted, setRoted] = useState(0);
    const [ProblemLists, setProblemLists] = useState([]);
    const [searchProblemByName, setSearchProblemByName] = useState('')
    const router = useRouter();

    const { getProblemList, pinNames, setPinNames, tagNames, setTagNames } = useProblem();
    const { getSolveProblemById } = useUserDetails();

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
    const init = async () => {
        const data = await getProblemList();
        setProblemLists(data);
    }
    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        const sortByAsync = async () => {
            const {difficulty, status} = pinNames;
            if (difficulty === '' && status === '' && Object.keys(tagNames).length === 0 && searchProblemByName === '') {
                await init();
                return;
            }

            let sortProblem = await getProblemList();

            if (difficulty !== '') {
                sortProblem = sortByDifficulty(sortProblem, difficulty);
            }

            if (status !== '') {
                const problemStatus = await getSolveProblemById();
                sortProblem = sortByStatus(sortProblem, status, problemStatus);
            }

            if (Object.keys(tagNames).length !== 0) {
                sortProblem = sortByTagName(sortProblem, tagNames);
            }

            if (searchProblemByName !== '') {
                if (/^-?\d*\.?\d+$/.test(searchProblemByName)) {
                    sortProblem = sortProblem.filter(problem => problem.number.toString().includes(searchProblemByName));
                } else {
                    sortProblem = sortProblem.filter(problem => problem.hading.toLowerCase().includes(searchProblemByName.toLowerCase()));
                }
            }

            setProblemLists(sortProblem);
        }
        sortByAsync();
    }, [pinNames, tagNames, searchProblemByName]);

    const handleOnePick = () => {
        const random = Math.floor(Math.random() * ProblemLists.length);
        const problem = ProblemLists[random];
        router.push(`/problems/${createLink(problem.hading)}`, {scroll : true});
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
                            let item = pinNames[key];
                            let textColor = getTextCode(item);
                            return (
                                <div key={idx} className={"pin-list-item"}>
                                    <span
                                        style={{color: `${textColor.length !== 0 ? textColor : ''}`}}
                                    >
                                        { getpinNamesIcon(item) }
                                        {item}
                                    </span>
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
