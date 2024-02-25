import "$/problem/problems.css"
import {ProblemBox} from "#/problem/ProblemBox";
import Link from "next/link";
import { useProblem } from "@/context/problemList/ProblemProvider";
import { useCallback, useState } from "react";
import { createLink } from '@/lib/handler/functionHandler';

export const Problems = () => {

    const { problemLists } = useProblem();
    console.log(problemLists);



    return (
        <div className={"problems-container flex"}>

            {
                problemLists?.map((item, idx) => {
                    return (
                        <Link key={idx} href={`/problems/${createLink(item.hading)}`} style={{width: "100%"}}>
                        <ProblemBox
                            successful={false}
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