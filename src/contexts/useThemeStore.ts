import { create } from "zustand";

type Theme = "light" | "dark";
type themeState = {
  theme: Theme;
};

const useThemeStore = create<themeState>(() => {
  return {
    theme: "dark",
  };
});

export function setTheme(theme: Theme) {
  useThemeStore.setState({ theme: theme });
}

export default useThemeStore;
