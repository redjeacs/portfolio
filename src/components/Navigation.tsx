import { useState, useEffect, useRef } from "react";
import useThemeStore from "../contexts/useThemeStore";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "../utils/Dropdown";

function Navigation() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(true);
  const previousScrollPosition = useRef(0);

  const changeLanguage = (lng: string) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lng);
    } else {
      console.error("i18n instance is not fully loaded yet.");
    }
  };

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    // Interactive Navbar Tracking
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition === 0) {
        setIsScrolled(true);
      } else if (currentScrollPosition > previousScrollPosition.current) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }

      previousScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Toggle Page Anchors
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-center gap-4 p-4 transition-transform duration-300 bg-(--nav-bg) ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="cursor-pointer text-xs sm:text-base whitespace-nowrap min-w-0 tracking-wide"
          onClick={() => scrollToSection("hero")}
        >
          {t("nav.home")}
        </button>
        <button
          className="cursor-pointer text-xs sm:text-base whitespace-nowrap min-w-0 tracking-wide"
          onClick={() => scrollToSection("about")}
        >
          {t("nav.about")}
        </button>
        <button
          className="cursor-pointer text-xs sm:text-base whitespace-nowrap min-w-0 tracking-wide"
          onClick={() => scrollToSection("skills")}
        >
          {t("nav.skills")}
        </button>
        <button
          className="cursor-pointer text-xs sm:text-base whitespace-nowrap min-w-0 tracking-wide"
          onClick={() => scrollToSection("contacts")}
        >
          {t("nav.contacts")}
        </button>
      </nav>
      <div
        id="corner-utils"
        className={`fixed bottom-0 right-0 sm:top-0 sm:bottom-auto flex items-center transition-transform duration-300 
          ${isScrolled ? "translate-y-0" : "translate-y-full md:-translate-y-full"}`}
      >
        {/* Language Picker */}
        <Dropdown isScrolled={isScrolled}>
          <button
            className="cursor-pointer text-[14px]"
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className="cursor-pointer text-[14px]"
            onClick={() => changeLanguage("zh-TW")}
          >
            繁體中文
          </button>
        </Dropdown>
        {/* Theme Button */}
        <button
          className="cursor-pointer p-2 rounded-full transition-colors duration-200"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-2 w-2 fill-inherit" />
          ) : (
            <Moon className="h-2 w-2 fill-inherit" />
          )}
        </button>
      </div>
    </>
  );
}

export default Navigation;
