import {
  DarkTheme as ReactNavigationDarkTheme,
  DefaultTheme as ReactNavigationDefaultTheme,
} from "@react-navigation/native";
import {
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { colors } from "../constants/colors";

export const customDefaultTheme = {
  ...ReactNavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...ReactNavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    ...colors.light,
  },
};

export const customDarkTheme = {
  ...ReactNavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...ReactNavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    ...colors.dark,
  },
};
