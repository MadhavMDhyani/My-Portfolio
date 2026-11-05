import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../utils/data";
import { FaPaperPlane, FaCheck } from "react-icons/fa6";
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
    <section id="contact" className="relative pt-8 pb-20 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Yellow Sticky-Note Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#F2C23E] border-2 border-[#151515] p-6 sm:p-10 shadow-[6px_6px_0_#151515] rotate-[-1deg]"
        >
          {/* Top Tape Sticker */}
          <div className="tape-strip w-28 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-1" />

          {/* Sticky Header */}
          <div className="text-center mb-6">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#151515] block mb-1">
              say hello!
            </span>
            <div className="inline-block border border-[#151515] bg-white px-4 py-1 font-pixel text-xl sm:text-2xl uppercase tracking-wider text-[#151515] shadow-[2px_2px_0_#151515]">
              CONTACT
            </div>
            <p className="font-mono text-xs text-[#151515]/80 mt-4 max-w-md mx-auto leading-relaxed">
              Got a project, a hard problem, or just want to say hi? Reach out below or at{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="underline font-bold text-[#151515] hover:text-[#2B4FD8]"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-3 border-2 border-[#151515] bg-[#A8DEC0] flex items-center gap-2.5 text-[#151515] font-mono text-xs font-bold shadow-[2px_2px_0_#151515]"
              >
                <FaCheck className="text-sm flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="alert"
                className="mb-6 p-3 border-2 border-[#151515] bg-[#F0457E] text-white font-mono text-xs font-bold shadow-[2px_2px_0_#151515]"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot hidden input */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#151515] mb-1">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  aria-required="true"
                  autoComplete="name"
                  className="w-full px-3.5 py-2.5 bg-white border-2 border-[#151515] text-[#151515] placeholder-[#151515]/40 font-mono text-xs focus:outline-none focus:bg-[#FFFDF5] shadow-[2px_2px_0_#151515]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#151515] mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  aria-required="true"
                  autoComplete="email"
                  className="w-full px-3.5 py-2.5 bg-white border-2 border-[#151515] text-[#151515] placeholder-[#151515]/40 font-mono text-xs focus:outline-none focus:bg-[#FFFDF5] shadow-[2px_2px_0_#151515]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#151515] mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                aria-required="true"
                rows={4}
                className="w-full px-3.5 py-2.5 bg-white border-2 border-[#151515] text-[#151515] placeholder-[#151515]/40 font-mono text-xs focus:outline-none focus:bg-[#FFFDF5] shadow-[2px_2px_0_#151515] resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={sending}
                className="btn-brutal bg-[#151515] text-white px-7 py-3 font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2.5 min-h-[44px] cursor-pointer disabled:opacity-60"
              >
                <FaPaperPlane className="text-xs" />
                <span>{sending ? "SENDING..." : "SEND MESSAGE"}</span>
              </button>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
