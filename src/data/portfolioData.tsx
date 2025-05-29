import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaFigma,
} from "react-icons/fa"; // Example icons
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiDart,
  SiGo,
  SiNextdotjs,
  SiGatsby,
  SiFlutter,
  SiPostgresql,
  SiShadcnui,
  SiRadixui,
} from "react-icons/si"; // More specific tech icons

export const personalInfo = {
  name: "Rajath Acharya",
  title: "Full Stack Developer",
  email: "rajath365@gmail.com",
  phone: "+91 7259120316",
  linkedin: "https://www.linkedin.com/in/rajath-acharya-068194135/",
  github: "https://github.com/Rajath-Acharya/",
  resumeLink: "/RajathCV.pdf", // Make sure your resume is in public/
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web.", // For Hero section
};

export const education = [
  {
    institution: "NMAM Institute of Technology, Nitte",
    degree: "Bachelor of Engineering",
    duration: "Aug 2015 – June 2019",
    score: "CGPA: 8.18/10",
  },
  {
    institution: "Excellent PU College, Moodbidri",
    degree: "Pre University",
    duration: "June 2013 - May 2015",
    score: "92.33%",
  },
  {
    institution: "Jain High School, Moodbidri",
    degree: "SSLC",
    duration: "June 2010 - May 2013",
    score: "87.84%",
  },
];

export const projects = [
  {
    title: "AgriSure",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Improved financial access for over 12,000 farmers boosting microloan approvals by 35% via CIBIL-based lending, integrating AI insights, and Hindi support via Google Translation. Engineered the full-stack system, handling frontend UI, backend API and database management.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/RajathAcharya37/AgriSure", // Replace with actual link
    liveLink: null, // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "BuildBridge",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/RajathAcharya37/BuildBridge", // Replace with actual link
    liveLink: "https://build-bridge-seven.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "FarmConnect",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.",
    date: "Feb 2025 – Present",
    githubLink: "https://github.com/RajathAcharya37/FarmConnect",
    liveLink: "https://farm-connect-iota-psi.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "WealthWise",
    tech: ["React JS", "Node JS", "Firebase", "API Integration"],
    description:
      "Enhanced financial literacy and user engagement by 40% through an interactive fintech platform integrating gamification. Developed an engaging React UI with gamified elements ensuring smooth user interactions.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/RajathAcharya37/WealthWise",
    liveLink: "https://wealthwisefinance.vercel.app/",
    category: "Fintech",
    icon: <SiFirebase size={24} className="text-accent-1" />,
  },
  {
    title: "Blood Shortage Survey and Dashboard",
    tech: ["React.js", "Node.js", "MongoDB"],
    description:
      "Increased efficiency of blood shortage tracking for healthcare organizations by 60% through a real-time analytics dashboard. Built an intuitive React.js dashboard with real-time charts and data visualizations.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/RajathAcharya37/BloodLink", // Replace with actual link
    liveLink: null,
    category: "Healthcare",
    icon: <FaDatabase size={24} className="text-accent-1" />,
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Go", icon: <SiGo /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Next JS", icon: <SiNextdotjs /> },
    { name: "Gatsby JS", icon: <SiGatsby /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Shadcn UI", icon: <SiShadcnui /> },
    { name: "Radix UI", icon: <SiRadixui /> },
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
    { name: "Blue Triangle", icon: <FaCode /> }, // Placeholder icon
    { name: "New Relic", icon: <FaCode /> }, // Placeholder icon
    { name: "Blueshift", icon: <FaCode /> }, // Placeholder icon
    { name: "Storybook", icon: <FaCode /> }, // Placeholder icon
    { name: "Fullstory", icon: <FaCode /> }, // Placeholder icon
    { name: "Cypress", icon: <FaCode /> }, // Placeholder icon
    { name: "Bloomreach CMS", icon: <FaCode /> }, // Placeholder icon
    { name: "Lamda Test", icon: <FaCode /> }, // Placeholder icon
    { name: "GTM", icon: <FaCode /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Analytical Thinking",
    "Pragmatic Prioritization",
    "Problem Solving",
    "Adaptability",
    "Precision in Code & Communication",
    "Agile Methodologies",
    "Continuous Learning",
  ],
};

export const leadershipAndInvolvement = [
  {
    role: "Junior Partner",
    organization: "The Apex Circle (TAC)",
    duration: "Jan 2025 – Present",
    points: [
      "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
      "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
    ],
  },
  {
    role: "Technical Executive",
    organization: "Computer Society of India, CU Student Branch",
    duration: "Nov 2024 – Present",
    points: [
      "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
      "Coordinated with faculty and industry experts to bring technical opportunities to students.",
    ],
  },
  {
    role: "AMCAT 2nd Rank Holder",
    organization: "Chandigarh University",
    duration: "Sept 2024",
    points: [
      "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
