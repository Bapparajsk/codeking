"use client"

import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userDetails, setUserDetails] = useState(undefined);
  const [problemStatus, setProblemStatus] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async (localToken) => {
      try {
        const headers = { 'token': localToken }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user`,{headers});
        const { userDetails, problemsStatus } = response.data;

        setUserDetails(userDetails);        /* set user details in  context */
        setProblemStatus(problemsStatus);   /* set problem status in context */
      } catch (e) {
        console.log(e)
        router.push('/login');
      }
    }
    const token = localStorage.getItem('token');
    fetchUser(token);
  }, []);

  const updateUserDetails = async (newUserDetails, token) => {
    const headers = { 'token': token };
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/user/updates/user-details`, newUserDetails, {headers});
      const { user } = response.data;
      setUserDetails(user);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const getProblemStatus = () => {
    if (problemStatus) {
      return problemStatus;
    }
    return undefined;
  }

  const getSubmissionsStatus = async (id, token) => {
    try {
      const headers = { 'token': token };
      const params = { id };
      const res = await axios.get( `${process.env.NEXT_PUBLIC_API_URL}/user/get-user/submissions`, { params, headers });
      return res.data.submissions;
    } catch (e) {
      return [];
    }
  }

  const getSolveProblemById = async () => {
    console.log("getSolveProblemById");
    try {
      const token = localStorage.getItem('token');
      const headers = { 'token': token };
      const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/get-user/get-solve-problem-id`,
          {headers}
      );
      return res.data.problemsStatus;
    } catch (e) {
      console.log(e);
      return {};
    }
  }


  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, updateUserDetails, getProblemStatus, setProblemStatus, getSubmissionsStatus, getSolveProblemById }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserDetails = () => useContext(UserContext);
