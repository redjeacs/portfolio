import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface Theme {
  color: string;
  background: string;
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const darkTheme = {
  color: "white",
  background: "black",
};

export const lightTheme = {
  color: "black",
  background: "white",
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: darkTheme,
  setTheme: () => console.warn("setTheme function not provided"),
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
