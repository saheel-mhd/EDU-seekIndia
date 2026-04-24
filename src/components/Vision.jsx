import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./primitives/Reveal.jsx";

export default function Vision() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="vision" ref={ref} className="relative overflow-hidden py-32 md:py-40">
      {/* Layered background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(81,110,214,0.35), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(235,67,49,0.3), transparent 55%), linear-gradient(180deg, #0b0809 0%, #140f10 100%)",
        }}
      />
      <div className="grid-overlay absolute inset-0 opacity-50" />

      <motion.div
        style={{ y: y1 }}
        className="blob absolute -left-20 top-20 h-96 w-96 bg-brand-blue"
        aria-hidden
      />
      <motion.div
        style={{ y: y2 }}
        className="blob absolute -right-20 bottom-20 h-96 w-96 bg-brand-red"
        aria-hidden
      />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Our Vision
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-brand-light sm:text-6xl lg:text-[5rem]">
              Education should prepare children for{" "}
              <span className="text-gradient">life,</span>
              <br />
              not just <span className="relative inline-block">
                exams.
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  className="absolute inset-x-0 -bottom-2 h-[6px] origin-left rounded-full bg-gradient-to-r from-brand-yellow via-brand-red to-brand-blue"
                />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-brand-light/75 md:text-lg">
              We see a future where every child steps out with confidence —
              able to speak, think, build, and belong. A future where learning
              feels alive, and where schools no longer ask children to fit a
              mold, but help them shape one of their own.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-light/70">
              {[
                "Curiosity before answers",
                "Courage before comfort",
                "Skills before scores",
                "Character, always",
              ].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i % 3 === 0
                        ? "bg-brand-yellow"
                        : i % 3 === 1
                        ? "bg-brand-red"
                        : "bg-brand-blue"
                    }`}
                  />
                  {line}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
