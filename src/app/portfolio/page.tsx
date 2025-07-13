import React from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing capabilities.",
      image: "/img/klinik-smartphone-project.png",
      techStack: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Tailwind", icon: "🎨" },
      ],
      githubUrl: "https://github.com/username/ecommerce-dashboard",
      demoUrl: "https://ecommerce-dashboard-demo.com",
      date: "2024",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
      image: "/img/enigma-laundry-project.png",
      techStack: [
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "Prisma", icon: "🔺" },
        { name: "MongoDB", icon: "🍃" },
      ],
      githubUrl: "https://github.com/username/task-manager",
      demoUrl: null,
      date: "2024",
    },
    {
      id: 3,
      title: "Weather Analytics Platform",
      description: "Real-time weather monitoring platform with interactive charts, forecasting capabilities, and location-based weather alerts.",
      image: "/img/saldaq-project.png",
      techStack: [
        { name: "Vue.js", icon: "💚" },
        { name: "Python", icon: "🐍" },
        { name: "FastAPI", icon: "⚡" },
        { name: "Redis", icon: "🔴" },
      ],
      githubUrl: null,
      demoUrl: "https://weather-analytics-demo.com",
      date: "2023",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Advanced analytics dashboard for social media performance tracking with sentiment analysis and engagement metrics.",
      image: "/img/task-management-project.png",
      techStack: [
        { name: "React", icon: "⚛️" },
        { name: "D3.js", icon: "📊" },
        { name: "Express", icon: "🚀" },
        { name: "MySQL", icon: "🐬" },
      ],
      githubUrl: "https://github.com/username/social-analytics",
      demoUrl: "https://social-analytics-demo.com",
      date: "2023",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h1>
          <p className="text-lg text-gray-600">A collection of projects I've worked on</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image src={project.image} alt={project.title} width={500} height={400} quality={100} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">{project.date}</div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                        <span className="text-xs">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600">Your portfolio projects will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
