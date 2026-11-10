import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, ZoomIn, Download } from "./Icons";
import { certificates } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { playClickSound, playHoverSound } from "../utils/sound";

export default function Certificates() {
  const { t } = useLanguage();
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyber-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan bg-cyber-card border border-cyber-cyan/30 mb-4"
          >
            <Award size={14} />
            <span>{t.certificates.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.certificates.title}{" "}
            <span className="text-gradient-purple">{t.certificates.highlightTitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {t.certificates.subtitle}
          </motion.p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={playHoverSound}
                className="group relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyber-purple/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Preview / Placeholder Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-white/10 flex items-center justify-center">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-cyber-card to-cyber-dark text-slate-500 text-center">
                      <Award size={36} className="text-slate-600 mb-2" />
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {cert.badge}
                      </span>
                      <span className="text-[11px] text-slate-600 mt-1">
                        Awaiting official credential
                      </span>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md ${
                        cert.isReal
                          ? "bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan"
                          : "bg-white/10 border border-white/15 text-slate-400"
                      }`}
                    >
                      {cert.badge}
                    </span>

                    {cert.image && (
                      <button
                        onClick={() => {
                          playClickSound();
                          setActiveCert(cert);
                        }}
                        className="p-1.5 rounded-lg bg-cyber-dark/80 text-white border border-white/10 hover:text-cyber-cyan transition-colors"
                        title="Zoom In"
                      >
                        <ZoomIn size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyber-purple transition-colors">
                      {cert.title}
                    </h3>

                    <div className="space-y-1 text-xs font-mono text-slate-400 mb-4">
                      <p>
                        <strong className="text-slate-300">{t.certificates.issuedBy}</strong>{" "}
                        {cert.issuer}
                      </p>
                      <p>
                        <strong className="text-slate-300">{t.certificates.date}</strong>{" "}
                        {cert.date}
                      </p>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {cert.description}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    {cert.image ? (
                      <button
                        onClick={() => {
                          playClickSound();
                          setActiveCert(cert);
                        }}
                        className="text-xs font-mono text-cyber-cyan hover:underline flex items-center gap-1.5"
                      >
                        <ExternalLink size={14} />
                        <span>{t.certificates.viewCredential}</span>
                      </button>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 italic">
                        {t.certificates.placeholderNotice}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Lightbox Inspection Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playClickSound();
                setActiveCert(null);
              }}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative z-10 w-full max-w-3xl glass-panel rounded-3xl p-6 border border-cyber-purple/40 bg-cyber-card/95 shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => {
                  playClickSound();
                  setActiveCert(null);
                }}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-4">
                <h3 className="font-display font-bold text-xl text-white">
                  {activeCert.title}
                </h3>
                <p className="text-xs font-mono text-cyber-cyan mt-1">
                  {activeCert.issuer} • {activeCert.date}
                </p>
              </div>

              {/* Full Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center mb-5 max-h-[65vh]">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={activeCert.image}
                  download="Mars-Hackathon-Certificate-Islom-Rustamov.png"
                  onClick={playClickSound}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-purple text-white text-xs font-mono font-semibold shadow-glow-purple hover:bg-purple-600 transition-colors"
                >
                  <Download size={14} />
                  <span>Download Image</span>
                </a>

                <button
                  onClick={() => {
                    playClickSound();
                    setActiveCert(null);
                  }}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  {t.certificates.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
