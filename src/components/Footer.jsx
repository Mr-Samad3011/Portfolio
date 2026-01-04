import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const socialIcons = [
  {
    icon: FaGithub,
    link: "https://github.com/Mr-Samad3011",
    hover: "hover:text-gray-300",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/abdus-samad-7a6864304",
    hover: "hover:text-blue-400",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/mr__samad1130/",
    hover: "hover:text-pink-500",
  },
  {
    icon: FaTwitter,
    link: "https://x.com/AbdusSamad75624",
    hover: "hover:text-blue-400",
  },
  {
    icon: FaWhatsapp,
    link: "https://wa.me/919519770595",
    hover: "hover:text-green-500",
  },
  {
    icon: FaPhone,
    link: "tel:+919519770595",
    hover: "hover:text-green-400",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 overflow-hidden">
      {/* 🔹 Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // 🔥 HAR SCROLL PAR
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Abdus Samad</span>. All rights
          reserved.
        </p>

        {/* 🔹 Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // 🔥 HAR SCROLL PAR
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-5 flex justify-center space-x-6 text-2xl"
        >
          {socialIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`transition ${item.hover}`}
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
