import { useState, useEffect, useRef } from "react";
import useThemeStore from "../contexts/useThemeStore";
import { Sun, Moon } from "lucide-react";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(true);
  const previousScrollPosition = useRef(0);

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition === 0) {
        // At the top of the page
        setIsScrolled(true);
      } else if (currentScrollPosition > previousScrollPosition.current) {
        // Scrolling down
        setIsScrolled(false);
      } else {
        // Scrolling up
        setIsScrolled(true);
      }

      previousScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-center gap-4 p-4 transition-opacity duration-300 bg-(--nav-bg) ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="fixed right-0 bottom-0 cursor-pointer p-2 rounded-full transition-colors duration-200"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-2 w-2 fill-inherit" />
        ) : (
          <Moon className="h-2 w-2 fill-inherit" />
        )}
      </button>
      <button
        className="cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        Home
      </button>
      <button
        className="cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        About
      </button>
      <button
        className="cursor-pointer"
        onClick={() => scrollToSection("skills")}
      >
        Skills
      </button>
      <button
        className="cursor-pointer"
        onClick={() => scrollToSection("contacts")}
      >
        Contacts
      </button>
    </nav>
  );
}

export default Navigation;
