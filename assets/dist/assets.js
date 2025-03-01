"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.toolsData = exports.technologiesData = exports.experienceData = exports.infoList = exports.serviceData = exports.workData = exports.assets = void 0;
var user_image_png_1 = require("./user-image.png");
var code_icon_png_1 = require("./code-icon.png");
var code_icon_dark_png_1 = require("./code-icon-dark.png");
var edu_icon_png_1 = require("./edu-icon.png");
var edu_icon_dark_png_1 = require("./edu-icon-dark.png");
var project_icon_png_1 = require("./project-icon.png");
var project_icon_dark_png_1 = require("./project-icon-dark.png");
var vscode_png_1 = require("./vscode.png");
var firebase_png_1 = require("./firebase.png");
var figma_png_1 = require("./figma.png");
var git_png_1 = require("./git.png");
var mongodb_png_1 = require("./mongodb.png");
var right_arrow_white_png_1 = require("./right-arrow-white.png");
var logo_png_1 = require("./logo.png");
var logo_dark_png_1 = require("./logo_dark.png");
var mail_icon_png_1 = require("./mail_icon.png");
var mail_icon_dark_png_1 = require("./mail_icon_dark.png");
var profile_img_png_1 = require("./profile-img.png");
var download_icon_png_1 = require("./download-icon.png");
var hand_icon_png_1 = require("./hand-icon.png");
var header_bg_color_png_1 = require("./header-bg-color.png");
var moon_icon_png_1 = require("./moon_icon.png");
var sun_icon_png_1 = require("./sun_icon.png");
var arrow_icon_png_1 = require("./arrow-icon.png");
var arrow_icon_dark_png_1 = require("./arrow-icon-dark.png");
var menu_black_png_1 = require("./menu-black.png");
var menu_white_png_1 = require("./menu-white.png");
var close_black_png_1 = require("./close-black.png");
var close_white_png_1 = require("./close-white.png");
var web_icon_png_1 = require("./web-icon.png");
var backend_icon_png_1 = require("./backend-icon.png");
var frontend_icon_png_1 = require("./frontend-icon.png");
var devops_icon_png_1 = require("./devops-icon.png");
var right_arrow_png_1 = require("./right-arrow.png");
var send_icon_png_1 = require("./send-icon.png");
var send_icon_dark_png_1 = require("./send-icon-dark.png");
var right_arrow_bold_png_1 = require("./right-arrow-bold.png");
var right_arrow_bold_dark_png_1 = require("./right-arrow-bold-dark.png");
//icons
var nodejs_icon_png_1 = require("./icons/small/nodejs-icon.png");
var react_icon_png_1 = require("./icons/small/react-icon.png");
var nextjs_icon_png_1 = require("./icons/small/nextjs-icon.png");
var typescript_icon_png_1 = require("./icons/small/typescript-icon.png");
var docker_icon_png_1 = require("./icons/small/docker-icon.png");
var github_icon_png_1 = require("./icons/small/github-icon.png");
var apollo_icon_png_1 = require("./icons/small/apollo-icon.png");
var bootstrap_icon_png_1 = require("./icons/small/bootstrap-icon.png");
var c_sharp_icon_png_1 = require("./icons/small/c-sharp-icon.png");
var express_js_icon_png_1 = require("./icons/small/express-js-icon.png");
var facebook_icon_png_1 = require("./icons/small/facebook-icon.png");
var graphql_icon_png_1 = require("./icons/small/graphql-icon.png");
var html_icon_png_1 = require("./icons/small/html-icon.png");
var instagram_icon_png_1 = require("./icons/small/instagram-icon.png");
var java_icon_png_1 = require("./icons/small/java-icon.png");
var javascript_icon_png_1 = require("./icons/small/javascript-icon.png");
var likedln_icon_png_1 = require("./icons/small/likedln-icon.png");
var mongodb_icon_png_1 = require("./icons/small/mongodb-icon.png");
var nextjs_icon_png_2 = require("./icons/small/nextjs-icon.png");
var node_js_icon_png_1 = require("./icons/small/node-js-icon.png");
var oracle_icon_png_1 = require("./icons/small/oracle-icon.png");
var redux_icon_png_1 = require("./icons/small/redux-icon.png");
var spring_boot_icon_png_1 = require("./icons/small/spring-boot-icon.png");
var sql_icon_png_1 = require("./icons/small/sql-icon.png");
var rental_icon_png_1 = require("./icons/small/rental-icon.png");
var management_icon_png_1 = require("./icons/small/management-icon.png");
var mobile_shop_icon_png_1 = require("./icons/small/mobile-shop-icon.png");
var intellij_idea_small_png_1 = require("./icons/small/intellij-idea-small.png");
var redis_icon_png_1 = require("./icons/small/redis-icon.png");
var cloudflare_icon_png_1 = require("./icons/small/cloudflare-icon.png");
var rabbitmq_icon_png_1 = require("./icons/small/rabbitmq-icon.png");
var jwt_icon_png_1 = require("./icons/small/jwt-icon.png");
var fastApi_icon_png_1 = require("./icons/small/fastApi-icon.png");
var tailwild_icon_png_1 = require("./icons/small/tailwild-icon.png");
var lu_1 = require("react-icons/lu");
var react_1 = require("react");
exports.assets = {
    user_image: user_image_png_1["default"],
    code_icon: code_icon_png_1["default"],
    code_icon_dark: code_icon_dark_png_1["default"],
    edu_icon: edu_icon_png_1["default"],
    edu_icon_dark: edu_icon_dark_png_1["default"],
    project_icon: project_icon_png_1["default"],
    project_icon_dark: project_icon_dark_png_1["default"],
    vscode: vscode_png_1["default"],
    firebase: firebase_png_1["default"],
    figma: figma_png_1["default"],
    git: git_png_1["default"],
    mongodb: mongodb_png_1["default"],
    right_arrow_white: right_arrow_white_png_1["default"],
    logo: logo_png_1["default"],
    logo_dark: logo_dark_png_1["default"],
    mail_icon: mail_icon_png_1["default"],
    mail_icon_dark: mail_icon_dark_png_1["default"],
    profile_img: profile_img_png_1["default"],
    download_icon: download_icon_png_1["default"],
    hand_icon: hand_icon_png_1["default"],
    header_bg_color: header_bg_color_png_1["default"],
    moon_icon: moon_icon_png_1["default"],
    sun_icon: sun_icon_png_1["default"],
    arrow_icon: arrow_icon_png_1["default"],
    arrow_icon_dark: arrow_icon_dark_png_1["default"],
    menu_black: menu_black_png_1["default"],
    menu_white: menu_white_png_1["default"],
    close_black: close_black_png_1["default"],
    close_white: close_white_png_1["default"],
    web_icon: web_icon_png_1["default"],
    backend_icon: backend_icon_png_1["default"],
    frontend_icon: frontend_icon_png_1["default"],
    devops_icon: devops_icon_png_1["default"],
    right_arrow: right_arrow_png_1["default"],
    send_icon: send_icon_png_1["default"],
    send_icon_dark: send_icon_dark_png_1["default"],
    right_arrow_bold: right_arrow_bold_png_1["default"],
    right_arrow_bold_dark: right_arrow_bold_dark_png_1["default"],
    nodejs_small: nodejs_icon_png_1["default"],
    react_small: react_icon_png_1["default"],
    nextjs_small: nextjs_icon_png_1["default"],
    typescript_small: typescript_icon_png_1["default"],
    docker_small: docker_icon_png_1["default"],
    github_small: github_icon_png_1["default"],
    apollo_small: apollo_icon_png_1["default"],
    bootstrap_small: bootstrap_icon_png_1["default"],
    csharp_small: c_sharp_icon_png_1["default"],
    expressjs_small: express_js_icon_png_1["default"],
    facebook_small: facebook_icon_png_1["default"],
    graphql_small: graphql_icon_png_1["default"],
    html_small: html_icon_png_1["default"],
    instagram_small: instagram_icon_png_1["default"],
    java_small: java_icon_png_1["default"],
    javascript_small: javascript_icon_png_1["default"],
    linkedin_small: likedln_icon_png_1["default"],
    mongodb_small: mongodb_icon_png_1["default"],
    nextjs_icon_small: nextjs_icon_png_2["default"],
    nodejs_icon_small: node_js_icon_png_1["default"],
    oracle_small: oracle_icon_png_1["default"],
    redux_small: redux_icon_png_1["default"],
    springboot_small: spring_boot_icon_png_1["default"],
    sql_small: sql_icon_png_1["default"],
    rental_icon: rental_icon_png_1["default"],
    mobile_shop_icon: mobile_shop_icon_png_1["default"],
    managenment_icon: management_icon_png_1["default"],
    intellij_idea_small: intellij_idea_small_png_1["default"],
    redis_icon_small: redis_icon_png_1["default"],
    cloudinary_icon_small: cloudflare_icon_png_1["default"],
    rabbitmq_icon_small: rabbitmq_icon_png_1["default"],
    jwt_icon_small: jwt_icon_png_1["default"],
    fastApi_icon_small: fastApi_icon_png_1["default"],
    tailwind_icon_small: tailwild_icon_png_1["default"]
};
exports.workData = [
    { title: 'E-Commerce Website', description: 'Fullstack Development', bgImage: '/work-1.png' },
    { title: 'Online Bookstore', description: 'Backend Development', bgImage: '/work-2.png' },
    { title: 'Portfolio Website', description: 'Frontend Development', bgImage: '/work-3.png' },
    { title: 'Management System', description: 'Fullstack Development', bgImage: '/work-4.png' },
];
exports.serviceData = [
    {
        icon: exports.assets.frontend_icon,
        title: 'Frontend Development',
        description: 'Creating responsive and interactive UIs with ReactJS, TypeScript, and Tailwind CSS.',
        link: '',
        skills: [
            { name: 'React', icon: exports.assets.react_small, url: 'https://react.dev/' },
            { name: 'Next.js', icon: exports.assets.nextjs_small, url: 'https://nextjs.org/' },
            { name: 'TypeScript', icon: exports.assets.typescript_small, url: 'https://www.typescriptlang.org/' },
            { name: 'Redux', icon: exports.assets.redux_small, url: 'https://redux.js.org/' },
        ]
    },
    {
        icon: exports.assets.backend_icon,
        title: 'Backend Development',
        description: 'Developing scalable and secure backend systems with Java (Spring Boot), C# (ASP.NET), and Node.js.',
        link: '',
        skills: [
            { name: 'Node.js', icon: exports.assets.nodejs_small, url: 'https://nodejs.org/' },
            { name: 'Express.js', icon: exports.assets.expressjs_small, url: 'https://expressjs.com/' },
            {
                name: 'Spring Boot',
                icon: exports.assets.springboot_small,
                url: 'https://spring.io/projects/spring-boot'
            },
            { name: 'MongoDB', icon: exports.assets.mongodb_small, url: 'https://www.mongodb.com/' },
            {
                name: 'SQL',
                icon: exports.assets.sql_small,
                url: 'https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16'
            },
        ]
    },
    {
        icon: exports.assets.devops_icon,
        title: 'DevOps & CI/CD',
        description: 'Setting up automated workflows with Docker, GitHub Actions, and cloud deployment.',
        link: '',
        skills: [
            { name: 'Docker', icon: exports.assets.docker_small, url: 'https://www.docker.com/' },
            {
                name: 'GitHub Actions',
                icon: exports.assets.github_small,
                url: 'https://github.com/features/actions'
            },
            { name: 'Firebase', icon: exports.assets.firebase, url: 'https://firebase.google.com/' },
        ]
    },
];
exports.infoList = [
    {
        icon: exports.assets.code_icon,
        iconDark: exports.assets.code_icon_dark,
        title: 'Technologies',
        description: [
            { icon: nodejs_icon_png_1["default"], text: 'Node.js' },
            { icon: c_sharp_icon_png_1["default"], text: 'C#' },
            { icon: react_icon_png_1["default"], text: 'ReactJS' },
            { icon: nextjs_icon_png_2["default"], text: 'NextJS' },
            { icon: typescript_icon_png_1["default"], text: 'TypeScript' },
            { icon: docker_icon_png_1["default"], text: 'Docker' },
            { icon: github_icon_png_1["default"], text: 'GitHub Actions' },
        ]
    },
];
exports.experienceData = [
    {
        id: 'cyberskill-intern',
        title: 'Fullstack Web Developer Intern',
        location: 'Cyberskill Software Solutions',
        description: 'Contributed to both frontend and backend development for the Student Life - Rental Management project. Designed UI/UX, built APIs, and optimized database structures.',
        icon: react_1["default"].createElement(lu_1.LuGraduationCap),
        date: 'Sep 2024 - Dec 2024',
        technologies: {
            frontend: [
                { name: 'React', image: react_icon_png_1["default"] },
                { name: 'Next.js', image: nextjs_icon_png_2["default"] },
                { name: 'TypeScript', image: typescript_icon_png_1["default"] },
            ],
            backend: [
                { name: 'Node.js', image: nodejs_icon_png_1["default"] },
                { name: 'Express.js', image: express_js_icon_png_1["default"] },
                { name: 'GraphQL', image: graphql_icon_png_1["default"] },
                { name: 'MongoDB', image: exports.assets.mongodb },
            ],
            devops: [
                { name: 'Git', image: exports.assets.git },
                { name: 'Docker', image: docker_icon_png_1["default"] },
                { name: 'GitHub Actions', image: github_icon_png_1["default"] },
            ]
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
            ]
        }
    },
    {
        id: 'iu-student-management',
        title: 'Fullstack Web Developer',
        location: 'Industrial University of Ho Chi Minh City',
        description: 'Developed a student activity management and QR code attendance system. Enabled activity registration, participation tracking, and automated notifications.',
        icon: react_1["default"].createElement(lu_1.LuGraduationCap),
        date: 'Oct 2024 - Dec 2024',
        technologies: {
            frontend: [
                { name: 'React', image: react_icon_png_1["default"] },
                { name: 'Next.js', image: nextjs_icon_png_2["default"] },
                { name: 'TypeScript', image: typescript_icon_png_1["default"] },
            ],
            backend: [
                { name: 'Node.js', image: nodejs_icon_png_1["default"] },
                { name: 'Express.js', image: express_js_icon_png_1["default"] },
                { name: 'FastAPI', image: fastApi_icon_png_1["default"] },
            ],
            database: [
                { name: 'MongoDB', image: exports.assets.mongodb },
                { name: 'Redis', image: redis_icon_png_1["default"] },
            ],
            messaging: [{ name: 'RabbitMQ', image: rabbitmq_icon_png_1["default"] }],
            storage: [{ name: 'Cloudinary', image: cloudflare_icon_png_1["default"] }],
            authentication: [{ name: 'JWT', image: jwt_icon_png_1["default"] }],
            devops: [
                { name: 'Docker', image: docker_icon_png_1["default"] },
                { name: 'GitHub Actions', image: github_icon_png_1["default"] },
                { name: 'Firebase Cloud Messaging (FCM)', image: firebase_png_1["default"] },
            ]
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
                'Integrated RabbitMQ for message queue processing.',
                'Implemented Firebase Cloud Messaging (FCM) for real-time notifications.',
            ]
        }
    },
];
var backendTech = [
    { name: 'Node.js', image: exports.assets.nodejs_small },
    { name: 'Express.js', image: exports.assets.expressjs_small },
    { name: 'Spring Boot', image: exports.assets.springboot_small },
    { name: 'Java', image: exports.assets.java_small },
    { name: 'C#', image: exports.assets.csharp_small },
];
var frontendTech = [
    { name: 'React.js', image: exports.assets.react_small },
    { name: 'Next.js', image: exports.assets.nextjs_small },
    { name: 'Redux', image: exports.assets.redux_small },
    { name: 'JavaScript', image: exports.assets.javascript_small },
    { name: 'TypeScript', image: exports.assets.typescript_small },
];
var databaseTech = [
    { name: 'MongoDB', image: exports.assets.mongodb_small },
    { name: 'SQL', image: exports.assets.sql_small },
];
// Nhóm DevOps & Tools
var devopsTech = [
    { name: 'Docker', image: exports.assets.docker_small },
    { name: 'GitHub', image: exports.assets.github_small },
];
var apiTech = [
    { name: 'GraphQL', image: exports.assets.graphql_small },
    { name: 'Apollo GraphQL', image: exports.assets.apollo_small },
];
exports.technologiesData = __spreadArrays(backendTech, frontendTech, databaseTech, devopsTech, apiTech);
exports.toolsData = [
    exports.assets.vscode,
    exports.assets.intellij_idea_small,
    exports.assets.firebase,
    exports.assets.mongodb,
    exports.assets.figma,
    exports.assets.git,
];
