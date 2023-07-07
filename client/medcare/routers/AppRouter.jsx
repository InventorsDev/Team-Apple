import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthRouter from "./AuthRouter";
import ProtectedRouter from "./ProtectedRouter";

const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Protected"
        component={ProtectedRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthRouter}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
