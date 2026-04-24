import { motion } from "framer-motion";

/**
 * Futuristic animated background with soft blobs, grid overlay, and
 * slow-drifting rings. Used behind the Hero and feature sections.
 */
export default function AnimatedBackground({ variant = "hero" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "hero"
              ? "radial-gradient(ellipse at 20% 10%, rgba(81,110,214,0.35), transparent 55%), radial-gradient(ellipse at 80% 0%, rgba(248,191,64,0.25), transparent 50%), radial-gradient(ellipse at 60% 100%, rgba(235,67,49,0.22), transparent 55%), linear-gradient(180deg, #0f0c0d 0%, #140f10 100%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(81,110,214,0.18), transparent 60%), linear-gradient(180deg, #0f0c0d 0%, #140f10 100%)",
        }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay absolute inset-0 opacity-60" />

      {/* Soft color blobs */}
      <motion.div
        className="blob absolute -left-32 top-24 h-[32rem] w-[32rem] bg-brand-blue"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute -right-32 top-10 h-[28rem] w-[28rem] bg-brand-yellow"
        animate={{ y: [0, -28, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute bottom-0 left-1/3 h-[26rem] w-[26rem] bg-brand-red"
        animate={{ y: [0, -22, 0], x: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow-rotating ring */}
      <motion.svg
        className="will-animate absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="ring-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#516ED6" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#F8BF40" stopOpacity="0.6" />
            <stop offset="1" stopColor="#EB4331" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <circle
          cx="450"
          cy="450"
          r="380"
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="1"
          strokeDasharray="4 10"
        />
        <circle
          cx="450"
          cy="450"
          r="300"
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="1"
          strokeDasharray="2 14"
        />
        <circle
          cx="450"
          cy="450"
          r="220"
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="1"
          strokeDasharray="1 18"
        />
      </motion.svg>

      {/* Noise / vignette */}
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
