import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Instagram,
  Linkedin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { profile, socials } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import BlobBackground from "./BlobBackground";
import confetti from "canvas-confetti";

const iconMap = { Github, Send, Instagram, Linkedin };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { x, y },
        colors: ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"],
      });

      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  const contactItems = [
    { icon: Mail, label: t.contact.info.email, value: profile.email },
    { icon: Phone, label: "Phone", value: profile.phone },
    { icon: MapPin, label: t.contact.info.location, value: profile.location },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <BlobBackground variant="section" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
            <Mail size={14} />
            {t.contact.sectionBadge}
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="glass-card flex items-center gap-4 rounded-2xl p-5 border border-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-md">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider font-mono text-accent">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-medium text-white/90">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <p className="mb-4 text-xs uppercase tracking-wider font-mono text-accent">
                Find me online
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = iconMap[s.icon] || Send;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white hover:shadow-glow focus-ring"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-strong relative rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider font-mono text-accent mb-2">
                  {t.contact.form.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full rounded-2xl bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider font-mono text-accent mb-2">
                  {t.contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full rounded-2xl bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider font-mono text-accent mb-2">
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full rounded-2xl bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 border border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
            </div>

            {/* Status Feedback Toast */}
            <AnimatePresence>
              {status === "sent" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="my-4 glass rounded-2xl p-4 border border-emerald-500/40 text-emerald-400 flex items-center gap-3 text-xs font-medium"
                >
                  <CheckCircle2 size={18} className="shrink-0" />
                  {t.contact.form.successMsg}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-cyan disabled:opacity-50 flex items-center justify-center gap-2 focus-ring"
              >
                {status === "sending" ? (
                  <>
                    <Sparkles size={16} className="animate-spin" />
                    {t.contact.form.sendingBtn}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t.contact.form.sendBtn}
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
