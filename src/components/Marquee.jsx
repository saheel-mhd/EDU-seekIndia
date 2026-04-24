const WORDS = [
  "Curiosity",
  "Creativity",
  "Confidence",
  "Communication",
  "Courage",
  "Collaboration",
  "Critical Thinking",
  "Character",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden py-10">
      <div className="divider-line" />
      <div
        className="flex gap-12 whitespace-nowrap py-8"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {row.map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-10 font-display text-3xl font-semibold uppercase tracking-tight text-brand-light/60 md:text-5xl"
          >
            <span
              className={
                i % 3 === 0
                  ? "text-gradient"
                  : i % 3 === 1
                  ? "text-brand-light"
                  : "text-brand-light/50"
              }
            >
              {w}
            </span>
            <span className="h-2 w-2 rounded-full bg-brand-yellow/70" />
          </div>
        ))}
      </div>
      <div className="divider-line" />
    </div>
  );
}
