import { motion } from "framer-motion";
import { Rocket, BookOpen, Hammer, Target } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Self-taught, daily",
    description:
      "Learning React, JavaScript and modern CSS through documentation, courses and hands-on practice — every single day.",
  },
  {
    icon: Hammer,
    title: "Project-driven growth",
    description:
      "Instead of waiting for a job, I build real projects to simulate professional workflows and sharpen practical skills.",
  },
  {
    icon: Target,
    title: "Focused on fundamentals",
    description:
      "Prioritizing clean code, responsive layouts and performance so future professional work starts from a strong base.",
  },
  {
    icon: Rocket,
    title: "Open to opportunities",
    description:
      "Actively looking for my first collaboration, internship or freelance project to apply these skills in the real world.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Experience
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Early in the journey,{" "}
            <span className="text-gradient">serious about the craft</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="gradient-border glass-strong mx-auto mb-12 max-w-3xl rounded-3xl p-8 text-center"
        >
          <p className="leading-relaxed text-white/70">
            I haven't worked at a company yet — I'm 14 and just getting
            started. What I do have is consistent practice: I show up,
            build, break things, and fix them. Every project below is
            self-initiated and built to learn something new.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-purple"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <p.icon size={20} />
              </div>
              <h3 className="relative font-display text-base font-semibold">
                {p.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/55">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
