import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" colors={["#00DCEC", "#00B7D5"]} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
