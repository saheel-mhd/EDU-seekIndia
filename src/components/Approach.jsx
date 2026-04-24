import { motion } from "framer-motion";
import {
  Telescope,
  Wrench,
  Users,
  Rocket,
  ShieldCheck,
  Route,
} from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

const PILLARS = [
  {
    icon: Telescope,
    title: "Skill Discovery",
    body:
      "We begin by understanding the child observing curiosities, listening carefully, and noticing the sparks that others miss.",
    accent: "#516ED6",
  },
  {
    icon: Wrench,
    title: "Practical Learning",
    body:
      "We replace rote memorization with hands-on experiences. Learning becomes something you do, not just something you recite.",
    accent: "#F8BF40",
  },
  {
    icon: Users,
    title: "Mentorship",
    body:
      "Every young learner is paired with mentors who guide, listen, and challenge them gently not judge them by grades alone.",
    accent: "#EB4331",
  },
  {
    icon: Rocket,
    title: "Real-world Projects",
    body:
      "Students build things that matter from ideas they care about so learning feels real, rewarding, and connected to life.",
    accent: "#9B7DF2",
  },
  {
    icon: ShieldCheck,
    title: "Confidence Building",
    body:
      "We celebrate small wins and reframe setbacks. Confidence grows as children see themselves as capable, curious, and kind.",
    accent: "#2FB673",
  },
  {
    icon: Route,
    title: "Personalized Growth Paths",
    body:
      "No two children learn the same way. We shape each journey around strengths, interests, and pace never a one-size plan.",
    accent: "#F59E0B",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Our Approach
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title mt-5">
              Six pillars that turn{" "}
              <span className="text-gradient">curiosity into capability.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub mx-auto">
              Every child at EduSeek is met with warmth, structure, and a
              clear path. Here's how we help them grow into their fullest,
              most confident selves.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.22, 0.8, 0.24, 1],
                }}
                className="glass card-hover group relative overflow-hidden rounded-3xl p-7"
              >
                <span
                  aria-hidden
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: p.accent }}
                />

                <div className="relative">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1"
                    style={{
                      background: `${p.accent}22`,
                      color: p.accent,
                      boxShadow: `0 0 24px ${p.accent}33`,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span
                      className="font-display text-xs font-semibold uppercase tracking-[0.24em]"
                      style={{ color: p.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-[1px] flex-1 bg-white/10" />
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-brand-light">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-light/70">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
