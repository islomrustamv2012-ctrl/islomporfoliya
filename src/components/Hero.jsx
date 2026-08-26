import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, ChevronDown, Sparkles } from "lucide-react";
import { profile, stats } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import BlobBackground from "./BlobBackground";
import ParticlesBackground from "./ParticlesBackground";

function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span className="font-display text-3xl font-bold text-white dark:text-white light:text-slate-900 sm:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const typed = useTypewriter(t.hero.roles || profile.roles);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const statLabels = [
    t.hero.stats.years,
    t.hero.stats.projects,
    t.hero.stats.tech,
    t.hero.stats.lines,
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <BlobBackground variant="hero" />
      <ParticlesBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80 dark:text-white/80 light:text-slate-800"
          >
            <Sparkles size={14} className="text-accent" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white dark:text-white light:text-slate-900 sm:text-5xl md:text-6xl"
          >
            {t.hero.greeting}{" "}
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
              {profile.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 flex h-9 items-center font-mono text-lg text-white/80 dark:text-white/80 light:text-slate-700 sm:text-xl"
          >
            <span className="mr-2 text-accent">{t.hero.rolePrefix}</span>
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 dark:text-white/60 light:text-slate-600 sm:text-lg"
          >
            {t.hero.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-right hover:shadow-glow-purple focus-ring"
            >
              {t.hero.viewProjects}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white/90 dark:text-white/90 light:text-slate-900 transition-all duration-300 hover:border-accent/50 focus-ring"
            >
              <Mail size={16} />
              {t.hero.contactMe}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s, idx) => (
              <div key={s.label} className="glass-card rounded-2xl px-4 py-4 text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50 dark:text-white/50 light:text-slate-500 font-mono">
                  {statLabels[idx] || s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image / Avatar column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
          style={{ perspective: 1000 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-2xl" />
            <div className="gradient-border glass-strong relative aspect-square overflow-hidden rounded-[2.5rem] p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-base-900 to-base-800 dark:from-base-900 dark:to-base-800 light:from-slate-100 light:to-slate-200">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-display text-8xl font-bold text-gradient">
                    RI
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent dark:from-base-950/80 light:from-white/40" />
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-8 rounded-full border border-dashed border-white/10 dark:border-white/10 light:border-slate-300"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass absolute -left-8 top-8 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-mono text-white/80 dark:text-white/80 light:text-slate-800 shadow-lg"
            >
              ⚛️ React.js
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass absolute -right-6 top-1/2 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-mono text-white/80 dark:text-white/80 light:text-slate-800 shadow-lg"
            >
              🎨 Tailwind
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="glass absolute -bottom-4 left-10 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-mono text-white/80 dark:text-white/80 light:text-slate-800 shadow-lg"
            >
              🤖 AI Tools
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40 dark:text-white/40 light:text-slate-400 transition-colors hover:text-white focus-ring"
        aria-label="Scroll to About section"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={26} />
        </motion.div>
      </motion.button>
    </section>
  );
}
