import { GithubIcon, LinkedinIcon, InstagramIcon, TelegramIcon, ArrowUp } from "./Icons";
import { socials, navLinks } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { playClickSound, playHoverSound } from "../utils/sound";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case "GitHub":
        return <GithubIcon size={18} />;
      case "LinkedIn":
        return <LinkedinIcon size={18} />;
      case "Instagram":
        return <InstagramIcon size={18} />;
      case "Telegram":
        return <TelegramIcon size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-cyber-dark/80 pt-16 pb-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-purple p-[1.5px] shadow-glow-cyan">
                <div className="h-full w-full rounded-[10px] bg-cyber-dark flex items-center justify-center font-display font-extrabold text-sm text-cyber-cyan">
                  RI
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Islom Rustamov
                </h3>
                <p className="text-xs font-mono text-cyber-cyan">
                  Frontend Developer & React Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            {/* System Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.footer.status}</span>
            </div>
          </div>

          {/* Quick Navigation Links (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className="text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  {t.nav[link.labelKey] || link.labelKey}
                </a>
              ))}
            </div>
          </div>

          {/* Social Channels (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Developer Channels
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  title={s.name}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 hover:bg-cyber-cyan/10 transition-colors"
                >
                  {getSocialIcon(s.name)}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Attribution & Back-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Islom Rustamov. {t.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyber-cyan transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={14} className="text-cyber-cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
}
