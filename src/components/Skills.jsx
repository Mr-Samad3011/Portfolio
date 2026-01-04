import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const Skills = () => {
  const [sectionSize, setSectionSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSectionSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const randomPosition = (width, height) => ({
    x: Math.random() * width, // full width
    y: Math.random() * height, // full height
  });

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-gray-900 px-6 py-20 overflow-hidden"
    >
      {/* 🔵 Floating Bubbles */}
      {icons.map((icon, index) => {
        const startPos = randomPosition(sectionSize.width, sectionSize.height);
        const endPos = randomPosition(sectionSize.width, sectionSize.height);

        return (
          <motion.div
            key={index}
            className="absolute text-blue-400 text-5xl opacity-30"
            initial={{ x: startPos.x, y: startPos.y, rotate: 0 }}
            animate={{
              x: [startPos.x, endPos.x, startPos.x],
              y: [startPos.y, endPos.y, startPos.y],
              rotate: [0, 360, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ zIndex: 20 }} // bubbles cards ke upar
          >
            {icon}
          </motion.div>
        );
      })}

      {/* 🔹 Skill Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-14"
        >
          🛠️ My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>JWT Authentication</li>
              <li>REST APIs</li>
              <li>Socket.io</li>
              <li>PHP</li>
            </ul>
          </motion.div>

          {/* Database */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Database
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>MySQL</li>
              <li>XAMPP</li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Tools
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Netlify / Render</li>
            </ul>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Others
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Responsive Design</li>
              <li>Problem Solving</li>
              <li>API Integration</li>
              <li>Team Collaboration</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
