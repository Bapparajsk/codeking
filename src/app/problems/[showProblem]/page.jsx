"use client"

import "$/problem/showProblem/style.css"
import {useEffect} from "react"
import { EditorBox } from "#/problem/showProblem/EditorBox";
import { ProblemDashBoard } from "#/problem/showProblem/ProblemDashBoard";
import { useProblem } from '@/context/problemList/ProblemProvider'
import { usePathname } from "next/navigation";

const ShowProblem = () => {
    
    const pathName = usePathname();
    const { fetchCurrentProblem } = useProblem();

    useEffect(() => {
        const init = async () => {
            const link = pathName.split("/")[2];
            await fetchCurrentProblem(link);
        }
        init();
    }, []);

    return (
        <div className={"show-problem-main flex"}>
            <ProblemDashBoard/>
            <EditorBox/>
        </div>
    );
};

export default ShowProblem;
