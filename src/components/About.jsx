import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, Lightbulb } from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-6">

            <Reveal direction="up" delay={0.1}>
              <h2 className="section-title mt-5">
                Built by those who were told{" "}
                <span className="text-gradient">they weren't enough.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="section-sub">
                EduSeek began as a promise between schoolmates, friends who
                were rarely called the "top of the class," yet understood
                something the rankings never measured. They learned that
                grades do not define potential, and the marks on a report
                card rarely describe the child behind them.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="mt-5 text-base leading-relaxed text-brand-light/70">
                Years of hard work, late nights, and real-world building
                taught them what schools often missed that curiosity,
                courage, and practical skill matter more than any single
                answer on an exam. EduSeek is their way of giving the next
                generation what they had to find on their own.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "Belief", v: "Every child can lead" },
                  { k: "Craft", v: "Real skills, built slowly" },
                  { k: "Care", v: "Guided, never pushed" },
                ].map((b) => (
                  <div
                    key={b.k}
                    className="glass card-hover rounded-2xl p-5"
                  >
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-brand-light/50">
                      {b.k}
                    </div>
                    <div className="mt-2 font-display text-lg font-semibold text-brand-light">
                      {b.v}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column — story cards */}
          <div className="relative lg:col-span-6">
            <div className="absolute -top-10 left-1/3 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />

            <div className="relative grid gap-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Grades never told the full story",
                  body:
                    "Report cards measured a slice of memory not imagination, empathy, or grit. We never forgot that.",
                  color: "#516ED6",
                },
                {
                  icon: Lightbulb,
                  title: "Real learning lived outside the classroom",
                  body:
                    "We discovered our strengths by building, trying, failing, and trying again. That path now shapes EduSeek.",
                  color: "#F8BF40",
                },
                {
                  icon: HeartHandshake,
                  title: "A promise for the next generation",
                  body:
                    "Children today deserve guides who believe in them early not only when results arrive.",
                  color: "#EB4331",
                },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.12,
                      ease: [0.22, 0.8, 0.24, 1],
                    }}
                    className="glass card-hover group relative flex gap-4 overflow-hidden rounded-3xl p-6"
                  >
                    <span
                      aria-hidden
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ background: c.color }}
                    />
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        background: `${c.color}22`,
                        color: c.color,
                        boxShadow: `0 0 20px ${c.color}33`,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-light">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-light/70">
                        {c.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
