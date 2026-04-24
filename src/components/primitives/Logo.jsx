/**
 * Brand logo — shows the full "Edu Seek Logo Light" image (no cropping).
 * The container holds the entire source image via object-contain, so the
 * wordmark is never cut off. Because the source PNG has padding baked in,
 * sizes are chosen generously to keep the visible mark legible.
 */
const LOGO_SRC = "/Edu Seek Logo Light.png";

export default function Logo({
  className = "",
  size = "md", // "sm" | "md" | "lg"
}) {
  const sizes = {
    sm: "h-14 w-14",
    md: "h-16 w-16",
    lg: "h-20 w-20",
  };

  return (
    <img
      src={LOGO_SRC}
      alt="Edu Seek — Skill, Education, Excellence, Knowledge"
      className={`shrink-0 select-none object-contain transition-transform duration-500 hover:scale-[1.03] ${sizes[size]} ${className}`}
      width={160}
      height={160}
      draggable={false}
      loading="eager"
      decoding="async"
    />
  );
}
