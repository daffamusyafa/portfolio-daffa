import React from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";
import { projects } from "@/data";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen py-6 sm:py-10 font-poppins px-4 sm:px-8 bg-white dark:bg-gray-900">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center dark:text-gray-100">Portfolio</h1>
          <p className="text-sm sm:text-md text-gray-600 text-center dark:text-gray-300">A collection of projects I&apos;ve worked on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-gray-900/20 hover:shadow-lg dark:hover:shadow-gray-900/40 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <Image src={project.image} alt={project.title} width={500} height={400} quality={100} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200">{project.date}</div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-xs font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-xs font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Calendar size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No projects yet</h3>
            <p className="text-gray-600 dark:text-gray-300">Your portfolio projects will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
