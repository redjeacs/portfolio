import { createContext } from "react";

export interface Theme {
  color: string;
  background: string;
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const defaultTheme = {
  color: "white",
  background: "black",
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => console.warn("setTheme function not provided"),
});
