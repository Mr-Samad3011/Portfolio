import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
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
import { SiMongodb, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";

const icons = [
  <FaBriefcase />,
  <FaCode />,
  <FaReact />,
  <FaNodeJs />,
  <FaJsSquare />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiTailwindcss />,
  <FaBootstrap />,
  <FaServer />,
  <FaPhp />,
  <FaDatabase />,
  <SiMongodb />,
  <SiMysql />,
  <FaGitAlt />,
  <SiPostman />,
  <FaTools />,
];

const ICON_SIZE = 60;

const Experience = () => {
  const sectionRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [seed, setSeed] = useState(0);

  // 📐 Section size
  useEffect(() => {
    const updateSize = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // 👀 Scroll enter → animation restart (smooth)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeed(Math.random());
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🎯 Safe random position
  const randomPos = () => ({
    x: Math.random() * (size.width - ICON_SIZE),
    y: Math.random() * (size.height - ICON_SIZE),
  });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full min-h-screen bg-gray-950 px-6 py-20 overflow-hidden"
    >
      {/* 🎈 FLOATING ICONS */}
      {icons.map((icon, index) => {
        const start = randomPos();
        const end = randomPos();

        return (
          <motion.div
            key={`${seed}-${index}`}
            className="absolute text-blue-500 opacity-25"
            style={{
              fontSize: "3rem",
              pointerEvents: "none",
              zIndex: 10,
            }}
            initial={{ x: start.x, y: start.y }}
            animate={{
              x: [start.x, end.x, start.x],
              y: [start.y, end.y, start.y],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 30 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icon}
          </motion.div>
        );
      })}

      {/* 📄 CONTENT */}
      <div className="relative z-20 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        >
          🧑‍💻 Work Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="bg-blue-900/90 rounded-xl p-6 shadow-xl border border-blue-700"
        >
          <h3 className="text-xl font-semibold text-blue-300">
            Full Stack Development Intern
          </h3>

          <p className="text-gray-200 mt-1">
            <strong>Company:</strong> Code Core Global
          </p>

          <p className="text-gray-200">
            <strong>Duration:</strong> May 2025 – Present
          </p>

          <p className="mt-3 text-gray-300 leading-relaxed">
            Working as a Full Stack Developer Intern where I build real-world
            MERN stack applications including authentication systems,
            dashboards, forums, REST APIs, and real-time features. Collaborating
            in a structured internship with weekly assignments and project
            deadlines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
