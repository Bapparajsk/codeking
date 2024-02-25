"use client"

import { createContext, useContext, useState } from 'react';

const ProblemContext = createContext();

const ProblemProvider = ({ children }) => {
    const [problemLists, setProblemLists] = useState();

    return (
        <ProblemContext.Provider value={{ problemLists, setProblemLists }}>
            {children}
        </ProblemContext.Provider>
    );
};

const useProblem = () => useContext(ProblemContext)

export { ProblemProvider, useProblem };
