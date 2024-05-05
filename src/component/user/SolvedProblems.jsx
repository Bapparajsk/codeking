'use client'

import React, { useState, useEffect } from "react";
import '$/user/solvedProblems.css';
import { SolveProblemCard } from "#/user/SolveProblemCard";
import { useUserDetails } from '@/context/user/UserProvider';
import axios from 'axios'

export const SolvedProblems = () => {

    const [problemLog, setProblemLog] = useState([]);
    const { getUserLogs } = useUserDetails();

    useEffect(() => {
        const init = async () => {
            const data = await getUserLogs();
            setProblemLog(data);
        }
        init();
    }, []);

    return (
        <div className={'solve-problem-box flex'}>
            {
                problemLog.slice().reverse().map((log, i) => (
                    <SolveProblemCard key={i} {...log} />
                ))
            }
        </div>
    );
};

