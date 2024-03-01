"use client"

import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(undefined);
  
  return (
    <UserContext.Provider value={{userDetails, setUserDetails}}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserDetails = () => useContext(UserContext);