import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCertificate,
  FaCode,
  FaLaptopCode,
  FaShieldAlt,
  FaExternalLinkAlt,
  FaTimes,
  FaAward,
  FaCalendarAlt,
  FaIdBadge,
  FaChevronRight,
} from "react-icons/fa";

/* =========================================================
   CERTIFICATIONS DATA
========================================================= */

const certifications = [
  {
    id: 1,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "July 2025",
    credentialId: "abdus_samad-jaads",
    category: "Web Development",
    icon: FaCode,
    color: "from-yellow-400 to-orange-500",
    description:
      "Certification focused on JavaScript fundamentals, algorithms, data structures, functional programming, object-oriented programming, and problem-solving.",
    skills: [
      "JavaScript",
      "Algorithms",
      "Data Structures",
      "ES6",
      "Problem Solving",
    ],
    credentialUrl: "#",
  },

  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "July 2025",
    credentialId: "abdus_samad-rwd",
    category: "Frontend Development",
    icon: FaLaptopCode,
    color: "from-cyan-400 to-blue-500",
    description:
      "Certification covering responsive web design fundamentals including HTML, CSS, accessibility, Flexbox, CSS Grid, and responsive layouts.",
    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Accessibility",
    ],
    credentialUrl: "#",
  },

  {
    id: 3,
    title:
      "Moreton Bay Regional Council - Entrepreneurship & Innovation: Web Development Job Simulation",
    issuer: "Forage",
    date: "May 2025",
    credentialId: "kE8dYM67NBWQF8Lxm",
    category: "Web Development",
    icon: FaLaptopCode,
    color: "from-purple-400 to-pink-500",
    description:
      "Virtual job simulation focused on web development tasks and practical problem-solving in an entrepreneurship and innovation environment.",
    skills: [
      "Web Development",
      "Problem Solving",
      "Innovation",
      "Entrepreneurship",
    ],
    credentialUrl: "#",
  },

  {
    id: 4,
    title: "Tata - Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "May 2025",
    credentialId: "2PcfHci5ZRLHFHeez",
    category: "Cybersecurity",
    icon: FaShieldAlt,
    color: "from-green-400 to-emerald-500",
    description:
      "Virtual job simulation focused on cybersecurity analyst concepts, security thinking, risk awareness, and practical cybersecurity scenarios.",
    skills: [
      "Cybersecurity",
      "Security Analysis",
      "Risk Awareness",
      "Problem Solving",
    ],
    credentialUrl: "#",
  },
];

/* =========================================================
   BLOB PATH
========================================================= */

const blobPath = `
M42.7,-55.2C55.7,-49.6,66.7,-37.3,70.8,-23.5C74.8,-9.7,
71.8,5.5,67.1,19.3C62.3,33.1,55.9,45.4,45.2,54.7C34.5,
64,19.5,70.2,4.2,69.4C-11.1,68.7,-26.7,61,-39.3,51.4C-51.8,
41.8,-61.2,30.3,-66.3,16.5C-71.4,2.7,-72.2,-13.4,-66.4,
-27.5C-60.5,-41.7,-48.1,-53.9,-34.6,-59.4C-21.2,-64.9,
-6.7,-63.6,7.4,-63.4C21.5,-63.2,29.8,-60.8,42.7,-55.2Z
`;

/* =========================================================
   CERTIFICATION MODAL
========================================================= */

const CertificationModal = ({ certification, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!certification) return null;

  const Icon = certification.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/80
        px-4 py-6
        backdrop-blur-md
      "
      onClick={onClose}
    >
      {/* =====================================================
          MODAL
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          y: 40,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 20,
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full max-w-3xl
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-gray-950/95
          p-6
          shadow-2xl
          sm:p-8
        "
      >
        {/* Animated glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-gradient-to-r
            ${certification.color}
            blur-3xl
          `}
        />

        {/* Close */}

        <button
          onClick={onClose}
          aria-label="Close certification"
          className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-gray-400
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          <FaTimes />
        </button>

        <div className="relative z-10">
          {/* Icon */}

          <div
            className={`
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              ${certification.color}
              text-2xl
              text-white
              shadow-lg
            `}
          >
            <Icon />
          </div>

          {/* Category */}

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
            {certification.category}
          </span>

          {/* Title */}

          <h2 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {certification.title}
          </h2>

          {/* Issuer */}

          <p className="mt-3 text-base text-gray-400">
            Issued by{" "}
            <span className="font-semibold text-white">
              {certification.issuer}
            </span>
          </p>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400">
            {certification.description}
          </p>

          {/* Information */}

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-purple-400" />

                <div>
                  <p className="text-xs text-gray-500">Issued</p>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    {certification.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <FaIdBadge className="text-blue-400" />

                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Credential ID</p>
                  <p className="mt-1 truncate text-sm font-medium text-gray-200">
                    {certification.credentialId}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold text-gray-300">
              Skills Covered
            </p>

            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-1.5
                    text-xs
                    text-gray-400
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}

          {certification.credentialUrl !== "#" && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-gray-950
                transition
                hover:scale-[1.02]
              "
            >
              View Credential
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   CERTIFICATIONS PAGE
========================================================= */

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] =
    useState(null);

  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        bg-gray-950
        px-6
        py-24
        text-white
        lg:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Purple glow */}

        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-purple-600/10
            blur-3xl
          "
        />

        {/* Blue glow */}

        <motion.div
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-blue-600/10
            blur-3xl
          "
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

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Small badge */}

          <div className="mb-5 flex justify-center">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-purple-500/20
                bg-purple-500/5
                px-4
                py-2
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-purple-300
              "
            >
              <FaCertificate />
              Achievements
            </span>
          </div>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            A collection of certifications and professional learning
            achievements that represent my continuous growth in web
            development, programming, and cybersecurity.
          </p>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/abdus-samad-7a6864304"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-sm
              text-gray-500
              transition
              hover:text-white
            "
          >
            View all credentials on LinkedIn
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.div>

        {/* =====================================================
            CERTIFICATION GRID
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {certifications.map((certification) => {
            const Icon = certification.icon;

            return (
              <motion.button
                key={certification.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -8,
                }}
                onClick={() =>
                  setSelectedCertification(certification)
                }
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                  text-left
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:border-white/20
                  hover:bg-white/[0.045]
                  hover:shadow-2xl
                "
              >
                {/* Card glow */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-gradient-to-br
                    ${certification.color}
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${certification.color}
                    text-xl
                    text-white
                    shadow-lg
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  `}
                >
                  <Icon />
                </div>

                {/* Category */}

                <p className="relative mt-6 text-xs uppercase tracking-wider text-gray-500">
                  {certification.category}
                </p>

                {/* Title */}

                <h3
                  className="
                    relative
                    mt-3
                    min-h-[72px]
                    text-lg
                    font-semibold
                    leading-6
                    text-white
                  "
                >
                  {certification.title}
                </h3>

                {/* Issuer */}

                <p className="relative mt-4 text-sm text-gray-400">
                  {certification.issuer}
                </p>

                {/* Date */}

                <div className="relative mt-5 flex items-center gap-2 text-xs text-gray-500">
                  <FaCalendarAlt />
                  {certification.date}
                </div>

                {/* View */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-gray-500
                    transition
                    group-hover:text-white
                  "
                >
                  View Details

                  <FaChevronRight
                    className="
                      text-[10px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>

                {/* Bottom gradient */}

                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    ${certification.color}
                    transition-all
                    duration-500
                    group-hover:w-full
                  `}
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* =====================================================
            BOTTOM STATS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mx-auto
            mt-14
            max-w-3xl
            rounded-3xl
            border
            border-white/10
            bg-white/[0.025]
            p-6
            text-center
            backdrop-blur-md
          "
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
              <FaAward />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-300">
                Continuous Learning
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Continuously improving my technical and professional
                skills through hands-on learning and certifications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedCertification && (
          <CertificationModal
            certification={selectedCertification}
            onClose={() => setSelectedCertification(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
