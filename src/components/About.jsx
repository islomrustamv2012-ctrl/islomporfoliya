import { motion } from "framer-motion";
import { MapPin, Sparkles, Code2 } from "lucide-react";
import { profile, timeline } from "../data/portfolioData";
import BlobBackground from "./BlobBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <BlobBackground variant="section" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            About Me
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            The person behind the <span className="text-gradient">code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Bio card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="gradient-border glass relative rounded-3xl p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                  <Code2 size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {profile.name}
                  </h3>
                  <p className="flex items-center gap-1 text-sm text-white/50">
                    <MapPin size={13} /> {profile.location}
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-white/70">{profile.about}</p>

              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                <Sparkles size={18} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-white/60">
                  {profile.resumeNote}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["React.js", "JavaScript", "Tailwind", "AI Tools"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-center text-xs font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-base-950 ring-2 ring-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                  </span>
                  <div className="glass rounded-2xl px-5 py-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <span className="font-mono text-xs text-accent">
                      {item.year}
                    </span>
                    <h4 className="mt-1 font-display text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
