import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import backend_icon from './backend-icon.png';
import frontend_icon from './frontend-icon.png';
import devops_icon from './devops-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import send_icon_dark from './send-icon-dark.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { LuGraduationCap } from 'react-icons/lu';
import { StaticImageData } from 'next/image';
import React, { JSX } from 'react';

type WorkItem = {
  title: string |StaticImageData;
  description: string;
  bgImage: string;
};

type ServiceItem = {
  icon: string |StaticImageData;
  title: string;
  description: string;
  link: string;
};

type InfoItem = {
  icon: string |StaticImageData;
  iconDark: string |StaticImageData;
  title: string;
  description: string;
};

type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  technologies?: string[];
  responsibilities?: {
    frontend: string[];
    backend: string[];
    devops?: string[];
  };
  icon: JSX.Element;
  date: string;
};

export const assets: Record<string, StaticImageData> = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  backend_icon,
  frontend_icon,
  devops_icon,
  right_arrow,
  send_icon,
  send_icon_dark,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData: WorkItem[] = [
  { title: 'E-Commerce Website', description: 'Fullstack Development', bgImage: '/work-1.png' },
  { title: 'Online Bookstore', description: 'Backend Development', bgImage: '/work-2.png' },
  { title: 'Portfolio Website', description: 'Frontend Development', bgImage: '/work-3.png' },
  { title: 'Management System', description: 'Fullstack Development', bgImage: '/work-4.png' },
];

export const serviceData: ServiceItem[] = [
  {
    icon: assets.web_icon,
    title: 'Fullstack Web Development',
    description: 'Building modern, high-performance web applications using React, Next.js, and Node.js.',
    link: '',
  },
  {
    icon: assets.backend_icon,
    title: 'Backend Development',
    description: 'Developing scalable and secure backend systems with Java (Spring Boot), C# (ASP.NET), and Node.js.',
    link: '',
  },
  {
    icon: assets.frontend_icon,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive UIs with ReactJS, TypeScript, and Tailwind CSS.',
    link: '',
  },
  {
    icon: assets.devops_icon,
    title: 'DevOps & CI/CD',
    description: 'Setting up automated workflows with Docker, GitHub Actions, and cloud deployment.',
    link: '',
  },
];

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Technologies',
    description: 'Java, C#, Node.js, ReactJS, NextJS, JavaScript, TypeScript, Tailwind CSS',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'IT Student at Industrial University',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Developed multiple web applications, including e-commerce and management systems',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    title: 'Fullstack Web Intern',
    location: 'Cyberskill Software Solutions',
    description:
      'Worked on both frontend and backend development for the Student Life - Rental Management project. Designed and implemented UI/UX components, built APIs, and optimized database structures.',
    icon: React.createElement(LuGraduationCap),
    date: 'Sep 2024 - Dec 2024',
    technologies: [
      'Frontend: React.js, Next.js, TypeScript, Tailwind CSS',
      'Backend: Node.js, Express.js, GraphQL, MongoDB',
      'Other: Git, Docker, GitHub Actions',
    ],
    responsibilities: {
      frontend: [
        'Participated in designing and developing the user interface.',
        'Implemented features for rental listing, search, and filtering.',
        'Ensured responsive design across desktop and mobile devices.',
      ],
      backend: [
        'Designed database collections in MongoDB based on business requirements.',
        'Developed RESTful and GraphQL APIs using Node.js & Express.js to handle rental management logic.',
        'Performed testing, debugging, and API performance optimization.',
      ],
    },
  },
  
  {
    title: 'Fullstack Web Developer',
    location: 'Industrial University of Ho Chi Minh City',
    description:
      'Developed a system for managing student activities and attendance at the Faculty of Information Technology. The system supports activity registration, QR Code-based attendance tracking, student participation history statistics, and automated notifications. Additionally, the backend is designed using a microservices architecture to enhance performance and scalability.',
    icon: React.createElement(LuGraduationCap),
    date: 'Oct 2024 - Dec 2024',
    technologies: [
      'Frontend: Next.js, React.js, TypeScript, Tailwind CSS',
      'Backend: Node.js, Express.js, FastAPI',
      'Database: MongoDB, Redis',
      'Messaging Queue: RabbitMQ (if used)',
      'Storage: Cloudinary (for images)',
      'Authentication: JWT',
      'Other: Docker, GitHub Actions, Firebase Cloud Messaging (FCM)',
    ],
    responsibilities: {
      frontend: [
        'Designed UI/UX with Figma and built a responsive interface.',
        'Developed features for displaying activity lists and QR Code-based attendance.',
        'Optimized performance and user experience using Next.js (SSR, SSG).',
      ],
      backend: [
        'Developed GraphQL API with Express.js and MongoDB.',
        'Designed a RESTful E-commerce Backend system following a microservices architecture.',
        'Implemented authentication & authorization using JWT.',
        'Integrated Redis for caching and used distributed locks to ensure consistency.',
        'Managed image storage with Cloudinary.',
      ],
      devops: [
        'Containerized the system with Docker and deployed it in a production environment.',
        'Integrated RabbitMQ for message queue processing (if used).',
        'Implemented Firebase Cloud Messaging (FCM) for automated notifications.',
      ],
    },
  },
];


export const toolsData: (string | StaticImageData)[] = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

  