import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Code2, Eye } from "lucide-react";
import confetti from "canvas-confetti";

export default function ProjectModal({ project, isOpen, onClose }) {
  // Listen for Esc key to close modal
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

  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { x, y },
      colors: ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"],
    });
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-base-950/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="glass-strong relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header Banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-base-900 via-base-800 to-base-950 p-6 flex flex-col justify-end">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.gradient?.[0] || '#3B82F6'} 0%, ${project.gradient?.[1] || '#8B5CF6'} 100%)`,
                }}
              />

              {/* Close Button (Min 44x44px target) */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-base-950/60 text-white/70 backdrop-blur-md transition-colors hover:bg-base-950 hover:text-white focus-ring"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 flex items-center gap-3">
                <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-accent">
                  <Sparkles size={12} />
                  {project.category || "Project Feature"}
                </span>
              </div>

              <h2 id="modal-title" className="relative z-10 mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">About Project</h3>
                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="glass rounded-xl p-3 flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-xs text-white/90 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 flex items-center gap-1.5">
                  <Code2 size={14} />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="glass rounded-lg px-3 py-1.5 text-xs font-mono text-white/90 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={triggerConfetti}
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-cyan focus-ring"
                >
                  <Eye size={16} />
                  Live Preview
                  <ExternalLink size={14} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-accent/50 hover:text-white focus-ring"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
