import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

//address prop drilling
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { EmpData } = getLocalStorage();
    setuserData({ EmpData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
