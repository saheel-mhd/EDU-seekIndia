import { motion } from "framer-motion";
import {
  MessageCircle,
  Flag,
  Palette,
  Cpu,
  Puzzle,
  Briefcase,
  Brain,
  Handshake,
} from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

const SKILLS = [
  {
    icon: MessageCircle,
    name: "Communication",
    tagline: "Speak, listen, and connect with clarity.",
    accent: "#516ED6",
  },
  {
    icon: Flag,
    name: "Leadership",
    tagline: "Lead with empathy, courage, and purpose.",
    accent: "#EB4331",
  },
  {
    icon: Palette,
    name: "Creativity",
    tagline: "Think differently, express freely, make boldly.",
    accent: "#F8BF40",
  },
  {
    icon: Cpu,
    name: "Technology",
    tagline: "Build fluency with the tools of tomorrow.",
    accent: "#9B7DF2",
  },
  {
    icon: Puzzle,
    name: "Problem-solving",
    tagline: "Break big challenges into small, clear steps.",
    accent: "#2FB673",
  },
  {
    icon: Briefcase,
    name: "Entrepreneurship Mindset",
    tagline: "See opportunity. Start. Iterate. Improve.",
    accent: "#F59E0B",
  },
  {
    icon: Brain,
    name: "Critical Thinking",
    tagline: "Ask better questions before accepting answers.",
    accent: "#22D3EE",
  },
  {
    icon: Handshake,
    name: "Collaboration",
    tagline: "Work with others — stronger, kinder, further.",
    accent: "#F472B6",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Skills We Enhance
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title mt-5">
              Eight real-world skills for a{" "}
              <span className="text-gradient">confident life ahead.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub mx-auto">
              These are the skills young learners carry into every
              classroom, every friendship, every career. We help them grow
              steadily, naturally, and for the long run.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: (i % 4) * 0.08 + Math.floor(i / 4) * 0.12,
                  ease: [0.22, 0.8, 0.24, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20"
                style={{
                  boxShadow: "0 20px 50px -30px rgba(0,0,0,0.5)",
                }}
              >
                {/* Glow accent on hover */}
                <span
                  aria-hidden
                  className="absolute -inset-px -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${s.accent}88, transparent 60%)`,
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: s.accent }}
                />

                <div
                  className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{
                    background: `${s.accent}22`,
                    color: s.accent,
                    boxShadow: `inset 0 0 0 1px ${s.accent}44, 0 0 30px ${s.accent}33`,
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-brand-light">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-light/70">
                  {s.tagline}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <span
                    className="h-1 w-10 rounded-full"
                    style={{ background: s.accent }}
                  />
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-brand-light/40">
                    Core skill
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
