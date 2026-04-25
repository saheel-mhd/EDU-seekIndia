import Contact from "../components/Contact.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Enquire() {
  usePageMeta(
    "Enquire",
    "Begin your child's skill discovery journey with EduSeek India. Tell us a little about your child and a mentor will reach out personally."
  );

  return (
    <div className="pt-24 md:pt-28">
      <Contact />
    </div>
  );
}
