import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Cpu,
  Layers,
  Rocket,
  ShieldCheck,
  Brain,
} from "./Icons";
import { profile, timeline } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { playHoverSound } from "../utils/sound";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan bg-cyber-card border border-cyber-cyan/30 mb-4"
          >
            <Cpu size={14} />
            <span>{t.about.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.about.title} <span className="text-gradient">{t.about.highlightTitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {t.about.subtitle}
          </motion.p>
        </div>

        {/* Futuristic Dashboard Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Main Identity Telemetry Card (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Holographic Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-cyber-cyan to-cyber-purple flex items-center justify-center font-display font-extrabold text-slate-950 text-xl shadow-glow-cyan">
                  RI
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    {profile.name}
                    <Sparkles size={15} className="text-cyber-cyan" />
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs font-mono text-cyber-cyan/90">
                    <MapPin size={13} />
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.about.statusAvailable}</span>
              </div>
            </div>

            {/* Bio Content */}
            <div className="py-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t.about.bio}</p>
              
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 font-mono text-xs text-cyber-cyan flex items-start gap-3">
                <ShieldCheck size={18} className="shrink-0 mt-0.5 text-cyber-cyan" />
                <p className="text-slate-300 italic">
                  &ldquo;{t.about.dashboard.codingPhilosophy}&rdquo;
                </p>
              </div>
            </div>

            {/* Stack Highlights pills */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {["React.js", "JavaScript ES6+", "Tailwind CSS", "Modern Web", "AI Tools", "Git & GitHub"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/5 border border-white/10 hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Bento Modules (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Learning Goals Module */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-cyber-purple/20 border border-cyber-purple/40 flex items-center justify-center text-cyber-purple">
                  <Rocket size={18} />
                </div>
                <h4 className="font-display font-semibold text-white text-base">
                  {t.about.dashboard.focusTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.about.dashboard.focusDesc}
              </p>
            </motion.div>

            {/* Core Interests Module */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-cyber-cyan/20 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
                  <Brain size={18} />
                </div>
                <h4 className="font-display font-semibold text-white text-base">
                  {t.about.dashboard.interestsTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                {t.about.dashboard.interestsDesc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* What I Build Module */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Layers size={18} />
                </div>
                <h4 className="font-display font-semibold text-white text-base">
                  {t.about.dashboard.whatIBuildTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.about.dashboard.whatIBuildDesc}
              </p>
            </motion.div>

          </div>
        </div>

        {/* Learning Journey Timeline Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.about.timelineTitle}
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              {t.about.timelineSubtitle}
            </p>
          </div>

          <div className="relative">
            {/* Timeline center connecting line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-blue -translate-x-1/2 opacity-30" />

            <div className="space-y-8 relative">
              {timeline.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full md:w-1/2 md:px-8">
                      <div
                        onMouseEnter={playHoverSound}
                        className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 relative group"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                            {step.period}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500">
                            Step 0{idx + 1}
                          </span>
                        </div>

                        <h4 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                          {step.title}
                        </h4>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Central Node Badge */}
                    <div className="my-3 md:my-0 flex items-center justify-center">
                      <div className="h-9 w-9 rounded-full bg-cyber-card border-2 border-cyber-cyan flex items-center justify-center text-cyber-cyan shadow-glow-cyan z-10 transition-transform hover:scale-125">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyber-cyan" />
                      </div>
                    </div>

                    {/* Empty opposite side spacer */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
