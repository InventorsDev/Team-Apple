import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect, useState } from "react";

const useFirstLaunch = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  //   const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        // navigation.navigate("Onboarding");
        setIsFirstLaunch(true);
      } else {
        // navigation.navigate("Onboarding");
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return {
    isFirstLaunch,
  };
};

export default useFirstLaunch;
