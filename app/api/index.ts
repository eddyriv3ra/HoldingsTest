import { Platform } from "react-native";

interface IregisterApi {
  error: boolean;
  message: string;
  session_key: string;
  session_secret: string;
  authentication: boolean;
}

const api = "https://dev-api.aao.holdings";

export const registerApi = async (
  email_address: string
): Promise<IregisterApi | undefined> => {
  try {
    const response = await fetch(`${api}/access/join`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address,
        platform: Platform.OS === "android" ? "2" : "3",
      }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const monitorSecretKey = async (secretKey: string) => {
  try {
    const response = await fetch(`${api}/access/monitor/${secretKey}`);
    return response.json();
  } catch (error) {}
};
