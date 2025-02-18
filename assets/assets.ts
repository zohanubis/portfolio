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
//icons
import nodejs_small from './icons/small/nodejs-icon.png';
import react_small from './icons/small/react-icon.png';
import nextjs_small from './icons/small/nextjs-icon.png';
import typescript_small from './icons/small/typescript-icon.png';
import docker_small from './icons/small/docker-icon.png';
import github_small from './icons/small/github-icon.png';
import apollo_small from './icons/small/apollo-icon.png';
import bootstrap_small from './icons/small/bootstrap-icon.png';
import csharp_small from './icons/small/c-sharp-icon.png';
import expressjs_small from './icons/small/express-js-icon.png';
import facebook_small from './icons/small/facebook-icon.png';
import graphql_small from './icons/small/graphql-icon.png';
import html_small from './icons/small/html-icon.png';
import instagram_small from './icons/small/instagram-icon.png';
import java_small from './icons/small/java-icon.png';
import javascript_small from './icons/small/javascript-icon.png';
import linkedin_small from './icons/small/likedln-icon.png';
import mongodb_small from './icons/small/mongodb-icon.png';
import nextjs_icon_small from './icons/small/nextjs-icon.png';
import nodejs_icon_small from './icons/small/node-js-icon.png';
import oracle_small from './icons/small/oracle-icon.png';
import redux_small from './icons/small/redux-icon.png';
import springboot_small from './icons/small/spring-boot-icon.png';
import sql_small from './icons/small/sql-icon.png';

import { LuGraduationCap } from 'react-icons/lu';
import { StaticImageData } from 'next/image';
import React, { JSX } from 'react';





// Type Definitions
type WorkItem = {
  title: string | StaticImageData;
  description: string;
  bgImage: string;
};

type ServiceItem = {
  icon: string | StaticImageData;
  title: string;
  description: string;
  link: string;
};

type InfoItem = {
  icon: string | StaticImageData;
  iconDark: string | StaticImageData;
  title: string;
  description: string;
};

type ExperienceItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  technologies?: Partial<{
    frontend: string[];
    backend: string[];
    database: string[];
    messaging: string[];
    storage: string[];
    devops: string[];
    authentication: string[];
    other: string[];
  }>;
  responsibilities?: Partial<{
    frontend: string[];
    backend: string[];
    devops: string[];
  }>;
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
  nodejs_small,
  react_small,
  nextjs_small,
  typescript_small,
  docker_small,
  github_small,
  apollo_small,
  bootstrap_small,
  csharp_small,
  expressjs_small,
  facebook_small,
  graphql_small,
  html_small,
  instagram_small,
  java_small,
  javascript_small,
  linkedin_small,
  mongodb_small,
  nextjs_icon_small,
  nodejs_icon_small,
  oracle_small,
  redux_small,
  springboot_small,
  sql_small,
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
    id: 'cyberskill-intern',
    title: 'Fullstack Web Developer Intern',
    location: 'Cyberskill Software Solutions',
    description:
      'Contributed to both frontend and backend development for the Student Life - Rental Management project. Designed UI/UX, built APIs, and optimized database structures.',
    icon: React.createElement(LuGraduationCap),
    date: 'Sep 2024 - Dec 2024',
    technologies: {
      frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'GraphQL', 'MongoDB'],
      devops: ['Git', 'Docker', 'GitHub Actions'],
    },
    responsibilities: {
      frontend: [
        'Designed and developed user-friendly interfaces.',
        'Implemented features for rental listings, search, and filtering.',
        'Ensured responsive design across desktop and mobile platforms.',
      ],
      backend: [
        'Designed and structured MongoDB collections.',
        'Developed RESTful and GraphQL APIs for rental management.',
        'Optimized API performance, conducted testing, and debugged issues.',
      ],
    },
  },
  {
    id: 'iu-student-management',
    title: 'Fullstack Web Developer',
    location: 'Industrial University of Ho Chi Minh City',
    description:
      'Developed a student activity management and QR code attendance system. Enabled activity registration, participation tracking, and automated notifications.',
    icon: React.createElement(LuGraduationCap),
    date: 'Oct 2024 - Dec 2024',
    technologies: {
      frontend: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'FastAPI'],
      database: ['MongoDB', 'Redis'],
      messaging: ['RabbitMQ (if implemented)'],
      storage: ['Cloudinary'],
      authentication: ['JWT'],
      devops: ['Docker', 'GitHub Actions', 'Firebase Cloud Messaging (FCM)'],
    },
    responsibilities: {
      frontend: [
        'Designed UI/UX using Figma and developed a responsive interface.',
        'Implemented features for activity display and QR code attendance tracking.',
        'Optimized performance using Next.js (SSR, SSG).',
      ],
      backend: [
        'Developed GraphQL APIs using Express.js and MongoDB.',
        'Implemented a microservices architecture.',
        'Integrated Redis caching and distributed locks.',
        'Managed image storage with Cloudinary.',
      ],
      devops: [
        'Deployed the system using Docker.',
        'Integrated RabbitMQ for message queue processing (if implemented).',
        'Implemented Firebase Cloud Messaging (FCM) for real-time notifications.',
      ],
    },
  },
];



export const toolsData: (string | StaticImageData)[] = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

  