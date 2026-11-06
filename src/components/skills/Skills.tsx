import { useTranslation } from "react-i18next"; // Or your specific translation package
import { SkillsConfig } from "../../configs/skills"; // Adjust path to your config file
import { SkillsCategory } from "./SkillsCategory";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white border-b pb-2 border-neutral-200 dark:border-neutral-700">
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SkillsConfig.map((category) => (
          <SkillsCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
