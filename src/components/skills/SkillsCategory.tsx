import React from "react";
import { SkillsList } from "../../configs/skills"; // Adjust path to your config file
import { SkillBadge } from "./SkillBadge";
import { useTranslation } from "react-i18next";

interface SkillsCategoryProps {
  category: SkillsList;
}

export const SkillsCategory: React.FC<SkillsCategoryProps> = ({ category }) => {
  const { t } = useTranslation();

  return (
    <div className="p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
        {t(`skills.categories.${category.translationKey}`)}
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
