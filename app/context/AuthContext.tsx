import React, { createContext, useState, useEffect } from "react";
import { monitorSecretKey } from "../api";
import { getSessionKey } from "../auth/storage";

interface IAuthContextProvider {
  children: React.ReactNode;
}

interface IThemeContext {
  user: string | undefined;
  setUser?: any;
}

const defaultState = {
  user: undefined,
};

export const AuthContext = createContext<Partial<IThemeContext>>(defaultState);

const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const sessionKey = await getSessionKey();
        console.log({ sessionKey });
        if (sessionKey) {
          const response = await monitorSecretKey(sessionKey);
          if (response?.session_secret) {
            setUser(response);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserAsync();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
