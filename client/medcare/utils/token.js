import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("@token_key");
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem("@token_key", token);
  } catch (e) {}
};

export function clearToken() {
  return AsyncStorage.removeItem("token");
}
