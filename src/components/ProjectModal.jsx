import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, GithubIcon, Sparkles, Code2, CheckCircle2 } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { playClickSound } from "../utils/sound";

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClickSound();
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-cyber-cyan/30 shadow-2xl bg-cyber-card/95 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          >
            <X size={20} />
          </button>

          {/* Project Preview Image */}
          <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan backdrop-blur-md">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/15 text-slate-200 backdrop-blur-md">
                {project.badge}
              </span>
            </div>
          </div>

          {/* Title & Long Description */}
          <div className="mb-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-2">
              {project.title}
              <Sparkles size={18} className="text-cyber-cyan" />
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-cyan mb-3 flex items-center gap-2">
                <Code2 size={14} />
                {t.projects.modal.highlights}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3 border border-white/5 text-xs text-slate-300"
                  >
                    <CheckCircle2 size={15} className="text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              {t.projects.modal.stack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tItem) => (
                <span
                  key={tItem}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                >
                  {tItem}
                </span>
              ))}
            </div>
          </div>

          {/* Notice about editable link slots */}
          <p className="text-[11px] font-mono text-slate-400 mb-6 bg-white/5 rounded-xl p-3 border border-white/5">
            ℹ️ {t.projects.modal.linksNotice}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-glow-cyan hover:scale-[1.02] transition-transform"
            >
              <ExternalLink size={16} />
              <span>{t.projects.liveDemo}</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              <GithubIcon size={16} />
              <span>{t.projects.github}</span>
            </a>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="ml-auto text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              {t.projects.modal.close}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
