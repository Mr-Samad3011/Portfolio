import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gray-900 dark:bg-gray-900 px-6 py-16 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white dark:text-white mb-12">
          🛠️ My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left ">
          {/* Frontend */}
          <div className="bg-slate-700 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend</h3>
            <ul className="space-y-2 text-white dark:text-gray-300">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-slate-700 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Backend</h3>
            <ul className="space-y-2 text-white dark:text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>JWT Auth</li>
              <li>RESTful APIs</li>
              <li>Socket.io (Real-time)</li>
              <li>PHP</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-slate-700 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Database</h3>
            <ul className="space-y-2 text-white dark:text-gray-300">
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>MySQL</li>
              <li>MySQL Workbench</li>
              <li>XAMPP (Apache)</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-slate-700 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Tools</h3>
            <ul className="space-y-2 text-white dark:text-gray-300">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Netlify / Render</li>
            </ul>
          </div>

          {/* Others */}
          <div className="bg-slate-700 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Others</h3>
            <ul className="space-y-2 text-white dark:text-gray-300">
              <li>Responsive Design</li>
              <li>Problem Solving</li>
              <li>API Integration</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
