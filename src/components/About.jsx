import { motion } from "framer-motion";
import { MapPin, Sparkles, Code2, ShieldCheck, Zap, Bot, Smartphone } from "lucide-react";
import { profile, timeline } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import BlobBackground from "./BlobBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden py-28">
      <BlobBackground variant="section" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 text-center"
        >
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
            <Code2 size={14} />
            {t.about.sectionBadge}
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.about.title} <span className="text-gradient">{t.about.highlightTitle}</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout for About */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Bio Card (8 columns) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="gradient-border glass-card relative h-full rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                      <Code2 size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {profile.name}
                      </h3>
                      <p className="flex items-center gap-1 text-xs text-accent font-mono mt-0.5">
                        <MapPin size={13} /> {t.about.location}
                      </p>
                    </div>
                  </div>

                  <span className="glass rounded-full px-3 py-1 text-[11px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    Available
                  </span>
                </div>

                <p className="leading-relaxed text-white/75 text-sm sm:text-base mb-6">
                  {t.about.bio}
                </p>

                <div className="flex items-start gap-3 rounded-2xl glass p-4 border border-white/10">
                  <Sparkles size={18} className="mt-0.5 shrink-0 text-accent" />
                  <p className="text-xs sm:text-sm leading-relaxed text-white/65">
                    {t.about.note}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {["React.js", "JavaScript ES6+", "Tailwind CSS", "Framer Motion", "Vite", "AI Tools"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Value Cards Grid (5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">{t.about.cards.cleanCodeTitle}</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">{t.about.cards.cleanCodeDesc}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                <Smartphone size={20} />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">{t.about.cards.responsiveTitle}</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">{t.about.cards.responsiveDesc}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">{t.about.cards.aiTitle}</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">{t.about.cards.aiDesc}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">{t.about.cards.fastTitle}</h4>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">{t.about.cards.fastDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
