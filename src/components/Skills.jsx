import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Code2, Palette, Cpu, Sparkles } from "lucide-react";
import { skills } from "../data/portfolioData";

const skillCategories = ["All", "Frontend Core", "Styling & UI", "Tools & AI"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
            <Wrench size={14} />
            Tech Stack &amp; Proficiency
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Tools I build <span className="text-gradient">with</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60 text-sm sm:text-base">
            A battle-tested stack of modern frameworks, styling libraries, and AI-driven development tools.
          </p>

          {/* Category Tabs (Min 44px touch targets) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative min-h-[44px] rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 focus-ring ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
                    : "glass text-white/70 hover:border-accent/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AnimatePresence>
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="glass-card group rounded-2xl p-5 border border-white/10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl glass shadow-md"
                      style={{ borderLeft: `3px solid ${skill.color}` }}
                    >
                      <Sparkles size={16} style={{ color: skill.color }} />
                    </div>
                    <div>
                      <span className="font-display font-semibold text-white text-sm sm:text-base group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="block text-[10px] font-mono text-white/40">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-accent glass rounded-full px-2.5 py-1">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5 p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-glow"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
