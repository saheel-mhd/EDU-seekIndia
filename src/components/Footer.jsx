import {
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./primitives/Logo.jsx";

// Threads and X have no Lucide icons yet — minimal inline SVGs sized to match Lucide's stroke style.
const Threads = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.02c.03-3.575.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.78 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.27 8.073c.98-1.452 2.568-2.25 4.585-2.25h.043c3.353.02 5.35 2.073 5.55 5.65.111.046.22.094.327.143 1.514.71 2.625 1.787 3.213 3.116.819 1.851.895 4.867-1.534 7.249-1.879 1.836-4.158 2.661-7.243 2.681zm1.024-9.479c-.327 0-.66.01-1 .03-1.84.103-2.986.94-2.929 1.984.06 1.094 1.265 1.604 2.428 1.54 1.07-.058 2.467-.476 2.7-3.245a10.83 10.83 0 0 0-1.198-.31z" />
  </svg>
);

const X = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// In-page section anchors. These scroll on the home page; from any other
// page they navigate back to home and let Home.jsx scroll to the hash.
const SECTION_NAV = [
  { hash: "about", label: "About" },
  { hash: "approach", label: "Approach" },
  { hash: "skills", label: "Skills" },
  { hash: "journey", label: "Journey" },
];

// Per-skill deep-dive routes that live in /skills/*.
const LEARNING_NAV = [
  { to: "/skills/communication", label: "Communication" },
  { to: "/skills/leadership", label: "Leadership" },
  { to: "/skills/creativity", label: "Creativity" },
  { to: "/skills/technology", label: "Technology" },
  { to: "/skills/problem-solving", label: "Problem-solving" },
];

const SOCIALS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/eduseekindia?igsh=ankxMmhwdGpoa3c3",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1AocFCjqWR/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@eduseekindia",
  },
  {
    icon: Threads,
    label: "Threads",
    href: "https://www.threads.com/@eduseekindia",
  },
  {
    icon: X,
    label: "X",
    href: "https://x.com/eduseekindia?s=21",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleSectionClick = (hash) => (e) => {
    e.preventDefault();
    if (isHome) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${hash}`);
    } else {
      navigate(`/#${hash}`);
    }
  };

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
            <Link to="/" aria-label="EduSeek home">
              <Logo size="sm" />
            </Link>
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
                {SECTION_NAV.map((n) => (
                  <li key={n.hash}>
                    <a
                      href={`/#${n.hash}`}
                      onClick={handleSectionClick(n.hash)}
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
                <li>
                  <Link
                    to="/enquire"
                    className="group inline-flex items-center gap-1.5 text-sm text-brand-light/80 transition-colors hover:text-brand-yellow"
                  >
                    Enquire
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.24em] text-brand-light/50">
                Learning
              </div>
              <ul className="mt-4 space-y-2.5">
                {LEARNING_NAV.map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className="group inline-flex items-center gap-1.5 text-sm text-brand-light/80 transition-colors hover:text-brand-yellow"
                    >
                      {n.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.24em] text-brand-light/50">
                Reach Us
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-light/80">
                <li>
                  <a
                    href="mailto:info@eduseekindia.com"
                    className="transition-colors hover:text-brand-yellow"
                  >
                    info@eduseekindia.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919747070636"
                    className="transition-colors hover:text-brand-yellow"
                  >
                    +91 974 7070 636
                  </a>
                </li>
                <li>EduSeek Institute, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider-line mt-14" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-brand-light/50 sm:flex-row sm:items-center">
          <div>© {year} EduSeek. Learning beyond textbooks.</div>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="transition-colors hover:text-brand-light"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="transition-colors hover:text-brand-light"
            >
              Terms
            </Link>
            <Link
              to="/enquire"
              className="transition-colors hover:text-brand-yellow"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
