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
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiKubernetes,
  SiGooglecloud,
  SiAlibabacloud,
  SiAnsible,
  SiTerraform,
  SiMysql,
  SiNginx,
  SiCloudflare,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon:  React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;
  color: string;
  image?: string;
};

export const skills: Record<string, Skill[]> = {
  'Infrastructure Provisioning and Configuration Management': [
    { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
    { name: "Terraform", icon: SiTerraform, color: "#6257E4" },
  ],
  'Cloud Infrastructure & Automation': [
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Alibaba Cloud", icon: SiAlibabacloud, color: "#FF6A00" },
  ],
  'Continuous Integration & Continuous Deployment (CI/CD)': [
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" }, // Contoh data
    { name: "GitLab CI/CD", icon: SiGitlab, color: "#FCA121" },
  ],
  'Containerization & Orchestration': [
    { name: "Docker", icon: SiDocker, color: "#2496ed" }, // <-- Ditambahkan di sini
    { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
  ],
  'Monitoring': [
  { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
  { name: "Grafana", icon: SiGrafana, color: "#F05A28" },
  ],  
  'Database': [
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  ],
  'Webserver and Networking': [
    { name: "Nginx", icon: SiNginx, color: "#009639" }, // <-- Ditambahkan
    { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" }, // <-- Ditambahkan
  ],
};
