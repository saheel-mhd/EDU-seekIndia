import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

/**
 * Parent-focused FAQs.  Keep these in sync with the FAQPage JSON-LD in
 * index.html — Google penalizes schema whose answers don't match what's
 * visible on the page.  When you edit a question or answer here, update
 * the matching entry in index.html as well.
 */
export const FAQS = [
  {
    q: "What is EduSeek?",
    a: "EduSeek is a new kind of learning home in India, built to help every child discover real world skills. communication, leadership, creativity, technology, problem-solving, and more — alongside the academics they study at school.",
  },
  {
    q: "How is EduSeek different from a traditional school?",
    a: "Traditional schools focus on syllabus and exams and they do that well. EduSeek adds what those systems often miss: skill discovery, mentorship, hands-on projects, and a personalized growth path that helps children build the abilities life rewards.",
  },
  {
    q: "What kinds of skills will my child develop here?",
    a: "Communication, leadership, creativity, technology, problem-solving, an entrepreneurship mindset, critical thinking, and collaboration. We treat these as core skills, practiced steadily over time not as side activities.",
  },
  {
    q: "How will I know my child is making progress?",
    a: "Parents stay close to the journey. We share regular updates from mentors, showcase project work, and host moments where your child can present what they've built. Growth is celebrated openly, not measured by a single number.",
  },
  {
    q: "How do we get started?",
    a: "Tell us a little about your child through the enquiry form below. A mentor from the EduSeek team will reach out personally to understand them better. their curiosities, their strengths, and what they love. From there, we walk the path together.",
  },
];

function FAQItem({ q, a, index, open, onToggle }) {
  const id = `faq-${index}`;
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
        ease: [0.22, 0.8, 0.24, 1],
      }}
      className="glass card-hover relative overflow-hidden rounded-3xl"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        onClick={onToggle}
        className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors duration-300 hover:bg-white/[0.03]"
      >
        <span className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-brand-yellow">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="flex-1 font-display text-base font-semibold leading-snug text-brand-light md:text-lg">
          {q}
        </h3>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-light transition-all duration-300 ${
            open ? "rotate-45 border-brand-yellow/60 text-brand-yellow" : ""
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
            transition={{ duration: 0.35, ease: [0.22, 0.8, 0.24, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="ml-12 border-l border-white/10 pl-5">
                <p className="text-sm leading-relaxed text-brand-light/75 md:text-base">
                  {a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function FAQ() {
  // Open the first item by default so the section never feels empty.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.1}>
            <h2 id="faq-heading" className="section-title mt-5">
              Questions parents{" "}
              <span className="text-gradient">ask us most.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub mx-auto">
              Quick, honest answers to the things parents wonder before
              starting the EduSeek journey. Have a question that's not
              here? Reach out below — a real person will reply.
            </p>
          </Reveal>
        </div>

        <ul className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
