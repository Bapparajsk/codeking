"use client"

import '$/problem/showProblem/submissins.css';
import { useRef, useState, useEffect } from 'react';
import Image  from 'next/image'
import { List } from '@/component/problem/showProblem/List'
import { useUserDetails} from '@/context/user/UserProvider';
import { useAuthUser } from '@/context/usertoken/AuthUser';
import { useProblem } from '@/context/problemList/ProblemProvider';
import { useNavigateRouter } from "@/context/navigation/NavigateProvider";

export const Submissions = () => {

    const [submission, setSubmission] = useState([]);

    const { getSubmissionsStatus } = useUserDetails();
    const { token } = useAuthUser();
    const { currentProblem } = useProblem();
    const { isTrue, setIsTrue } = useNavigateRouter();
    
    useEffect(() => {
        const init = async () => {
            const token = localStorage.getItem('token');
            const data = await getSubmissionsStatus(currentProblem._id, token);
            setSubmission(data);
        }
        init();
    }, []);

    useEffect(() => {
        if (isTrue) {
            init();
            setIsTrue(false);
        }
    }, [isTrue]);

    return (
        <div className={'submissions-main'}>
            <div className={'submissions-title flex'}><span>Submissions</span></div>
            <div className={'submissions-content flex'}>
                {
                    submission?.slice().reverse().map((isSuccess, index) => (
                        <List isTrue={isSuccess === 'success'} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}


