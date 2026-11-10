import { useState, useEffect, useRef } from "react";
import { Gamepad2, Trophy, RotateCcw, Zap, Brain, MousePointer, Sparkles } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import confetti from "canvas-confetti";
import { playClickSound, playHoverSound, playSuccessSound } from "../utils/sound";

export default function MiniGames() {
  const { t } = useLanguage();
  const [activeGame, setActiveGame] = useState("reaction"); // 'reaction' | 'memory' | 'clicker'

  // ==================== GAME 1: REACTION TEST ====================
  // status: 'idle' | 'waiting' | 'ready' | 'result' | 'early'
  const [reactionState, setReactionState] = useState("idle");
  const [reactionTime, setReactionTime] = useState(null);
  const [bestReaction, setBestReaction] = useState(() => {
    return localStorage.getItem("mini_best_reaction") || null;
  });
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);

  const startReactionTest = () => {
    playClickSound();
    setReactionState("waiting");
    setReactionTime(null);

    const randomDelay = Math.floor(Math.random() * 2500) + 1500; // 1.5s to 4.0s
    timeoutRef.current = setTimeout(() => {
      startTimeRef.current = performance.now();
      setReactionState("ready");
    }, randomDelay);
  };

  const handleReactionClick = () => {
    if (reactionState === "waiting") {
      clearTimeout(timeoutRef.current);
      setReactionState("early");
      playClickSound();
    } else if (reactionState === "ready") {
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setReactionTime(elapsed);
      setReactionState("result");
      playSuccessSound();

      if (!bestReaction || elapsed < Number(bestReaction)) {
        setBestReaction(elapsed);
        localStorage.setItem("mini_best_reaction", String(elapsed));
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      }
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const getReactionGrade = (ms) => {
    if (!ms) return "";
    if (ms < 210) return t.games.reaction.gradeGod;
    if (ms < 270) return t.games.reaction.gradePro;
    if (ms < 340) return t.games.reaction.gradeGood;
    return t.games.reaction.gradeAverage;
  };

  // ==================== GAME 2: NUMBER MEMORY ====================
  // status: 'idle' | 'showing' | 'input' | 'success' | 'gameover'
  const [memoryLevel, setMemoryLevel] = useState(1);
  const [memorySequence, setMemorySequence] = useState("");
  const [memoryInput, setMemoryInput] = useState("");
  const [memoryState, setMemoryState] = useState("idle");
  const [maxLevel, setMaxLevel] = useState(() => {
    return localStorage.getItem("mini_best_memory") || 1;
  });
  const memoryTimerRef = useRef(null);

  const startMemoryGame = (lvl = 1) => {
    playClickSound();
    setMemoryLevel(lvl);
    setMemoryInput("");

    // Generate random number of length 3 + level
    const length = 3 + lvl;
    let seq = "";
    for (let i = 0; i < length; i++) {
      seq += Math.floor(Math.random() * 10).toString();
    }
    setMemorySequence(seq);
    setMemoryState("showing");

    clearTimeout(memoryTimerRef.current);
    const duration = 2200 + lvl * 300;
    memoryTimerRef.current = setTimeout(() => {
      setMemoryState("input");
    }, duration);
  };

  const handleMemorySubmit = (e) => {
    e.preventDefault();
    if (memoryInput.trim() === memorySequence) {
      playSuccessSound();
      const nextLevel = memoryLevel + 1;
      setMemoryLevel(nextLevel);
      setMemoryState("success");

      if (nextLevel > Number(maxLevel)) {
        setMaxLevel(nextLevel);
        localStorage.setItem("mini_best_memory", String(nextLevel));
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
      }

      setTimeout(() => {
        startMemoryGame(nextLevel);
      }, 1200);
    } else {
      playClickSound();
      setMemoryState("gameover");
    }
  };

  // ==================== GAME 3: CLICK CHALLENGE ====================
  // status: 'idle' | 'running' | 'finished'
  const [clickerState, setClickerState] = useState("idle");
  const [clickCount, setClickCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5.0);
  const [bestCPS, setBestCPS] = useState(() => {
    return localStorage.getItem("mini_best_cps") || null;
  });
  const clickerIntervalRef = useRef(null);

  const startClickerGame = () => {
    playClickSound();
    setClickCount(0);
    setTimeLeft(5.0);
    setClickerState("running");

    const startTime = Date.now();
    const duration = 5000;

    clearInterval(clickerIntervalRef.current);
    clickerIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, (duration - elapsed) / 1000);
      setTimeLeft(Number(remaining.toFixed(1)));

      if (elapsed >= duration) {
        clearInterval(clickerIntervalRef.current);
        setClickerState("finished");
        playSuccessSound();
      }
    }, 100);
  };

  const handleTurboClick = () => {
    if (clickerState === "running") {
      playClickSound();
      setClickCount((c) => c + 1);
    }
  };

  useEffect(() => {
    if (clickerState === "finished") {
      const cps = Number((clickCount / 5).toFixed(1));
      if (!bestCPS || cps > Number(bestCPS)) {
        setBestCPS(cps);
        localStorage.setItem("mini_best_cps", String(cps));
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
      }
    }
    return () => clearInterval(clickerIntervalRef.current);
  }, [clickerState, clickCount, bestCPS]);

  return (
    <section id="games" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background neon ambient */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyber-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyber-cyan bg-cyber-card border border-cyber-cyan/30 mb-4">
            <Gamepad2 size={14} />
            <span>{t.games.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.games.title} <span className="text-gradient">{t.games.highlightTitle}</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.games.subtitle}
          </p>
        </div>

        {/* Game Mode Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => {
              playClickSound();
              setActiveGame("reaction");
            }}
            onMouseEnter={playHoverSound}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-medium transition-all ${
              activeGame === "reaction"
                ? "bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 text-cyber-cyan border border-cyber-cyan/50 shadow-glow-cyan"
                : "bg-white/5 text-slate-400 border border-white/10 hover:text-white"
            }`}
          >
            <Zap size={16} />
            <span>{t.games.reaction.title}</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              setActiveGame("memory");
            }}
            onMouseEnter={playHoverSound}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-medium transition-all ${
              activeGame === "memory"
                ? "bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 text-cyber-purple border border-cyber-purple/50 shadow-glow-purple"
                : "bg-white/5 text-slate-400 border border-white/10 hover:text-white"
            }`}
          >
            <Brain size={16} />
            <span>{t.games.memory.title}</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              setActiveGame("clicker");
            }}
            onMouseEnter={playHoverSound}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-medium transition-all ${
              activeGame === "clicker"
                ? "bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-400 border border-amber-500/50 shadow-lg"
                : "bg-white/5 text-slate-400 border border-white/10 hover:text-white"
            }`}
          >
            <MousePointer size={16} />
            <span>{t.games.clicker.title}</span>
          </button>
        </div>

        {/* Game Arena Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 bg-cyber-card/90 shadow-2xl relative min-h-[380px] flex flex-col justify-center items-center">
          
          {/* ==================== 1. REACTION TEST ==================== */}
          {activeGame === "reaction" && (
            <div className="w-full max-w-xl text-center space-y-6">
              <p className="text-xs sm:text-sm text-slate-300">
                {t.games.reaction.desc}
              </p>

              {/* Reaction Box */}
              <div
                onClick={handleReactionClick}
                className={`w-full h-56 rounded-3xl cursor-pointer flex flex-col items-center justify-center p-6 transition-all duration-200 select-none ${
                  reactionState === "idle"
                    ? "bg-white/5 border border-white/10 hover:border-cyber-cyan/40"
                    : reactionState === "waiting"
                    ? "bg-rose-950/60 border-2 border-rose-500/60 shadow-[0_0_40px_rgba(244,63,94,0.3)] animate-pulse"
                    : reactionState === "ready"
                    ? "bg-emerald-500 border-2 border-emerald-300 shadow-[0_0_60px_rgba(16,185,129,0.7)] text-slate-950"
                    : reactionState === "early"
                    ? "bg-amber-950/60 border border-amber-500/60"
                    : "bg-cyber-cyan/15 border border-cyber-cyan/40"
                }`}
              >
                {reactionState === "idle" && (
                  <div className="space-y-3">
                    <Zap size={36} className="text-cyber-cyan mx-auto animate-bounce" />
                    <p className="font-display font-semibold text-lg text-white">
                      Click below to initialize
                    </p>
                  </div>
                )}

                {reactionState === "waiting" && (
                  <p className="font-display font-bold text-xl sm:text-2xl text-rose-300">
                    {t.games.reaction.waiting}
                  </p>
                )}

                {reactionState === "ready" && (
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-wider">
                    {t.games.reaction.clickNow}
                  </p>
                )}

                {reactionState === "early" && (
                  <div className="space-y-2">
                    <p className="font-display font-bold text-xl text-amber-400">
                      {t.games.reaction.tooEarly}
                    </p>
                    <p className="text-xs text-slate-400">Click Restart to try again</p>
                  </div>
                )}

                {reactionState === "result" && (
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase text-cyber-cyan tracking-wider">
                      {t.games.reaction.yourTime}
                    </p>
                    <p className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                      {reactionTime} <span className="text-xl text-cyber-cyan font-mono">ms</span>
                    </p>
                    <p className="text-sm font-medium text-emerald-400 pt-1">
                      {getReactionGrade(reactionTime)}
                    </p>
                  </div>
                )}
              </div>

              {/* Controls & Best Record */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  onClick={startReactionTest}
                  onMouseEnter={playHoverSound}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue text-slate-950 text-xs sm:text-sm font-semibold shadow-glow-cyan hover:scale-105 transition-transform"
                >
                  {reactionState === "idle"
                    ? t.games.reaction.startBtn
                    : "Try Again"}
                </button>

                {bestReaction && (
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Trophy size={15} className="text-yellow-400" />
                    <span>{t.games.reaction.bestTime}</span>
                    <span className="text-cyber-cyan font-bold">{bestReaction} ms</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ==================== 2. NUMBER MEMORY ==================== */}
          {activeGame === "memory" && (
            <div className="w-full max-w-xl text-center space-y-6">
              <p className="text-xs sm:text-sm text-slate-300">
                {t.games.memory.desc}
              </p>

              {/* Arena Frame */}
              <div className="w-full min-h-[220px] rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col items-center justify-center">
                {memoryState === "idle" && (
                  <div className="space-y-4">
                    <Brain size={40} className="text-cyber-purple mx-auto animate-pulse" />
                    <button
                      onClick={() => startMemoryGame(1)}
                      onMouseEnter={playHoverSound}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-white text-xs sm:text-sm font-semibold shadow-glow-purple hover:scale-105 transition-transform"
                    >
                      {t.games.memory.startBtn}
                    </button>
                  </div>
                )}

                {memoryState === "showing" && (
                  <div className="space-y-4">
                    <span className="text-xs font-mono uppercase text-cyber-purple tracking-widest">
                      {t.games.memory.level} {memoryLevel}
                    </span>
                    <p className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-[0.25em]">
                      {memorySequence}
                    </p>
                    <div className="w-48 h-1.5 rounded-full bg-white/10 overflow-hidden mx-auto">
                      <div className="h-full bg-cyber-purple animate-shimmer" />
                    </div>
                  </div>
                )}

                {memoryState === "input" && (
                  <form onSubmit={handleMemorySubmit} className="w-full max-w-sm space-y-4">
                    <p className="text-xs font-mono text-slate-300">
                      {t.games.memory.enterNumbers}
                    </p>
                    <input
                      type="text"
                      autoFocus
                      value={memoryInput}
                      onChange={(e) => setMemoryInput(e.target.value)}
                      className="w-full text-center font-display font-bold text-3xl rounded-xl bg-cyber-dark border border-cyber-purple/50 p-3 text-white focus:outline-none focus:border-cyber-cyan"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-cyber-purple text-white text-xs font-mono font-semibold hover:bg-purple-600 transition-colors"
                    >
                      {t.games.memory.submit}
                    </button>
                  </form>
                )}

                {memoryState === "success" && (
                  <div className="space-y-2 text-emerald-400 font-display font-bold text-xl">
                    <Sparkles size={30} className="mx-auto" />
                    <p>{t.games.memory.correct}</p>
                  </div>
                )}

                {memoryState === "gameover" && (
                  <div className="space-y-3">
                    <p className="font-display font-bold text-rose-400 text-lg">
                      {t.games.memory.gameOver}
                    </p>
                    <p className="font-mono text-2xl font-bold text-white tracking-widest">
                      {memorySequence}
                    </p>
                    <button
                      onClick={() => startMemoryGame(1)}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                    >
                      <RotateCcw size={14} />
                      {t.games.memory.restart}
                    </button>
                  </div>
                )}
              </div>

              {/* Record Display */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{t.games.memory.level}: {memoryLevel}</span>
                <span className="flex items-center gap-1.5 text-cyber-purple font-bold">
                  <Trophy size={14} className="text-yellow-400" />
                  {t.games.memory.highestLevel} {maxLevel}
                </span>
              </div>
            </div>
          )}

          {/* ==================== 3. CLICK CHALLENGE ==================== */}
          {activeGame === "clicker" && (
            <div className="w-full max-w-xl text-center space-y-6">
              <p className="text-xs sm:text-sm text-slate-300">
                {t.games.clicker.desc}
              </p>

              {/* Turbo Arena */}
              <div className="w-full min-h-[220px] rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center">
                {clickerState === "idle" && (
                  <div className="space-y-4">
                    <MousePointer size={40} className="text-amber-400 mx-auto animate-bounce" />
                    <button
                      onClick={startClickerGame}
                      onMouseEnter={playHoverSound}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-transform"
                    >
                      {t.games.clicker.startBtn}
                    </button>
                  </div>
                )}

                {clickerState === "running" && (
                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono px-4 text-slate-400">
                      <span>{t.games.clicker.timeLeft} <strong className="text-white text-sm">{timeLeft}s</strong></span>
                      <span>{t.games.clicker.clicks} <strong className="text-amber-400 text-sm">{clickCount}</strong></span>
                    </div>

                    <button
                      onClick={handleTurboClick}
                      className="w-full h-32 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-600 active:scale-95 transition-transform flex items-center justify-center shadow-lg font-display font-extrabold text-2xl sm:text-3xl text-slate-950"
                    >
                      {t.games.clicker.clickHere}
                    </button>
                  </div>
                )}

                {clickerState === "finished" && (
                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase text-slate-400">
                      {t.games.clicker.finalScore}
                    </p>
                    <p className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                      {clickCount} <span className="text-lg font-mono text-amber-400">clicks</span>
                    </p>
                    <p className="text-sm font-mono text-emerald-400">
                      CPS: {(clickCount / 5).toFixed(1)} clicks/sec
                    </p>
                    <button
                      onClick={startClickerGame}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                    >
                      <RotateCcw size={14} />
                      {t.games.clicker.restart}
                    </button>
                  </div>
                )}
              </div>

              {/* Best CPS Record */}
              {bestCPS && (
                <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                  <Trophy size={15} className="text-yellow-400" />
                  <span>{t.games.clicker.bestScore}</span>
                  <span className="text-amber-400 font-bold">{bestCPS} CPS</span>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
