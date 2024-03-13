'use client'

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUserDetails } from '@/context/user/UserProvider';
import { useProblem } from "@/context/problemList/ProblemProvider";

const AuthUser = createContext();

export const AuthProvider = ({ children }) => {
    const  [token, setToken] = useState(undefined);

    const { setUserDetails, userDetails, setProblemStatus } = useUserDetails();
    const { setProblems, setTotalProblem } = useProblem();

    useEffect(() => {
        const localToken = localStorage.getItem('token');
        if (localToken) {
            console.log('token', localToken);
            fetchUser(localToken);
            setToken(localToken);
        }
    },[])

    const fetchUser = async (localToken) => {
        const headers = { 'token': localToken }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user`,{headers});
        const { userDetails, problemsStatus } = response.data;

        setUserDetails(userDetails);        /* set user details in  context */
        setProblemStatus(problemsStatus);   /* set problem status in context */

        const resProblem = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-all`, {headers});
        const { problemList, NameOfTotalProblem } = resProblem.data.problem;
        setProblems(problemList);
        setTotalProblem(NameOfTotalProblem);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
        setToken(undefined);
        return true;
    }

    const setTokenInLocalstorage = async (userToken) => {
        try {
            await new Promise((res , rej) => {
                setToken(userToken);
                localStorage.setItem('token', userToken);
                setTimeout(() => {
                    res(true);
                }, 1000);
            });
        } catch (e) {
            console.log('token set error :- ', e);
        }
    }

    const getAndSetTokenInLocalstorage = async () => {
        const getToken = localStorage.getItem('token');
        if (getToken) {
            if (userDetails) {
                console.log('Auth userDetails :- ', userDetails);
                return true;
            }
            const headers = { 'token': getToken };

            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user`,{headers});
                const { userDetails, problemsStatus } = response.data;

                setToken(getToken);                 /* set token in context */
                setUserDetails(userDetails);        /* set user details in  context */
                setProblemStatus(problemsStatus);   /* set problem status in context */

                const resProblem = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-all`, {headers});
                const { problemList, NameOfTotalProblem } = resProblem.data.problem;
                setProblems(problemList);
                setTotalProblem(NameOfTotalProblem);
                return true;
            } catch (e) {
                console.log(e);
                return false
            }
        }
        return false;
    }

    return (
        <AuthUser.Provider value={{token, setTokenInLocalstorage, getAndSetTokenInLocalstorage, removeToken}}>
            {children}
        </AuthUser.Provider>
    );
}

export const useAuthUser = () => useContext(AuthUser);