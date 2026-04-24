/**
 * Brand logo — tight wordmark version.
 * The source image has minimal padding and an intrinsic aspect of ~2.5:1,
 * so the containers below are sized to match it. The PNG's dark background
 * blends with the site so the mark reads as floating "Edu SEEK" text.
 */
const LOGO_SRC = "/Screenshot 2026-04-24 150752.png";

export default function Logo({
  className = "",
  size = "md", // "sm" | "md" | "lg"
}) {
  const sizes = {
    sm: "h-8 w-20", // 32 × 80
    md: "h-10 w-24", // 40 × 96
    lg: "h-14 w-36", // 56 × 144
  };

  return (
    <img
      src={LOGO_SRC}
      alt="Edu Seek"
      className={`shrink-0 select-none object-contain transition-transform duration-500 hover:scale-[1.03] ${sizes[size]} ${className}`}
      width={256}
      height={104}
      draggable={false}
      loading="eager"
      decoding="async"
    />
  );
}
