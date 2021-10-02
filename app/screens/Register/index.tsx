import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { emailRegex } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const [values, setValues] = useState<{
    email: {
      value: string;
      error: boolean;
    };
  }>({
    email: {
      value: "",
      error: false,
    },
  });

  const handleInput = (value: string, key: string) => {
    setValues({
      ...values,
      [key]: { value, error: !emailRegex.test(values.email.value) },
    });
  };

  const emailValidator = () => {
    setValues({
      ...values,
      email: {
        error: !emailRegex.test(values.email.value),
        value: values.email.value,
      },
    });
  };

  const handleSubmit = () => {};

  console.log(values.email);

  return (
    <View style={styles.container}>
      <Header
        title="Create Your Account"
        subtitle="Enter your email address to create your account"
        colors={["#00DCEC", "#00B7D5"]}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.inputContainer}>
          <Input
            value={values.email.value}
            placeholder="Email Address"
            imgSource={require("../../assets/emailIcon.png")}
            onChangeText={(value) => handleInput(value, "email")}
            placeholderTextColor="#D8D8D8"
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={emailValidator}
            error={values.email.error}
          />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <SafeAreaView edges={["bottom"]} style={styles.safeAreaContainer}>
          <Button
            onPress={handleSubmit}
            disabled={values.email.error || !values.email.value}
          >
            CREATE ACCOUNT
          </Button>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: {
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    marginTop: 50,
  },
  safeAreaContainer: {
    width: "100%",
  },
  footerContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
});
