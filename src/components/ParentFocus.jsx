import { motion } from "framer-motion";
import {
  HeartHandshake,
  Eye,
  Sparkles,
  Smile,
  ShieldCheck,
  Quote,
} from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

const POINTS = [
  {
    icon: Eye,
    title: "Your child will be seen",
    body:
      "Not as a roll number or a rank — but as a person with a story, a style of learning, and strengths waiting to emerge.",
  },
  {
    icon: Smile,
    title: "Understood, not judged",
    body:
      "We take the time to know what inspires them, where they struggle, and how they feel about their own learning.",
  },
  {
    icon: Sparkles,
    title: "Encouraged to explore",
    body:
      "Curiosity is fragile. We protect it, nurture it, and give children safe room to try, fail, and keep going.",
  },
  {
    icon: ShieldCheck,
    title: "Guided, with care",
    body:
      "Mentors stay close — patient, warm, and honest. You will always know how your child is growing, and why.",
  },
];

export default function ParentFocus() {
  return (
    <section id="parents" className="section">
      <div className="container-x relative">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left — emotive copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">
                <HeartHandshake size={14} className="text-brand-red" />
                For Parents
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title mt-5">
                You know your child better than anyone.{" "}
                <span className="text-gradient">
                  We help bring out their best.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="section-sub">
                Edu Seek is built for parents who want more than marks —
                parents who want their child to be prepared for a life that
                changes quickly, questions often, and rewards those who can
                think, connect, and create.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass-dark relative mt-10 overflow-hidden rounded-3xl border border-white/10 p-7">
                <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-yellow/20 blur-2xl" />
                <Quote
                  size={28}
                  className="text-brand-yellow/70"
                  aria-hidden
                />
                <p className="mt-4 font-display text-lg leading-relaxed text-brand-light md:text-xl">
                  "We do not promise miracles. We promise to listen, guide,
                  and walk alongside your child — so they grow into someone
                  they are proud to be."
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-brand-light/50">
                  — A note from the Edu Seek team
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — cards grid */}
          <div className="relative lg:col-span-7">
            <div className="absolute -top-10 right-10 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
            <div className="grid gap-5 sm:grid-cols-2">
              {POINTS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.1,
                      ease: [0.22, 0.8, 0.24, 1],
                    }}
                    className="glass card-hover group relative overflow-hidden rounded-3xl p-6"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-brand-yellow transition-transform duration-500 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-brand-light">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-light/70">
                      {p.body}
                    </p>
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
