import React from "react";
import { View, StyleSheet } from "react-native";
import LottiveView from "lottie-react-native";

interface IActivityIndicator {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: IActivityIndicator) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottiveView
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.8,
  },
});

export default ActivityIndicator;
