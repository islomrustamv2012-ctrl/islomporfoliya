import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  Wrench,
  Palette,
  Sparkles,
  Zap,
  Globe,
  Terminal,
} from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { playHoverSound, playClickSound } from "../utils/sound";

const skillsList = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: Code2,
    color: "#00E5FF",
    desc: "Component architecture, custom hooks, state management, and virtual DOM performance.",
    tag: "Core Framework",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: Zap,
    color: "#FACC15",
    desc: "Asynchronous programming, closures, promises, DOM manipulation, and modern syntax.",
    tag: "Language Core",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: Palette,
    color: "#38BDF8",
    desc: "Utility-first design systems, responsive grid layouts, custom themes, and glassmorphism.",
    tag: "UI Styling",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: Globe,
    color: "#FB923C",
    desc: "Semantic markup, accessibility (a11y), SEO-friendly structure, and clean DOM trees.",
    tag: "Markup",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: Layers,
    color: "#60A5FA",
    desc: "Flexbox, CSS Grid, keyframe animations, transitions, and media queries.",
    tag: "Styling",
  },
  {
    name: "Responsive Web Design",
    category: "frontend",
    icon: Cpu,
    color: "#34D399",
    desc: "Mobile-first philosophy, fluid scaling, cross-browser compatibility, and touch optimization.",
    tag: "Layout",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: Terminal,
    color: "#F87171",
    desc: "Branching strategies, commit workflows, merge conflict resolution, and versioning.",
    tag: "Version Control",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: Wrench,
    color: "#A78BFA",
    desc: "Repository management, open-source collaboration, issue tracking, and GitHub Pages.",
    tag: "Dev Platform",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: Code2,
    color: "#38BDF8",
    desc: "Modern development workflows, debugging extensions, snippets, and clean workspaces.",
    tag: "IDE",
  },

  // Interests
  {
    name: "AI Tools",
    category: "interests",
    icon: Sparkles,
    color: "#C084FC",
    desc: "AI-assisted coding, LLM integration, prompt engineering, and intelligent developer workflows.",
    tag: "Enthusiasm",
  },
  {
    name: "UI/UX Design",
    category: "interests",
    icon: Palette,
    color: "#F472B6",
    desc: "Design thinking, user journeys, micro-interactions, typography hierarchy, and accessibility.",
    tag: "Design Focus",
  },
  {
    name: "Modern Web Technologies",
    category: "interests",
    icon: Globe,
    color: "#00E5FF",
    desc: "Fast Vite build tooling, interactive 3D WebGL experiences, and progressive web performance.",
    tag: "Continuous Learning",
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: t.skills.categories.all },
    { key: "frontend", label: t.skills.categories.frontend },
    { key: "tools", label: t.skills.categories.tools },
    { key: "interests", label: t.skills.categories.interests },
  ];

  const filteredSkills =
    filter === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background constellation stars */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan bg-cyber-card border border-cyber-cyan/30 mb-4"
          >
            <Sparkles size={14} />
            <span>{t.skills.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.skills.title} <span className="text-gradient">{t.skills.highlightTitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {t.skills.subtitle}
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  playClickSound();
                  setFilter(cat.key);
                }}
                onMouseEnter={playHoverSound}
                className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 text-cyber-cyan border border-cyber-cyan/50 shadow-glow-cyan"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Constellation Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onMouseEnter={playHoverSound}
                  className="group relative glass-card rounded-2xl p-6 border border-white/10 hover:border-cyber-cyan/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Subtle top neon line on hover */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Icon & Category Tag */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className="h-11 w-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          border: `1px solid ${skill.color}40`,
                          color: skill.color,
                        }}
                      >
                        <IconComponent size={22} />
                      </div>

                      <span
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border transition-colors"
                        style={{
                          borderColor: `${skill.color}35`,
                          color: skill.color,
                          backgroundColor: `${skill.color}10`,
                        }}
                      >
                        {skill.tag}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                      {skill.name}
                    </h3>

                    {/* Skill Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Active telemetry indicator at bottom */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      Active Skill
                    </span>
                    <span className="text-slate-400 group-hover:text-cyber-cyan transition-colors">
                      {skill.category.toUpperCase()}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
