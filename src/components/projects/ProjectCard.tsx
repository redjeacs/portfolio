import { useTranslation } from "react-i18next";
import React from "react";

// Define the shape of the project object using an interface
export interface ProjectCopy {
  title: string;
  description: string;
}

interface ProjectCardProps {
  config: {
    image: string;
    tags: string[];
    github: string;
    demo: string;
  };
  copy: ProjectCopy; // Passed down from t(..., { returnObjects: true })
}

const ProjectCard: React.FC<ProjectCardProps> = ({ config, copy }) => {
  const { i18n } = useTranslation();

  if (!copy) return null;

  const { title, description } = copy;
  const { image, tags, demo, github } = config;

  const isChinese = i18n.language?.startsWith("zh");

  return (
    <article className="group max-w-sm w-full max-h-screen bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden bg-gray-100">
        <img
          src={image || "https://unsplash.com"}
          alt={`${title} preview`}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col grow">
        <h3
          className={`font-semibold text-gray-900 mb-2 ${isChinese ? "text-lg tracking-normal" : "text-xl tracking-tight"}`}
        >
          {title}
        </h3>

        <p
          className={`text-gray-600 leading-relaxed mb-4 grow ${isChinese ? "text-xs tracking-normal" : "text-sm tracking-tight"}`}
        >
          {description}
        </p>

        {/* Tech Stack Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {config.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-150"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition duration-150"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
