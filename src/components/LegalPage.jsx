import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

/**
 * Shared layout for Privacy & Terms pages — keeps headings, prose
 * styling, and the "back to home" link consistent across both.
 */
export default function LegalPage({ title, eyebrow, lastUpdated, children }) {
  return (
    <article className="relative pt-36 pb-24 md:pt-40 md:pb-32">
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute right-0 top-72 h-64 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-light/70 transition-all duration-300 hover:border-brand-yellow/40 hover:text-brand-yellow"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <Reveal direction="up" delay={0.1}>
            <span className="eyebrow mt-8 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              {eyebrow}
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-light sm:text-5xl">
              {title}
            </h1>
          </Reveal>

          {lastUpdated && (
            <Reveal direction="up" delay={0.25}>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-brand-light/50">
                Last updated · {lastUpdated}
              </p>
            </Reveal>
          )}

          <Reveal direction="up" delay={0.3}>
            <div className="legal-prose mt-12 space-y-8 text-base leading-relaxed text-brand-light/80">
              {children}
            </div>
          </Reveal>
        </motion.div>
      </div>
    </article>
  );
}
