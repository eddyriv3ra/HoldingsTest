import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigation";

const Navigation = () => {
  useEffect(() => {
    const getUrlAsync = async () => {
      try {
        console.log("entreee");
        const response = await fetch(
          "https://dev-api.aao.holdings/access/monitor/0064b149-cf5f-4c2a-b774-b1741e4c0f7d"
        );
        console.log(response);
      } catch (error) {
        console.log("errrrorrrr", error);
      }
    };

    getUrlAsync();
  }, []);

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
