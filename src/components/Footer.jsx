import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const socialIcons = [
  {
    icon: FaGithub,
    label: "GitHub",
    link: "https://github.com/Mr-Samad3011",
    color: "hover:text-gray-200",
    bg: "hover:bg-white/10",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/abdus-samad-7a6864304",
    color: "hover:text-blue-400",
    bg: "hover:bg-blue-500/10",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/mr__samad1130/",
    color: "hover:text-pink-500",
    bg: "hover:bg-pink-500/10",
  },
  {
    icon: FaTwitter,
    label: "X / Twitter",
    link: "https://x.com/AbdusSamad75624",
    color: "hover:text-sky-400",
    bg: "hover:bg-sky-500/10",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    link: "https://wa.me/919519770595",
    color: "hover:text-green-500",
    bg: "hover:bg-green-500/10",
  },
  {
    icon: FaPhone,
    label: "Call",
    link: "tel:+919519770595",
    color: "hover:text-green-400",
    bg: "hover:bg-green-400/10",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gray-950 text-white">
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* =========================================================
          ANIMATED TOP LINE
      ========================================================= */}
      <div className="relative h-[1px] w-full overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* =====================================================
              BRAND
          ===================================================== */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <h2 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Abdus Samad
                </span>
              </h2>
            </motion.a>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-gray-400 md:mx-0">
              Full Stack Developer passionate about building modern,
              scalable and user-focused web applications.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500 md:justify-start">
              <span>Built with</span>

              <FaHeart className="animate-pulse text-red-500" />

              <span>and code.</span>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.35,
                  }}
                  whileHover={{ x: 4 }}
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* =====================================================
              CONNECT
          ===================================================== */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Let's Connect
            </h3>

            <p className="mt-4 text-sm text-gray-500">
              Follow me on social media
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-5 flex flex-wrap justify-center gap-3 md:justify-end"
            >
              {socialIcons.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 0.7,
                        y: 15,
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      },
                    }}
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className={`
                      group relative flex h-11 w-11 items-center justify-center
                      rounded-xl border border-white/10
                      bg-white/[0.03]
                      text-gray-500
                      backdrop-blur-md
                      transition-all duration-300
                      ${item.color}
                      ${item.bg}
                      hover:border-white/20
                      hover:shadow-lg
                    `}
                  >
                    <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />

                    {/* Tooltip */}
                    <span
                      className="
                        pointer-events-none absolute -top-9 left-1/2
                        -translate-x-1/2 translate-y-1
                        whitespace-nowrap rounded-md
                        border border-white/10
                        bg-gray-900 px-2 py-1
                        text-[10px] text-gray-300
                        opacity-0 shadow-xl
                        transition-all duration-200
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================================
            DIVIDER
        ========================================================= */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="my-10 h-px origin-center bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-xs text-gray-500"
          >
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-300">
              Abdus Samad
            </span>
            . All rights reserved.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            aria-label="Back to top"
            className="
              group flex items-center gap-2
              rounded-full border border-white/10
              bg-white/[0.03]
              px-4 py-2
              text-xs text-gray-400
              backdrop-blur-md
              transition-all duration-300
              hover:border-purple-500/30
              hover:bg-purple-500/10
              hover:text-white
            "
          >
            <span>Back to top</span>

            <FaArrowUp className="text-[10px] transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>

      {/* =========================================================
          DECORATIVE BOTTOM TEXT
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none absolute
          bottom-[-22px] left-1/2
          -translate-x-1/2
          whitespace-nowrap
          select-none
          text-[70px] font-black
          tracking-[-0.06em]
          text-white/[0.015]
          sm:text-[100px]
          md:text-[140px]
        "
      >
        DEVELOPER
      </motion.div>
    </footer>
  );
};

export default Footer;
