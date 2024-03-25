"use client"

import { createContext, useContext, useState } from 'react';

const ProblemContext = createContext();

const ProblemProvider = ({ children }) => {
    
    const [problemLists, setProblemLists] = useState(undefined);
    const [nameOfTotalProblem, setNameOfTotalProblem] = useState(undefined);
    const [currentProblem, setCurrentProblem] = useState(undefined);
    const [pinNames, setPinNames] = useState({ difficulty: '', status: ''});
    const [tagNames, setTagNames] = useState({})
    
    const getSize = () => {
        if (problemLists) {
            return problemLists.length;
        }

        return 0;
    }

    const setProblems = (prob) => {
        setProblemLists(prob);
    }

    const setTotalProblem = (name) => {
        console.log('nameOfTotalProblem',nameOfTotalProblem);
        setNameOfTotalProblem(name);
    }

    return (
        <ProblemContext.Provider value={{ problemLists, getSize, setProblems, setTotalProblem, nameOfTotalProblem, pinNames, setPinNames, tagNames, setTagNames, currentProblem, setCurrentProblem }}>
            {children}
        </ProblemContext.Provider>
    );
};

const useProblem = () => useContext(ProblemContext)

export { ProblemProvider, useProblem };
