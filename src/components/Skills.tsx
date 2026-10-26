import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <div id="skills" className="p-8">
      <h2 className="text-3xl font-bold mb-4">{t("skills.title")}</h2>
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
      </ul>
    </div>
  );
}

export default Skills;
