import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiNodedotjs, SiMongodb, SiExpress, SiCloudflare, SiDocker, SiVercel } from "react-icons/si";
import { IconType } from "react-icons";

type TechBadgeProps = {
  tech: string;
};

const iconMap: Record<string, IconType> = {
  React: SiReact,
  Nextjs: SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Hono: SiCloudflare,
  Docker: SiDocker,
  Shadcn: SiVercel,
};

const colorMap: Record<string, string> = {
  React: "bg-blue-100 text-blue-800",
  Nextjs: "bg-black text-white",
  "Tailwind CSS": "bg-teal-100 text-teal-800",
  TypeScript: "bg-blue-200 text-blue-900",
  JavaScript: "bg-yellow-100 text-yellow-800",
  "Node.js": "bg-green-100 text-green-800",
  Express: "bg-gray-200 text-gray-800",
  MongoDB: "bg-green-200 text-green-900",
  TanStack: "bg-pink-100 text-pink-800",
  Hono: "bg-orange-100 text-orange-800",
  Docker: "bg-sky-100 text-sky-800",
  Shadcn: "bg-neutral-200 text-black",
};

const TechBadge = ({ tech }: TechBadgeProps) => {
  const Icon = iconMap[tech];
  const colorClass = colorMap[tech] || "bg-gray-100 text-gray-800";

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[10px] font-medium rounded-full ${colorClass}`}>
      {Icon && <Icon className="w-4 h-4 mr-1" />}
      {tech}
    </span>
  );
};

export default TechBadge;
