import "$/problem/showProblem/dashboard.css"
import {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import { Description } from "#/problem/showProblem/Description";
import { Submissions } from '@/component/problem/showProblem/Submissions';
import { useNavigateRouter } from "@/context/navigation/NavigateProvider";
import { TestCase } from '@/component/problem/showProblem/TestCase';
import { TestResult } from '@/component/problem/showProblem/TestResult';
import { useProblem } from '@/context/problemList/ProblemProvider';
import { linkToName, splitTestCase } from '@/lib/handler/functionHandler';
import axios from "axios";

export const Dashboard = () => {

    const [testCases, setTestCases] = useState(undefined);

    const { navigate, setNavigate } = useNavigateRouter();
    const pathName = usePathname();
    const { router } = useNavigateRouter();
    const { setCurrentProblem } = useProblem();

    useEffect(() => {
        const link = pathName.split("/")[2];
        document.title = `Code King - ${ link }`;
        setNavigate("Description");
        const fetchData = async () => {
            let problemName = linkToName(link);
            const token = localStorage.getItem('token');
            const headers = { 'token': token }

            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-one/${problemName}`, {headers});
                const { problem } = res.data;
                setCurrentProblem(problem);
                const splitDate = splitTestCase(problem.example[0]);
                setTestCases(splitDate);
                console.log("res.data",res.data);
            } catch (error) {
                console.log(error);
                // router.back();
            }
        }
        fetchData();
    }, [])

    return (
        <div className={"dashboard-main"}>
            {
                navigate === 'Description' ? <Description/> :
                navigate === 'Submissions' ? <Submissions/> :
                navigate === 'TestCase' ? <TestCase testCases={testCases} setTestCases={setTestCases}/> : <TestResult/>
            }
        </div>
    )
}
