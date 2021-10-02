import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../navigation/AuthNavigator";

type WelcomeScreenPropNavigation = NativeStackNavigationProp<
  MainStackParamList,
  "Main"
>;

interface IMain {
  navigation: WelcomeScreenPropNavigation;
}

const Main = ({ navigation }: IMain) => {
  return (
    <View style={styles.container}>
      <Header
        title="Start Your Experience"
        subtitle="Register or Login to your account"
        colors={["#00DCEC", "#00B7D5"]}
      />
      <View style={styles.footerContainer}>
        <SafeAreaView edges={["bottom"]} style={styles.safeAreaContainer}>
          <Button
            customStyle={styles.loginButton}
            onPress={() => console.log("lala")}
          >
            Login
          </Button>
          <Button onPress={() => navigation.navigate("Register")}>
            Register
          </Button>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", width: "100%" },
  inputContainer: {
    marginTop: 50,
  },
  loginButton: {
    marginBottom: 20,
    backgroundColor: "rgb(0, 98, 204)",
  },
  footerContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
  safeAreaContainer: {
    paddingHorizontal: 20,
    width: "100%",
  },
});
