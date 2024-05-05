'use client'

import "$/problem/problems.css"
import {ProblemBox} from "#/problem/ProblemBox";
import Link from "next/link";
import { useCallback, useState ,useEffect } from "react";
import { createLink } from '@/lib/handler/functionHandler';
import { useUserDetails } from '@/context/user/UserProvider';

export const Problems = ({ problemLists }) => {

    const [solve, setSolve] = useState({});
    const [attempted, setAttempted] = useState({});

    const { getSolveProblemById } = useUserDetails();

    useEffect(() => {
        const init = async () => {
            const data = await getSolveProblemById();
            console.log(data);
            const { Solved, Attempted } = data;
            setSolve(Solved);
            setAttempted(Attempted);
        }
        init();
    }, []);

    return (
        <div className={"problems-container flex"}>
            {
                problemLists?.map((item, idx) => {
                    return (
                        <Link key={idx} href={`/problems/${createLink(item.hading)}`} style={{width: "100%"}}>
                        <ProblemBox
                            successful={() => {
                                if (solve[item.id]) {
                                    return "solve";
                                } else if (attempted[item.id]) {
                                    return "attempted";
                                } else {
                                    return 'todo'
                                }
                            }}
                            problemNumber={item.number}
                            problemName={item.hading}
                            difficulty={item.difficulty}
                            submission={{sub: 100, total: 5000}}
                        />
                    </Link>
                    )
                })
            }
        </div>
    )
}
