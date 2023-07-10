import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./routers/AppRouter";
import { PaperProvider } from "react-native-paper";
import { customDarkTheme, customDefaultTheme } from "./utils/theme";
import AuthContextProvider from "./contexts/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { AppRegistry, useColorScheme } from "react-native";
import { registerRootComponent } from "expo";

SplashScreen.preventAutoHideAsync();

if (Platform.OS == "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(expo.name, () => App);
}

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoBlack: require("./assets/fonts/Nunito-Black.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    NunitoExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraLight: require("./assets/fonts/Nunito-ExtraLight.ttf"),
    NunitoLight: require("./assets/fonts/Nunito-Light.ttf"),
    NunitoMedium: require("./assets/fonts/Nunito-Medium.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  const currentTheme = useColorScheme(); // "light" or "dark"

  const theme = currentTheme === "dark" ? customDarkTheme : customDefaultTheme;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContextProvider>
        <NavigationContainer onReady={onLayoutRootView} theme={theme}>
          <StatusBar style="auto" />
          <AppRouter />
        </NavigationContainer>
      </AuthContextProvider>
    </PaperProvider>
  );
}
