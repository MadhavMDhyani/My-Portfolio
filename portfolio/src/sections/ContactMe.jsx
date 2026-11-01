import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../utils/data";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaCheck,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", review: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    // Configuration via environment variables with fallbacks
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_b8ho4zb";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lzy3h8z";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "dVFJ7HODmFTPQKS12";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.review,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", review: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Something went wrong. Please try again in a moment.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact" className="container mx-auto px-6 md:px-12 py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong rounded-3xl p-8 md:p-14 border border-ghost/20 shadow-glass overflow-hidden relative"
      >
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-300">
            Get In Touch
          </span>

          <h2 className="font-display-title text-4xl sm:text-5xl md:text-6xl text-ghost mt-2 mb-4 tracking-wide">
            Let's Work Together
          </h2>

          <p className="text-indigo-200/90 text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Have a project in mind or want to talk tech? The fastest way to reach me is by email at{" "}
            <a
              href={`mailto:${personalInfo.email}`}
              className="underline font-semibold text-ghost hover:text-indigo-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              {personalInfo.email}
            </a>{" "}
            — I typically respond within a day. You can also call or text me directly at{" "}
            <span className="font-semibold text-ghost">{personalInfo.phone}</span>, or connect with me on GitHub and LinkedIn below.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-indigo-300">
                <FaEnvelope className="text-lg" />
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-indigo-300 text-ghost font-medium transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 rounded py-1"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-indigo-300">
                <FaPhone className="text-lg" />
              </div>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="text-ghost font-medium hover:text-indigo-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 rounded py-1"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-indigo-300">
                <FaLocationDot className="text-lg" />
              </div>
              <span className="font-medium text-ghost">{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-pill flex items-center justify-center text-ghost hover:text-indigo-300 hover:border-ghost/40 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-pill flex items-center justify-center text-ghost hover:text-indigo-300 hover:border-ghost/40 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>

          {/* Review & Message Form */}
          <div className="pt-8 border-t border-ghost/15">
            <h3 className="font-display-title text-2xl sm:text-3xl text-ghost tracking-wide mb-2">
              Leave a Review
            </h3>
            <p className="text-indigo-200/85 mb-6 text-sm">
              Worked with me on a project? Share your name, email, and a short review below.
            </p>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 rounded-2xl glass border border-indigo-400/40 bg-indigo-900/40 flex items-center gap-3 text-ghost"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-400/30 flex items-center justify-center text-indigo-200">
                    <FaCheck className="text-sm" />
                  </div>
                  <p className="text-sm font-medium">
                    Thank you! Your message and review have been submitted successfully.
                  </p>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 rounded-2xl glass border border-red-400/40 bg-red-950/40 text-red-200 text-sm font-medium"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl glass text-ghost placeholder-indigo-200/50 border border-ghost/15 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-ghost/40 transition-all text-sm min-h-[44px]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl glass text-ghost placeholder-indigo-200/50 border border-ghost/15 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-ghost/40 transition-all text-sm min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-review" className="sr-only">
                  Your Review
                </label>
                <textarea
                  id="contact-review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  placeholder="Write your review or message here..."
                  required
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-2xl glass text-ghost placeholder-indigo-200/50 border border-ghost/15 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-ghost/40 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary uppercase text-xs tracking-wider min-h-[44px] px-8 disabled:opacity-60 disabled:cursor-not-allowed font-semibold"
              >
                {sending ? "Sending..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;