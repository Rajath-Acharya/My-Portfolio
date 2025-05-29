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

export const workExperience = [
  {
    role: "Software Engineer",
    organization: "Tech SMC Squared (carparts.com)",
    duration: "June 2023 – Present",
    platform: "E-Commerce",
    points: [
      "Built a scalable micro-frontend architecture using Next.js and Module Federation, integrating Bloomreach CMS to power personalised content delivery while improving team velocity",
      "Migrated analytics from GA3 to GA4 + Firebase, enhancing tracking and user behaviour insights",
      "Implemented transactional and marketing push notifications using Blueshift in a Flutter WebView application",
      "Optimized Web Core Vitals (LCP, INP, CLS), improving page performance and SEO rankings, with metrics monitored through BlueTriangle",
      "Implemented Google OAuth authentication, streamlining the login process and directly increasing purchase conversions",
      "Built an AI chatbot interface with NLP integration, enabling real-time conversational user experiences",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Upskillist",
    duration: "Dec 2020 – June 2023",
    platform: "Ed-Tech",
    points: [
      "Built scalable B2B/B2C platforms with React, TypeScript, Gatsby, Node, and Express",
      "Integrated SCORM Cloud and Google APIs to enhance LMS and contact management",
      "Created interactive data visualizations using Chart.js",
      "Developed a custom admin tool to streamline support workflows",
      "Enhanced course discovery by implementing Algolia-powered search with text/voice input",
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
