import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";

export type AppStackParamList = {
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Welcome"
  >
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
);

export default AppNavigator;
