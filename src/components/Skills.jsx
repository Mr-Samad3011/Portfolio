/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
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
  FaTools,
  FaServer,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

/* =========================================================
   FLOATING ICONS
========================================================= */

const icons = [
  <FaReact />,
  <FaJsSquare />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiTailwindcss />,
  <FaBootstrap />,
  <FaNodeJs />,
  <FaServer />,
  <FaPhp />,
  <FaDatabase />,
  <SiMongodb />,
  <SiMysql />,
  <FaGitAlt />,
  <SiPostman />,
  <FaTools />,
];

/* =========================================================
   SKILL DESCRIPTIONS
========================================================= */

const skillDescriptions = {
  React:
    "A JavaScript library I use to build modern, reusable and interactive user interfaces with component-based architecture.",

  "JavaScript (ES6+)":
    "My primary frontend language for building dynamic interfaces, handling APIs, DOM interactions and application logic.",

  "HTML5 & CSS3":
    "Core web technologies I use to structure semantic webpages and create responsive, accessible and modern layouts.",

  "Tailwind CSS":
    "A utility-first CSS framework I use to quickly build responsive and consistent interfaces with reusable utility classes.",

  Bootstrap:
    "A responsive UI framework that helps me build layouts, components and mobile-friendly interfaces efficiently.",

  Java:
    "An object-oriented programming language I use for programming fundamentals, problem solving and backend-oriented development.",

  JavaScript:
    "A versatile programming language I use across frontend and backend development for building full-stack applications.",

  Python:
    "A general-purpose programming language I use for scripting, programming fundamentals, automation and application development.",

  "Node.js":
    "A JavaScript runtime that I use to build scalable backend applications and real-time services.",

  "Express.js":
    "A lightweight Node.js framework I use to create REST APIs, middleware, authentication systems and backend services.",

  "JWT Authentication":
    "A token-based authentication mechanism I use to secure APIs and implement protected routes in full-stack applications.",

  "REST APIs":
    "I use REST architecture to design communication between frontend applications and backend services.",

  "Socket.io":
    "A real-time communication library I use for instant messaging, notifications and live application features.",

  PHP:
    "A server-side scripting language used for developing dynamic web applications and backend functionality.",

  MongoDB:
    "A NoSQL database I use for storing flexible JSON-like application data in full-stack applications.",

  Mongoose:
    "An ODM library for MongoDB that I use for schemas, models, validation and database operations.",

  MySQL:
    "A relational database system I use for structured data, SQL queries, relationships and backend applications.",

  XAMPP:
    "A local development environment I use for running Apache, PHP and MySQL applications on my machine.",

  "Git & GitHub":
    "I use Git and GitHub for version control, collaboration, source-code management and project deployment workflows.",

  "VS Code":
    "My primary code editor for developing, debugging and managing full-stack applications.",

  Postman:
    "An API development and testing tool I use to test endpoints, authentication, request bodies and responses.",

  "Netlify / Render":
    "Deployment platforms I use for hosting frontend and backend applications and connecting production services.",

  "Responsive Design":
    "I build interfaces that adapt smoothly across mobile, tablet and desktop screen sizes.",

  "Problem Solving":
    "I focus on breaking complex development problems into smaller logical steps and implementing practical solutions.",

  "API Integration":
    "I integrate frontend applications with backend services and third-party APIs to exchange and process data.",

  "Team Collaboration":
    "I use Git, GitHub and clear communication practices to collaborate effectively on software projects.",
};

/* =========================================================
   SKILL DATA
========================================================= */

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    title: "Language",
    skills: ["Java", "JavaScript", "Python"],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "REST APIs",
      "Socket.io",
      "PHP",
    ],
  },

  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "MySQL", "XAMPP"],
  },

  {
    title: "Tools",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Netlify / Render",
    ],
  },

  {
    title: "Others",
    skills: [
      "Responsive Design",
      "Problem Solving",
      "API Integration",
      "Team Collaboration",
    ],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Skills = () => {
  const [sectionSize, setSectionSize] = useState({
    width:
      typeof window !== "undefined"
        ? window.innerWidth
        : 1200,

    height:
      typeof window !== "undefined"
        ? window.innerHeight
        : 800,
  });

  const [selectedSkill, setSelectedSkill] = useState(null);

  /* =======================================================
     RESPONSIVE SIZE
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      setSectionSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     ESC CLOSE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedSkill(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     BODY SCROLL LOCK WHEN POPUP IS OPEN
  ======================================================= */

  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedSkill]);

  /* =======================================================
     RANDOM POSITION
  ======================================================= */

  const randomPosition = (width, height) => ({
    x: Math.random() * Math.max(width - 80, 100),
    y: Math.random() * Math.max(height - 120, 100),
  });

  return (
    <section
      id="skills"
      className="
        relative
        w-full
        min-h-screen
        bg-gray-950
        px-6
        py-20
        overflow-hidden
      "
    >
      {/* ===================================================
          FLOATING BACKGROUND ICONS
      =================================================== */}

      {icons.map((icon, index) => {
        const startPos = randomPosition(
          sectionSize.width,
          sectionSize.height
        );

        const endPos = randomPosition(
          sectionSize.width,
          sectionSize.height
        );

        return (
          <motion.div
            key={index}
            className="
              absolute
              text-blue-400
              text-5xl
              opacity-20
              pointer-events-none
            "
            initial={{
              x: startPos.x,
              y: startPos.y,
              rotate: 0,
            }}
            animate={{
              x: [
                startPos.x,
                endPos.x,
                startPos.x,
              ],

              y: [
                startPos.y,
                endPos.y,
                startPos.y,
              ],

              rotate: [0, 360, 0],

              opacity: [
                0.15,
                0.35,
                0.15,
              ],
            }}
            transition={{
              duration: 18 + index * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              zIndex: 0,
            }}
          >
            {icon}
          </motion.div>
        );
      })}

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          text-center
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
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
        >
          <p
            className="
              text-blue-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-3
            "
          >
            What I Work With
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mb-4
            "
          >
            🛠️ My Skills
          </h2>

          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              mb-14
            "
          >
            Technologies and tools I use to design,
            develop and deploy modern full-stack
            applications.
          </p>
        </motion.div>

        {/* =================================================
            SKILL GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            text-left
          "
        >
          {skillCategories.map(
            (category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  bg-gray-800/80
                  backdrop-blur-sm
                  border
                  border-gray-700
                  p-6
                  rounded-2xl
                  shadow-xl
                  hover:border-blue-500/60
                  transition-all
                  duration-300
                "
              >
                {/* CARD GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-blue-500/5
                    opacity-0
                    group-hover:opacity-100
                    transition
                    pointer-events-none
                  "
                />

                {/* CATEGORY */}

                <h3
                  className="
                    relative
                    text-xl
                    font-semibold
                    text-blue-400
                    mb-5
                  "
                >
                  {category.title}
                </h3>

                {/* SKILLS */}

                <div
                  className="
                    relative
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {category.skills.map((skill) => (
                    <motion.button
                      key={skill}
                      type="button"
                      onClick={() =>
                        setSelectedSkill(
                          selectedSkill === skill
                            ? null
                            : skill
                        )
                      }
                      whileHover={{
                        scale: 1.08,
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      className={`
                        relative
                        px-3
                        py-2
                        rounded-lg
                        text-sm
                        border
                        cursor-pointer
                        transition-all
                        duration-300

                        ${
                          selectedSkill === skill
                            ? `
                              bg-blue-500
                              text-white
                              border-blue-400
                              shadow-lg
                              shadow-blue-500/30
                            `
                            : `
                              bg-gray-900/70
                              text-gray-300
                              border-gray-700
                              hover:text-white
                              hover:border-blue-400
                              hover:bg-blue-500/10
                            `
                        }
                      `}
                    >
                      {skill}

                      <span
                        className="
                          absolute
                          -top-1
                          -right-1
                          w-2
                          h-2
                          rounded-full
                          bg-blue-400
                          opacity-0
                          scale-0
                          group-hover:opacity-60
                          group-hover:scale-100
                          transition
                        "
                      />
                    </motion.button>
                  ))}
                </div>

                <p
                  className="
                    relative
                    mt-5
                    text-xs
                    text-gray-500
                  "
                >
                  Click a skill to explore
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* ===================================================
          SKILL POPUP
      =================================================== */}

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              p-3
              sm:p-5
              overflow-hidden
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            {/* =============================================
                BACKDROP
            ============================================= */}

            <motion.div
              className="
                absolute
                inset-0
                bg-black/80
                backdrop-blur-md
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setSelectedSkill(null)
              }
            />

            {/* =============================================
                ANIMATED OUTER GLOW
            ============================================= */}

            <motion.div
              className="
                absolute
                w-[70vw]
                h-[50vh]
                max-w-[600px]
                max-h-[450px]
                bg-blue-500/20
                blur-[80px]
                rounded-full
                pointer-events-none
              "
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =============================================
                POPUP CONTAINER
            ============================================= */}

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="skill-popup-title"
              className="
                relative
                z-10
                w-full
                max-w-[560px]
                max-h-[calc(100vh-24px)]
                sm:max-h-[calc(100vh-40px)]
                flex
                items-center
                justify-center
              "
              initial={{
                opacity: 0,
                scale: 0.75,
                y: 40,
                rotate: -3,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                y: 30,
                rotate: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 230,
                damping: 20,
              }}
            >
              {/* =========================================
                  GLOWING FRAME
              ========================================= */}

              <motion.div
                className="
                  absolute
                  -inset-[3px]
                  sm:-inset-[5px]
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-300
                  to-blue-600
                  blur-[3px]
                  opacity-70
                  pointer-events-none
                "
                style={{
                  clipPath: `
                    polygon(
                      2% 8%,
                      8% 3%,
                      15% 6%,
                      23% 2%,
                      31% 7%,
                      39% 3%,
                      47% 6%,
                      55% 2%,
                      63% 7%,
                      71% 3%,
                      80% 6%,
                      88% 2%,
                      97% 8%,
                      94% 18%,
                      98% 27%,
                      94% 36%,
                      98% 45%,
                      94% 54%,
                      98% 63%,
                      94% 72%,
                      98% 82%,
                      93% 91%,
                      86% 96%,
                      78% 93%,
                      69% 98%,
                      60% 94%,
                      51% 98%,
                      42% 94%,
                      33% 98%,
                      24% 94%,
                      15% 97%,
                      7% 92%,
                      3% 84%,
                      6% 74%,
                      2% 64%,
                      6% 54%,
                      2% 44%,
                      6% 34%,
                      2% 24%,
                      6% 15%
                    )
                  `,
                }}
                animate={{
                  opacity: [0.45, 0.9, 0.45],
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* =========================================
                  OUTER FRAME
              ========================================= */}

              <div
                className="
                  relative
                  w-full
                  max-h-[calc(100vh-24px)]
                  sm:max-h-[calc(100vh-40px)]
                  bg-[#111827]
                  p-[5px]
                  sm:p-2
                  overflow-hidden
                "
                style={{
                  clipPath: `
                    polygon(
                      2% 8%,
                      8% 3%,
                      15% 6%,
                      23% 2%,
                      31% 7%,
                      39% 3%,
                      47% 6%,
                      55% 2%,
                      63% 7%,
                      71% 3%,
                      80% 6%,
                      88% 2%,
                      97% 8%,
                      94% 18%,
                      98% 27%,
                      94% 36%,
                      98% 45%,
                      94% 54%,
                      98% 63%,
                      94% 72%,
                      98% 82%,
                      93% 91%,
                      86% 96%,
                      78% 93%,
                      69% 98%,
                      60% 94%,
                      51% 98%,
                      42% 94%,
                      33% 98%,
                      24% 94%,
                      15% 97%,
                      7% 92%,
                      3% 84%,
                      6% 74%,
                      2% 64%,
                      6% 54%,
                      2% 44%,
                      6% 34%,
                      2% 24%,
                      6% 15%
                    )
                  `,
                }}
              >
                {/* =======================================
                    PAPER
                ======================================= */}

                <div
                  className="
                    relative
                    bg-[#f7f3e8]
                    text-gray-900
                    w-full
                    max-h-[calc(100vh-34px)]
                    sm:max-h-[calc(100vh-56px)]
                    overflow-y-auto
                    overscroll-contain
                    px-5
                    py-6
                    sm:px-8
                    sm:py-8
                    md:px-10
                    md:py-9
                    scrollbar-thin
                    scrollbar-thumb-blue-400
                    scrollbar-track-gray-200
                    shadow-2xl
                  "
                  style={{
                    clipPath: `
                      polygon(
                        3% 8%,
                        9% 4%,
                        17% 7%,
                        25% 3%,
                        34% 7%,
                        43% 4%,
                        52% 7%,
                        61% 3%,
                        70% 7%,
                        79% 4%,
                        88% 7%,
                        96% 4%,
                        94% 17%,
                        97% 27%,
                        94% 38%,
                        97% 49%,
                        94% 60%,
                        97% 71%,
                        93% 82%,
                        96% 92%,
                        87% 95%,
                        78% 92%,
                        68% 97%,
                        58% 93%,
                        48% 97%,
                        38% 93%,
                        28% 97%,
                        18% 93%,
                        8% 97%,
                        4% 90%,
                        7% 80%,
                        3% 69%,
                        6% 58%,
                        3% 47%,
                        6% 36%,
                        3% 25%,
                        7% 15%
                      )
                    `,
                  }}
                >
                  {/* =====================================
                      PAPER TEXTURE
                  ===================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      pointer-events-none
                      opacity-[0.12]
                    "
                    style={{
                      backgroundImage: `
                        radial-gradient(
                          circle at 20% 20%,
                          #000 0.7px,
                          transparent 0.8px
                        ),
                        radial-gradient(
                          circle at 80% 70%,
                          #000 0.6px,
                          transparent 0.8px
                        )
                      `,
                      backgroundSize:
                        "9px 9px, 13px 13px",
                    }}
                  />

                  {/* =====================================
                      PAPER LIGHT
                  ===================================== */}

                  <div
                    className="
                      absolute
                      -top-20
                      -right-20
                      w-52
                      h-52
                      rounded-full
                      bg-blue-300/20
                      blur-3xl
                      pointer-events-none
                    "
                  />

                  {/* =====================================
                      CONTENT
                  ===================================== */}

                  <div className="relative">
                    {/* =================================
                        HEADER
                    ================================= */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        mb-5
                        sm:mb-7
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          sm:tracking-[0.3em]
                          text-blue-600
                        "
                      >
                        Skill Note
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedSkill(null)
                        }
                        className="
                          flex
                          items-center
                          justify-center
                          w-8
                          h-8
                          sm:w-9
                          sm:h-9
                          shrink-0
                          rounded-full
                          bg-gray-900
                          text-white
                          text-lg
                          shadow-md
                          hover:bg-blue-600
                          hover:scale-110
                          transition-all
                        "
                        aria-label="Close skill popup"
                      >
                        ×
                      </button>
                    </div>

                    {/* =================================
                        TITLE
                    ================================= */}

                    <h3
                      id="skill-popup-title"
                      className="
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        font-bold
                        text-gray-900
                        mb-3
                        sm:mb-5
                        tracking-tight
                        break-words
                      "
                      style={{
                        fontFamily:
                          "'Comic Sans MS', 'Segoe Print', cursive",
                      }}
                    >
                      {selectedSkill}
                    </h3>

                    {/* =================================
                        UNDERLINE
                    ================================= */}

                    <svg
                      viewBox="0 0 500 25"
                      className="
                        w-full
                        max-w-md
                        h-4
                        sm:h-5
                        mb-4
                        sm:mb-6
                        overflow-visible
                      "
                    >
                      <motion.path
                        d="
                          M 5 13
                          C 45 7, 75 18, 115 11
                          S 180 8, 220 14
                          S 290 17, 330 10
                          S 400 8, 495 13
                        "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="text-blue-500"
                        initial={{
                          pathLength: 0,
                        }}
                        animate={{
                          pathLength: 1,
                        }}
                        transition={{
                          duration: 0.8,
                        }}
                      />
                    </svg>

                    {/* =================================
                        DESCRIPTION
                    ================================= */}

                    <p
                      className="
                        text-sm
                        sm:text-base
                        md:text-lg
                        leading-7
                        sm:leading-8
                        text-gray-700
                      "
                      style={{
                        fontFamily:
                          "'Comic Sans MS', 'Segoe Print', cursive",
                      }}
                    >
                      {skillDescriptions[selectedSkill]}
                    </p>

                    {/* =================================
                        FOOTER
                    ================================= */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        mt-6
                        sm:mt-8
                        pb-1
                      "
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-blue-500
                          "
                        />

                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-blue-400/60
                          "
                        />

                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-blue-300/40
                          "
                        />
                      </div>

                      <span
                        className="
                          text-[9px]
                          sm:text-xs
                          text-gray-400
                          uppercase
                          tracking-widest
                        "
                      >
                        01 / Skill
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
