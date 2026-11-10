import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  GithubIcon,
  Layers,
  Eye,
} from "./Icons";
import { projects } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import ProjectModal from "./ProjectModal";
import { playHoverSound, playClickSound } from "../utils/sound";

// 3D Tilt Card Component
function TiltProjectCard({ project, onSelect }) {
  const { t } = useLanguage();
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playHoverSound}
      className="group relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Banner & Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-cyber-card/30 to-transparent" />

        {/* Category & Badge pills */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyber-card/85 border border-white/10 text-slate-300 backdrop-blur-md">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan backdrop-blur-md">
            {project.badge}
          </span>
        </div>

        {/* Quick View trigger overlay button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyber-dark/40 backdrop-blur-[2px]">
          <button
            onClick={() => {
              playClickSound();
              onSelect(project);
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-cyber-cyan text-slate-950 px-4 py-2 text-xs font-mono font-bold shadow-glow-cyan hover:scale-105 transition-transform"
          >
            <Eye size={15} />
            <span>{t.projects.details}</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              playClickSound();
              onSelect(project);
            }}
            className="text-xs font-mono text-cyber-cyan hover:underline flex items-center gap-1"
          >
            {t.projects.details} &rarr;
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              title={t.projects.github}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              title={t.projects.liveDemo}
              className="p-2 rounded-xl bg-cyber-cyan/15 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/25 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { key: "all", label: t.projects.categories.all },
    { key: "E-Commerce", label: t.projects.categories.ecommerce },
    { key: "Web Apps", label: t.projects.categories.webapps },
    { key: "Tools", label: t.projects.categories.tools },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan bg-cyber-card border border-cyber-cyan/30 mb-4"
          >
            <Layers size={14} />
            <span>{t.projects.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.projects.title} <span className="text-gradient">{t.projects.highlightTitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  playClickSound();
                  setActiveCategory(cat.key);
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <TiltProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
