import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Download,
  Volume2,
  VolumeX,
} from "./Icons";
import { navLinks, profile } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import useActiveSection from "../hooks/useActiveSection";
import {
  playClickSound,
  playHoverSound,
  isSoundEnabled,
  toggleSound,
} from "../utils/sound";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const sectionIds = navLinks.map((l) => l.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playClickSound();
  };

  const handleDownloadCV = () => {
    playClickSound();
    const cvText = `
=====================================================
ISLOM RUSTAMOV — FRONTEND DEVELOPER & REACT DEVELOPER
=====================================================

Location: Tashkent, Uzbekistan
Role: Frontend Developer / React Developer
Interests: AI, Modern Web Technologies, UI/UX Design
Email: ${profile.email}
Phone: ${profile.phone}
GitHub: https://github.com/rustamov-islom

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Responsive Design
- Tools: Git, GitHub, VS Code, Vite
- Innovation: AI Coding Tools, UI/UX Design Systems, 3D Web (Three.js)

PROJECTS:
1. Toystore — Dynamic E-commerce storefront with cart & filters.
2. Foodtruck — Street-food brand experience with responsive menus.
3. Time — Dark-mode productivity studio with world clocks & stopwatch.
4. Texlogiya — Modern technology showcase portal with Bento Grid.

CERTIFICATES:
- Mars Hackathon 2026: 1st Place (Top 1) Participant Sertifikat

=====================================================
`;
    const blob = new Blob([cvText.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Islom-Rustamov-CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const languages = ["EN", "UZ", "RU"];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "glass-panel bg-cyber-dark/85 shadow-2xl border border-cyber-cyan/20 px-4 sm:px-6 py-2.5"
            : "bg-transparent px-2 sm:px-4 py-2"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2.5 group"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-purple p-[1.5px] shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="h-full w-full rounded-[10px] bg-cyber-dark flex items-center justify-center font-display font-extrabold text-sm text-cyber-cyan tracking-wider">
                RI
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-sm tracking-tight text-white block group-hover:text-cyber-cyan transition-colors">
                Islom Rustamov
              </span>
              <span className="text-[10px] font-mono text-slate-400 block -mt-1">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const label = t.nav[link.labelKey] || link.labelKey;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "text-slate-950 font-bold bg-cyber-cyan shadow-glow-cyan"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Right Action Tools: Language, Theme, Audio, CV */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  playClickSound();
                  setLangMenuOpen(!langMenuOpen);
                }}
                onMouseEnter={playHoverSound}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                title="Change Language"
              >
                <Globe size={14} className="text-cyber-cyan" />
                <span>{lang}</span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-24 rounded-xl glass-panel border border-cyber-cyan/30 bg-cyber-dark/95 shadow-xl py-1 z-50 font-mono text-xs"
                  >
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          playClickSound();
                          setLang(l);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 transition-colors ${
                          lang === l
                            ? "text-cyber-cyan font-bold bg-cyber-cyan/15"
                            : "text-slate-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={() => {
                playClickSound();
                toggleTheme();
              }}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-xl bg-white/5 border border-white/10 transition-colors ${
                soundOn
                  ? "text-cyber-cyan hover:border-cyber-cyan/40"
                  : "text-slate-500 hover:text-slate-300"
              }`}
              title={soundOn ? "Mute Sci-Fi Audio" : "Unmute Audio"}
            >
              {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Download CV CTA */}
            <button
              onClick={handleDownloadCV}
              onMouseEnter={playHoverSound}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono font-medium hover:bg-cyber-cyan/30 transition-all shadow-sm"
            >
              <Download size={13} />
              <span>{t.nav.downloadCv}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white xl:hidden"
              title="Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden mt-3 pt-3 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-1 pb-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const label = t.nav[link.labelKey] || link.labelKey;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => {
                        playClickSound();
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all ${
                        isActive
                          ? "bg-cyber-cyan text-slate-950 font-bold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {label}
                    </a>
                  );
                })}

                <button
                  onClick={() => {
                    handleDownloadCV();
                    setMobileMenuOpen(false);
                  }}
                  className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono font-bold"
                >
                  <Download size={15} />
                  <span>{t.nav.downloadCv}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
