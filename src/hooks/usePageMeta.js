import { useEffect } from "react";

const HOME_TITLE =
  "EduSeek India — Skill Discovery School for Every Child | Learning Beyond Textbooks";
const HOME_DESCRIPTION =
  "EduSeek is a new kind of school in India that helps every child discover real-world skills, confidence, and creativity — learning beyond textbooks and exams.";

/**
 * Update the browser tab title and the page's meta description for the
 * current page, and restore them on unmount. Lightweight per-route SEO
 * without adding a dependency like react-helmet.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — EduSeek India` : HOME_TITLE;
    const previousTitle = document.title;
    document.title = fullTitle;

    const meta = document.querySelector('meta[name="description"]');
    const previousDesc = meta ? meta.getAttribute("content") : null;
    if (meta && description) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle || HOME_TITLE;
      if (meta && previousDesc !== null)
        meta.setAttribute("content", previousDesc);
      else if (meta) meta.setAttribute("content", HOME_DESCRIPTION);
    };
  }, [title, description]);
}
