import { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, 
  SiNodedotjs, SiMongodb, SiExpress, SiCloudflare, SiDocker, SiVercel, 
  SiPostgresql, SiKubernetes, SiAnsible, SiTerraform, SiGrafana, 
  SiPrometheus, SiGooglecloud, SiMysql, SiReactquery, SiJenkins, SiGitlab
} from "react-icons/si";

// Tipe untuk props komponen
type TechBadgeProps = {
  tech: string;
};

// Tipe untuk struktur data teknologi
type TechDetails = {
  icon: IconType;
  colorClass: string;
};

// Satu map untuk menyimpan semua informasi (ikon dan warna)
const techMap: Record<string, TechDetails> = {
  // --- Frontend & Backend ---
  React: { icon: SiReact, colorClass: "bg-blue-100 text-blue-800" },
  Nextjs: { icon: SiNextdotjs, colorClass: "bg-black text-white" },
  "Tailwind CSS": { icon: SiTailwindcss, colorClass: "bg-teal-100 text-teal-800" },
  TypeScript: { icon: SiTypescript, colorClass: "bg-blue-200 text-blue-900" },
  JavaScript: { icon: SiJavascript, colorClass: "bg-yellow-100 text-yellow-800" },
  "Node.js": { icon: SiNodedotjs, colorClass: "bg-green-100 text-green-800" },
  Express: { icon: SiExpress, colorClass: "bg-gray-200 text-gray-800" },
  Hono: { icon: SiCloudflare, colorClass: "bg-orange-100 text-orange-800" },

  // --- Database ---
  MongoDB: { icon: SiMongodb, colorClass: "bg-green-200 text-green-900" },
  postgresql: { icon: SiPostgresql, colorClass: "bg-indigo-100 text-indigo-800" },
  MySQL: { icon: SiMysql, colorClass: "bg-cyan-100 text-cyan-800" },
  
  // --- State Management ---
  TanStack: { icon: SiReactquery, colorClass: "bg-pink-100 text-pink-800" },

  // --- DevOps & Infrastructure ---
  Docker: { icon: SiDocker, colorClass: "bg-sky-100 text-sky-800" },
  Kubernetes: { icon: SiKubernetes, colorClass: "bg-blue-200 text-blue-900" },
  Ansible: { icon: SiAnsible, colorClass: "bg-red-100 text-red-800" },
  Terraform: { icon: SiTerraform, colorClass: "bg-purple-100 text-purple-800" },
  GCP: { icon: SiGooglecloud, colorClass: "bg-sky-200 text-sky-900" },
  
  // --- CI/CD Tools ---
  Jenkins: { icon: SiJenkins, colorClass: "bg-gray-200 text-gray-800" },
  "GitLab CI": { icon: SiGitlab, colorClass: "bg-orange-200 text-orange-900" },

  // --- Monitoring ---
  Grafana: { icon: SiGrafana, colorClass: "bg-orange-200 text-orange-900" },
  Prometheus: { icon: SiPrometheus, colorClass: "bg-red-200 text-red-900" },
  
  // --- Lainnya ---
  Shadcn: { icon: SiVercel, colorClass: "bg-neutral-200 text-black" },
};

const TechBadge = ({ tech }: TechBadgeProps) => {
  // Ambil detail teknologi dari map
  const techDetails = techMap[tech];

  // Jika teknologi tidak ditemukan di map, tampilkan badge abu-abu tanpa ikon
  if (!techDetails) {
    return (
      <span className="inline-flex items-center px-3 py-1 text-[10px] font-medium rounded-full bg-gray-200 text-gray-800">
        {tech}
      </span>
    );
  }

  // Jika ditemukan, gunakan ikon dan warnanya
  const { icon: Icon, colorClass } = techDetails;

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[10px] font-medium rounded-full ${colorClass}`}>
      <Icon className="w-4 h-4 mr-1" />
      {tech}
    </span>
  );
};

export default TechBadge;
