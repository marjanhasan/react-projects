/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext(); // 1

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}; // 2

export default UserContextProvider;
