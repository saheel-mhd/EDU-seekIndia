/**
 * Word ribbon between the Approach and Skills sections.
 * Scrolls right → left continuously. Each word has an explicit brand
 * color so the ribbon reads as a curated, color-coded strip rather than
 * a random pattern.
 */
const WORDS = [
  { label: "Curiosity", color: "text-gradient" },
  { label: "Creativity", color: "text-brand-light" },
  { label: "Confidence", color: "text-gradient" },
  { label: "Communication", color: "text-brand-light" },
  { label: "Courage", color: "text-brand-red" },
  { label: "Collaboration", color: "text-gradient" },
  { label: "Critical Thinking", color: "text-brand-light" },
  { label: "Character", color: "text-brand-yellow" },
];

export default function Marquee() {
  // Render the list twice so the -50% translate loops seamlessly.
  const row = [...WORDS, ...WORDS];
  return (
    <div
      className="relative overflow-hidden py-10"
      aria-label="EduSeek core values"
    >
      <div className="divider-line" />

      <div
        className="flex gap-12 whitespace-nowrap py-8 will-animate"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {row.map((w, i) => (
          <div
            key={`${w.label}-${i}`}
            className="flex items-center gap-10 font-display text-3xl font-semibold uppercase tracking-tight md:text-5xl"
          >
            <span className={w.color}>{w.label}</span>
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-brand-yellow/70"
            />
          </div>
        ))}
      </div>

      <div className="divider-line" />
    </div>
  );
}
