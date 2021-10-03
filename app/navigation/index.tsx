import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator, { AppStackParamList } from "./AppNavigation";
import { getSessionKey } from "../auth/storage";
import { monitorSecretKey } from "../api/";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
