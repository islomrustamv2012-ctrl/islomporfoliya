import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Gift,
  Truck,
  Clock,
  Cpu,
  UserRound,
  CloudSun,
  ListChecks,
  ShoppingBag,
  Sparkles,
  Layers,
  Eye,
} from "lucide-react";
import { projects } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import ProjectModal from "./ProjectModal";

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

const categories = ["All", "E-Commerce", "Web Apps", "Tools"];

function ProjectThumb({ project }) {
  const Icon = iconMap[project.icon] || Sparkles;
  const [from, to] = project.gradient;

  if (project.image) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-base-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/40 to-transparent opacity-80" />
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${from}33, ${to}33)`,
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-25" />
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
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
            <Layers size={14} />
            {t.projects.sectionBadge}
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.projects.title} <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60 text-sm sm:text-base">
            {t.projects.subtitle}
          </p>

          {/* Category Filter Tabs (Min 44px touch targets) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
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

        {/* Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group glass-card relative overflow-hidden rounded-3xl flex flex-col justify-between border border-white/10 ${
                  project.featured && activeCategory === "All" && i === 0
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl">
                    <ProjectThumb project={project} />

                    {/* Category Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="glass rounded-full px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-base-950/75 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex h-11 min-w-[44px] items-center gap-2 rounded-full bg-accent px-4 text-xs font-semibold text-base-950 transition-transform hover:scale-105 focus-ring"
                      >
                        <Eye size={16} />
                        {t.projects.quickView}
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-transform hover:scale-110 hover:bg-white/20 focus-ring"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/60 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 mt-4">
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="pt-3 text-xs font-semibold text-accent hover:underline flex items-center gap-1 focus-ring"
                  >
                    {t.projects.details}
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
