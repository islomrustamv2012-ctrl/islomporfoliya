import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, ShieldCheck, Sparkles, ZoomIn } from "lucide-react";
import { certificates } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import confetti from "canvas-confetti";

export default function Certificates() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const handleCertClick = (cert, e) => {
    setSelectedCert(cert);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { x, y },
      colors: ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"],
    });
  };

  return (
    <section id="certificates" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
            <Award size={14} />
            {t.certificates.sectionBadge}
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.certificates.title} <span className="text-gradient">{t.certificates.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60 text-sm sm:text-base">
            {t.certificates.subtitle}
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card relative overflow-hidden rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Image Preview Banner */}
                {cert.image ? (
                  <div
                    onClick={(e) => handleCertClick(cert, e)}
                    className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer group/img"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-base-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                      <ZoomIn size={18} className="text-accent" />
                      Sertifikatni Kattalashtirish
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${cert.imageGradient[0]}, ${cert.imageGradient[1]})`,
                        }}
                      >
                        <Award size={24} className="text-white" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-accent font-semibold">
                          <ShieldCheck size={12} />
                          {t.certificates.verified}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {cert.image && (
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-accent font-semibold mb-1">
                        <ShieldCheck size={12} />
                        {t.certificates.verified}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-xs text-white/50 mb-3 font-mono">
                    <span>{t.certificates.issuedBy}: <strong className="text-white/80">{cert.issuer}</strong></span>
                    <span>•</span>
                    <span>{t.certificates.date}: <strong className="text-white/80">{cert.date}</strong></span>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-white/60 mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <button
                  onClick={(e) => handleCertClick(cert, e)}
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white/90 transition-all hover:border-accent/50 hover:text-white focus-ring"
                >
                  <Sparkles size={14} className="text-accent" />
                  {t.certificates.viewCert}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Certificate Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-base-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-strong relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-base-950/70 text-white/80 backdrop-blur-md transition-colors hover:text-white focus-ring"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-mono text-accent">
                  <ShieldCheck size={14} />
                  {t.certificates.verified}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-white/50">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              {/* Certificate Full Image Display */}
              {selectedCert.image && (
                <div className="my-4 overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-black/20">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                  />
                </div>
              )}

              <div className="glass rounded-2xl p-4 mb-6 space-y-3">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {selectedCert.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedCert.skills.map((s) => (
                    <span key={s} className="glass rounded px-2.5 py-1 text-[10px] font-mono text-accent font-semibold">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                {selectedCert.credentialUrl && selectedCert.credentialUrl.startsWith("http") ? (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-xs font-semibold text-white shadow-glow transition-all focus-ring"
                  >
                    Verify Online Credential
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-xs font-semibold text-white shadow-glow transition-all focus-ring"
                  >
                    Yopish
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
