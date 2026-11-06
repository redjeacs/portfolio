import React from "react";
import { Skill } from "../../configs/skills"; // Adjust path to your config file

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const IconComponent = skill.icon;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg border border-neutral-200 dark:border-neutral-600 transition-all hover:scale-[1.02] hover:shadow-sm">
      <IconComponent className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {skill.id}
      </span>
    </div>
  );
};
