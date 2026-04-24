import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  CircleCheck,
  Baby,
} from "lucide-react";
import Reveal from "./primitives/Reveal.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit (replace with real endpoint later)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", age: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — copy & details */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Start the Conversation
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title mt-5">
                Begin your child's{" "}
                <span className="text-gradient">
                  skill discovery journey.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="section-sub">
                Tell us a little about your child. We will reach out to
                understand them better and share how EduSeek can support
                their growth.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="mt-10 space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@eduseekindia.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 703 498 8630",
                  },
                  {
                    icon: MapPin,
                    label: "Campus",
                    value: "EduSeek Institute, India",
                  },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <li
                      key={c.label}
                      className="glass flex items-center gap-4 rounded-2xl p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-[0.65rem] uppercase tracking-[0.2em] text-brand-light/50">
                          {c.label}
                        </div>
                        <div className="font-display text-sm font-semibold text-brand-light">
                          {c.value}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <div className="glass relative overflow-hidden rounded-3xl p-7 md:p-10">
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="relative flex min-h-[420px] flex-col items-center justify-center text-center"
                    >
                      <div
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow"
                        style={{
                          boxShadow: "0 0 40px rgba(248,191,64,0.4)",
                        }}
                      >
                        <CircleCheck size={40} />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-bold text-brand-light">
                        Thank you for reaching out.
                      </h3>
                      <p className="mt-3 max-w-md text-sm text-brand-light/70">
                        We've received your enquiry. A mentor from the Edu
                        Seek team will get in touch with you soon to
                        understand your child better.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn-secondary mt-8"
                      >
                        Send another enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="relative grid gap-5 sm:grid-cols-2"
                      noValidate
                    >
                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="name">
                          Parent / Guardian Name
                        </label>
                        <div className="relative">
                          <User
                            size={16}
                            aria-hidden
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/40"
                          />
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Anjali Sharma"
                            className="input-field pl-11"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="label" htmlFor="email">
                          Email
                        </label>
                        <div className="relative">
                          <Mail
                            size={16}
                            aria-hidden
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/40"
                          />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="input-field pl-11"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="label" htmlFor="phone">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone
                            size={16}
                            aria-hidden
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/40"
                          />
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
                            className="input-field pl-11"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="age">
                          Child's Age
                        </label>
                        <div className="relative">
                          <Baby
                            size={16}
                            aria-hidden
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/40"
                          />
                          <input
                            id="age"
                            name="age"
                            type="number"
                            min={3}
                            max={25}
                            value={form.age}
                            onChange={handleChange}
                            placeholder="e.g. 10"
                            className="input-field pl-11"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="message">
                          Tell us about your child
                        </label>
                        <div className="relative">
                          <MessageSquare
                            size={16}
                            aria-hidden
                            className="pointer-events-none absolute left-4 top-5 text-brand-light/40"
                          />
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What makes them curious? What would you love for them to grow in?"
                            className="input-field resize-none pl-11 pt-4"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-brand-light/50">
                          By submitting, you agree to be contacted by Edu
                          Seek for information about your child's learning.
                        </p>
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary group disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {loading ? (
                            <>
                              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-brand-dark/40 border-t-brand-dark" />
                              Sending…
                            </>
                          ) : (
                            <>
                              Start the Skill Discovery Journey
                              <Send
                                size={16}
                                className="transition-transform duration-300 group-hover:-rotate-12"
                              />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
