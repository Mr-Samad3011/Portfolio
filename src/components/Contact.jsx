
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaAt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaTools,
  FaServer,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

/* =========================================================
   FLOATING ICONS
========================================================= */

const icons = [
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaAt,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  FaBootstrap,
  FaNodeJs,
  FaServer,
  FaPhp,
  FaDatabase,
  SiMongodb,
  SiMysql,
  FaGitAlt,
  SiPostman,
  FaTools,
];

const ICON_SIZE = 60;

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "Available through contact form",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "India",
  },
];

/* =========================================================
   BLOB PATH
========================================================= */

const blobPath =
  "M38.5,-67.1C51.9,-59.7,66.5,-52.7,74.2,-41.1C81.9,-29.5,82.8,-14.2,80.1,-0.9C77.4,12.4,71.2,24.8,64.4,37.1C57.6,49.4,50.2,61.6,38.8,68.8C27.4,76,13.7,78.2,-0.5,79.1C-14.7,80,-29.4,79.6,-41.9,73.1C-54.4,66.6,-64.8,54,-71.7,40.6C-78.6,27.2,-82.1,13.1,-80.7,0.8C-79.3,-11.5,-73,-23,-65.9,-34.2C-58.8,-45.4,-50.8,-56.3,-40,-65.2C-29.2,-74.1,-14.6,-81,-0.7,-79.8C13.2,-78.6,26.4,-74.5,38.5,-67.1Z";

/* =========================================================
   STATUS MODAL
========================================================= */

const StatusModal = ({ modal, onClose }) => {
  useEffect(() => {
    if (!modal.show) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [modal.show, onClose]);

  return (
    <AnimatePresence>
      {modal.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              y: 30,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="relative w-full max-w-md"
          >
            {/* Glow */}

            <div
              className={`absolute -inset-6 rounded-full blur-3xl ${
                modal.success
                  ? "bg-green-500/20"
                  : "bg-red-500/20"
              }`}
            />

            {/* SVG Blob */}

            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="statusBlobGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={
                      modal.success
                        ? "#22c55e"
                        : "#ef4444"
                    }
                  />

                  <stop
                    offset="50%"
                    stopColor="#06b6d4"
                  />

                  <stop
                    offset="100%"
                    stopColor={
                      modal.success
                        ? "#3b82f6"
                        : "#a855f7"
                    }
                  />
                </linearGradient>
              </defs>

              <path
                d={blobPath}
                transform="translate(100 100) scale(1.25)"
                fill="none"
                stroke="url(#statusBlobGradient)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Content */}

            <div className="relative overflow-hidden rounded-[35%_25%_30%_20%/25%_30%_20%_35%] border border-white/10 bg-gray-950/95 px-8 py-10 text-center shadow-2xl backdrop-blur-2xl sm:px-12">
              <div
                className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${
                  modal.success
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {modal.success ? (
                  <FaCheckCircle className="text-3xl" />
                ) : (
                  <FaExclamationCircle className="text-3xl" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {modal.success
                  ? "Message Sent!"
                  : "Something went wrong"}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 ${
                  modal.success
                    ? "text-green-300"
                    : "text-red-300"
                }`}
              >
                {modal.message}
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-7 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:from-blue-400 hover:to-cyan-400"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Contact = () => {
  const sectionRef = useRef(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [modal, setModal] = useState({
    show: false,
    message: "",
    success: true,
  });

  /* =======================================================
     SECTION SIZE
  ======================================================= */

  useEffect(() => {
    const updateSize = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      setSize({
        width: rect.width,
        height: rect.height,
      });
    };

    updateSize();

    window.addEventListener(
      "resize",
      updateSize
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateSize
      );
    };
  }, []);

  /* =======================================================
     STABLE FLOATING ICON POSITIONS
  ======================================================= */

  const bubbles = useMemo(() => {
    if (!size.width || !size.height) {
      return [];
    }

    const positions = [
      [5, 12],
      [88, 10],
      [12, 30],
      [92, 32],
      [4, 55],
      [88, 55],
      [8, 82],
      [92, 82],
      [25, 8],
      [72, 8],
      [25, 92],
      [70, 90],
      [48, 15],
      [50, 85],
      [17, 67],
      [82, 67],
      [32, 45],
      [67, 45],
      [50, 55],
    ];

    return icons.map((_, index) => {
      const position =
        positions[index % positions.length];

      return {
        startX:
          (position[0] / 100) * size.width,

        startY:
          (position[1] / 100) * size.height,

        endX:
          (((position[0] + 8) % 100) / 100) *
          size.width,

        endY:
          (((position[1] + 10) % 100) / 100) *
          size.height,

        duration: 20 + index * 1.5,

        delay: index * 0.25,
      };
    });
  }, [size]);

  /* =======================================================
     FORM CHANGE
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setModal({
        show: true,
        message: "Please enter your name.",
        success: false,
      });

      return;
    }

    if (!form.email.trim()) {
      setModal({
        show: true,
        message: "Please enter your email address.",
        success: false,
      });

      return;
    }

    if (!form.message.trim()) {
      setModal({
        show: true,
        message: "Please enter your message.",
        success: false,
      });

      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        "service_x6tv2jd",
        "template_vo64sdp",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "dN67mw49evlHABjSA"
      );

      setModal({
        show: true,
        message:
          "Thank you for reaching out. Your message has been sent successfully.",
        success: true,
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "EmailJS Error:",
        error
      );

      setModal({
        show: true,
        message:
          "Your message could not be sent. Please try again later.",
        success: false,
      });
    } finally {
      setIsSending(false);
    }
  };

  /* =======================================================
     CLOSE MODAL
  ======================================================= */

  const closeModal = () => {
    setModal((previous) => ({
      ...previous,
      show: false,
    }));
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="relative min-h-screen w-full overflow-hidden bg-gray-950 px-5 py-20 sm:px-6 lg:px-8"
      >
        {/* =================================================
            BACKGROUND GLOWS
        ================================================= */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
        </div>

        {/* =================================================
            FLOATING ICONS
        ================================================= */}

        {bubbles.map((bubble, index) => {
          const Icon = icons[index];

          return (
            <motion.div
              key={index}
              className="pointer-events-none absolute hidden text-blue-400/15 sm:block"
              style={{
                fontSize: `${ICON_SIZE}px`,
              }}
              initial={{
                x: bubble.startX,
                y: bubble.startY,
              }}
              animate={{
                x: [
                  bubble.startX,
                  bubble.endX,
                  bubble.startX,
                ],
                y: [
                  bubble.startY,
                  bubble.endY,
                  bubble.startY,
                ],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Icon />
            </motion.div>
          );
        })}

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="relative z-20 mx-auto max-w-6xl">

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <FaEnvelope />
              Let's Connect
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Have a project idea, collaboration opportunity,
              or simply want to connect? Send me a message and
              let's build something meaningful together.
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
          </motion.div>

          {/* =================================================
              TWO COLUMN CONTENT
          ================================================= */}

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr]">

            {/* =================================================
                LEFT CONTACT INFO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-8"
            >
              {/* Glow */}

              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative z-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400">
                  <FaPaperPlane />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Let's Talk
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  I'm open to discussing software development,
                  full-stack projects, AI-powered web
                  applications, internships, collaborations,
                  and new opportunities.
                </p>

                {/* Contact details */}

                <div className="mt-8 space-y-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm font-medium text-gray-300">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}

                <div className="mt-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Find Me Online
                  </p>

                  <div className="flex gap-3">

                    <a
                      href="https://github.com/Mr-Samad3011"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdus-samad-7a6864304"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      <FaLinkedin />
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <motion.form
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >

              {/* Form Glow */}

              <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative z-10">

                <div className="mb-7">
                  <h3 className="text-2xl font-bold text-white">
                    Send a Message
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    I'll get back to you as soon as possible.
                  </p>
                </div>

                {/* =================================================
                    NAME
                ================================================= */}

                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <div className="group relative">

                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-blue-400" />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-700 bg-gray-950/70 py-3.5 pl-11 pr-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-blue-500/[0.03] focus:ring-4 focus:ring-blue-500/10"
                      required
                    />

                  </div>
                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <div className="group relative">

                    <FaAt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-blue-400" />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-700 bg-gray-950/70 py-3.5 pl-11 pr-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-blue-500/[0.03] focus:ring-4 focus:ring-blue-500/10"
                      required
                    />

                  </div>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Message
                  </label>

                  <div className="group relative">

                    <FaPaperPlane className="absolute left-4 top-5 text-gray-500 transition-colors group-focus-within:text-blue-400" />

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-xl border border-gray-700 bg-gray-950/70 py-4 pl-11 pr-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-blue-500/[0.03] focus:ring-4 focus:ring-blue-500/10"
                      required
                    />

                  </div>

                  <div className="mt-2 text-right text-xs text-gray-600">
                    {form.message.length} characters
                  </div>
                </div>

                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <button
                  type="submit"
                  disabled={isSending}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >

                  {/* Button shine */}

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative z-10 flex items-center gap-3">

                    {isSending ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}

                  </span>
                </button>

                <p className="mt-4 text-center text-xs text-gray-600">
                  Your message will be sent securely through EmailJS.
                </p>

              </div>
            </motion.form>
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-14 text-center"
          >
            <p className="text-sm text-gray-600">
              Building something interesting?
              <span className="ml-2 text-blue-400">
                Let's make it happen.
              </span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* =======================================================
          STATUS MODAL
      ======================================================= */}

      <StatusModal
        modal={modal}
        onClose={closeModal}
      />
    </>
  );
};

export default Contact;

