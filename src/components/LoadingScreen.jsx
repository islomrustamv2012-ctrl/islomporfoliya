import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative h-16 w-16">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: "#3B82F6",
                  borderRightColor: "#8B5CF6",
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <div className="absolute inset-2 flex items-center justify-center rounded-full bg-base-950">
                <span className="font-display text-sm font-bold text-gradient">
                  RI
                </span>
              </div>
            </div>
            <div className="font-mono text-xs tracking-[0.3em] text-white/40">
              LOADING PORTFOLIO
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
