import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On every route change, jump scroll position back to the top of the
 * document — except when the URL has a hash (which Home.jsx handles by
 * scrolling to that section).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
