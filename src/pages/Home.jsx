import { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Problem from "../components/Problem.jsx";
import Approach from "../components/Approach.jsx";
import Marquee from "../components/Marquee.jsx";
import Skills from "../components/Skills.jsx";
import ParentFocus from "../components/ParentFocus.jsx";
import Journey from "../components/Journey.jsx";
import Vision from "../components/Vision.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";

/**
 * Home page. When the URL contains a hash (e.g. /#about) we scroll to
 * the matching section after mount — this lets users coming from
 * /privacy, /terms, /enquire (or external "deep links") land on the
 * right section instead of always at the top.
 */
export default function Home() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    // Wait one frame so layout is in place before scrolling.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Problem />
      <Approach />
      <Marquee />
      <Skills />
      <ParentFocus />
      <Journey />
      <Vision />
      <FAQ />
      <Contact />
    </>
  );
}
