import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { emailRegex } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import ActivityIndicator from "../../components/ActivityIndicator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/AuthNavigator";
import { registerApi } from "../../api";
import { storeSessionKey } from "../../auth/storage";

type RegisterScreenPropNavigation = NativeStackNavigationProp<
  AuthStackParamList,
  "Register"
>;

interface IRegister {
  navigation: RegisterScreenPropNavigation;
}

const Register = ({ navigation }: IRegister) => {
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await registerApi(values.email.value);
      storeSessionKey(response!.session_key);
      setLoading(false);
      return navigation.navigate("EMailSent");
    } catch (error) {
      setLoading(false);
      console.log("There was an error", error);
    }
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
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
    </>
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
    marginBottom: Platform.OS === "android" ? 20 : 0,
  },
  footerContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
});
