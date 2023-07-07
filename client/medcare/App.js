import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./routers/AppRouter";
import { PaperProvider } from "react-native-paper";
import AuthContextProvider from "./contexts/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoBlack: require("../assets/fonts/Nunito-Black.ttf"),
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    NunitoExtraBold: require("../assets/fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraLight: require("../assets/fonts/Nunito-ExtraLight.ttf"),
    NunitoLight: require("../assets/fonts/Nunito-Light.ttf"),
    NunitoMedium: require("../assets/fonts/Nunito-Medium.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
    NunitoSemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <AuthContextProvider>
        <StatusBar style="auto" />
        <PaperProvider>
          <AppRouter />
        </PaperProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React from "react";
// import { View, Text } from "react-native";
// import { useEffect, useState } from "react";
// import { Stack, useRouter } from "expo-router";

// const Index = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     AsyncStorage.getItem("alreadyLaunched").then((value) => {
//       if (value === null) {
//         AsyncStorage.setItem("alreadyLaunched", "true");
//         router.push("/onboarding");
//         setIsFirstLaunch(true);
//       } else {
//         router.push("/onboarding");

//         setIsFirstLaunch(false);
//       }
//     });
//   }, []);
//   return (
//     <View>
//       <Text>Index</Text>
//     </View>
//   );
// };

// export default Index;
