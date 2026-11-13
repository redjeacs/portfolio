import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SkillsList } from "../../configs/skills";
import { SkillBadge } from "./SkillBadge";
import { useTranslation } from "react-i18next";

interface SkillsCategoryProps {
  category: SkillsList;
}

export const SkillsCategory: React.FC<SkillsCategoryProps> = ({ category }) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const badges =
      containerRef.current.querySelectorAll<HTMLElement>("[data-skill-badge]");
    const repelRadius = 130;
    const maxPush = 12;

    badges.forEach((badge) => {
      const rect = badge.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < repelRadius) {
        const force = (repelRadius - distance) / repelRadius;
        const angle = Math.atan2(deltaY, deltaX);

        const moveX = -Math.cos(angle) * force * maxPush;
        const moveY = -Math.sin(angle) * force * maxPush;

        const rotateY = -Math.cos(angle) * force * 18;
        const rotateX = Math.sin(angle) * force * 18;

        gsap.to(badge, {
          x: moveX,
          y: moveY,
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 600,
          duration: 0.15,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(badge, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.15,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });
  });

  const handleMouseLeave = contextSafe(() => {
    if (!containerRef.current) return;
    const badges =
      containerRef.current.querySelectorAll<HTMLElement>("[data-skill-badge]");

    gsap.to(badges, {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      duration: 0.15,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto",
    });
  });

  return (
    <div className="flex flex-col">
      <h3 className="text-sm md:text-lg font-semibold">
        {t(`skills.categories.${category.translationKey}`)}
      </h3>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "800px" }}
        className="p-2 lg:p-5 max-w-[700px] rounded-xl border shadow-sm"
      >
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
