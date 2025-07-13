import React from "react";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import SkillSection from "@/components/SkillSection";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";

const AboutPage = () => {
  const personalInfo = {
    name: "Nur Arini",
    title: "Full Stack Developer",
    location: "Bandung, Indonesia",
    bio: "Passionate full stack developer with 1+ years of experience building scalable web applications. I love creating efficient, user-friendly solutions that solve real-world problems. Always eager to learn new technologies and contribute to innovative projects.",
  };

  const experiences = [
    {
      id: 1,
      title: "FullStack Developer",
      company: "Skye Digipreuneur School",
      location: "Bandung, Indonesia",
      duration: "Desc 2024 - Present",
      description: "Worked independently as a fullstack and mobile developer to build modern web and mobile applications using React, Next.js, Node.js, and Docker.",
      achievements: [
        "Developed fullstack applications with RESTful APIs, authentication, and database integration (MongoDB, AppWrite)",
        "Built cross-platform mobile apps using React Native with clean UI and smooth navigation",
        "Deployed web and backend services using Docker for consistent and scalable environments",
        "Handled end-to-end development: UI, backend logic, API, database, and deployment",
        "Implemented reusable components and clean code structure using TypeScript and best practices",
      ],
      projects: [
        {
          name: "Kurirlink",
          description:
            "A web-based dashboard for shipping agents to manage package delivery operations. Includes features like transaction management, membership system for agents, shipment creation, and admin dashboard for managing agents and users.",
          image: "/img/kurirlink.jpg",
          tech: ["Nextjs", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js", "Hono", "Shadcn", "Docker"],
        },
        {
          name: "Juragan Paket",
          description:
            "A web-based dashboard for managing shipping operations and package transactions. Designed for internal use by agents to handle deliveries efficiently with features like label printing, transaction tracking, and role-based access.",
          image: "/img/juraganpaket.jpg",
          tech: ["Nextjs", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js", "Hono", "Shadcn", "Docker"],
        },
        {
          name: "Whatsapp Bot Seller",
          description:
            "A dashboard for sellers integrated with a custom WhatsApp bot, allowing them to register, verify their identity, and track transaction history made through the bot. Built to support small businesses automate their order processing.",
          image: "/img/botseller.jpg",
          tech: ["Nextjs", "TypeScript", "Tailwind CSS", "Shadcn", "Docker"],
        },
        {
          name: "Pakeetid",
          description:
            "A public-facing landing page for individuals who want to send packages without needing to log in. Designed for ease of use, the site offers accessible information about shipping services, courier comparison, and delivery estimates.",
          image: "/img/pakeetid.jpg",
          tech: ["Nextjs", "TypeScript", "Tailwind CSS", "Appwrite", "Shadcn", "Docker"],
        },
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science (On going)",
      school: "Universitas Terbuka",
      location: "Bandung, Indonesia",
      duration: "Apr 2025 - Sekarang",
      achievements: ["Currently in 1st semester", "Actively learning front-end development and web technologies", "Interested in UI/UX and personal finance apps"],
    },
    {
      id: 3,
      degree: "React.js Bootcamp",
      school: "Enigma Camp",
      location: "Jakarta, Indonesia",
      duration: "Agustus 2024",
      achievements: ["Completed intensive front-end bootcamp program", "Built multiple projects using React.js and modern JavaScript", "Learned component architecture, state management, and responsive UI"],
    },
    {
      id: 4,
      degree: "Vocational High School Diploma – Computer and Network Engineering",
      school: "SMK Negeri 1 Majalaya",
      location: "Bandung, Indonesia",
      duration: "2020 - 2023",
      achievements: ["Graduated from TKJ (Teknik Komputer dan Jaringan)", "Learned basic networking, hardware, and troubleshooting", "Completed internship in IT support and administration"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins py-4">
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
