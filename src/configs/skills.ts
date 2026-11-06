import { ComponentType } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSocketdotio,
  SiPrisma,
  SiPostgresql,
  SiJest,
  SiGit,
  SiGithub,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import { Brain, LaptopIcon, DatabaseZap } from "lucide-react";

export interface SkillsList {
  id: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  icon: ComponentType<{ className?: string }>;
}

export const SkillsConfig: SkillsList[] = [
  {
    id: "Frontend",
    skills: [
      { id: "HTML", icon: SiHtml5 },
      { id: "CSS", icon: SiCss },
      { id: "JavaScript", icon: SiJavascript },
      { id: "TypeScript", icon: SiTypescript },
      { id: "React", icon: SiReact },
      { id: "Next.js", icon: SiNextdotjs },
      { id: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "Backend & Database",
    skills: [
      { id: "Node.js", icon: SiNodedotjs },
      { id: "Express", icon: SiExpress },
      { id: "Python", icon: SiPython },
      { id: "Socket.io", icon: SiSocketdotio },
      { id: "Prisma ORM", icon: SiPrisma },
      { id: "PostgreSQL", icon: SiPostgresql },
      { id: "Jest", icon: SiJest },
    ],
  },
  {
    id: "AI Engineering & Smart Data",
    skills: [
      { id: "RAG (Retrieval-Augmented Generation)", icon: Brain },
      { id: "Local AI / LM Studio", icon: LaptopIcon },
      { id: "Vector Databases (Pinecone)", icon: DatabaseZap },
    ],
  },
  {
    id: "Tools & DevOps",
    skills: [
      { id: "Git", icon: SiGit },
      { id: "GitHub", icon: SiGithub },
      { id: "Supabase", icon: SiSupabase },
      { id: "Vercel", icon: SiVercel },
    ],
  },
];
