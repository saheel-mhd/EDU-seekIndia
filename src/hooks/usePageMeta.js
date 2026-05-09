import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_ORIGIN = "https://eduseekindia.com";

const HOME_TITLE =
  "EduSeek India — Skill Discovery School for Every Child | Learning Beyond Textbooks";
const HOME_DESCRIPTION =
  "EduSeek is a new kind of school in India that helps every child discover real-world skills, confidence, and creativity — learning beyond textbooks and exams.";

/**
 * Update or create a meta tag for the current page. Returns the previous
 * value of the attribute so it can be restored on unmount.
 */
function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  let created = false;
  if (!el) {
    // Build the tag from the selector — supports `meta[name="x"]`,
    // `meta[property="x"]`, and `link[rel="x"]`.
    const tagMatch = selector.match(/^([a-z]+)/i);
    const tagName = tagMatch ? tagMatch[1] : "meta";
    el = document.createElement(tagName);
    const attrMatch = selector.match(/\[([^=]+)="([^"]+)"\]/);
    if (attrMatch) el.setAttribute(attrMatch[1], attrMatch[2]);
    document.head.appendChild(el);
    created = true;
  }
  const previous = el.getAttribute(attr);
  if (value !== null && value !== undefined) el.setAttribute(attr, value);
  return { el, previous, created };
}

/**
 * Update the browser tab title, meta description, canonical link, and
 * social-share metadata (Open Graph + Twitter) for the current route.
 * All updates are reverted on unmount so navigating between pages doesn't
 * leave stale metadata behind.
 *
 * Pass null/undefined for `title` on the home page to keep the static
 * HOME_TITLE / HOME_DESCRIPTION values.
 */
export function usePageMeta(title, description, options = {}) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} — EduSeek India` : HOME_TITLE;
    const fullDescription = description || HOME_DESCRIPTION;
    const canonicalUrl = `${SITE_ORIGIN}${location.pathname}`;
    const ogImage =
      options.image ||
      "https://res.cloudinary.com/dzaws4mwh/image/upload/c_pad,w_1200,h_630,b_rgb:0f0c0d/v1777100640/Screenshot_2026-04-24_150752_md3wcn.png";

    // Title
    const previousTitle = document.title;
    document.title = fullTitle;

    // Track everything we touch so we can restore on unmount.
    const restorations = [];

    const update = (selector, attr, value) => {
      const { el, previous, created } = setMeta(selector, attr, value);
      restorations.push({ el, attr, previous, created });
    };

    update('meta[name="description"]', "content", fullDescription);
    update('link[rel="canonical"]', "href", canonicalUrl);

    // Open Graph
    update('meta[property="og:title"]', "content", fullTitle);
    update('meta[property="og:description"]', "content", fullDescription);
    update('meta[property="og:url"]', "content", canonicalUrl);
    update('meta[property="og:image"]', "content", ogImage);

    // Twitter / X
    update('meta[name="twitter:title"]', "content", fullTitle);
    update('meta[name="twitter:description"]', "content", fullDescription);
    update('meta[name="twitter:image"]', "content", ogImage);

    return () => {
      document.title = previousTitle || HOME_TITLE;
      for (const r of restorations) {
        if (r.created) {
          // We added this tag; remove it on unmount.
          r.el.remove();
        } else if (r.previous !== null && r.previous !== undefined) {
          r.el.setAttribute(r.attr, r.previous);
        }
      }
    };
  }, [title, description, location.pathname, options.image]);
}
