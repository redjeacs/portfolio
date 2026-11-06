import { useTranslation } from "react-i18next"; // Or your specific translation package
import { SkillsConfig } from "../configs/skills"; // Adjust path to your config file

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 dark:text-white border-b pb-2 border-neutral-200 dark:border-neutral-700">
        {t("skills.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SkillsConfig.map((category) => (
          <div
            key={category.id}
            className="p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
              {category.id}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg border border-neutral-200 dark:border-neutral-600 transition-all hover:scale-[1.02] hover:shadow-sm"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm font-medium">{skill.id}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
