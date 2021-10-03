import React, { useContext } from "react";
import { StyleSheet, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { removeSessionKey } from "../../auth/storage";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";

const Welcome = () => {
  const { setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(null);
    removeSessionKey();
  };

  return (
    <View style={styles.container}>
      <Header title="Welcome" colors={["#00DCEC", "#00B7D5"]} />
      <View style={styles.footerContainer}>
        <SafeAreaView edges={["bottom"]} style={styles.safeAreaContainer}>
          <Button onPress={handleLogout}>Log out</Button>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
  },
  safeAreaContainer: {
    width: "100%",
    marginBottom: Platform.OS === "android" ? 20 : 0,
  },
});
