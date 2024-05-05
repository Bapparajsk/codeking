"use client"

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { linkToName, splitTestCase } from '@/lib/handler/functionHandler';

const ProblemContext = createContext();

const ProblemProvider = ({ children }) => {

    const [problemLists, setProblemLists] = useState(undefined);
    const [nameOfTotalProblem, setNameOfTotalProblem] = useState(undefined);
    const [currentProblem, setCurrentProblem] = useState(undefined);
    const [pinNames, setPinNames] = useState({ difficulty: '', status: ''});
    const [tagNames, setTagNames] = useState({});
    const [testCases, setTestCases] = useState(undefined);

    const router = useRouter();

    const fetchProblemsInServer = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.pust('/login', {scroll : true});
        }

        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-all`, { headers: {token} });
            const { problemList, nameOfTotalProblem } = response.data.problem;
            setProblemLists(problemList);
            setNameOfTotalProblem(nameOfTotalProblem)

            return { problemList, nameOfTotalProblem, size: problemList.length };
        } catch (e) {
            router.pust('/login', {scroll : true});
        }
    }

    const getProblemList = async () => {
        if (problemLists) {
            return problemLists;
        }

        try {
            const data = await fetchProblemsInServer();
            setProblemLists(data.problemList);
            return data.problemList;
        } catch (e) {
            router.pust('/login', {scroll : true});
        }
    }

    const getSize = async () => {
        if (problemLists) {
            return problemLists.length;
        }

        try {
            const { size } = await fetchProblemsInServer();
            return size;
        } catch (e) {
            router.pust('/login', {scroll : true});
        }

    }

    const getNameOfTotalProblem = async () => {
        if(nameOfTotalProblem) {
            return nameOfTotalProblem;
        }

        try {
            const { nameOfTotalProblem } = await fetchProblemsInServer();
            return nameOfTotalProblem;
        } catch (e) {
            router.pust('/login', {scroll : true});
        }
    }

    const fetchCurrentProblem = async (link) => {
        try {
            let problemName = linkToName(link);
            const token = localStorage.getItem('token');
            const headers = { 'token': token }

            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-one/${problemName}`, {headers});
            const { problem } = res.data;
            setCurrentProblem(problem);
            const splitDate = splitTestCase(problem.example[0]);
            setTestCases(splitDate);
        } catch (e) {
            router.pust('/login', {scroll : true});
        }
    }

    return (
        <ProblemContext.Provider value={{
            fetchProblemsInServer,
            getProblemList,
            getSize,
            getNameOfTotalProblem,
            pinNames,
            setPinNames,
            tagNames,
            setTagNames,
            fetchCurrentProblem,
            currentProblem,
            testCases,
            setTestCases,
        }}>
            {children}
        </ProblemContext.Provider>
    );
};

const useProblem = () => useContext(ProblemContext)

export { ProblemProvider, useProblem };
