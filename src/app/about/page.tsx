import React from "react";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import SkillSection from "@/components/SkillSection";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";
import { education, experiences, personalInfo } from "@/data/about";

const AboutPage = () => {

  return (
    <div className="min-h-screen font-poppins py-6">
      <div className="mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-blue-600 font-medium mb-4">{personalInfo.title}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {personalInfo.location}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{personalInfo.bio}</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="text-blue-600" size={24} />
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index !== experiences.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Briefcase className="text-blue-600" size={20} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Projects:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.projects.map((project, i) => (
                          <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden">
                            <Image width={600} height={500} src={project.image} alt={project.name} className="object-contain" />
                            <div className="p-4">
                              <h5 className="font-medium text-gray-900 mb-2">{project.name}</h5>
                              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, j) => (
                                  <TechBadge key={j} tech={tech} />
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={24} />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-blue-200 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.school}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {edu.location}
                  </span>
                </div>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <SkillSection />
      </div>
    </div>
  );
};

export default AboutPage;
