import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-gray-950 dark:bg-gray-950 px-6 py-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Hello, I'm <span className="text-blue-400">Abdus Samad</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6">
          Full Stack Developer | Software Developer
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          I’m passionate about building efficient, scalable, and user-friendly web applications using the MERN stack (MongoDB, Express, React, Node.js). I focus on writing clean code, intuitive UI/UX, and creating real-world software solutions that make a difference.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            🚀 View Projects
          </Link>

          <a
            href="/Abdus_Samad_resume.pdf"
            download
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
