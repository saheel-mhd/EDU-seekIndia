import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Enquire from "./pages/Enquire.jsx";
import Communication from "./pages/skills/Communication.jsx";
import Leadership from "./pages/skills/Leadership.jsx";
import Creativity from "./pages/skills/Creativity.jsx";
import Technology from "./pages/skills/Technology.jsx";
import ProblemSolving from "./pages/skills/ProblemSolving.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/enquire" element={<Enquire />} />
            {/* Per-skill deep-dive pages. */}
            <Route path="/skills/communication" element={<Communication />} />
            <Route path="/skills/leadership" element={<Leadership />} />
            <Route path="/skills/creativity" element={<Creativity />} />
            <Route path="/skills/technology" element={<Technology />} />
            <Route path="/skills/problem-solving" element={<ProblemSolving />} />
            {/* Anything else falls back to home. */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
