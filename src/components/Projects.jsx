import React, { useState } from 'react';
import Modal from './Modal'; // Create this component

const projects = [
  {
    title: 'Chat App',
    description:
      'A real-time chat app built using React, Socket.io, Node.js, and JWT authentication. Includes one-to-one, group chat, and voice messaging.',
    link: '', // No GitHub link yet
    demo: '',
    inProgress: true,
  },
  {
    title: 'VillageConnect',
    description:
      'A full-stack platform to connect and empower rural communities with forum posts and local services.',
    link: 'https://github.com/Mr-Samad3011/code_core_internship/blob/main/villageConnect_day_35_.zip',
    demo: 'https://villageconect.netlify.app',
  },
  {
    title: 'Chatbot',
    description:
      'An AI-powered chatbot using JavaScript that interacts with users via predefined logic and dynamic responses.',
    link: 'https://github.com/Mr-Samad3011/chatbot1',
  },
  {
    title: 'Hospital Management System (Java Swing)',
    description:
      'A desktop-based application built in Java using Swing for managing hospital patient records, appointments, and staff.',
    link: 'https://github.com/Mr-Samad3011/hospital-management-java',
  },
  {
    title: 'Resume Builder (PHP)',
    description:
      'A PHP web app where users can input data to generate professional resumes in PDF format.',
    link: 'https://github.com/Mr-Samad3011/resume_builder',
  },
  {
    title: 'Internship Assignments (Code Core Global)',
    description:
      'Collection of full-stack projects and tasks completed during internship at Code Core Global.',
    link: 'https://github.com/Mr-Samad3011/code_core_internship',
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    if (project.inProgress) {
      setShowModal(true);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {project.inProgress ? (
                <button
                  onClick={() => handleProjectClick(project)}
                  className="text-yellow-500 underline"
                >
                  Work in Progress →
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for "Work in Progress" */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)} title="Work in Progress">
          <p className="text-gray-700 dark:text-gray-300">
            This project is currently under development. Please check back later!
          </p>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
