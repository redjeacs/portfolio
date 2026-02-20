import { darkTheme, lightTheme, useTheme } from "../contexts/ThemeContext";

function Navigation() {
  const { setTheme } = useTheme();

  return (
    <div className="">
      <button onClick={() => setTheme(lightTheme)}>light</button>
      <button onClick={() => setTheme(darkTheme)}>dark</button>
    </div>
  );
}

export default Navigation;
