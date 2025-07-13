import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiPython,
  SiGo,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAppwrite,
  SiHono,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon:  React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;
  color: string; 
};

export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#3c873a" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Hono", icon: SiHono, color: "#f3681c" },
    { name: "PHP", icon: SiPhp, color: "#8892be" },
    { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "Golang", icon: SiGo, color: "#00add8" },
  ],
  database: [
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Appwrite", icon: SiAppwrite, color: "#f02e65" },
  ],
  devops: [
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
  ],
};
