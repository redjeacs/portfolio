import { useTranslation } from "react-i18next";
import ProjectCard, { ProjectCopy } from "./ProjectCard";
import { projectsConfig } from "../../configs/projects";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold"
    >
      {projectsConfig.map((project) => (
        <ProjectCard
          key={project.id}
          config={project}
          copy={
            t(project.translationKey, { returnObjects: true }) as ProjectCopy
          }
        />
      ))}
    </div>
  );
}
