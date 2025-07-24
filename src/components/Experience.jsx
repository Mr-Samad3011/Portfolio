import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-12"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          🧑‍💻 Work Experience
        </h2>

        <div className="space-y-6">
          {/* Internship 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Full Stack Development Intern
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Company:</strong> Code Core Global
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Duration:</strong> May 2025 – Present
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Working as a Full Stack Developer Intern where I built real-world MERN stack projects including authentication systems, dashboards, forums, and REST APIs. Collaborating in a structured internship with weekly assignments and project deadlines.
            </p>
          </div>

          {/* You can add more experiences here in the same format */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
