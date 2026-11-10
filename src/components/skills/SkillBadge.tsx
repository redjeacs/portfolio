import React from "react";
import { Skill } from "../../configs/skills"; // Adjust path to your config file

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const IconComponent = skill.icon;

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border transition-all hover:scale-[1.02] hover:shadow-sm w-fit max-w-full">
      <IconComponent className="w-4 h-4 xl:w-5 xl:h-5 shrink-0" />
      <span className="text-[18px] xl:text-sm font-medium truncate">
        {skill.id}
      </span>
    </div>
  );
};
