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
      achievements: ["Currently in 1st semester", "Studying business processes and information systems", "Developing interest in digital product development and technology implementation in business"],
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
      duration: "2021 - 2024",
      achievements: ["Graduated from TKJ (Teknik Komputer dan Jaringan)", "Learned basic networking, hardware, and troubleshooting", "Completed internship in IT support and administration"],
    },
  ];

  export { personalInfo, experiences, education };