'use client'

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUserDetails } from '@/context/user/UserProvider';
import { useProblem } from "@/context/problemList/ProblemProvider";

const AuthUser = createContext();

export const AuthProvider = ({ children }) => {
    const  [token, setToken] = useState(undefined);

    const { setUserDetails } = useUserDetails();
    const { setProblemLists } = useProblem();

    useEffect(() => {
        const localToken = localStorage.getItem('token');
        if (localToken) {
            fetchUser(localToken);
        }
    },[])

    const fetchUser = async (localToken) => {
        const headers = { 'token': localToken }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user`,{headers});
        const resProblem = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-all`, {headers});
        setProblemLists(resProblem.data.problem);
        console.log(response.data.userDetails);
        setUserDetails(response.data.userDetails);
    }

    const setTokenInLocalstorage = (userToken) => {
        setToken(userToken);
        localStorage.setItem('token', userToken);
    }

    const getAndSetTokenInLocalstorage = async () => {
        // if (setUserDetails !== undefined) {
        //     console.log(setUserDetails);
        //     console.log("dfsdhfz,jhfwe8urfh sdjklhfbsdjfgas");
        //     return true;
        // }

        const getToken = localStorage.getItem('token');
        if (getToken) {
            const headers = { 'token': getToken }
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user`,{headers});
                const resProblem = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-all`, {headers});
                setProblemLists(resProblem.data.problem);
                setToken(getToken);
                console.log(response.data.userDetails);
                setUserDetails(response.data.userDetails);
                return true;
            } catch (e) {
                console.log(e);
                return false
            }
        }
        return false
    }

    return (
        <AuthUser.Provider value={{token, setTokenInLocalstorage, getAndSetTokenInLocalstorage}}>
            {children}
        </AuthUser.Provider>
    );
}

export const useAuthUser = () => useContext(AuthUser);