import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";
import { getUserAsync } from "../../utils";

const EmailSent = () => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const interval = setInterval(async () => {
      const user = await getUserAsync();
      setUser(user);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/email-successfully-sent.json")}
      />
      <SafeAreaView edges={["bottom"]} style={styles.safeAreaContainer}>
        <Text style={styles.text}>Check your email!</Text>
      </SafeAreaView>
    </View>
  );
};

export default EmailSent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
