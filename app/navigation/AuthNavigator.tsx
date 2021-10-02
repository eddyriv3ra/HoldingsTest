import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import EmailSent from "../screens/EmailSent";

export type AuthStackParamList = {
  Register: undefined;
  EMailSent: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Register"
  >
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="EMailSent" component={EmailSent} />
  </Stack.Navigator>
);

export default AuthNavigator;
