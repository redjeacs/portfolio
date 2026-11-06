interface SkillsList {
  id: string;
  skills: Skill[];
}

interface Skill {
  id: string;
  icon: string;
}

export const SkillsConfig: SkillsList[] = [
  {
    id: "Frontend",
    skills: [
      { id: "HTML5", icon: "html5" },
      { id: "CSS3", icon: "css3" },
      { id: "JavaScript", icon: "javascript" },
      { id: "TypeScript", icon: "typescript" },
      { id: "React", icon: "react" },
      { id: "Next.js", icon: "nextjs" },
      { id: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "Backend & Database",
    skills: [
      { id: "Node.js", icon: "nodejs" },
      { id: "Express", icon: "express" },
      { id: "Python", icon: "python" },
      { id: "Socket.io", icon: "socketio" },
      { id: "Prisma ORM", icon: "prisma" },
      { id: "PostgreSQL", icon: "postgresql" },
      { id: "Jest", icon: "jest" },
    ],
  },
  {
    id: "AI Engineering & Smart Data",
    skills: [
      { id: "RAG (Retrieval-Augmented Generation)", icon: "brain" },
      { id: "Local AI / LM Studio", icon: "laptop-code" },
      { id: "Vector Databases (Pinecone)", icon: "database-search" },
    ],
  },
  {
    id: "Tools & DevOps",
    skills: [
      { id: "Git", icon: "git" },
      { id: "GitHub", icon: "github" },
      { id: "Supabase", icon: "supabase" },
      { id: "Vercel", icon: "vercel" },
    ],
  },
];
