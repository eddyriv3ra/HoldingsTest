import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";

export type RegisterStackParamList = {
  Register: undefined;
};

const Stack = createNativeStackNavigator<RegisterStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Register"
      component={Register}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
