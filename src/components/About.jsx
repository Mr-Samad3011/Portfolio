import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:w-80 md:h-80 h-auto rounded-full overflow-hidden shadow-lg mx-auto">
          <img
            src="/image/samad1.png"
            alt="Abdus Samad"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
            Hi, I’m <strong className="text-blue-600">Abdus Samad</strong>, a dedicated Full Stack Developer with a strong foundation in modern web technologies. I hold a BCA degree from United Institute of Management (FUGS), Prayagraj, and I’m currently pursuing a Full Stack Development internship at <strong>Code Core Global</strong>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
            I specialize in building end-to-end applications using the MERN stack (MongoDB, Express.js, React, Node.js), with features like user authentication, real-time messaging, and responsive interfaces.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            I’m passionate about solving real-world problems through clean code, scalable systems, and seamless UI/UX. I’m actively working on projects like a real-time Chat App and VillageConnect platform to make an impact through technology.
          </p>

          {/* Resume Download Button */}
          <a
            href="/Abdus_Samad_Resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
