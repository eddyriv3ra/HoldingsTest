import React from "react";
import AuthContextProvider from "./app/context/AuthContext";
import Navigation from "./app/navigation";

const App = () => {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};

export default App;
