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

/**
 * Build an idempotency key in the EduSeek API format:
 *   idempotency-DD-MM-YYYY-HH-MM-SS
 * The API uses this so duplicate-submitted requests (network retries,
 * double-clicks) are processed once. We generate a fresh key per submit
 * attempt so a manual retry after a real failure is treated as new.
 */
function buildIdempotencyKey() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return [
    "idempotency",
    pad(d.getDate()),
    pad(d.getMonth() + 1),
    d.getFullYear(),
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds()),
  ].join("-");
}

// We POST to a relative path. The Vite dev plugin (see vite.config.js)
// — and the equivalent serverless function in production — receives the
// payload, replies 202 immediately so the form feels instant, then
// forwards the call to the upstream email API in the background. The
// bearer token never leaves the server, so we don't send Authorization
// from here.
const API_URL = "/api/send-welcome-mail";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({});

  // Field-level validation. Phone & message are optional. Name, email,
  // and child age are required. Empty / unsatisfied fields return a
  // friendly message; satisfied fields are absent from the result.
  const validate = (values) => {
    const e = {};
    if (!values.name.trim()) {
      e.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      e.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      e.email = "That email doesn't look right.";
    }

    const ageNum = Number(values.age);
    if (!values.age.toString().trim()) {
      e.age = "Please enter your child's age.";
    } else if (!Number.isFinite(ageNum) || ageNum < 3 || ageNum > 25) {
      e.age = "Age should be a number between 3 and 25.";
    }

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear the field's error as soon as the user edits it again so
    // they get immediate, encouraging feedback instead of nagging.
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const { [name]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Move keyboard focus to the first invalid field for accessibility.
      const firstInvalid = Object.keys(fieldErrors)[0];
      const el = document.getElementById(firstInvalid);
      if (el && typeof el.focus === "function") el.focus();
      return;
    }

    setErrors({});
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idempotencyKey: buildIdempotencyKey(),
          to: [form.email],
          variables: {
            name: form.name,
          },
        }),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(
          `Request failed (${response.status}). ${text || "Please try again."}`
        );
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", age: "", message: "" });
      setErrors({});
    } catch (err) {
      setErrorMsg(
        err?.message ||
          "We couldn't send your enquiry just now. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — copy & details */}
          <div className="lg:col-span-5">
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
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Anjali Sharma"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={
                              errors.name ? "name-error" : undefined
                            }
                            className={`input-field pl-11 ${
                              errors.name ? "input-error" : ""
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p
                            id="name-error"
                            className="mt-2 text-xs text-brand-red"
                          >
                            {errors.name}
                          </p>
                        )}
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
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={
                              errors.email ? "email-error" : undefined
                            }
                            className={`input-field pl-11 ${
                              errors.email ? "input-error" : ""
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p
                            id="email-error"
                            className="mt-2 text-xs text-brand-red"
                          >
                            {errors.email}
                          </p>
                        )}
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
                            aria-invalid={Boolean(errors.age)}
                            aria-describedby={
                              errors.age ? "age-error" : undefined
                            }
                            className={`input-field pl-11 ${
                              errors.age ? "input-error" : ""
                            }`}
                          />
                        </div>
                        {errors.age && (
                          <p
                            id="age-error"
                            className="mt-2 text-xs text-brand-red"
                          >
                            {errors.age}
                          </p>
                        )}
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

                      {errorMsg && (
                        <div
                          role="alert"
                          aria-live="polite"
                          className="sm:col-span-2 rounded-2xl border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-sm text-brand-light"
                        >
                          {errorMsg}
                        </div>
                      )}

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
