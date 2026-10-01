// // src/components/Navbar.jsx
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navLinks = ['Home', 'About', 'Projects', 'Contact'];

//   return (
//     <nav className="bg-blue-950 shadow-md fixed w-full top-0 z-50 dark:bg-blue-950">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-white">Abdus Samad</h1>

//         {/* Desktop menu */}
//         <ul className="hidden md:flex space-x-6 text-white">
//           {navLinks.map((link) => (
//             <li key={link}>
//               <a
//                 href={`#${link.toLowerCase()}`}
//                 className="hover:text-blue-400 transition"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile menu icon */}
//         <div className="md:hidden text-white">
//           <button onClick={() => setOpen(!open)}>
//             {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <ul className="md:hidden bg-blue-950 px-4 py-2 space-y-2 text-white">
//           {navLinks.map((link) => (
//             <li key={link}>
//               <a
//                 href={`#${link.toLowerCase()}`}
//                 className="block hover:text-blue-400 transition"
//                 onClick={() => setOpen(false)}
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Download,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Certifications",
      href: "#certifications",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  // ==========================================
  // NAVBAR SCROLL EFFECT
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // CLOSE MOBILE MENU
  // ==========================================

  const handleNavClick = () => {
    setOpen(false);
  };

  // ==========================================
  // MOBILE MENU ESCAPE KEY
  // ==========================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-slate-950"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* ==========================================
              LOGO
          ========================================== */}

          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-3"
          >
            {/* Logo Box */}
            <div
              className="
                relative
                w-10 h-10
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-cyan-400
                flex
                items-center
                justify-center
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:rotate-3
                group-hover:shadow-blue-500/40
              "
            >
              <span className="text-white font-black text-lg">
                AS
              </span>

              {/* Glow */}
              <span
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-blue-400
                  opacity-0
                  blur-md
                  transition-opacity
                  duration-300
                  group-hover:opacity-30
                "
              />
            </div>

            {/* Name */}
            <div className="hidden sm:block">
              <h1
                className="
                  text-lg
                  font-bold
                  text-white
                  tracking-tight
                  transition-colors
                  duration-300
                  group-hover:text-blue-400
                "
              >
                Abdus Samad
              </h1>

              <p className="text-[10px] text-slate-400 tracking-widest uppercase">
                Full Stack Developer
              </p>
            </div>
          </a>

          {/* ==========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  group
                  relative
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                {/* Text */}
                <span
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                >
                  {link.name}
                </span>

                {/* Hover Background */}
                <span
                  className="
                    absolute
                    inset-0
                    rounded-lg
                    bg-white/[0.05]
                    opacity-0
                    scale-90
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                />

                {/* Bottom Line */}
                <span
                  className="
                    absolute
                    left-1/2
                    bottom-0
                    h-0.5
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-blue-400
                    to-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-8
                  "
                />
              </a>
            ))}
          </div>

          {/* ==========================================
              DESKTOP RIGHT ACTIONS
          ========================================== */}

          <div className="hidden md:flex items-center gap-2">

            {/* GitHub */}
            <a
              href="https://github.com/Mr-Samad3011"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                text-slate-300
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-300
                hover:text-white
                hover:border-blue-400/50
                hover:bg-blue-500/10
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-blue-500/10
              "
            >
              <Github
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdus-samad-7a6864304"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                text-slate-300
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-300
                hover:text-white
                hover:border-cyan-400/50
                hover:bg-cyan-500/10
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-cyan-500/10
              "
            >
              <Linkedin
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>

            {/* Resume */}
            <a
              href="/abdus_samad_resume.pdf"
              download
              className="
                group
                ml-2
                inline-flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                text-sm
                font-semibold
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-blue-500/30
                hover:from-blue-500
                hover:to-cyan-400
              "
            >
              <Download
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              Resume

              <ChevronRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* ==========================================
              MOBILE MENU BUTTON
          ========================================== */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="
              lg:hidden
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              text-white
              border
              border-white/10
              bg-white/[0.05]
              transition-all
              duration-300
              hover:bg-blue-500/10
              hover:border-blue-400/30
            "
          >
            <span
              className="
                transition-transform
                duration-300
              "
              style={{
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>

        {/* ==========================================
            MOBILE MENU
        ========================================== */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${
              open
                ? "max-h-[600px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/95
              backdrop-blur-xl
              p-3
              shadow-2xl
              shadow-black/30
            "
          >
            {/* Mobile Links */}

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    rounded-xl
                    text-slate-300
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-blue-500/10
                    hover:text-white
                    hover:translate-x-1
                  "
                >
                  <span>{link.name}</span>

                  <ChevronRight
                    size={16}
                    className="
                      text-slate-500
                      transition-all
                      duration-300
                      group-hover:text-blue-400
                      group-hover:translate-x-1
                    "
                  />
                </a>
              ))}
            </div>

            {/* Mobile Divider */}

            <div className="my-3 h-px bg-white/10" />

            {/* Mobile Social Links */}

            <div className="flex gap-2">

              <a
                href="https://github.com/Mr-Samad3011"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-slate-300
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-blue-500/10
                  hover:text-white
                  hover:border-blue-400/30
                "
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abdus-samad-7a6864304"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-slate-300
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-cyan-500/10
                  hover:text-white
                  hover:border-cyan-400/30
                "
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

            </div>

            {/* Mobile Resume */}

            <a
              href="/abdus_samad_resume.pdf"
              download
              onClick={handleNavClick}
              className="
                group
                mt-2
                w-full
                flex
                items-center
                justify-center
                gap-2
                py-3
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-blue-500/20
              "
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
