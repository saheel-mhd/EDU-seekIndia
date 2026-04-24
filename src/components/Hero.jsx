import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import AnimatedBackground from "./primitives/AnimatedBackground.jsx";

const orbitIcons = [
  { label: "Communication", angle: 0 },
  { label: "Leadership", angle: 45 },
  { label: "Creativity", angle: 90 },
  { label: "Technology", angle: 135 },
  { label: "Problem-solving", angle: 180 },
  { label: "Entrepreneurship", angle: 225 },
  { label: "Critical thinking", angle: 270 },
  { label: "Collaboration", angle: 315 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-36 md:pt-40"
    >
      <AnimatedBackground variant="hero" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              <Sparkles size={14} className="text-brand-yellow" />
              A new kind of learning home
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-brand-light sm:text-6xl lg:text-7xl"
            >
              Every child has a{" "}
              <span className="relative inline-block">
                <span className="text-gradient">hidden brilliance.</span>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                  className="absolute inset-x-0 -bottom-1 h-[5px] origin-left rounded-full bg-gradient-to-r from-brand-yellow via-brand-red to-brand-blue opacity-70"
                />
              </span>
              <br />
              <span className="text-brand-light/90">
                We help them find it.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg"
            >
              Edu Seek is an educational institution built to help young
              learners discover their natural strengths and build real-world
              skills for life — not just memorize answers for a paper.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#vision" className="btn-primary group">
                <Compass
                  size={18}
                  className="transition-transform duration-500 group-hover:rotate-90"
                />
                Explore Our Vision
              </a>
              <a href="#approach" className="btn-secondary group">
                Discover the Approach
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-14 grid max-w-xl grid-cols-3 gap-6"
            >
              {[
                { k: "Real", v: "Skills, not scores" },
                { k: "Guided", v: "Mentor-led paths" },
                { k: "Personal", v: "Every child, unique" },
              ].map((item) => (
                <div key={item.k} className="border-l border-white/10 pl-4">
                  <div className="font-display text-xl font-bold text-brand-yellow">
                    {item.k}
                  </div>
                  <div className="text-xs text-brand-light/60">{item.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Orbit visual */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-16 rounded-full border border-dashed border-white/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center orb */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="glass absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center shadow-glow"
              >
                <span className="font-display text-xs uppercase tracking-[0.24em] text-brand-light/60">
                  Edu Seek
                </span>
                <span className="mt-1 font-display text-lg font-bold text-brand-light">
                  Real-world
                </span>
                <span className="font-display text-lg font-bold text-brand-yellow">
                  Learning
                </span>
              </motion.div>

              {/* Orbit skill chips */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {orbitIcons.map((s, i) => {
                  const rad = (s.angle * Math.PI) / 180;
                  const radius = 46; // percent
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <motion.div
                      key={s.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-light/80 backdrop-blur-md"
                        style={{
                          boxShadow:
                            i % 3 === 0
                              ? "0 0 20px rgba(81,110,214,0.5)"
                              : i % 3 === 1
                              ? "0 0 20px rgba(248,191,64,0.5)"
                              : "0 0 20px rgba(235,67,49,0.45)",
                        }}
                      >
                        {s.label}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Glowing accents */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-yellow/20 blur-3xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-brand-blue/30 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-brand-light/50 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          className="h-8 w-[2px] bg-gradient-to-b from-brand-yellow to-transparent"
          animate={{ scaleY: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
