import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 14) + 6;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 font-mono text-white p-6 overflow-hidden select-none"
        >
          {/* Ambient Cyber Grid & Glow */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute h-96 w-96 rounded-full bg-cyber-cyan/15 blur-3xl pointer-events-none animate-pulse" />

          <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center space-y-6">
            
            {/* Holographic Logo Monogram */}
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-cyber-cyan via-cyber-blue to-cyber-purple p-[2px] shadow-glow-cyan">
              <div className="h-full w-full rounded-[14px] bg-cyber-dark flex items-center justify-center font-display font-black text-2xl text-cyber-cyan">
                RI
              </div>
            </div>

            {/* Title & Telemetry */}
            <div>
              <h2 className="font-display font-bold text-lg tracking-wider text-white">
                ISLOM RUSTAMOV
              </h2>
              <p className="text-xs text-cyber-cyan tracking-[0.25em] uppercase mt-1">
                FUTURISTIC 3D PORTFOLIO OS
              </p>
            </div>

            {/* Diagnostic Boot Lines */}
            <div className="w-full text-left text-[11px] text-slate-400 bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5 backdrop-blur-md">
              <div className="flex items-center justify-between text-cyber-cyan">
                <span>&gt; INITIALIZING 3D ENGINE</span>
                <span className="text-emerald-400 font-bold">[OK]</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>&gt; LOADING CONSTELLATION GRAPH</span>
                <span className="text-emerald-400 font-bold">[OK]</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>&gt; SYNCING NEURAL ISLOM AI</span>
                <span className="text-cyan-400 font-bold animate-pulse">[READY]</span>
              </div>
            </div>

            {/* Progress Bar & Counter */}
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>SYSTEM BOOT</span>
                <span className="text-cyber-cyan font-bold">{Math.min(progress, 100)}%</span>
              </div>

              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple shadow-glow-cyan"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
