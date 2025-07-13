import React from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";
import { projects } from "@/data";

const PortfolioPage = () => {

  return (
    <div className="min-h-screen py-10 font-poppins">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-sm text-gray-600 ">A collection of projects I&apos;ve worked on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
              <div className="relative overflow-hidden">
                <Image src={project.image} alt={project.title} width={500} height={400} quality={100} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">{project.date}</div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-xs leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-xs font-medium">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium">
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
