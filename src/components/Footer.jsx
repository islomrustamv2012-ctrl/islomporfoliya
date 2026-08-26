import { Github, Send, Instagram, Linkedin, Heart } from "lucide-react";
import { socials, navLinks } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const iconMap = { Github, Send, Instagram, Linkedin };

export default function Footer() {
  const { t } = useLanguage();

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="font-display text-lg font-bold focus-ring"
        >
          <span className="text-gradient">Rustamov Islom</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => {
            const label = t.nav[link.labelKey] || link.labelKey;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-xs sm:text-sm font-medium text-white/60 transition-colors hover:text-white focus-ring"
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = iconMap[s.icon] || Send;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-accent hover:text-white focus-ring"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-2 border-t border-white/5 px-6 pt-6 text-center text-xs text-white/40 sm:flex-row sm:justify-between">
        <p>© 2026 Rustamov Islom. {t.footer.rights}</p>
        <p className="flex items-center gap-1.5">
          Built with <Heart size={12} className="text-secondary" fill="currentColor" /> using React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
