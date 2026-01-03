import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 dark:bg-gray-950 text-center text-white py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Abdus Samad. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-6 text-2xl">
        <a
          href="https://github.com/Mr-Samad3011"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abdus-samad-7a6864304"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/mr__samad1130/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/AbdusSamad75624"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://wa.me/919519770595"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+919519770595"
          className="hover:text-green-400 transition"
        >
          <FaPhone />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
