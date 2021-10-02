import React from "react";
import { StyleSheet, Text, Pressable, PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  children,
  disabled,
  onPress,
  ...pressableProps
}: ButtonProps) => {
  return (
    <Pressable
      onPress={!disabled ? onPress : () => null}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#a0d37c" : "#5FBA20",
        },
        styles.appButtonContainer,
        disabled && {
          backgroundColor: "rgba(143, 155, 179, 0.24)",
          color: "rgba(143, 155, 179, 0.48);",
        },
      ]}
      {...pressableProps}
    >
      <Text style={styles.appButtonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  appButtonContainer: {
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
