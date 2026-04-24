import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Problem from "./components/Problem.jsx";
import Approach from "./components/Approach.jsx";
import Skills from "./components/Skills.jsx";
import ParentFocus from "./components/ParentFocus.jsx";
import Journey from "./components/Journey.jsx";
import Vision from "./components/Vision.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Marquee from "./components/Marquee.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Approach />
        <Marquee />
        <Skills />
        <ParentFocus />
        <Journey />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
