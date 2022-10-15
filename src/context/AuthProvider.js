import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // check local storage for previous session
  const [auth, setAuth] = useState(
    localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null
  );

  useEffect(() => {
    const sessionUpdate = () => {
      localStorage.setItem("auth", JSON.stringify(auth));
    };
    sessionUpdate();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
