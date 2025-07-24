import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300 py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Abdus Samad. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-6 text-2xl">
        <a
          href="https://github.com/Mr-Samad3011"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abdus-samad-7a6864304"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/mr__samad1130/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/AbdusSamad75624"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaTwitter />
        </a>
        <a
          href="https://wa.me/919519770595"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+919519770595"
          className="hover:text-green-800"
        >
          <FaPhone />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
