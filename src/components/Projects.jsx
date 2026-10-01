/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaJava,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiVite,
} from "react-icons/si";

/* =========================================================
   FLOATING TECHNOLOGY ICONS
========================================================= */

const icons = [
  <FaReact />,
  <FaJsSquare />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiTailwindcss />,
  <FaNodeJs />,
  <FaPhp />,
  <FaDatabase />,
  <SiMongodb />,
  <SiMysql />,
  <FaGitAlt />,
  <FaJava />,
];

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    title: "NovaPMS",
    category: "Full Stack Web Application",
    description:
      "NovaPMS is a full-stack project management platform designed to manage projects, tasks, users, authentication, dashboards, comments, and other collaborative workflows through a modern web interface.",

    status: "Completed",
    inProgress: true,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    link: "https://github.com/Mr-Samad3011/NovaPMS",
    demo: "https://novapms.netlify.app/",

    highlights: [
      "Project Management",
      "Authentication",
      "Dashboard",
      "REST APIs",
      "MongoDB",
      "Comments",
    ],
  },

  {
    title: "SeerahOfMercy",
    category: "Web Platform",
    description:
      "SeerahOfMercy is a web project focused on presenting meaningful content through a clean, responsive, and user-friendly interface with modern web development practices.",

    status: "Completed",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],

    link: "https://github.com/Mr-Samad3011/seerahofmercy",
    demo:"https://seerahofmercy.netlify.app/",
    highlights: [
      "Responsive Design",
      "Modern UI",
      "Component Based Architecture",
      "User Experience",
    ],
  },

  {
    title: "Cling Info Tech Homepage Redesign",
    category: "Frontend / UI Redesign",
    description:
      "A responsive homepage redesign for Cling Info Tech built with React, Vite, and Tailwind CSS. The project focuses on creating a modern, responsive, and visually polished company homepage.",

    status: "Completed",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],

    link: "https://github.com/Mr-Samad3011/cling-infotech-homepage-redesign",
    demo:"https://clinginfotechsolutions.netlify.app/",
    highlights: [
      "Homepage Redesign",
      "Responsive UI",
      "Modern Layout",
      "React Components",
      "Tailwind CSS",
    ],
  },

  {
    title: "Chat App",
    category: "Real-Time Full Stack Application",
    description:
      "A real-time messaging application built using React, Socket.io, Node.js, and JWT authentication. It includes one-to-one chat, group chat, voice messaging, authentication, protected routes, and real-time communication.",

    status: "In Progress",
    inProgress: true,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],

    highlights: [
      "One-to-One Chat",
      "Group Chat",
      "Voice Messages",
      "JWT Authentication",
      "Socket.io",
      "Real-Time Communication",
    ],
  },

  {
    title: "VillageConnect",
    category: "Full Stack MERN Application",
    description:
      "A full-stack platform designed to connect and empower rural communities through forum posts, local services, authentication, protected routes, database integration, and responsive UI.",

    status: "Completed",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    link: "https://github.com/Mr-Samad3011/code_core_internship/blob/main/villageConnect_day_35_.zip",

    demo: "https://villageconect.netlify.app",

    highlights: [
      "Forum System",
      "Local Services",
      "Authentication",
      "Protected Routes",
      "MongoDB",
      "Responsive UI",
    ],
  },

  {
    title: "United Index",
    category: "Frontend Web Application",
    description:
      "United Index is a web platform where United College students can generate their own personal index page. It is built using React, Vite, and Tailwind CSS.",

    status: "Completed",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],

    link: "https://github.com/Mr-Samad3011/United_Abdus_index_template",

    demo: "https://unitedindexabdus.netlify.app/",

    highlights: [
      "Student Index",
      "React",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    title: "Chatbot",
    category: "JavaScript / AI Project",
    description:
      "An interactive chatbot project built using JavaScript that communicates with users through predefined logic and dynamic responses.",

    status: "Completed",

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],

    link: "https://github.com/Mr-Samad3011/chatbot1",

    highlights: [
      "Chat Interface",
      "Dynamic Responses",
      "JavaScript Logic",
      "Interactive UI",
    ],
  },

  {
    title: "Hospital Management System",
    category: "Java Desktop Application",
    description:
      "A desktop-based hospital management application built using Java for managing hospital-related records and workflows.",

    status: "Completed",

    technologies: [
      "Java",
      "MySQL",
      "Java AWT",
    ],

    link: "https://github.com/Mr-Samad3011/Hospital-Management-System-",

    highlights: [
      "Hospital Management",
      "Patient Records",
      "Java",
      "MySQL",
      "Desktop Application",
    ],
  },

  {
    title: "Resume Builder",
    category: "PHP Web Application",
    description:
      "A PHP-based resume builder that allows users to enter professional details and generate structured resumes.",

    status: "Completed",

    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "MySQL",
    ],

    link: "https://github.com/Mr-Samad3011/resume_builder",

    highlights: [
      "Resume Generation",
      "PHP",
      "Form Handling",
      "Database",
    ],
  },

  {
    title: "Webcam Java NetBeans",
    category: "Java Desktop Application",
    description:
      "A Java desktop webcam application developed using Apache NetBeans. The project demonstrates webcam-related functionality using a Java desktop environment.",

    status: "Completed",

    technologies: [
      "Java",
      "NetBeans",
    ],

    link: "https://github.com/Mr-Samad3011/webcam-java-netbeans",

    highlights: [
      "Webcam Application",
      "Java Desktop",
      "Apache NetBeans",
      "Camera Integration",
    ],
  },

  {
    title: "Internship Assignments",
    category: "Full Stack Development",
    description:
      "A collection of full-stack projects, exercises, and development tasks completed during the Full Stack Development internship at Code Core Global.",

    status: "Completed",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.io",
    ],

    link: "https://github.com/Mr-Samad3011/code_core_internship",

    highlights: [
      "Full Stack Development",
      "MERN Stack",
      "Authentication",
      "REST APIs",
      "Real-Time Features",
    ],
  },
];

/* =========================================================
   TECHNOLOGY ICON MAP
========================================================= */

const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  JavaScript: <FaJsSquare />,
  Java: <FaJava />,
  PHP: <FaPhp />,
  "Tailwind CSS": <SiTailwindcss />,
  Vite: <SiVite />,
  "Socket.io": <SiSocketdotio />,
  JWT: <SiJsonwebtokens />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  "Java AWT": <FaJava />,
  NetBeans: <FaJava />,
};

/* =========================================================
   BLOB SHAPE
========================================================= */

const blobPath =
  "M38.5,-67.1C51.9,-59.7,66.5,-52.7,74.2,-41.1C81.9,-29.5,82.8,-14.2,80.1,-0.9C77.4,12.4,71.2,24.8,64.4,37.1C57.6,49.4,50.2,61.6,38.8,68.8C27.4,76,13.7,78.2,-0.5,79.1C-14.7,80,-29.4,79.6,-41.9,73.1C-54.4,66.6,-64.8,54,-71.7,40.6C-78.6,27.2,-82.1,13.1,-80.7,0.8C-79.3,-11.5,-73,-23,-65.9,-34.2C-58.8,-45.4,-50.8,-56.3,-40,-65.2C-29.2,-74.1,-14.6,-81,-0.7,-79.8C13.2,-78.6,26.4,-74.5,38.5,-67.1Z";

/* =========================================================
   BLOB MODAL
========================================================= */

/* =========================================================
   FANCY FRAME PROJECT MODAL
========================================================= */

/* =========================================================
   FANCY FRAME PROJECT MODAL
========================================================= */

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={handleBackdropClick}
      className="
        fixed
        inset-0
        z-[999]

        flex
        items-center
        justify-center

        overflow-y-auto
        overflow-x-hidden

        bg-black/80
        px-3
        py-4

        sm:px-5
        sm:py-6

        backdrop-blur-xl
      "
    >
      {/* =====================================================
          MODAL WRAPPER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.88,
          y: 35,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.88,
          y: 35,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 20,
        }}
        className="
          relative

          w-full
          max-w-[680px]

          max-h-[calc(100vh-32px)]
          sm:max-h-[calc(100vh-48px)]

          my-auto
        "
      >
        {/* ===================================================
            OUTER GLOW
        =================================================== */}

        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute

            -inset-4
            sm:-inset-6

            bg-gradient-to-r
            from-blue-500/30
            via-cyan-400/20
            to-purple-500/30

            blur-3xl
          "
        />

        {/* ===================================================
            FANCY FRAME OUTER BORDER
        =================================================== */}

        <div
          className="
            relative
            w-full
            h-full

            p-[2px]

            bg-gradient-to-br
            from-blue-400
            via-cyan-400
            to-purple-500
          "
          style={{
            clipPath: `
              polygon(
                2% 4%,
                7% 1%,
                13% 3%,
                19% 1%,
                25% 3%,
                31% 1%,
                38% 3%,
                45% 1%,
                52% 3%,
                59% 1%,
                66% 3%,
                73% 1%,
                80% 3%,
                87% 1%,
                94% 4%,
                99% 9%,
                97% 16%,
                99% 23%,
                97% 30%,
                99% 37%,
                97% 44%,
                99% 51%,
                97% 58%,
                99% 65%,
                97% 72%,
                99% 79%,
                96% 87%,
                99% 94%,
                94% 98%,
                87% 96%,
                80% 99%,
                73% 97%,
                66% 99%,
                59% 97%,
                52% 99%,
                45% 97%,
                38% 99%,
                31% 97%,
                24% 99%,
                17% 97%,
                10% 99%,
                4% 95%,
                1% 89%,
                3% 82%,
                1% 75%,
                3% 68%,
                1% 61%,
                3% 54%,
                1% 47%,
                3% 40%,
                1% 33%,
                3% 26%,
                1% 19%,
                3% 12%
              )
            `,
          }}
        >
          {/* =================================================
              INNER FRAME
          ================================================= */}

          <div
            className="
              relative

              w-full

              max-h-[calc(100vh-36px)]
              sm:max-h-[calc(100vh-52px)]

              overflow-hidden

              bg-slate-950
            "
            style={{
              clipPath: `
                polygon(
                  3% 5%,
                  8% 2%,
                  14% 4%,
                  20% 2%,
                  26% 4%,
                  32% 2%,
                  39% 4%,
                  46% 2%,
                  53% 4%,
                  60% 2%,
                  67% 4%,
                  74% 2%,
                  81% 4%,
                  88% 2%,
                  95% 5%,
                  98% 10%,
                  96% 17%,
                  98% 24%,
                  96% 31%,
                  98% 38%,
                  96% 45%,
                  98% 52%,
                  96% 59%,
                  98% 66%,
                  96% 73%,
                  98% 80%,
                  95% 88%,
                  98% 95%,
                  93% 97%,
                  86% 95%,
                  79% 98%,
                  72% 96%,
                  65% 98%,
                  58% 96%,
                  51% 98%,
                  44% 96%,
                  37% 98%,
                  30% 96%,
                  23% 98%,
                  16% 96%,
                  9% 98%,
                  3% 94%,
                  2% 88%,
                  4% 81%,
                  2% 74%,
                  4% 67%,
                  2% 60%,
                  4% 53%,
                  2% 46%,
                  4% 39%,
                  2% 32%,
                  4% 25%,
                  2% 18%,
                  4% 11%
                )
              `,
            }}
          >
            {/* =================================================
                BACKGROUND EFFECTS
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
              <motion.div
                animate={{
                  x: [0, 40, -30, 0],
                  y: [0, -20, 30, 0],
                  scale: [1, 1.15, 0.95, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-24
                  -top-24

                  h-72
                  w-72

                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />

              <motion.div
                animate={{
                  x: [0, -30, 40, 0],
                  y: [0, 30, -20, 0],
                  scale: [1, 0.9, 1.15, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-24
                  -right-24

                  h-72
                  w-72

                  rounded-full
                  bg-purple-500/10
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.035]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      rgba(255,255,255,0.8) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      90deg,
                      rgba(255,255,255,0.8) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "28px 28px",
                }}
              />
            </div>

            {/* =================================================
                SCROLLABLE CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10

                max-h-[calc(100vh-36px)]
                sm:max-h-[calc(100vh-52px)]

                overflow-y-auto
                overflow-x-hidden

                overscroll-contain

                px-6
                py-9

                sm:px-10
                sm:py-10

                md:px-12
                md:py-12

                scrollbar-thin
                scrollbar-thumb-blue-500/60
                scrollbar-track-transparent
              "
            >
              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={onClose}
                aria-label="Close project details"
                className="
                  sticky
                  top-0
                  float-right

                  z-30

                  -mr-2
                  -mt-2

                  flex
                  h-9
                  w-9

                  sm:h-10
                  sm:w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-gray-900/90

                  text-xl
                  text-gray-300

                  shadow-lg
                  backdrop-blur-md

                  transition

                  hover:border-red-400/30
                  hover:bg-red-500/10
                  hover:text-red-400
                "
              >
                ×
              </motion.button>

              {/* =================================================
                  PROJECT HEADER
              ================================================= */}

              <div className="pr-2 sm:pr-12">
                {/* Category */}

                <span
                  className="
                    inline-flex

                    max-w-full

                    rounded-full

                    border
                    border-blue-400/20
                    bg-blue-500/10

                    px-3
                    py-1.5

                    sm:px-4
                    sm:py-2

                    text-[9px]
                    sm:text-[11px]

                    font-bold
                    uppercase

                    tracking-[0.12em]
                    sm:tracking-[0.15em]

                    text-blue-300

                    break-words
                  "
                >
                  {project.category}
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-4
                    sm:mt-5

                    text-2xl
                    sm:text-3xl
                    md:text-4xl

                    font-black
                    leading-tight

                    text-white

                    break-words
                  "
                >
                  {project.title}
                </h3>

                {/* Status */}

                <div className="mt-3 sm:mt-4">
                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-2

                      rounded-full

                      px-3
                      sm:px-4

                      py-1
                      sm:py-1.5

                      text-[10px]
                      sm:text-xs

                      font-semibold

                      ${
                        project.status === "In Progress"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-green-500/10 text-green-400"
                      }
                    `}
                  >
                    <span
                      className={`
                        h-1.5
                        w-1.5

                        rounded-full

                        ${
                          project.status === "In Progress"
                            ? "bg-yellow-400"
                            : "bg-green-400"
                        }
                      `}
                    />

                    {project.status}
                  </span>
                </div>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div className="mt-6 sm:mt-8">
                <p
                  className="
                    text-sm
                    sm:text-base

                    leading-7
                    sm:leading-8

                    text-gray-300
                  "
                >
                  {project.description}
                </p>
              </div>

              {/* =================================================
                  TECHNOLOGIES
              ================================================= */}

              <div className="mt-6 sm:mt-8">
                <h4
                  className="
                    mb-3
                    sm:mb-4

                    text-[10px]
                    sm:text-xs

                    font-bold
                    uppercase
                    tracking-[0.2em]

                    text-gray-400
                  "
                >
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((technology) => (
                    <span
                      key={technology}
                      className="
                        group/tech

                        flex
                        items-center
                        gap-2

                        rounded-xl

                        border
                        border-white/10

                        bg-white/[0.04]

                        px-2.5
                        sm:px-3

                        py-1.5
                        sm:py-2

                        text-[10px]
                        sm:text-xs

                        text-gray-300

                        transition-all
                        duration-300

                        hover:border-blue-400/30
                        hover:bg-blue-500/10
                        hover:text-blue-300
                      "
                    >
                      <span
                        className="
                          text-blue-400
                          transition-transform
                          group-hover/tech:scale-110
                        "
                      >
                        {techIcons[technology] || <FaDatabase />}
                      </span>

                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  HIGHLIGHTS
              ================================================= */}

              <div className="mt-6 sm:mt-8">
                <h4
                  className="
                    mb-3
                    sm:mb-4

                    text-[10px]
                    sm:text-xs

                    font-bold
                    uppercase
                    tracking-[0.2em]

                    text-gray-400
                  "
                >
                  Highlights
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.highlights?.map((highlight) => (
                    <span
                      key={highlight}
                      className="
                        rounded-full

                        border
                        border-purple-400/20

                        bg-purple-500/10

                        px-2.5
                        sm:px-3

                        py-1
                        sm:py-1.5

                        text-[10px]
                        sm:text-xs

                        text-purple-300
                      "
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  ACTION BUTTONS
              ================================================= */}

              <div
                className="
                  mt-7
                  sm:mt-10

                  flex
                  flex-col
                  xs:flex-row
                  sm:flex-row

                  gap-3
                "
              >
                {/* GitHub */}

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      group

                      inline-flex
                      w-full
                      sm:w-auto

                      items-center
                      justify-center

                      gap-2.5

                      rounded-xl

                      border
                      border-white/10

                      bg-white/[0.05]

                      px-5
                      py-3

                      text-sm
                      font-semibold

                      text-white

                      transition-all
                      duration-300

                      hover:border-gray-500/50
                      hover:bg-white/10
                    "
                  >
                    <FaGithub className="text-lg" />

                    GitHub

                    <FaExternalLinkAlt
                      className="
                        text-[10px]
                        text-gray-500

                        transition-transform

                        group-hover:translate-x-1
                      "
                    />
                  </motion.a>
                )}

                {/* Live Deployment */}

                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      group

                      inline-flex
                      w-full
                      sm:w-auto

                      items-center
                      justify-center

                      gap-2.5

                      rounded-xl

                      bg-gradient-to-r
                      from-blue-500
                      via-cyan-500
                      to-blue-500

                      bg-[length:200%_100%]

                      px-5
                      py-3

                      text-sm
                      font-semibold

                      text-white

                      shadow-lg
                      shadow-blue-500/20

                      transition-all
                      duration-500

                      hover:bg-right
                      hover:shadow-cyan-500/30
                    "
                  >
                    <span className="text-base">
                      🌐
                    </span>

                    Visit Website

                    <FaExternalLinkAlt
                      className="
                        text-[10px]

                        transition-transform

                        group-hover:translate-x-1
                      "
                    />
                  </motion.a>
                )}
              </div>

              {/* =================================================
                  DEPLOYMENT URL
              ================================================= */}

              {project.demo && (
                <p
                  className="
                    mt-3

                    break-all

                    text-[9px]
                    sm:text-[11px]

                    leading-5

                    text-gray-600
                  "
                >
                  Live: {project.demo}
                </p>
              )}

              {/* Bottom spacing */}

              <div className="h-2 sm:h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Projects = () => {
  const sectionRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  /* =======================================================
     SECTION SIZE
  ======================================================= */

  useEffect(() => {
    const updateSize = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      setSize({
        width: rect.width,
        height: rect.height,
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  /* =======================================================
     OPEN PROJECT
  ======================================================= */

  const openProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  /* =======================================================
     CLOSE PROJECT
  ======================================================= */

  const closeProject = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative min-h-screen w-full overflow-hidden bg-gray-950 px-6 py-20"
      >
        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

          <div className="absolute bottom-10 left-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        {/* =================================================
            FLOATING ICONS
        ================================================= */}

        {size.width > 0 &&
          icons.map((icon, i) => {
            const positions = [
              { x: 5, y: 12 },
              { x: 86, y: 15 },
              { x: 12, y: 35 },
              { x: 91, y: 40 },
              { x: 5, y: 65 },
              { x: 88, y: 70 },
              { x: 20, y: 90 },
              { x: 75, y: 88 },
              { x: 48, y: 8 },
              { x: 50, y: 95 },
              { x: 30, y: 50 },
              { x: 70, y: 55 },
            ];

            const position = positions[i % positions.length];

            return (
              <motion.div
                key={i}
                className="pointer-events-none absolute text-4xl text-blue-400/20"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                }}
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                {icon}
              </motion.div>
            );
          })}

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-20 mx-auto max-w-7xl">
          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              💻 My Development Work
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              🚀{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              A collection of full-stack applications, web platforms,
              Java projects, UI redesigns, and experimental projects
              built throughout my development journey.
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
          </motion.div>

          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative"
              >
                {/* Card Glow */}

                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-purple-500/0 opacity-0 blur transition-all duration-500 group-hover:from-blue-500/30 group-hover:via-cyan-500/20 group-hover:to-purple-500/30 group-hover:opacity-100" />

                <div className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/90 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-blue-500/30">
                  {/* Top line */}

                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Status */}

                  <div className="mb-5 flex items-start justify-between gap-3">
                    <span className="rounded-full border border-blue-400/10 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                      {project.category}
                    </span>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${
                        project.status === "In Progress"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-green-500/10 text-green-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Number */}

                  <div className="mb-3 text-xs font-bold text-gray-600">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}

                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="mb-5 line-clamp-4 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies
                      ?.slice(0, 4)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-gray-400"
                        >
                          <span className="text-blue-400">
                            {techIcons[technology]}
                          </span>

                          {technology}
                        </span>
                      ))}
                  </div>

                  {/* Bottom */}

                  <div className="mt-auto border-t border-gray-800 pt-5">
                    <button
                      onClick={() => openProject(project)}
                      className="flex w-full items-center justify-between rounded-xl border border-blue-500/10 bg-blue-500/5 px-4 py-3 text-sm font-semibold text-blue-400 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      <span>View Project Details</span>

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              GITHUB PROFILE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-16 text-center"
          >
            <p className="mb-4 text-sm text-gray-500">
              Want to explore more of my work?
            </p>

            <a
              href="https://github.com/Mr-Samad3011"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-gray-700 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10"
            >
              <FaGithub className="text-xl" />
              Explore My GitHub
              <FaExternalLinkAlt className="text-xs text-gray-500" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AnimatePresence>
        {showModal && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
