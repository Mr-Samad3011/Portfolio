/* eslint-disable no-unused-vars */

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaServer,
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
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Code2,
  Sparkles,
} from "lucide-react";

// ======================================================
// TECHNOLOGY ICONS
// ======================================================

const techIcons = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaDatabase />, name: "Database" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiJsonwebtokens />, name: "JWT" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaServer />, name: "Backend" },
];

// ======================================================
// FLOATING TECH BUBBLE
// ======================================================

const FloatingBubble = memo(({ data, index }) => {
  const positions = useMemo(
    () => ({
      left: `${5 + ((index * 17) % 90)}%`,
      top: `${10 + ((index * 23) % 80)}%`,
      size: 22 + ((index * 13) % 28),
      duration: 12 + ((index * 3) % 10),
      x: 12 + ((index * 7) % 20),
      y: 15 + ((index * 5) % 20),
      rotate: 15 + ((index * 11) % 35),
    }),
    [index]
  );

  return (
    <motion.div
      className="
        absolute
        pointer-events-none
        select-none
        text-blue-400/20
      "
      style={{
        left: positions.left,
        top: positions.top,
        fontSize: `${positions.size}px`,
      }}
      animate={{
        x: [0, positions.x, 0, -positions.x, 0],
        y: [0, -positions.y, 0, positions.y, 0],
        rotate: [0, positions.rotate, 0, -positions.rotate, 0],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{
        duration: positions.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {data.icon}
    </motion.div>
  );
});

FloatingBubble.displayName = "FloatingBubble";

// ======================================================
// HERO
// ======================================================

const Hero = () => {
  // ----------------------------------------------------
  // NAME TYPEWRITER
  // ----------------------------------------------------

  const [nameText] = useTypewriter({
    words: ["Abdus Samad"],
    loop: true,
    typeSpeed: 110,
    deleteSpeed: 70,
    delaySpeed: 2500,
  });

  // ----------------------------------------------------
  // ROLE TYPEWRITER
  // ----------------------------------------------------

  const [roleText] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Backend Developer",
      "Software Developer",
      "MERN Stack Developer",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1800,
  });

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        bg-slate-950
        px-4
        pt-24
        pb-16
        text-white
        sm:px-6
        lg:px-8
      "
    >
      {/* ==================================================
          BACKGROUND EFFECTS
      ================================================== */}

      {/* Blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/20
          blur-[120px]
        "
      />

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ==================================================
          FLOATING TECHNOLOGY ICONS
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <FloatingBubble
            key={tech.name}
            data={tech}
            index={index}
          />
        ))}
      </div>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-1
          sm:px-2
          lg:px-4
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
          "
        >
          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Availability badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-400
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-green-400
                  "
                />
              </span>

              Open to opportunities
            </motion.div>

            {/* Greeting */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mb-3 text-lg text-slate-400 sm:text-xl"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}

            <h1
              className="
                mb-5
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-blue-100
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                {nameText}
              </span>

              <Cursor cursorStyle="|" />
            </h1>

            {/* Role */}

            <div
              className="
                mb-6
                flex
                min-h-[42px]
                items-center
                gap-3
              "
            >
              <Code2
                className="text-blue-400"
                size={28}
              />

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-200
                  sm:text-3xl
                "
              >
                {roleText}

                <span className="text-blue-400">
                  <Cursor cursorStyle="_" />
                </span>
              </h2>
            </div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                mb-8
                max-w-2xl
                text-base
                leading-8
                text-slate-400
                sm:text-lg
              "
            >
              I build modern, scalable and user-focused web
              applications using React, Node.js, Express and
              MongoDB. I enjoy turning real-world problems into
              clean, functional software solutions.
            </motion.p>

            {/* ==================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Projects */}

              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-blue-500/30
                "
              >
                <span>View My Projects</span>

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Resume */}

              <a
                href="/abdus_samad_resume.pdf"
                download
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-700
                  bg-white/[0.03]
                  px-6
                  py-3.5
                  font-semibold
                  text-slate-200
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/50
                  hover:bg-blue-500/10
                  hover:text-white
                "
              >
                <Download
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />

                Download Resume
              </a>
            </motion.div>

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="
                mt-8
                flex
                items-center
                gap-4
              "
            >
              <span className="text-sm text-slate-500">
                Find me on
              </span>

              {/* GitHub */}

              <a
                href="https://github.com/Mr-Samad3011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:text-white
                "
              >
                <Github
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/abdus-samad-7a6864304"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/50
                  hover:bg-cyan-500/10
                  hover:text-white
                "
              >
                <Linkedin
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            {/* Outer Glow */}

            <div
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                bg-blue-600/20
                blur-[80px]
                sm:h-[420px]
                sm:w-[420px]
              "
            />

            {/* Main Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                min-h-[450px]
                w-full
                max-w-[430px]
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-gradient-to-br
                from-slate-900
                via-slate-900
                to-blue-950/70
                p-6
                shadow-2xl
                shadow-blue-950/40
              "
            >
              {/* Decorative circles */}

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  border
                  border-blue-400/10
                "
              />

              <div
                className="
                  absolute
                  -bottom-20
                  -left-20
                  h-48
                  w-48
                  rounded-full
                  border
                  border-cyan-400/10
                "
              />

              {/* Code Window */}

              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-950/80
                  shadow-xl
                "
              >
                {/* Window header */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/10
                    bg-white/[0.02]
                    px-4
                    py-3
                  "
                >
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />

                  <span className="ml-auto text-xs text-slate-600">
                    developer.js
                  </span>
                </div>

                {/* Code */}

                <div
                  className="
                    p-6
                    font-mono
                    text-sm
                    leading-8
                    text-slate-400
                  "
                >
                  <p>
                    <span className="text-purple-400">
                      const
                    </span>{" "}
                    <span className="text-blue-300">
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-300">
                      name
                    </span>
                    :{" "}
                    <span className="text-green-300">
                      "Abdus Samad"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-300">
                      role
                    </span>
                    :{" "}
                    <span className="text-green-300">
                      "Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-300">
                      stack
                    </span>
                    : [
                  </p>

                  <p className="pl-10 text-green-300">
                    "React",
                  </p>

                  <p className="pl-10 text-green-300">
                    "Node.js",
                  </p>

                  <p className="pl-10 text-green-300">
                    "Express",
                  </p>

                  <p className="pl-10 text-green-300">
                    "MongoDB",
                  </p>

                  <p className="pl-5">],</p>

                  <p className="pl-5">
                    <span className="text-cyan-300">
                      passion
                    </span>
                    :{" "}
                    <span className="text-green-300">
                      "Building useful products"
                    </span>
                  </p>

                  <p>{"}"}</p>
                </div>
              </div>

              {/* Floating tech card */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-5
                  bottom-20
                  z-20
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/95
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-blue-400
                  "
                >
                  <FaReact size={22} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Primary Stack
                  </p>

                  <p className="text-sm font-semibold text-white">
                    MERN Stack
                  </p>
                </div>
              </motion.div>

              {/* Floating status card */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-4
                  bottom-8
                  z-20
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/95
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <Sparkles
                  size={20}
                  className="text-cyan-400"
                />

                <div>
                  <p className="text-xs text-slate-500">
                    Focus
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Real-world solutions
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ==================================================
            SCROLL INDICATOR
        ================================================== */}

        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-slate-500
            transition-colors
            hover:text-blue-400
            md:flex
          "
        >
          <span className="text-[10px] uppercase tracking-[3px]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={17} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
