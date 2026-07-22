import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Skills
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Tools I build <span className="text-gradient">with</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            A growing toolkit, sharpened project after project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium text-white">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: skill.color }}
                  />
                  {skill.name}
                </span>
                <span className="font-mono text-sm text-white/50">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
