import React from "react";
import { Skill } from "../../configs/skills"; // Adjust path to your config file

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const IconComponent = skill.icon;

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg border border-neutral-200 dark:border-neutral-600 transition-all hover:scale-[1.02] hover:shadow-sm w-fit max-w-full">
      <IconComponent className="w-4 h-4 xl:w-5 xl:h-5 text-neutral-600 dark:text-neutral-400 shrink-0" />
      <span className="text-[18px] xl:text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate">
        {skill.id}
      </span>
    </div>
  );
};
