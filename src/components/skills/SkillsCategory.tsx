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
    <div className="flex flex-col">
      <h3 className="text-sm md:text-lg font-semibold">
        {t(`skills.categories.${category.translationKey}`)}
      </h3>
      <div className="p-2 lg:p-5 max-w-[700px] rounded-xl border shadow-sm">
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
