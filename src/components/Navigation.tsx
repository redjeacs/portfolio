import { setTheme } from "../contexts/useThemeStore";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center gap-4 p-4">
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
    </nav>
  );
}

export default Navigation;
