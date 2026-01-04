/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
import { SiMongodb, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";

// 🔹 Bubble icons
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

// 🔹 Floating Bubble Component (Memoized so it won't re-render)
const FloatingBubble = memo(({ icon }) => {
  const randomX = Math.random() * 100; // initial horizontal %
  const randomY = Math.random() * 100; // initial vertical %
  const size = 30 + Math.random() * 40; // 30-70px
  const opacity = 0.1 + Math.random() * 0.3; // 0.1 - 0.4
  const duration = 10 + Math.random() * 10; // 60-140s
  const rotateAngle = 10 + Math.random() * 10; // slow rotation

  return (
    <motion.div
      className="absolute text-blue-400"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        fontSize: `${size}px`,
        opacity: opacity,
        pointerEvents: "none",
      }}
      animate={{
        x: [-15, 15, -15],
        y: [-10, 10, -10],
        rotate: [0, rotateAngle, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {icon}
    </motion.div>
  );
});

const Hero = () => {
  const [nameText] = useTypewriter({
    words: ["Abdus Samad"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  const [roleText] = useTypewriter({
    words: ["Full Stack Developer", "Software Developer", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 70,
    delaySpeed: 1500,
  });

  const [descText] = useTypewriter({
    words: [
      "I’m passionate about building efficient, scalable, and user-friendly web applications using the MERN stack. I focus on writing clean code, intuitive UI/UX, and solving real-world problems. I love learning new technologies and building meaningful software solutions.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 25,
    delaySpeed: 2500,
  });

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-gray-950 px-6 py-12 relative overflow-hidden"
    >
      {/* 🔵 AUTO FLOATING BUBBLES (independent of typewriter) */}
      <div className="absolute inset-0 overflow-hidden">
        {icons.map((icon, index) => (
          <FloatingBubble key={index} icon={icon} />
        ))}
      </div>

      {/* 🔹 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-20"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Hello, I&apos;m{" "}
          <span className="text-blue-400">
            {nameText}
            <Cursor cursorStyle="|" />
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6">
          {roleText}
          <Cursor cursorStyle="_" />
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed min-h-[120px]"
        >
          {descText}
          <Cursor cursorStyle="|" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link
            to="projects"
            smooth
            duration={500}
            className="cursor-pointer bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
          >
            🚀 View Projects
          </Link>

          <a
            href="/Abdus_Samad_resume.pdf"
            download
            className="bg-blue-900 text-white px-7 py-3 rounded-lg hover:bg-blue-800 transition-all hover:scale-105"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
