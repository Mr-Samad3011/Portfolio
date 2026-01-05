/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
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
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import Modal from "./Modal";

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
];

const projects = [
  {
    title: "Chat App",
    description:
      "A real-time chat app built using React, Socket.io, Node.js, and JWT authentication. Includes one-to-one chat, group chat, voice messaging, authentication, secure APIs, and scalable backend architecture.",
    status: "In Progress",
  },
  {
    title: "VillageConnect",
    description:
      "A full-stack platform to connect and empower rural communities. Features include forum posts, local services, authentication, protected routes, and a responsive UI built with modern technologies.",
    link: "https://github.com/Mr-Samad3011/code_core_internship/blob/main/villageConnect_day_35_.zip",
    demo: "https://villageconect.netlify.app",
    status: "Completed",
  },
  {
    title: "United Index",
    description:
      "United Index is a web platform where United College students can generate their own personal index page. Built using React (Vite) and Tailwind CSS with a clean, responsive, and modern UI.",
    link: "https://github.com/Mr-Samad3011/United_Abdus_index_template",
    demo: "https://unitedindexabdus.netlify.app/",
    status: "Completed",
  },
  {
    title: "Chatbot",
    description:
      "An AI-powered chatbot built using JavaScript that interacts with users through predefined logic and dynamic responses.",
    link: "https://github.com/Mr-Samad3011/chatbot1",
    status: "Completed",
  },
  {
    title: "Hospital Management System (Java Swing)",
    description:
      "A desktop-based Java Swing application for managing hospital patient records, appointments, doctors, and staff efficiently.",
    link: "https://github.com/Mr-Samad3011/hospital-management-java",
    status: "Completed",
  },
  {
    title: "Resume Builder (PHP)",
    description:
      "A PHP-based web application that allows users to enter their details and generate professional resumes in PDF format.",
    link: "https://github.com/Mr-Samad3011/resume_builder",
    status: "Completed",
  },
  {
    title: "Internship Assignments (Code Core Global)",
    description:
      "Collection of full-stack projects and tasks completed during internship at Code Core Global.",
    link: "https://github.com/Mr-Samad3011/code_core_internship",
    status: "Completed",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

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

  const randomPos = () => ({
    x: Math.random() * size.width,
    y: Math.random() * size.height,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen px-6 py-20 bg-gray-950 overflow-hidden"
    >
      {/* Floating Icons */}
      {icons.map((icon, i) => {
        const start = randomPos();
        const end = randomPos();

        return (
          <motion.div
            key={i}
            className="absolute text-blue-400 text-4xl opacity-30"
            initial={{ x: start.x, y: start.y }}
            animate={{
              x: [start.x, end.x, start.x],
              y: [start.y, end.y, start.y],
              rotate: [0, 360, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ zIndex: 10, pointerEvents: "none" }}
          >
            {icon}
          </motion.div>
        );
      })}

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-14"
        >
          🚀 Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:scale-105 transition relative"
            >
              <span
                className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${
                  project.status === "In Progress"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {project.status}
              </span>

              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 line-clamp-3 mb-4">
                {project.description}
              </p>

              <button
                onClick={() => {
                  setSelectedProject(project);
                  setShowModal(true);
                }}
                className="text-sm text-blue-500 hover:underline"
              >
                Read more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {showModal && selectedProject && (
        <Modal
          title={selectedProject.title}
          onClose={() => setShowModal(false)}
        >
          <p className="text-gray-200">{selectedProject.description}</p>

          <div className="mt-6 flex gap-4">
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                🔗 GitHub
              </a>
            )}
            {selectedProject.demo && (
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:underline"
              >
                🚀 Live Demo
              </a>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
