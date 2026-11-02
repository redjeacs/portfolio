import { useTranslation } from "react-i18next";
import ProjectCard, { ProjectCopy } from "./ProjectCard";
import { ProjectConfig, projectsConfig } from "../../configs/projects";

export default function Projects() {
  const { t } = useTranslation();
  const testProject = {
    title: "Watchlist",
    description:
      "A real-time stock chart and financial stats watchlist with ai rag analysis",
    tags: ["TypeScript", "React", "Python", "NextJS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  };
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
