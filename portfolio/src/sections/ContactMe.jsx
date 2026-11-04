import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../utils/data";
import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _honey: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check — bots fill hidden fields, humans don't
    if (formData._honey) return;

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields before sending.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    setError("");

    // Configuration exclusively via environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn(
        "EmailJS configuration missing. Please define VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment, and restrict allowed domains in the EmailJS dashboard."
      );
      setError(
        `Email service configuration is not set. Please reach out directly to ${personalInfo.email}.`
      );
      setSending(false);
      return;
    }

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", _honey: "" });
      })
      .catch((err) => {
        console.error("EmailJS submission error:", err);
        setError("Something went wrong while sending. Please try again or email directly.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact" className="py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#151515] rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-white/[0.08] shadow-xl overflow-hidden relative"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FF5A1F]">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4 tracking-tight">
              Let's Work Together
            </h2>

            <p className="text-[#A1A1AA] text-base sm:text-lg mb-8 leading-relaxed font-normal">
              Have a question, a project opportunity, or want to discuss backend architectures? Send a message directly using the form below or email me at{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="underline font-semibold text-white hover:text-[#FF5A1F] transition-colors focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded"
              >
                {personalInfo.email}
              </a>.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF5A1F]">
                  <FaEnvelope className="text-lg" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-[#FF5A1F] text-white font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded py-1"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF5A1F]">
                  <FaLocationDot className="text-lg" />
                </div>
                <span className="font-medium text-white">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-12">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.1] flex items-center justify-center text-white hover:text-[#FF5A1F] transition-all focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.1] flex items-center justify-center text-white hover:text-[#FF5A1F] transition-all focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>

            {/* Send Message Form */}
            <div className="pt-8 border-t border-white/[0.08]">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-[#8A8A8A] mb-6 text-sm">
                Fill out the form and I'll get back to you as soon as possible.
              </p>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 flex items-center gap-3 text-white"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <FaCheck className="text-sm" />
                    </div>
                    <p className="text-sm font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    className="mb-6 p-4 rounded-2xl border border-red-500/30 bg-red-950/30 text-red-200 text-sm font-medium"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field */}
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

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
                      aria-required="true"
                      autoComplete="name"
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#0E0E0E] text-white placeholder-[#8A8A8A] border border-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] focus:border-[#FF5A1F] transition-all text-sm min-h-[44px]"
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
                      aria-required="true"
                      autoComplete="email"
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#0E0E0E] text-white placeholder-[#8A8A8A] border border-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] focus:border-[#FF5A1F] transition-all text-sm min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    aria-required="true"
                    autoComplete="off"
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#0E0E0E] text-white placeholder-[#8A8A8A] border border-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] focus:border-[#FF5A1F] transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary uppercase text-xs tracking-wider min-h-[44px] px-8 disabled:opacity-60 disabled:cursor-not-allowed font-semibold flex items-center gap-2 rounded-full"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
