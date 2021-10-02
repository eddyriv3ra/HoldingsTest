import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Main from "../screens/Main";

export type MainStackParamList = {
  Main: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Main"
  >
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthNavigator;
