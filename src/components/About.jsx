import React, { useEffect, useState, useRef } from "react";
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
  FaBootstrap,
  FaServer,
  FaTools,
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

const FloatingBubble = ({ icon, sectionSize }) => {
  // Random initial positions and properties
  const startX = Math.random() * sectionSize.width;
  const startY = Math.random() * sectionSize.height;
  const size = 20 + Math.random() * 50;
  const opacity = 0.1 + Math.random() * 0.4;
  const duration = 30 + Math.random() * 10; // seconds
  const rotateAngle = 10 + Math.random() * 50;

  const xDelta = 20 + Math.random() * 30;
  const yDelta = 20 + Math.random() * 30;

  return (
    <motion.div
      className="absolute text-blue-400"
      style={{
        left: startX,
        top: startY,
        fontSize: size,
        opacity,
        pointerEvents: "none",
        zIndex: 10,
      }}
      animate={{
        x: [0, xDelta, 0, -xDelta, 0],
        y: [0, yDelta, 0, -yDelta, 0],
        rotate: [0, rotateAngle, -rotateAngle, rotateAngle, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {icon}
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const [sectionSize, setSectionSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Track section size
  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionSize({ width: rect.width, height: rect.height });
      } else {
        setSectionSize({ width: window.innerWidth, height: window.innerHeight });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bubbleCount = 25; // number of bubbles

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 px-6 py-12 overflow-hidden"
    >
      {/* 🔵 Floating Bubbles */}
      {sectionSize.width > 0 &&
        Array.from({ length: bubbleCount }).map((_, index) => (
          <FloatingBubble key={index} icon={icons[index % icons.length]} sectionSize={sectionSize} />
        ))}

      {/* 🔹 About Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:w-80 md:h-80 h-auto rounded-full overflow-hidden shadow-lg mx-auto"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <img
            src="/image/samad1.png"
            alt="Abdus Samad"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="text-center md:text-left flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-4 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
          >
            Hi, I’m <strong className="text-blue-400">Abdus Samad</strong>, a dedicated Full Stack Developer with a strong foundation in modern web technologies. I hold a BCA degree from United Institute of Management (FUGS), Prayagraj, and I’m currently pursuing a Full Stack Development internship at <strong>Code Core Global</strong>.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg mb-4 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
            }}
          >
            I specialize in building end-to-end applications using the MERN stack (MongoDB, Express.js, React, Node.js), with features like user authentication, real-time messaging, and responsive interfaces.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg mb-6 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
            }}
          >
            I’m passionate about solving real-world problems through clean code, scalable systems, and seamless UI/UX. I’m actively working on projects like a real-time Chat App and VillageConnect platform to make an impact through technology.
          </motion.p>

          <motion.a
            href="/Abdus_Samad_Resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false }}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
