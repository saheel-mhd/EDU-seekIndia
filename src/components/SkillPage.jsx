import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Plus,
  Sparkles,
} from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const SITE_ORIGIN = "https://eduseekindia.com";

/**
 * Shared layout for the per-skill pages (Communication, Leadership, etc.).
 * Each page passes its own data — title, accent colour, narrative copy,
 * pillars, process steps, activities, outcomes, and FAQs — and this
 * component renders them in a consistent, animated, brand-styled shell.
 */
export default function SkillPage({
  // SEO
  metaTitle,
  metaDescription,
  // Hero
  eyebrow,
  icon: Icon,
  accent,
  titleLead,
  titleHighlight,
  titleTail,
  intro,
  // Sections
  whyHeadline,
  whyBody,
  pillars = [],
  processSteps = [],
  activities = [],
  outcomes = [],
  faqs = [],
  // Closing
  ctaHeadline,
  ctaBody,
  // Cross-link to other skill pages
  relatedSkills = [],
}) {
  usePageMeta(metaTitle, metaDescription);
  const location = useLocation();

  // Open the first FAQ by default so the section never looks dormant.
  const [openIndex, setOpenIndex] = useState(0);

  // Inject Course + BreadcrumbList + FAQPage JSON-LD blocks scoped to
  // this page. Crawlers that render JS pick these up; we clean them up
  // on unmount so navigation doesn't leave stale schema in <head>.
  useEffect(() => {
    const fullName = `${titleLead} ${titleHighlight} ${titleTail || ""}`
      .replace(/\s+/g, " ")
      .trim();
    const pageUrl = `${SITE_ORIGIN}${location.pathname}`;

    const blocks = [
      {
        "@context": "https://schema.org",
        "@type": "Course",
        name: fullName,
        description: metaDescription,
        provider: {
          "@type": "EducationalOrganization",
          name: "EduSeek India",
          url: SITE_ORIGIN,
        },
        educationalLevel: "K-12",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
        url: pageUrl,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_ORIGIN + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Skills",
            item: `${SITE_ORIGIN}/#skills`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: eyebrow,
            item: pageUrl,
          },
        ],
      },
    ];

    if (faqs && faqs.length > 0) {
      blocks.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      });
    }

    const scripts = blocks.map((block) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-skill-jsonld", "true");
      s.textContent = JSON.stringify(block);
      document.head.appendChild(s);
      return s;
    });

    return () => {
      for (const s of scripts) s.remove();
    };
  }, [
    titleLead,
    titleHighlight,
    titleTail,
    metaDescription,
    eyebrow,
    location.pathname,
    faqs,
  ]);

  return (
    <article className="relative overflow-hidden">
      {/* ============== HERO ============== */}
      <section className="relative pt-36 pb-24 md:pt-40 md:pb-28">
        {/* Soft brand glow scoped to this skill's accent */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-10 h-72 w-[80%] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: `${accent}26` }}
          />
          <div className="absolute right-0 top-72 h-64 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="absolute -left-10 top-96 h-64 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />
        </div>

        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/#skills"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-light/70 transition-all duration-300 hover:border-brand-yellow/40 hover:text-brand-yellow"
                >
                  <ArrowLeft size={14} />
                  All Skills
                </Link>
              </motion.div>

              <Reveal direction="up" delay={0.1}>
                <span className="eyebrow mt-8 inline-flex">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: accent }}
                  />
                  {eyebrow}
                </span>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-light sm:text-5xl md:text-6xl">
                  {titleLead}{" "}
                  <span className="text-gradient">{titleHighlight}</span>
                  {titleTail ? <> {titleTail}</> : null}
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-light/75 md:text-lg">
                  {intro}
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link to="/enquire" className="btn-primary group">
                    <Sparkles
                      size={18}
                      className="transition-transform duration-500 group-hover:rotate-12"
                    />
                    Begin Your Child's Journey
                  </Link>
                  <a href="#how-we-teach" className="btn-secondary group">
                    See How We Teach It
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Accent-coloured icon orb */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                <motion.div
                  className="will-animate absolute inset-0 rounded-full border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="will-animate absolute inset-10 rounded-full border border-dashed border-white/15"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="will-animate absolute inset-20 rounded-full border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Center orb */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="glass pointer-events-auto flex h-44 w-44 flex-col items-center justify-center rounded-full text-center"
                    style={{
                      boxShadow: `0 0 60px -10px ${accent}55, inset 0 0 0 1px ${accent}55`,
                    }}
                  >
                    {Icon ? (
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                          background: `${accent}22`,
                          color: accent,
                          boxShadow: `inset 0 0 0 1px ${accent}55, 0 0 30px ${accent}44`,
                        }}
                      >
                        <Icon size={28} />
                      </span>
                    ) : null}
                    <span className="mt-3 font-display text-[0.65rem] uppercase tracking-[0.24em] text-brand-light/60">
                      Core skill
                    </span>
                    <span className="mt-1 font-display text-base font-bold text-brand-light">
                      {eyebrow}
                    </span>
                  </motion.div>
                </div>

                {/* Glow accents */}
                <div
                  className="absolute -right-4 -top-4 h-28 w-28 rounded-full blur-3xl"
                  style={{ background: `${accent}55` }}
                />
                <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-brand-blue/30 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHY IT MATTERS ============== */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <Reveal delay={0.1}>
              <span className="eyebrow">Why it matters</span>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="section-title mt-5">{whyHeadline}</h2>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="legal-prose mt-8 space-y-5 text-brand-light/80">
                {whyBody.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== PILLARS ============== */}
      {pillars.length > 0 && (
        <section className="section">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: `${accent}1A` }}
            />
          </div>

          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0.1}>
                <span className="eyebrow">The building blocks</span>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="section-title mt-5">
                  Six habits that{" "}
                  <span className="text-gradient">grow this skill.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="section-sub mx-auto">
                  We don't teach this as one big lesson. We grow it through
                  small, repeated practices that show up in everyday learning.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p, i) => {
                const PIcon = p.icon;
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
                      style={{ background: accent }}
                    />

                    <div className="relative">
                      <div
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1"
                        style={{
                          background: `${accent}22`,
                          color: accent,
                          boxShadow: `0 0 24px ${accent}33`,
                        }}
                      >
                        {PIcon ? <PIcon size={22} /> : null}
                      </div>

                      <div className="mt-5 flex items-center gap-3">
                        <span
                          className="font-display text-xs font-semibold uppercase tracking-[0.24em]"
                          style={{ color: accent }}
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
      )}

      {/* ============== HOW WE TEACH IT ============== */}
      {processSteps.length > 0 && (
        <section id="how-we-teach" className="section">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0.1}>
                <span className="eyebrow">How we teach it</span>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="section-title mt-5">
                  Calm, structured,{" "}
                  <span className="text-gradient">deeply human.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="section-sub mx-auto">
                  Our mentors guide every learner through a clear path patient with the slow days, attentive on the breakthrough
                  ones.
                </p>
              </Reveal>
            </div>

            <ol className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-2">
              {processSteps.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.07,
                    ease: [0.22, 0.8, 0.24, 1],
                  }}
                  className="glass card-hover relative overflow-hidden rounded-3xl p-7"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-bold"
                      style={{
                        background: `${accent}22`,
                        color: accent,
                        boxShadow: `inset 0 0 0 1px ${accent}55`,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-light md:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-light/70 md:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ============== ACTIVITIES ============== */}
      {activities.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0.1}>
                <span className="eyebrow">What kids actually do</span>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="section-title mt-5">
                  Real activities, real{" "}
                  <span className="text-gradient">growth moments.</span>
                </h2>
              </Reveal>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
              {activities.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.22, 0.8, 0.24, 1],
                  }}
                  className="glass relative flex items-start gap-4 rounded-2xl p-5"
                >
                  <span
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `${accent}22`,
                      color: accent,
                      boxShadow: `inset 0 0 0 1px ${accent}55`,
                    }}
                  >
                    <Sparkles size={14} />
                  </span>
                  <p className="text-sm leading-relaxed text-brand-light/85 md:text-base">
                    {a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============== OUTCOMES ============== */}
      {outcomes.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <span className="eyebrow">Outcomes</span>
                </Reveal>
                <Reveal delay={0.15}>
                  <h2 className="section-title mt-5">
                    What your child carries{" "}
                    <span className="text-gradient">into life.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="section-sub">
                    Skills like this don't show up on a report card. They show
                    up in friendships, interviews, hard conversations, and
                    quiet moments of confidence — for years to come.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <ul className="space-y-3">
                  {outcomes.map((o, i) => (
                    <motion.li
                      key={o}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.05,
                        ease: [0.22, 0.8, 0.24, 1],
                      }}
                      className="glass flex items-start gap-4 rounded-2xl p-5"
                    >
                      <span
                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: `${accent}22`,
                          color: accent,
                          boxShadow: `inset 0 0 0 1px ${accent}55`,
                        }}
                      >
                        <Check size={14} />
                      </span>
                      <p className="text-sm leading-relaxed text-brand-light/85 md:text-base">
                        {o}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============== FAQ ============== */}
      {faqs.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal delay={0.1}>
                <h2 className="section-title">
                  Questions parents{" "}
                  <span className="text-gradient">often ask.</span>
                </h2>
              </Reveal>
            </div>

            <ul className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
              {faqs.map((faq, i) => {
                const open = openIndex === i;
                const id = `skillfaq-${i}`;
                return (
                  <motion.li
                    key={faq.q}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.04,
                      ease: [0.22, 0.8, 0.24, 1],
                    }}
                    className="glass card-hover relative overflow-hidden rounded-3xl"
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`${id}-panel`}
                      id={`${id}-button`}
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors duration-300 hover:bg-white/[0.03]"
                    >
                      <span
                        className="font-display text-xs font-semibold uppercase tracking-[0.24em]"
                        style={{ color: accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="flex-1 font-display text-base font-semibold leading-snug text-brand-light md:text-lg">
                        {faq.q}
                      </h3>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-light transition-all duration-300 ${
                          open
                            ? "rotate-45 border-brand-yellow/60 text-brand-yellow"
                            : ""
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="panel"
                          id={`${id}-panel`}
                          role="region"
                          aria-labelledby={`${id}-button`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 0.8, 0.24, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="ml-12 border-l border-white/10 pl-5">
                              <p className="text-sm leading-relaxed text-brand-light/75 md:text-base">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* ============== CTA ============== */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div
              className="glass relative overflow-hidden rounded-[2.5rem] p-10 text-center md:p-16"
              style={{
                boxShadow: `0 30px 80px -40px ${accent}66`,
              }}
            >
              <span
                aria-hidden
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
                style={{ background: accent }}
              />
              <span
                aria-hidden
                className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl"
              />

              <div className="relative mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-bold leading-[1.1] text-brand-light sm:text-4xl md:text-5xl">
                  {ctaHeadline}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-light/75 md:text-lg">
                  {ctaBody}
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link to="/enquire" className="btn-primary group">
                    Enquire Now
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                  <Link to="/#skills" className="btn-secondary">
                    Explore All Skills
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Cross-links to sibling skill pages */}
          {relatedSkills.length > 0 && (
            <div className="mx-auto mt-16 max-w-5xl">
              <Reveal>
                <div className="text-center text-[0.65rem] uppercase tracking-[0.24em] text-brand-light/50">
                  Continue exploring
                </div>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {relatedSkills.map((r, i) => (
                  <motion.div
                    key={r.to}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                      ease: [0.22, 0.8, 0.24, 1],
                    }}
                  >
                    <Link
                      to={r.to}
                      className="glass card-hover group flex items-center justify-between rounded-2xl p-5"
                    >
                      <span className="font-display text-sm font-semibold text-brand-light">
                        {r.label}
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-brand-light/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-yellow"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
