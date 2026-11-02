export interface ProjectConfig {
  id: string;
  translationKey: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projectsConfig: ProjectConfig[] = [
  {
    id: "watchlist",
    translationKey: "projects.watchlist",
    image: "",
    tags: ["Next.js", "TypeScript", "Python", "RAG", "Pinecone", "Tailwind"],
    github: "https://github.com/redjeacs/watchlist",
    demo: "https://watchlist-beta-five.vercel.app/",
  },
  {
    id: "social app",
    translationKey: "projects.social app",
    image: "",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Express",
      "Tailwind",
    ],
    github: "https://github.com/redjeacs/social-app",
    demo: "https://watchlist-beta-five.vercel.app/",
  },
];
