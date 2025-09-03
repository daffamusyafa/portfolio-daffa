const personalInfo = {
    name: "Daffa Musyafa Maulana",
    title: "Devops Engineer",
    location: "Bandung, Indonesia",
    bio: "A seasoned DevOps Engineer with extensive knowledge in building CI/CD pipelines with Jenkins and Docker.  He is skilled in monitoring systems that use Grafana and Prometheus to visualize metrics in real time.  He is very skilled in Kubernetes orchestration and Docker containerization technologies.  He has managed infrastructure on many cloud platforms, including AWS, Alibaba Cloud, BiznetGio, and GCP.  He specializes in implementing infrastructure as code using Terraform and Ansible to automate infrastructure management.  In order to include security principles throughout the whole development and operational lifecycle, he wants to gain competence in DevSecOps and Cyber Security.",
  };

  const experiences = [
    {
      id: 1,
      title: "Devops Engineer",
      company: "Bandshare",
      location: "Bandung, Indonesia",
      duration: "May 2025 - Present",
      description: "Responsible for deployment, monitoring, infrastructure automation, and network management for modern web and mobile applications.",
      achievements: [
            "Deploy applications using Docker and Kubernetes for a scalable and reliable environment.",
            "Set up CI/CD pipelines using Jenkins for build and deployment automation.",
            "Monitoring application performance and health using Grafana and Prometheus.",
            "Managing MySQL and PostgreSQL database integrations to support production applications.",
            "Building and managing OpenVPN for secure network access and remote management.",
            "Supporting the development team end-to-end, including server setup, deployment, workflow optimization, and security standards."
      ],
      projects: [
        {
          name: "Bandshare",
          description:
            "The Bandshare app is an innovative platform that connects Partners (internet providers) with Users (internet recipients). Its main concept is to create a mutually beneficial internet sharing ecosystem.",
          image: "/img/bandshare.jpg",
          tech: ["Postgresql", "Nextjs", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js", "Hono", "Shadcn", "Docker"],
        },
       ],
      },
     ];

  const education = [
    {
      id: 1,
      degree: "Master of Electrical Engineering",
      school: "Telkom University",
      location: "Bandung, Indonesia",
      duration: "August 2023 - August 2025",
    },
    {
      id: 2,
      degree: "Bachelor of Electrical Engineering",
      school: "Telkom University",
      location: "Bandung, Indonesia",
      duration: "August 2019 - August 2023",
    },
    {
      id: 3,
      degree: "Devops Engineer Bootcamp",
      school: "PT. Dumbways Indonesia Teknologi",
      duration: "November 2024 - February 2025",
      achievements: ["Learned the concept of DevOps and server management with version control system.", "Implemented cloud computing on various platforms (Google Cloud Platform, BiznetGio, Alibaba Cloud, AWS).", "Built CI/CD pipeline using Jenkins to automate application deployment.", "Implemented containerization and orchestration using Docker and Kubernetes, including deploying Dumbflix, WaysHub and DumbMerch applications.", "Implemented Infrastructure as Code using Ansible and Terraform for efficient infrastructure management.", "Set up server monitoring system with Prometheus, Grafana, and Node-exporter for application performance monitoring."],
    },
    {
      id: 4,
      degree: "Data Analyst Bootcamp",
      school: "PT. Kuncie Pintar Nusantara",
      duration: "January 2023 - July 2023",
      achievements: ["Applied Python programming for data manipulation, statistical analysis, and data visualization.", "Mastered the basics of SQL for querying, retrieving, and processing data from complex databases.", " Created informative data visualizations using Tableau.", "Performed data analysis using k-means clustering algorithm on more than 200 data points.", "Worked on a final project combining two Excel files with 30,000 data each.", "Presented data analysis results clearly and effectively to stakeholders."],
    },
  ];

  export { personalInfo, experiences, education };
