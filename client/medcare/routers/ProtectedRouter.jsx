import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/home/Home";
import Explore from "../screens/explore/Explore";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const ProtectedRouter = () => {
  const theme = useTheme();
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Explore") {
            iconName = focused ? "compass-outline" : "compass-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        initialRouteName: "Home",
        tabBarStyle: {
          paddingVertical: 10,
          // backgroundColor: "#F5F6F7",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.dark ? theme.colors.white : theme.colors.primary,
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <BottomTab.Screen name="Explore" component={Explore} options={{ title: "Explore" }} />
    </BottomTab.Navigator>
  );
};

export default ProtectedRouter;
