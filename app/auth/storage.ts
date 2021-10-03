import * as SecureStore from "expo-secure-store";

const key = "sessionSecret";

export const storeSessionKey = async (sessionSecret: string) => {
  try {
    await SecureStore.setItemAsync(key, sessionSecret);
  } catch (error) {
    console.log(error);
  }
};

export const getSessionKey = async () => {
  console.log("eeee");
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};
