"use client"

import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userDetails, setUserDetails] = useState(undefined);
  const [userProgress, setUserProgress] = useState(undefined);
  const [userLogs, setUserLogs] = useState(undefined);
  const [solveProblemById, setSolveProblemById] = useState(undefined);

  const router = useRouter();

  const fetchUserDataToServer = async () => {
    if (userDetails && userProgress && userLogs) {
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/login', {scroll : true});
    }

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user/`, { headers: {token} });
      const { userDetails, problem_difficulty, user_submissions_logs } = response.data;
      setUserDetails(userDetails);
      setUserProgress(problem_difficulty);
      setUserLogs(user_submissions_logs);
      return { userDetails, problem_difficulty, user_submissions_logs };

    } catch (e) {
      console.log(e.response?.data);
      router.push('/login', {scroll : true});
    }
  }

  const getUserDetails = async () => {
    if (userDetails) {
      return userDetails;
    }

    try {
      const { userDetails } = await fetchUserDataToServer();
      return userDetails;
    } catch (e) {
      console.log(e.response?.data);
      router.push('/login', {scroll : true});
    }
  }

  const getUserProgress = async () =>  {
    if (userProgress) {
      return userProgress;
    }

    try {
      const { problem_difficulty } = await fetchUserDataToServer();
      return problem_difficulty;
    } catch (e) {
      console.log(e.response?.data);
      router.push('/login', {scroll : true});
    }
  }

  const updateUserProgress = async () =>  {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/login', {scroll : true});
    }

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user/user_progress`, { headers: {token} });
      const { problem_difficulty } = response.data;
      setUserProgress(problem_difficulty);
    } catch (e) {
      console.log(e.response?.data);
    }
  }

  const getUserLogs = async () => {
    if (userLogs) {
      return userLogs;
    }

    try {
      const { user_submissions_logs } = await fetchUserDataToServer();
      return user_submissions_logs;
    } catch (e) {
      console.log(e.response?.data);
      router.push('/login', {scroll : true});
    }
  }

  const updateUserLogs = async () =>  {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/login', {scroll : true});
    }

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user/user_submissions_logs`, { headers: {token} });
      const { userSubmissionsLogs } = response.data;
      setUserLogs(userSubmissionsLogs);
    } catch (e) {
      console.log(e.response?.data);
    }
  }

  const getSolveProblemById = async () => {
    if (solveProblemById) {
      return solveProblemById;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/login', {scroll : true});
    }

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get-user/get-solve-problem-id`, {headers: {token}});
      const { problemsStatus } = response.data;
      setSolveProblemById(problemsStatus);
      return problemsStatus;
    } catch (e) {
      console.log(e.response?.data);
      router.push('/login', {scroll : true});
    }
  }

  const getUserName = () => {
    return userDetails ? userDetails.user_name : undefined;
  }

  const getSubmissionsStatus = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/login', {scroll : true});
    }

    try {
      const params = { id };
      const res = await axios.get( `${process.env.NEXT_PUBLIC_API_URL}/user/get-user/submissions`, { params:{id}, headers:{token} });
      return res.data.submissions;
    } catch (e) {
      return [];
    }
  }

  return (
    <UserContext.Provider value={{
      fetchUserDataToServer,
      getUserDetails,
      getUserProgress,
      getUserLogs,
      getSolveProblemById,
      updateUserProgress,
      updateUserLogs,
      getUserName,
      getSubmissionsStatus,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserDetails = () => useContext(UserContext);
