import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

/* =========================================================
   TECHNOLOGY ICONS
========================================================= */

const techIcons = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
  },
  {
    icon: <SiJsonwebtokens />,
    name: "JWT",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
];

/* =========================================================
   FLOATING TECHNOLOGY BUBBLE
========================================================= */

const FloatingBubble = ({ item, index, sectionSize }) => {
  const position = useMemo(() => {
    const seed = index + 1;

    return {
      x:
        (seed * 97) %
        Math.max(sectionSize.width - 80, 100),

      y:
        (seed * 137) %
        Math.max(sectionSize.height - 80, 100),

      size: 20 + ((seed * 17) % 24),

      duration: 12 + ((seed * 3) % 8),

      xMove: 15 + ((seed * 11) % 30),

      yMove: 15 + ((seed * 7) % 30),

      rotate: 8 + ((seed * 13) % 25),
    };
  }, [index, sectionSize.width, sectionSize.height]);

  return (
    <motion.div
      className="pointer-events-none absolute text-blue-400/10"
      style={{
        left: position.x,
        top: position.y,
        fontSize: position.size,
        zIndex: 0,
      }}
      animate={{
        x: [
          0,
          position.xMove,
          0,
          -position.xMove,
          0,
        ],

        y: [
          0,
          position.yMove,
          0,
          -position.yMove,
          0,
        ],

        rotate: [
          0,
          position.rotate,
          -position.rotate,
          position.rotate,
          0,
        ],
      }}
      transition={{
        duration: position.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {item.icon}
    </motion.div>
  );
};

/* =========================================================
   MAIN ABOUT COMPONENT
========================================================= */

const About = () => {
  const sectionRef = useRef(null);

  const [sectionSize, setSectionSize] = useState({
    width: 0,
    height: 0,
  });

  /* =======================================================
     RESPONSIVE SECTION SIZE
  ======================================================= */

  useEffect(() => {
    const updateSize = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      setSectionSize({
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
     ABOUT HIGHLIGHTS
  ======================================================= */

  const highlights = [
    {
      icon: <Code2 size={20} />,
      title: "Full Stack Development",
      description:
        "Building complete web applications from frontend interfaces to backend APIs and databases.",
    },

    {
      icon: <BriefcaseBusiness size={20} />,
      title: "Real-World Projects",
      description:
        "Working on practical applications focused on authentication, communication, dashboards and community platforms.",
    },

    {
      icon: <Sparkles size={20} />,
      title: "Modern Technologies",
      description:
        "Using React, Node.js, Express, MongoDB, JWT, Tailwind CSS and other modern development tools.",
    },
  ];

  /* =======================================================
     FLOATING BUBBLE COUNT
  ======================================================= */

  const bubbleCount = 24;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gray-950 px-5 py-20 sm:px-8 lg:px-12"
    >
      {/* ===================================================
          BACKGROUND EFFECTS
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue Glow */}

        <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-3xl" />

        {/* Purple Glow */}

        <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-3xl" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* ===================================================
          FLOATING TECHNOLOGY ICONS
      =================================================== */}

      {sectionSize.width > 0 &&
        Array.from({ length: bubbleCount }).map(
          (_, index) => (
            <FloatingBubble
              key={`about-tech-${index}`}
              item={
                techIcons[index % techIcons.length]
              }
              index={index}
              sectionSize={sectionSize}
            />
          )
        )}

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          className="mb-14 text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <Sparkles size={16} />

            Get to know me
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About{" "}
            <span className="text-blue-500">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A Full Stack Developer and MCA final-year
            student focused on building practical,
            scalable and user-friendly software
            solutions.
          </p>
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =================================================
              PROFILE CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">

              {/* Glow */}

              <div className="absolute inset-8 rounded-[2rem] bg-blue-600/20 blur-3xl" />

              {/* Main Card */}

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900/80 p-5 shadow-2xl backdrop-blur-xl">

                {/* Top Label */}

                <div className="absolute left-8 top-8 z-10">
                  <div className="rounded-full border border-blue-400/20 bg-gray-950/80 px-4 py-2 text-xs font-semibold text-blue-400 backdrop-blur-md">
                    Full Stack Developer
                  </div>
                </div>

                {/* Image */}

                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-600/20 via-gray-900 to-purple-600/20">
                  <img
                    src="/image/samad1.png"
                    alt="Abdus Samad - Full Stack Developer"
                    className="mx-auto h-[380px] w-full object-contain object-bottom transition duration-700 hover:scale-105 sm:h-[430px]"
                  />

                  {/* Image Bottom Gradient */}

                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950/90 to-transparent" />
                </div>

                {/* Profile Info */}

                <div className="relative z-10 -mt-8 px-3 pb-2">
                  <h3 className="text-2xl font-bold text-white">
                    Abdus Samad
                  </h3>

                  <p className="mt-1 text-sm text-blue-400">
                    Full Stack Developer
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                    <MapPin
                      size={16}
                      className="text-blue-500"
                    />

                    <span>India</span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING STATUS
              ================================================= */}

              <motion.div
                className="absolute -bottom-5 -right-3 rounded-2xl border border-white/10 bg-gray-900/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-5"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">

                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Open to opportunities
                    </p>

                    <p className="text-[11px] text-gray-500">
                      Available for development roles
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              ABOUT CONTENT
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >

            {/* =================================================
                HEADING
            ================================================= */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Who I am
              </p>

              <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                I build software that turns{" "}
                <span className="text-blue-500">
                  ideas into reality.
                </span>
              </h3>
            </motion.div>

            {/* =================================================
                PARAGRAPH 1
            ================================================= */}

            <motion.p
              className="mt-6 text-base leading-8 text-gray-400 sm:text-lg"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              Hi, I’m{" "}
              <strong className="font-semibold text-white">
                Abdus Samad
              </strong>
              , a dedicated Full Stack Developer with
              a strong foundation in modern web
              technologies. I have completed my{" "}
              <strong className="text-blue-400">
                Bachelor of Computer Applications
                (BCA)
              </strong>{" "}
              and I’m currently pursuing my{" "}
              <strong className="text-blue-400">
                Master of Computer Applications (MCA)
              </strong>
              , currently in my final year. Alongside
              my academics, I’m gaining practical
              experience through internships and
              real-world development projects.
            </motion.p>

            {/* =================================================
                PARAGRAPH 2
            ================================================= */}

            <motion.p
              className="mt-4 text-base leading-8 text-gray-400 sm:text-lg"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              I specialize in the{" "}
              <strong className="text-blue-400">
                MERN stack
              </strong>{" "}
              — MongoDB, Express.js, React and Node.js.
              My development work includes
              authentication systems, REST APIs,
              real-time communication, responsive
              interfaces, dashboards and
              database-driven applications.
            </motion.p>

            {/* =================================================
                PARAGRAPH 3
            ================================================= */}

            <motion.p
              className="mt-4 text-base leading-8 text-gray-400 sm:text-lg"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              I enjoy solving real-world problems
              through clean code, scalable architecture
              and thoughtful user experiences. I’m
              particularly interested in Full Stack,
              Backend and Software Development roles
              where I can continue learning while
              contributing to meaningful products.
            </motion.p>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.05]"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                EDUCATION + PROFESSIONAL FOCUS
            ================================================= */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* =================================================
                  MCA EDUCATION
              ================================================= */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="rounded-2xl border border-white/10 bg-gray-900/60 p-5"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Education
                    </p>

                    <h4 className="mt-1 font-semibold text-white">
                      Master of Computer Applications
                      (MCA)
                    </h4>

                    <p className="mt-1 text-sm text-gray-400">
                      United Institute of Management
                    </p>

                    <div className="mt-2 inline-flex items-center rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-300">
                      Final Year
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      Currently pursuing
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* =================================================
                  PROFESSIONAL FOCUS
              ================================================= */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="rounded-2xl border border-white/10 bg-gray-900/60 p-5"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <BriefcaseBusiness size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Professional Focus
                    </p>

                    <h4 className="mt-1 font-semibold text-white">
                      Full Stack Development
                    </h4>

                    <p className="mt-1 text-sm text-gray-400">
                      Building practical web applications
                      while gaining professional development
                      experience.
                    </p>

                    <div className="mt-2 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">
                      Open to Opportunities
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

            {/* =================================================
                TECHNOLOGY STACK
            ================================================= */}

            <motion.div
              className="mt-8"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {techIcons.map((item) => (
                  <div
                    key={item.name}
                    title={item.name}
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <span className="text-base">
                      {item.icon}
                    </span>

                    <span>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                CTA
            ================================================= */}

            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              {/* Resume */}

              <motion.a
                href="/abdus_samad_resume.pdf"
                download
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Download Resume

                <ArrowRight size={18} />
              </motion.a>

              {/* Projects */}

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-gray-200 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                Explore My Projects

                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM TECH STRIP
        =================================================== */}

        <motion.div
          className="mt-20 border-t border-white/10 pt-8"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <p className="text-center text-sm text-gray-500 md:text-left">
              MCA final-year student focused on
              learning, building and solving
              real-world problems.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Frontend",
                "Backend",
                "REST APIs",
                "Authentication",
                "Databases",
                "Real-time Apps",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
