import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaAws,
  FaCubes,
  FaChartLine,
  FaTicketAlt,
} from "react-icons/fa"; // Example icons
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiDart,
  SiNextdotjs,
  SiGatsby,
  SiFlutter,
  SiPostgresql,
  SiShadcnui,
  SiRadixui,
  SiGraphql,
  SiDocker,
  SiAmazondynamodb,
  SiClaude,
  SiGoogleanalytics,
  SiNewrelic,
  SiGit,
  SiCypress,
  SiJira,
  SiCloudinary,
  SiStorybook,
} from "react-icons/si"; // More specific tech icons

export const personalInfo = {
  name: "Rajath Acharya",
  title: "Full Stack Developer",
  email: "rajath365@gmail.com",
  phone: "+91 7259120316",
  linkedin: "https://www.linkedin.com/in/rajath-acharya-068194135/",
  github: "https://github.com/Rajath-Acharya/",
  resumeLink: "/RajathCV.pdf", // Make sure your resume is in public/
  bio: "Software Engineer with 5.8+ years of experience delivering scalable, user-focused web products. I build end-to-end experiences with modern frontend technologies, backend services, and AWS-powered development, with a focus on speed and reliability.",
  shortBio: "I build scalable web experiences.",
};

export const education = [
  {
    institution: "NMAM Institute of Technology, Nitte",
    degree: "Bachelor of Engineering",
    duration: "Jun 2015 – Jun 2019",
    score: "CGPA: 8.2/10",
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

export const certifications = [
  "Claude Code – The Complete Guide",
  "Microservices with Node JS and React",
  "Complete Intro to Linux and the Command-Line",
  "Fundamentals of Networking Engineering",
];

export const awards = [
  "2× Quarterly GRIT Award",
  "2× Quarterly SPOT Award",
  "1× Monthly SPOT Award",
];

export const skills = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "C++", icon: <SiCplusplus /> },
  ],
  frontend: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Next JS", icon: <SiNextdotjs /> },
    { name: "Gatsby JS", icon: <SiGatsby /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Shadcn UI", icon: <SiShadcnui /> },
    { name: "Radix UI", icon: <SiRadixui /> },
    { name: "Storybook", icon: <SiStorybook /> },
    { name: "Micro-frontends", icon: <FaCubes /> },
  ],
  backendAndCloud: [
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Microservices", icon: <FaCubes /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "DynamoDB", icon: <SiAmazondynamodb /> },
  ],
  toolsAndPlatforms: [
    { name: "Claude Code", icon: <SiClaude /> },
    { name: "Bloomreach", icon: <FaCode /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics /> },
    { name: "BlueTriangle", icon: <FaChartLine /> },
    { name: "New Relic", icon: <SiNewrelic /> },
    { name: "Git & GitHub", icon: <SiGit /> },
    { name: "Cypress", icon: <SiCypress /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
    { name: "Voucherify", icon: <FaTicketAlt /> },
  ],
  coreCompetencies: [
    "Scalable System Design",
    "Performance Optimization",
    "User-Centric Development",
    "Problem Solving",
    "Cross-Functional Collaboration",
    "Agile Delivery",
    "Continuous Learning",
  ],
};

export const selectedWork = [
  {
    title: "E-commerce platform modernization",
    description:
      "Helped evolve a high-traffic e-commerce experience with a scalable micro-frontend architecture, personalized CMS content, and stronger Core Web Vitals to improve conversion, performance, and long-term maintainability across a growing storefront.",
    highlights: [
      "Next.js",
      "Tailwind",
      "Module Federation",
      "Bloomreach",
      "Core Web Vitals",
    ],
  },
  {
    title: "Mobile engagement with push notifications",
    description:
      "Implemented transactional and marketing push notifications in a Flutter WebView application to improve customer engagement, retention, and lifecycle messaging across the mobile shopping journey with measurable impact on repeat purchases.",
    highlights: ["Flutter", "Firebase", "Blueshift", "XCode", "Android Studio"],
  },
  {
    title: "Loyalty points and rewards program",
    description:
      "Built a Voucherify-powered loyalty program with automated reward emails using AWS Lambda and SQS to deliver points-based customer retention flows, seamless incentives, and better engagement across marketing and purchase moments.",
    highlights: [
      "Next.js",
      "Node.js",
      "AWS Lambda",
      "SQS",
      "Voucherify",
      "Blueshift",
    ],
  },
];

export const workExperience = [
  {
    role: "Software Engineer",
    organization: "Tech SMC Squared (carparts.com)",
    duration: "June 2023 – Present",
    platform: "E-Commerce",
    points: [
      "Contributed to a scalable micro-frontend architecture with Next.js and Module Federation, integrating Bloomreach CMS for personalized content delivery.",
      "Built the mobile engagement foundation behind an app that reached 1.2M downloads and grew app purchase-revenue share about 10× year over year to more than 10% of total purchases in 2025.",
      "Drove Core Web Vitals optimization to Good CrUX ratings for loading and visual stability on the site’s highest-traffic pages, monitored continuously through BlueTriangle.",
      "Delivered Google and Facebook OAuth authentication; the Google SSO segment generates 7.6× higher revenue per user than non-SSO logged-in users.",
      "Implemented transactional and marketing push notifications using Blueshift in a Flutter WebView application.",
      "Built a chatbot interface integrating an NLP-powered API for real-time conversational support.",
      "Built a Voucherify-powered loyalty program with automated reward emails through an AWS Lambda and SQS pipeline integrated with Blueshift.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Upskillist",
    duration: "Dec 2020 – June 2023",
    platform: "Ed-Tech",
    points: [
      "Built an admin-only video upload feature with AWS S3, enabling B2B client administrators to create custom course content for their teams.",
      "Created interactive Chart.js visualizations that gave stakeholders clearer visibility into platform usage and performance trends.",
      "Developed a custom admin dashboard that reduced manual effort for the support team.",
      "Implemented secure login and sign-up flows with AWS Cognito.",
      "Built a real-time Firebase leaderboard to boost engagement through gamification.",
      "Added certificate downloads by converting HTML templates into shareable PDF records.",
    ],
  },
];

export const socialLinks = {
  linkedin: {
    url: personalInfo.linkedin,
    label: "LinkedIn profile",
    icon: <FaLinkedin size={24} />,
  },
  github: {
    url: personalInfo.github,
    label: "GitHub profile",
    icon: <FaGithub size={24} />,
  },
  email: {
    url: `mailto:${personalInfo.email}`,
    label: "Email Rajath",
    icon: <FaEnvelope size={24} />,
  },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
