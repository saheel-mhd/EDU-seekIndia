import { Instagram, Facebook, Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import Logo from "./primitives/Logo.jsx";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#problem", label: "Why Us" },
  { href: "#approach", label: "Approach" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Enquire" },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden pt-24">
      {/* Top glow border */}
      <div className="divider-line container-x" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="container-x pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="sm" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-light/70">
              EduSeek is a new kind of learning home, built to help every
              child discover who they are, build real world skills, and step
              into life with confidence and curiosity.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-light/80 transition-all duration-300 hover:border-brand-yellow/60 hover:bg-brand-yellow/10 hover:text-brand-yellow"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.24em] text-brand-light/50">
                Explore
              </div>
              <ul className="mt-4 space-y-2.5">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-brand-light/80 transition-colors hover:text-brand-yellow"
                    >
                      {n.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.24em] text-brand-light/50">
                Learning
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-light/80">
                <li>Communication</li>
                <li>Leadership</li>
                <li>Creativity</li>
                <li>Technology</li>
                <li>Problem-solving</li>
              </ul>
            </div>

            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.24em] text-brand-light/50">
                Reach Us
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-light/80">
                <li>info@eduseekindia.com</li>
                <li>+91 00000 00000</li>
                <li>EduSeek Studio, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider-line mt-14" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-brand-light/50 sm:flex-row sm:items-center">
          <div>© {year} EduSeek. Learning beyond textbooks.</div>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="transition-colors hover:text-brand-light"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-brand-light"
            >
              Terms
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-brand-yellow"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
