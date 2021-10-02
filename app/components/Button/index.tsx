import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  disabled?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button = ({ children, customStyle, disabled, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={!disabled ? onPress : () => null}
      style={[
        styles.appButtonContainer,
        customStyle,
        disabled && {
          backgroundColor: "rgba(143, 155, 179, 0.24)",
        },
      ]}
    >
      <Text style={styles.appButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#5FBA20",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
