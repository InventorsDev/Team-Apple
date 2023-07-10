import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const colors = {
    light: {},
  };
  const colorScheme = useColorScheme();
  <ThemeContext.Provider
    value={{
      colorScheme,
    }}
  >
    children
  </ThemeContext.Provider>;
}
