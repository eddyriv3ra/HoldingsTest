import React, { createContext, useState } from "react";
import AppLoading from "expo-app-loading";
import { getUserAsync } from "../utils";

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
  const [isReady, setIsReady] = useState(false);

  const refetchUser = async () => {
    const user = await getUserAsync();
    if (user) return setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={refetchUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
