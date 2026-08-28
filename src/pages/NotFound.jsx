import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft } from "lucide-react";

const metadata = [
  { label: "ERROR", value: "/ 404" },
  { label: "ROUTE", value: "/ UNKNOWN" },
  { label: "STATUS", value: "/ NOT FOUND" },
  { label: "SYSTEM", value: "/ ONLINE" },
];

export default function NotFound() {
  const handleHome = () => {
    window.location.assign("/");
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    handleHome();
  };

  return (
    <div className="not-found-shell">
      <div className="not-found-grid" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="not-found-viewport"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass not-found-panel"
        >
          <div className="not-found-badge">SYSTEM // SIGNAL LOST</div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="not-found-code"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            className="not-found-heading"
          >
            PAGE NOT FOUND
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
            className="not-found-copy"
          >
            The digital space you are looking for does not exist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
            className="not-found-meta"
          >
            {metadata.map((item) => (
              <div key={item.label} className="meta-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.58 }}
            className="not-found-actions"
          >
            <button onClick={handleHome} className="not-found-primary">
              <ArrowLeft size={16} />
              RETURN HOME
            </button>

            <button onClick={handleBack} className="not-found-secondary">
              <ChevronLeft size={16} />
              GO BACK
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
