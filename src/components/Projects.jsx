import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Gift,
  Truck,
  Clock,
  Cpu,
  UserRound,
  CloudSun,
  ListChecks,
  ShoppingBag,
} from "lucide-react";
import { projects } from "../data/portfolioData";

const iconMap = {
  Gift,
  Truck,
  Clock,
  Cpu,
  UserRound,
  CloudSun,
  ListChecks,
  ShoppingBag,
};

function ProjectThumb({ project }) {
  const Icon = iconMap[project.icon];
  const [from, to] = project.gradient;

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${from}33, ${to}33)`,
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-20" />
      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-40"
        style={{ background: to }}
      />
      <div
        className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full blur-2xl opacity-30"
        style={{ background: from }}
      />
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <Icon size={28} className="text-white" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Projects
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            A selection of self-initiated projects exploring UI, interaction
            and React fundamentals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group glass relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectThumb project={project} />

                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-base-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-transform hover:scale-110 hover:bg-white/20"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white transition-transform hover:scale-110"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
