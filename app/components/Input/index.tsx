import React, { useRef, useEffect, useState, ReactElement } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Image,
  TextInput,
  ImageSourcePropType,
  TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";

interface InputProps extends TextInputProps {
  placeholder: string;
  imgSource: ImageSourcePropType;
  value: string;
  onBlur?: () => void;
  error?: boolean;
  customStyle?: StyleProp<TextStyle>;
}

const Input = ({
  placeholder,
  imgSource,
  value,
  onBlur,
  error,
  customStyle,
  ...textInputProps
}: InputProps): ReactElement => {
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;

  const handleOnBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocused, value]);

  return (
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={imgSource} resizeMode="contain" />
      <Animated.Text
        style={[
          styles.label,
          {
            top: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [15, -5],
            }),
            fontSize: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [18, 14],
            }),
          },
        ]}
      >
        {placeholder}
      </Animated.Text>
      <TextInput
        value={value}
        style={[
          styles.input,
          isFocused || value ? { borderBottomColor: "#17BFDD" } : {},
          error && { borderBottomColor: "#FF0000" },
          customStyle,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={handleOnBlur}
        {...textInputProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  image: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 30,
    top: 10,
  },
  label: {
    position: "absolute",
    left: 70,
    color: "#aaa",
  },
  input: {
    height: 50,
    margin: 10,
    paddingLeft: 60,
    paddingBottom: 10,
    flex: 1,
    color: "#17BFDD",
    fontWeight: "700",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D8D8",
  },
});
