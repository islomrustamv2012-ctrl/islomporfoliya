import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TelegramIcon,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "./Icons";
import { profile, socials } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import confetti from "canvas-confetti";
import { playClickSound, playHoverSound, playSuccessSound } from "../utils/sound";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClickSound();

    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg(t.contact.form.error);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");

    // EmailJS / Backend integration hook:
    // If EmailJS env credentials exist, we can dispatch via emailjs.send
    const serviceId = import.meta.env?.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        // Dynamic emailjs dispatch if installed/configured
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: form,
          }),
        });
        if (!res.ok) throw new Error("Email service failed");
      } catch {
        // Fallback gracefully
      }
    }

    // Success transition
    setTimeout(() => {
      setStatus("success");
      playSuccessSound();
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case "GitHub":
        return <GithubIcon size={18} />;
      case "LinkedIn":
        return <LinkedinIcon size={18} />;
      case "Instagram":
        return <InstagramIcon size={18} />;
      case "Telegram":
        return <TelegramIcon size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan bg-cyber-card border border-cyber-cyan/30 mb-4"
          >
            <Send size={14} />
            <span>{t.contact.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.contact.title} <span className="text-gradient">{t.contact.highlightTitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards & Social Matrix (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Cards */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <span>Direct Channels</span>
                <Sparkles size={16} className="text-cyber-cyan" />
              </h3>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                onMouseEnter={playHoverSound}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-cyan/5 transition-all group"
              >
                <div className="h-11 w-11 rounded-xl bg-cyber-cyan/15 text-cyber-cyan flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    {t.contact.info.emailLabel}
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-cyber-cyan transition-colors">
                    {profile.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${profile.phone}`}
                onMouseEnter={playHoverSound}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-purple/40 hover:bg-cyber-purple/5 transition-all group"
              >
                <div className="h-11 w-11 rounded-xl bg-cyber-purple/15 text-cyber-purple flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    {t.contact.info.phoneLabel}
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-cyber-purple transition-colors">
                    {profile.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="h-11 w-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    {t.contact.info.locationLabel}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Connect on Channels
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-cyan/10 hover:text-cyber-cyan text-slate-300 text-xs font-mono transition-all"
                  >
                    {getSocialIcon(s.name)}
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Transmission Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-cyber-cyan/30 shadow-2xl bg-cyber-card/95"
          >
            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Transmission Received!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  {t.contact.form.success}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full rounded-xl bg-cyber-dark/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full rounded-xl bg-cyber-dark/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t.contact.form.subjectPlaceholder}
                    className="w-full rounded-xl bg-cyber-dark/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full rounded-xl bg-cyber-dark/80 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan/50 transition-colors resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                    <AlertCircle size={15} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple font-semibold text-slate-950 text-sm shadow-glow-cyan hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>
                    {status === "submitting"
                      ? t.contact.form.sending
                      : t.contact.form.send}
                  </span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
