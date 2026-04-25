import { motion } from "framer-motion";
import {
  Utensils,
  BrainCog,
  UserRoundSearch,
  Workflow,
} from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

const ISSUES = [
  {
    icon: Utensils,
    title: "Spoon feeding over thinking",
    body:
      "Ready-made answers replace the joy of discovering. Children remember lessons, but rarely the reason behind them.",
    accent: "#EB4331",
  },
  {
    icon: BrainCog,
    title: "Memorization without understanding",
    body:
      "Facts are repeated for a test, then quietly forgotten. Deep understanding the kind that lasts a lifetime — is left behind.",
    accent: "#F8BF40",
  },
  {
    icon: UserRoundSearch,
    title: "Individual talents stay hidden",
    body:
      "A classroom of thirty becomes one lesson for all. The artist, the builder, the storyteller their spark is rarely noticed.",
    accent: "#516ED6",
  },
  {
    icon: Workflow,
    title: "Little preparation for the real world",
    body:
      "Communication, leadership, and problem solving quietly go untaught, even though life outside school demands them every day.",
    accent: "#9B7DF2",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.1}>
            <h2 className="section-title mt-5">
              Traditional classrooms teach a lot{" "}
              <span className="text-gradient">but miss a lot, too.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub mx-auto">
              We don't believe schools are the enemy. We believe there are
              quiet gaps in the way children are taught and EduSeek exists
              to gently fill them in.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {ISSUES.map((issue, i) => {
            const Icon = issue.icon;
            return (
              <motion.article
                key={issue.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 0.8, 0.24, 1],
                }}
                className="glass card-hover group relative overflow-hidden rounded-3xl p-8"
              >
                <span
                  aria-hidden
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40"
                  style={{ background: issue.accent }}
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-0 origin-left bg-gradient-to-r transition-all duration-700 group-hover:w-full"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${issue.accent}, transparent)`,
                  }}
                />

                <div className="flex items-start gap-5">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `${issue.accent}1f`,
                      color: issue.accent,
                      boxShadow: `0 0 24px ${issue.accent}33`,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-light md:text-2xl">
                      {issue.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-light/70 md:text-base">
                      {issue.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="glass-dark mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-brand-light/80 md:text-base">
              <span className="text-brand-yellow">EduSeek adds</span> what
              traditional systems often miss while respecting the
              foundations they build.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
