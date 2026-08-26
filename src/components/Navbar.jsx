import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { navLinks } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const languages = ["UZ", "EN", "RU"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const active = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled
            ? "glass py-2.5 shadow-lg shadow-black/20 mx-4"
            : "py-2 mx-4"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="font-display text-lg font-bold tracking-tight focus-ring"
        >
          <span className="text-gradient">RI</span>
          <span className="hidden text-white/70 dark:text-white/70 light:text-slate-700 sm:inline"> / Islom</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            const label = t.nav[link.labelKey] || link.labelKey;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors focus-ring ${
                  isActive ? "text-white font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </nav>

        {/* Controls: Theme Toggle & Translator */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="glass min-h-[38px] flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors focus-ring"
              aria-label="Select Language"
            >
              <Globe size={14} className="text-accent" />
              <span>{lang}</span>
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="glass-strong absolute right-0 mt-2 w-24 overflow-hidden rounded-2xl border border-white/10 p-1.5 shadow-xl"
                >
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full rounded-xl px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                        lang === l
                          ? "bg-accent/20 text-accent font-bold"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle (Dark / Light Mode) */}
          <button
            onClick={toggleTheme}
            className="glass min-h-[38px] min-w-[38px] flex items-center justify-center rounded-full p-2 text-white/80 transition-transform hover:scale-110 hover:text-white focus-ring"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-indigo-400" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden min-h-[38px] items-center rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105 md:inline-flex focus-ring"
          >
            {t.hero.contactMe}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full p-2 text-white md:hidden focus-ring"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="glass flex flex-col gap-1.5 p-4">
              {navLinks.map((link) => {
                const label = t.nav[link.labelKey] || link.labelKey;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active === link.href.replace("#", "")
                        ? "bg-white/10 text-white font-bold"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
