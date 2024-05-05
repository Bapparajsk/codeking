'use client'

import "$/problem/showProblem/dashboard.css"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Description } from "#/problem/showProblem/Description";
import { Submissions } from '@/component/problem/showProblem/Submissions';
import { TestCase } from '@/component/problem/showProblem/TestCase';
import { TestResult } from '@/component/problem/showProblem/TestResult';
import { Solution } from "@/component/problem/showProblem/Solution";
import { useNavigateRouter } from "@/context/navigation/NavigateProvider";
import { useProblem } from '@/context/problemList/ProblemProvider';


export const Dashboard = () => {

    const [currTestCases, setCurrTestCases] = useState(undefined);

    const { navigate, setNavigate } = useNavigateRouter();
    const pathName = usePathname();
    const { router } = useNavigateRouter();
    const { testCases, setTestCases } = useProblem();

    useEffect(() => {
        const link = pathName.split("/")[2];
        document.title = `Code King - ${ link }`;
        setNavigate("Description");
       if (testCases) {
           setCurrTestCases(testCases);
       }
    }, [testCases])

    return (
        <div className={"dashboard-main"}>
            {
                navigate === 'Description' ? <Description/> :
                navigate === 'Solution' ? <Solution/> :
                navigate === 'Submissions' ? <Submissions/> :
                navigate === 'TestCase' ? <TestCase testCases={currTestCases} setTestCases={setTestCases}/> :
                navigate === 'TestResult' ?<TestResult taseCases={currTestCases}/> : null
            }
        </div>
    )
}
