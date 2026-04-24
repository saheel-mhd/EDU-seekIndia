import { motion } from "framer-motion";
import {
  Ear,
  Compass,
  Hammer,
  Rocket,
  Award,
} from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

const STEPS = [
  {
    num: "01",
    icon: Ear,
    title: "Understand the child",
    body:
      "We begin with conversations — with the student, with parents, with teachers who know them. We listen before we teach.",
    accent: "#516ED6",
  },
  {
    num: "02",
    icon: Compass,
    title: "Discover strengths",
    body:
      "Through activities, projects, and play, we uncover what the child naturally gravitates toward — and where they shine.",
    accent: "#F8BF40",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Build skills",
    body:
      "We pair each strength with steady practice — communication, leadership, creativity, technology, and more.",
    accent: "#EB4331",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Apply learning",
    body:
      "Students put skills into action through real-world projects. Ideas turn into work that matters — to them and to others.",
    accent: "#9B7DF2",
  },
  {
    num: "05",
    icon: Award,
    title: "Showcase growth",
    body:
      "Progress is celebrated openly — through portfolios, presentations, and moments that show parents how far their child has grown.",
    accent: "#2FB673",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              The Student Journey
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title mt-5">
              A thoughtful five-step path from{" "}
              <span className="text-gradient">who they are to who they become.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub mx-auto">
              Growth is not a single leap — it is many small, intentional
              steps. Here is the journey every young learner walks with us.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* vertical line for mobile */}
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-brand-blue via-brand-yellow to-brand-red opacity-30 md:hidden"
          />
          {/* horizontal line for desktop */}
          <div
            aria-hidden
            className="absolute left-10 right-10 top-16 hidden h-[2px] bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-red opacity-40 md:block"
          />

          <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.22, 0.8, 0.24, 1],
                  }}
                  className="relative pl-16 md:pl-0 md:text-center"
                >
                  {/* Node */}
                  <div
                    className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full md:relative md:mx-auto md:h-14 md:w-14"
                    style={{
                      background: `${step.accent}22`,
                      color: step.accent,
                      boxShadow: `0 0 30px ${step.accent}55, inset 0 0 0 2px ${step.accent}66`,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="glass mt-4 rounded-2xl p-5 md:mt-6">
                    <div
                      className="font-display text-xs font-semibold uppercase tracking-[0.24em]"
                      style={{ color: step.accent }}
                    >
                      Step {step.num}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-brand-light">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-light/70">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
