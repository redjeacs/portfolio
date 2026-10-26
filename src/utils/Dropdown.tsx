import { useState, useEffect, ReactNode, MouseEvent } from "react";
import { useTranslation } from "react-i18next";

interface DropdownProps {
  children: ReactNode;
  label?: string;
}

export const Dropdown = ({
  children,
  label = "Select Language",
}: DropdownProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(i18n.language);

  useEffect(() => {
    setSelectedLocale(i18n.language);
  }, [i18n.language]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleMenuClick = (e: MouseEvent<HTMLUListElement>): void => {
    const clickedItem = (e.target as HTMLElement).closest("li");
    setIsOpen(false);

    if (clickedItem) {
      const locale = clickedItem.getAttribute("data-locale");
      if (locale) {
        i18n.changeLanguage(locale);
        setSelectedLocale(locale);
      }
    }
  };

  return (
    <div className="relative inline-block font-sans">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between rounded-sm border px-1 text-[12px] font-medium shadow-sm transition-all focus:outline-none focus:ring-2"
      >
        <span className="font-semibold uppercase tracking-wider">
          {selectedLocale || label}
        </span>
        <svg
          className={`h-2 w-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          onClick={handleMenuClick}
          className="absolute flex flex-col z-15 left-0 w-max max-h-60 rounded-lg border p-1 ring ring-opacity-5 bottom-full mb-1.5 md:bottom-auto md:top-full md:mb-0 md:mt-1.5"
        >
          {children}
        </ul>
      )}
    </div>
  );
};
