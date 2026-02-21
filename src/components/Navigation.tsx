import { darkTheme, lightTheme, useTheme } from "../contexts/ThemeContext";

function Navigation() {
  const { setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center gap-4 p-4">
      <button onClick={() => setTheme(lightTheme)}>light</button>
      <button onClick={() => setTheme(darkTheme)}>dark</button>
    </nav>
  );
}

export default Navigation;
