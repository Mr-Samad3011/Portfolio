
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCode,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaTools,
  FaServer,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    id: 1,
    role: "AI & Web Development Intern",
    company: "InAmigos Foundation",
    duration: "Current",
    location: "Remote",
    type: "Internship",

    description:
      "Working with AI-powered and no-code web development tools to create, design, and improve modern digital experiences and responsive websites.",

    responsibilities: [
      "Creating and improving websites using AI-powered and no-code development tools.",
      "Using Framer AI and Wix AI to build modern web experiences.",
      "Working with WordPress for website creation and content management.",
      "Creating and refining UI designs and layouts using Figma.",
      "Using AI tools to improve website content, layouts, and development workflows.",
      "Designing responsive and user-focused web experiences.",
      "Exploring modern AI-powered tools for practical web development tasks.",
    ],

    technologies: [
      "Framer AI",
      "Wix AI",
      "WordPress",
      "Figma",
    ],

    highlights: [
      "AI-Powered Web Development",
      "No-Code Website Development",
      "UI/UX Design",
      "AI Website Builders",
      "Responsive Web Design",
    ],
  },

  {
    id: 2,
    role: "Full Stack Development Intern",
    company: "Code Core Global",
    duration: "May 2025 – 2025",
    location: "Remote",
    type: "Internship",

    description:
      "Worked on full-stack MERN applications and real-world web development tasks involving authentication, REST APIs, databases, responsive interfaces, and real-time communication.",

    responsibilities: [
      "Built full-stack applications using MongoDB, Express.js, React, and Node.js.",
      "Implemented authentication and protected routes using JWT.",
      "Developed REST APIs and connected frontend applications with backend services.",
      "Worked with MongoDB for database-driven applications.",
      "Created responsive and user-friendly interfaces.",
      "Implemented real-time communication using Socket.io.",
      "Debugged application issues and improved overall project architecture.",
    ],

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Socket.io",
      "REST APIs",
      "Tailwind CSS",
    ],

    highlights: [
      "Real-Time Chat Application",
      "VillageConnect",
      "Authentication Systems",
      "REST APIs",
      "MongoDB Integration",
    ],
  },
];

/* =========================================================
   TECHNOLOGY ICONS
========================================================= */

const techIcons = {
  React: <FaReact />,
  JavaScript: <FaJsSquare />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  "REST APIs": <FaServer />,
  "AI Tools": <FaTools />,
  JWT: <SiJsonwebtokens />,
  "Socket.io": <SiSocketdotio />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer AI": <FaTools />,
  "Wix AI": <FaTools />,
  WordPress: <FaTools />,
  Figma: <FaTools />,
};

/* =========================================================
   FLOATING TECHNOLOGY ICONS
========================================================= */

const floatingIcons = [
  {
    icon: <FaReact />,
    name: "React",
    x: "8%",
    y: "18%",
  },
  {
    icon: <FaNodeJs />,
    name: "Node",
    x: "88%",
    y: "22%",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    x: "12%",
    y: "72%",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    x: "85%",
    y: "70%",
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
    x: "50%",
    y: "10%",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    x: "92%",
    y: "48%",
  },
  {
    icon: <FaDatabase />,
    name: "Database",
    x: "5%",
    y: "48%",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    x: "48%",
    y: "88%",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Experience = () => {
  const sectionRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState([]);

  /* =======================================================
     INTERSECTION OBSERVER
  ======================================================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.dataset.index
            );

            setVisibleCards((previous) => {
              if (previous.includes(index)) {
                return previous;
              }

              return [...previous, index];
            });
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const cards =
      sectionRef.current?.querySelectorAll(
        ".experience-card"
      );

    cards?.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards?.forEach((card) => {
        observer.unobserve(card);
      });

      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* =====================================================
          FLOATING TECHNOLOGY ICONS
      ===================================================== */}

      {floatingIcons.map((item, index) => (
        <motion.div
          key={item.name}
          className="pointer-events-none absolute hidden text-3xl text-blue-400/10 md:block"
          style={{
            left: item.x,
            top: item.y,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

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
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <FaBriefcase />
            Professional Journey
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            My journey through full-stack development,
            AI-powered web development, real-world projects,
            and modern web technologies.
          </p>
        </motion.div>

        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div className="relative">

          {/* Center Timeline */}

          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-500/0 md:left-1/2 md:-translate-x-1/2" />

          {/* Experience Cards */}

          <div className="space-y-14 md:space-y-24">

            {experiences.map(
              (experience, index) => {
                const isLeft = index % 2 === 0;

                const isVisible =
                  visibleCards.includes(index);

                return (
                  <div
                    key={experience.id}
                    data-index={index}
                    className="experience-card relative"
                  >

                    {/* Timeline Dot */}

                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      animate={
                        isVisible
                          ? {
                              scale: 1,
                            }
                          : {
                              scale: 0,
                            }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                      }}
                      className="absolute left-4 top-8 z-20 -translate-x-1/2 md:left-1/2"
                    >
                      <div className="relative flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]">

                        {index === 0 && (
                          <span className="absolute h-5 w-5 animate-ping rounded-full bg-blue-400 opacity-40" />
                        )}

                      </div>
                    </motion.div>

                    {/* Card */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isLeft ? -60 : 60,
                      }}
                      animate={
                        isVisible
                          ? {
                              opacity: 1,
                              x: 0,
                            }
                          : {
                              opacity: 0,
                              x: isLeft
                                ? -60
                                : 60,
                            }
                      }
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className={`ml-10 w-[calc(100%-2.5rem)] md:ml-0 md:w-[calc(50%-3rem)] ${
                        isLeft
                          ? "md:mr-auto"
                          : "md:ml-auto"
                      }`}
                    >

                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.01,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
                      >

                        {/* Hover Glow */}

                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                        <div className="relative z-10">

                          {/* Top Row */}

                          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                            <div>

                              <div className="mb-3 flex flex-wrap items-center gap-2">

                                {index === 0 && (
                                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
                                    CURRENT ROLE
                                  </span>
                                )}

                                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                                  {experience.type}
                                </span>

                              </div>

                              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                {experience.role}
                              </h3>

                              <p className="mt-2 text-lg font-medium text-blue-400">
                                {experience.company}
                              </p>

                            </div>

                            {/* Briefcase Icon */}

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400 transition-all duration-300 group-hover:rotate-6 group-hover:bg-blue-500/20">
                              <FaBriefcase />
                            </div>

                          </div>

                          {/* Meta */}

                          <div className="mb-6 flex flex-wrap gap-3 text-sm text-slate-400">

                            <span className="rounded-lg bg-white/5 px-3 py-2">
                              📅 {experience.duration}
                            </span>

                            <span className="rounded-lg bg-white/5 px-3 py-2">
                              📍 {experience.location}
                            </span>

                          </div>

                          {/* Description */}

                          <p className="mb-7 leading-7 text-slate-300">
                            {experience.description}
                          </p>

                          {/* Responsibilities */}

                          <div className="mb-7">

                            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                              <FaCode className="text-blue-400" />
                              Key Responsibilities
                            </h4>

                            <ul className="space-y-3">

                              {experience.responsibilities.map(
                                (
                                  item,
                                  responsibilityIndex
                                ) => (
                                  <motion.li
                                    key={
                                      responsibilityIndex
                                    }
                                    initial={{
                                      opacity: 0,
                                      x: -10,
                                    }}
                                    animate={
                                      isVisible
                                        ? {
                                            opacity: 1,
                                            x: 0,
                                          }
                                        : {
                                            opacity: 0,
                                            x: -10,
                                          }
                                    }
                                    transition={{
                                      duration: 0.4,
                                      delay:
                                        0.2 +
                                        responsibilityIndex *
                                          0.05,
                                    }}
                                    className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                                  >

                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                                    <span>
                                      {item}
                                    </span>

                                  </motion.li>
                                )
                              )}

                            </ul>
                          </div>

                          {/* Technologies */}

                          <div className="mb-7">

                            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                              Technologies
                            </h4>

                            <div className="flex flex-wrap gap-2">

                              {experience.technologies.map(
                                (technology) => (
                                  <motion.div
                                    key={technology}
                                    whileHover={{
                                      scale: 1.05,
                                    }}
                                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                                  >

                                    <span className="text-sm text-blue-400">
                                      {techIcons[
                                        technology
                                      ] || (
                                        <FaTools />
                                      )}
                                    </span>

                                    {technology}

                                  </motion.div>
                                )
                              )}

                            </div>
                          </div>

                          {/* Highlights */}

                          <div className="border-t border-white/10 pt-6">

                            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                              Highlights
                            </h4>

                            <div className="flex flex-wrap gap-2">

                              {experience.highlights.map(
                                (highlight) => (
                                  <span
                                    key={highlight}
                                    className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300"
                                  >
                                    #
                                    {highlight.replaceAll(
                                      " ",
                                      ""
                                    )}
                                  </span>
                                )
                              )}

                            </div>
                          </div>

                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              }
            )}

          </div>
        </div>

        {/* ===================================================
            BOTTOM SUMMARY
        =================================================== */}

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
          className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl sm:p-8"
        >

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
            <FaTools />
          </div>

          <h3 className="text-2xl font-bold text-white">
            Always Learning. Always Building.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-400">
            From full-stack MERN development and
            real-time applications to AI-powered web
            solutions, I continue to expand my skills by
            building practical and meaningful projects.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
