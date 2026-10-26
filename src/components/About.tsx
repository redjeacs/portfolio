import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="p-8 flex flex-col">
      <h2 className="text-xl font-bold mb-4">{t("about.title")}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default About;
