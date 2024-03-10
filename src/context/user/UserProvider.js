"use client"

import { useState, createContext, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(undefined);

  const updateUserDetails = async (newUserDetails, token) => {
    const headers = { 'token': token };
    console.log('headers ', headers);
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/user/updates/user-details`, newUserDetails, {headers});
      setUserDetails(response.data.user);
      return true;
    } catch (error) {
      console.log(error);
      return false; false;
    }
  }

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserDetails = () => useContext(UserContext);