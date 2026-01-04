import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

/* 🎈 ICON LIST */
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

const Contact = () => {
  const sectionRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

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

  /* 📐 SECTION SIZE */
  useEffect(() => {
    const updateSize = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  /* 🎲 RANDOM POSITIONS (ONLY ONCE) */
  const bubbles = useMemo(() => {
    if (!size.width || !size.height) return [];

    return icons.map(() => {
      const startX = Math.random() * (size.width - ICON_SIZE);
      const startY = Math.random() * (size.height - ICON_SIZE);
      const endX = Math.random() * (size.width - ICON_SIZE);
      const endY = Math.random() * (size.height - ICON_SIZE);

      return {
        startX,
        startY,
        endX,
        endY,
        duration: 35 + Math.random() * 20,
        delay: Math.random() * 5,
      };
    });
  }, [size]);

  /* ✏ FORM */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_x6tv2jd",
        "template_vo64sdp",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "dN67mw49evlHABjSA"
      )
      .then(() => {
        setModal({
          show: true,
          message: "✅ Message sent successfully!",
          success: true,
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setModal({
          show: true,
          message: "❌ Failed to send message",
          success: false,
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-gray-950 px-6 py-20 overflow-hidden"
    >
      {/* 🎈 FLOATING BUBBLES (ALWAYS RUNNING) */}
      {bubbles.map((b, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={i}
            className="absolute text-blue-500 opacity-30 pointer-events-none"
            style={{ fontSize: "3rem" }}
            initial={{ x: b.startX, y: b.startY }}
            animate={{
              x: [b.startX, b.endX, b.startX],
              y: [b.startY, b.endY, b.startY],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      {/* 📬 CONTENT (SCROLL ANIMATED) */}
      <div className="relative z-20 max-w-3xl mx-auto text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          📬 Contact Me
        </motion.h2>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 bg-gray-900/90 p-8 rounded-xl shadow-xl border border-gray-700 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 text-white rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 text-white rounded"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 text-white rounded"
            required
          />

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>

      {/* ✅ MODAL */}
      {modal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center w-80">
            <p
              className={`text-lg font-semibold ${
                modal.success ? "text-green-600" : "text-red-500"
              }`}
            >
              {modal.message}
            </p>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
