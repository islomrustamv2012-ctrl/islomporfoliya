import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, Maximize2, Minimize2 } from "./Icons";
import { profile, projects, socials } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { playKeySound, playClickSound, playHoverSound } from "../utils/sound";

export default function DeveloperTerminal() {
  const { t } = useLanguage();
  const [history, setHistory] = useState([
    {
      id: "init",
      command: "welcome",
      output: `${t.terminal.welcome}\nSystem: Host connection active.\nType 'help' to inspect available commands.`,
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [copied, setCopied] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll terminal on command execution
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdRaw) => {
    const raw = cmdRaw.trim();
    if (!raw) return;

    playKeySound();
    const parts = raw.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    let output = "";

    switch (cmd) {
      case "help":
        output = `
AVAILABLE TERMINAL COMMANDS:
  help       - Display this command index
  about      - Personal overview and digital identity
  skills     - Detailed breakdown of technical competencies
  projects   - Engineered software products and showcases
  contact    - Reach Islom via email, phone, or transmissions
  socials    - Developer channels and social links
  date       - Output current system timestamp
  whoami     - Identify current terminal operative
  clear      - Wipe terminal output buffer
  matrix     - Activate cyber code stream
  echo <txt> - Output specified arguments to stdout
`;
        break;

      case "about":
        output = `
OPERATIVE PROFILE:
  Name:       ${profile.name}
  Location:   ${profile.location}
  Role:       ${profile.title}
  Focus:      ${profile.currentFocus}
  Bio:        ${profile.bio}
`;
        break;

      case "skills":
        output = `
TECHNICAL MATRIX:
  [Frontend]  React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Responsive Design
  [Tools]     Git, GitHub, VS Code, Vite
  [Interests] AI Coding Tools, UI/UX Design Systems, 3D WebGL (Three.js)
`;
        break;

      case "projects":
        output = projects
          .map(
            (p, idx) =>
              `0${idx + 1}. [${p.title}] (${p.category}) -> Tech: ${p.tech.join(", ")}\n    Summary: ${p.description}`
          )
          .join("\n\n");
        break;

      case "contact":
        output = `
DIRECT CHANNELS:
  Email:    ${profile.email}
  Phone:    ${profile.phone}
  Location: ${profile.location}
  Status:   Open for frontend developer opportunities
`;
        break;

      case "socials":
        output = socials
          .map((s) => `  * ${s.name.padEnd(10)}: ${s.url}`)
          .join("\n");
        break;

      case "date":
        output = `System Time: ${new Date().toISOString()} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`;
        break;

      case "whoami":
        output = `visitor@portfolio.islom.dev (Privilege Level: Guest Explorer - Read/Execute Access Granted)`;
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "matrix":
        output = `
01001001 01010011 01001100 01001111 01001101 00100000 
01010010 01010101 01010011 01010100 01000001 01001101 
01001111 01010110 00100000 00110010 00110010 00110010 
[CYBER STREAM INITIALIZED: THE MATRIX HAS YOU]
`;
        break;

      case "echo":
        output = args || "";
        break;

      default:
        output = `command not found: "${cmd}". Type 'help' to see valid operations.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: raw,
        output: output.trim(),
      },
    ]);

    setCommandHistory((prev) => [...prev, raw]);
    setHistoryPointer(-1);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx =
          historyPointer === -1
            ? commandHistory.length - 1
            : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer !== -1) {
        const nextIdx = historyPointer + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryPointer(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        } else {
          setHistoryPointer(-1);
          setInputVal("");
        }
      }
    }
  };

  const handleCopyBuffer = () => {
    playClickSound();
    const allText = history
      .map((item) => `$ ${item.command}\n${item.output}`)
      .join("\n\n");
    navigator.clipboard.writeText(allText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyber-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan bg-cyber-card border border-cyber-cyan/30 mb-4"
          >
            <Terminal size={14} />
            <span>{t.terminal.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.terminal.title} <span className="text-gradient">{t.terminal.highlightTitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {t.terminal.subtitle}
          </motion.p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-500 mr-1">Quick run:</span>
          {t.terminal.quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => executeCommand(chip)}
              onMouseEnter={playHoverSound}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-cyber-cyan/15 hover:text-cyber-cyan border border-white/10 hover:border-cyber-cyan/30 text-slate-300 transition-colors"
            >
              ${chip}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`glass-panel rounded-3xl border border-cyber-cyan/25 shadow-2xl overflow-hidden bg-slate-950/90 font-mono transition-all duration-300 ${
            isMaximized ? "min-h-[640px]" : "min-h-[440px]"
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Title Bar Controls */}
          <div className="px-5 py-3.5 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block hover:opacity-100 cursor-pointer" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block hover:opacity-100 cursor-pointer" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 cursor-pointer" />
              <span className="ml-3 text-xs text-slate-400 select-none">
                bash - islom@portfolio-os: ~
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyBuffer();
                }}
                title="Copy Terminal Buffer"
                className="text-xs text-slate-400 hover:text-cyber-cyan flex items-center gap-1 transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playClickSound();
                  setIsMaximized(!isMaximized);
                }}
                title={isMaximized ? "Restore" : "Maximize"}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            className={`p-5 sm:p-6 text-xs sm:text-sm overflow-y-auto terminal-scanlines space-y-4 ${
              isMaximized ? "max-h-[560px]" : "max-h-[380px]"
            }`}
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-cyber-cyan font-semibold">
                  <span className="text-emerald-400">islom@portfolio:~$</span>
                  <span>{item.command}</span>
                </div>
                <pre className="text-slate-300 font-mono whitespace-pre-wrap leading-relaxed pl-4 border-l border-white/10 text-xs sm:text-sm">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-2 text-cyber-cyan pt-2">
              <span className="text-emerald-400 shrink-0">islom@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.terminal.placeholder}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-slate-600 text-xs sm:text-sm caret-cyber-cyan"
                autoComplete="off"
                spellCheck="false"
              />
              <span className="inline-block w-2 h-4 bg-cyber-cyan animate-blink" />
            </div>

            <div ref={terminalEndRef} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
