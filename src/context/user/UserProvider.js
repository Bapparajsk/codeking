"use client"

import { useState, createContext, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(undefined);
  const [problemStatus, setProblemStatus] = useState(undefined);
  const updateUserDetails = async (newUserDetails, token) => {
    const headers = { 'token': token };
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/user/updates/user-details`, newUserDetails, {headers});
      return true;
    } catch (error) {
      console.log(error);
      return false; false;
    }
  }

  const getProblemStatus = () => {
    if (problemStatus) {
      return problemStatus;
    }
    return undefined;
  }

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, updateUserDetails, getProblemStatus, setProblemStatus }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserDetails = () => useContext(UserContext);