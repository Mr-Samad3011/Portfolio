import React, { useState } from 'react';
import Modal from './Modal';

const projects = [
  {
    title: 'Chat App',
    description:
      'A real-time chat app built using React, Socket.io, Node.js, and JWT authentication. Includes one-to-one chat, group chat, voice messaging, authentication, secure APIs, and scalable backend architecture.',
    inProgress: true,
  },
  {
    title: 'VillageConnect',
    description:
      'A full-stack platform to connect and empower rural communities. Features include forum posts, local services, authentication, protected routes, and a responsive UI built with modern technologies.',
    link: 'https://github.com/Mr-Samad3011/code_core_internship/blob/main/villageConnect_day_35_.zip',
    demo: 'https://villageconect.netlify.app',
  },
  {
    title: 'United Index',
    description:
      'United Index is a web platform where United College students can generate their own personal index page. Built using React (Vite) and Tailwind CSS with a clean, responsive, and modern UI.',
    link: 'https://github.com/Mr-Samad3011/United_Abdus_index_template',
    demo: 'https://unitedindexabdus.netlify.app/',
  },
  {
    title: 'Chatbot',
    description:
      'An AI-powered chatbot built using JavaScript that interacts with users through predefined logic and dynamic responses.',
    link: 'https://github.com/Mr-Samad3011/chatbot1',
  },
  {
    title: 'Hospital Management System (Java Swing)',
    description:
      'A desktop-based Java Swing application for managing hospital patient records, appointments, doctors, and staff efficiently.',
    link: 'https://github.com/Mr-Samad3011/hospital-management-java',
  },
  {
    title: 'Resume Builder (PHP)',
    description:
      'A PHP-based web application that allows users to enter their details and generate professional resumes in PDF format.',
    link: 'https://github.com/Mr-Samad3011/resume_builder',
  },
  { title: 'Internship Assignments (Code Core Global)', description: 'Collection of full-stack projects and tasks completed during internship at Code Core Global.', link: 'https://github.com/Mr-Samad3011/code_core_internship', },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-6 py-16 bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:shadow-xl transition-all flex flex-col"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>

              {/* 🔹 Only 3 lines visible */}
              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              <button
                onClick={() => openModal(project)}
                className="mt-auto text-sm text-blue-500 hover:underline"
              >
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Modal */}
      {showModal && selectedProject && (
        <Modal
          title={selectedProject.title}
          onClose={() => setShowModal(false)}
        >
          <p className="text-gray-200 leading-relaxed">
            {selectedProject.description}
          </p>

          <div className="mt-6 flex gap-4">
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                🔗 GitHub
              </a>
            )}
            {selectedProject.demo && (
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
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
