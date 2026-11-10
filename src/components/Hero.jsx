import { motion } from "framer-motion";
import { ArrowRight, Mail, Download, Sparkles, ChevronDown } from "./Icons";
import { profile } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import Hero3DCanvas from "./Hero3DCanvas";
import { playHoverSound, playClickSound } from "../utils/sound";

export default function Hero() {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    playClickSound();
    // Create and download a structured developer profile document or open clean printable version
    const cvText = `
=====================================================
ISLOM RUSTAMOV — FRONTEND DEVELOPER & REACT DEVELOPER
=====================================================

Location: Tashkent, Uzbekistan
Role: Frontend Developer / React Developer
Interests: AI, Modern Web Technologies, UI/UX Design
Email: ${profile.email}
Phone: ${profile.phone}
Portfolio: https://github.com/rustamov-islom

TECHNICAL SKILLS:
- Frontend Core: HTML5, CSS3, JavaScript (ES6+), React.js
- Styling & UI: Tailwind CSS, Responsive Web Design, Framer Motion
- Tools: Git, GitHub, VS Code, Vite
- Innovation: AI Coding Tools, UI/UX Design Systems, 3D Web Experiences

FEATURED PROJECTS:
1. Toystore — Dynamic E-commerce storefront with stateful cart & filters.
2. Foodtruck — Interactive culinary brand with responsive menus & booking.
3. Time — Dark-mode productivity studio with world clock & stopwatch.
4. Texlogiya — Futuristic IT tech showcase platform with Bento Grid layouts.

HONORS & CREDENTIALS:
- Mars Hackathon 2026: 1st Place Participant Sertifikat (Mars IT School & IT Park)

=====================================================
`;
    const blob = new Blob([cvText.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Islom-Rustamov-CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-32"
    >
      {/* Background cyber radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyber-cyan/10 via-cyber-purple/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-cyber-cyan bg-cyber-card/80 border border-cyber-cyan/30 backdrop-blur-md mb-6 shadow-glow-cyan"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
              </span>
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyber-cyan/90 mb-3 flex items-center gap-2"
            >
              <Sparkles size={15} className="text-cyber-cyan animate-pulse" />
              <span>{t.hero.greeting}</span>
            </motion.p>

            {/* Giant Futuristic Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]"
            >
              <span className="text-gradient">ISLOM</span> <br />
              <span className="text-white drop-shadow-sm">RUSTAMOV</span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-mono text-cyber-muted mb-6"
            >
              <span className="text-cyber-cyan font-bold">&gt;</span>
              <span className="text-slate-200">{t.hero.role}</span>
            </motion.div>

            {/* Introduction Quote */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-8 lg:mb-10"
            >
              &ldquo;{t.hero.intro}&rdquo;
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              {/* Explore My Work */}
              <a
                href="#projects"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.hero.explore}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Let's Talk */}
              <a
                href="#contact"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 hover:text-cyber-cyan active:scale-[0.98]"
              >
                <Mail size={16} />
                <span>{t.hero.talk}</span>
              </a>

              {/* Download CV */}
              <button
                onClick={handleDownloadCV}
                onMouseEnter={playHoverSound}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyber-purple/40 bg-cyber-purple/10 backdrop-blur-md px-5 py-3.5 text-sm font-medium text-cyber-purple hover:bg-cyber-purple/20 hover:border-cyber-purple transition-all duration-300 active:scale-[0.98]"
              >
                <Download size={16} />
                <span>{t.hero.downloadCv}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Sphere & Floating Labels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* The 3D Canvas */}
            <div className="relative z-10 w-full flex items-center justify-center">
              <Hero3DCanvas />
            </div>

            {/* Floating Futuristic Tech Badges */}
            {/* 1. React.js */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 left-4 sm:left-12 z-20 glass-panel rounded-xl px-3.5 py-1.5 shadow-lg border border-cyan-400/30 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-semibold text-cyan-300">
                {t.hero.floatingLabels.react}
              </span>
            </motion.div>

            {/* 2. JavaScript */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-1/4 -right-2 sm:right-4 z-20 glass-panel rounded-xl px-3.5 py-1.5 shadow-lg border border-yellow-400/30 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-xs font-mono font-semibold text-yellow-300">
                {t.hero.floatingLabels.javascript}
              </span>
            </motion.div>

            {/* 3. AI Tools */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-16 -left-3 sm:left-4 z-20 glass-panel rounded-xl px-3.5 py-1.5 shadow-lg border border-purple-400/30 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-purple-300">
                {t.hero.floatingLabels.aiTools}
              </span>
            </motion.div>

            {/* 4. Frontend Development */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              className="absolute -bottom-4 right-6 sm:right-16 z-20 glass-panel rounded-xl px-3.5 py-1.5 shadow-lg border border-blue-400/30 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-mono font-semibold text-blue-300">
                {t.hero.floatingLabels.frontend}
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 sm:mt-16 flex flex-col items-center justify-center gap-2"
        >
          <a
            href="#about"
            onMouseEnter={playHoverSound}
            className="flex flex-col items-center text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
          >
            <span>{t.hero.scrollDown}</span>
            <ChevronDown size={18} className="animate-bounce mt-1 text-cyber-cyan" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
