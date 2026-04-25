import LegalPage from "../components/LegalPage.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Privacy() {
  usePageMeta(
    "Privacy Policy",
    "How EduSeek India collects, uses, and protects the personal information you share through our website and enquiry forms."
  );

  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your information."
      lastUpdated="25 April 2026"
    >
      <p>
        EduSeek (“EduSeek,” “we,” “our,” or “us”) respects your privacy. This
        Privacy Policy explains what information we collect when you visit
        <a href="https://eduseekindia.com">eduseekindia.com</a> or contact us
        through our enquiry form, how we use it, and the choices you have. By
        using our website you agree to the practices described here.
      </p>

      <h2>1. Information we collect</h2>
      <p>We only collect what we need to respond to you well:</p>
      <ul>
        <li>
          <strong>Information you give us through the enquiry form:</strong>{" "}
          parent/guardian name, email address, phone number, child's age, and
          any message you write to us.
        </li>
        <li>
          <strong>Basic technical information:</strong> standard server logs
          such as IP address, browser type, device type, and pages visited.
          This helps us keep the site secure and reliable.
        </li>
        <li>
          <strong>Cookies & similar technologies:</strong> we currently use
          only essential cookies needed for the site to function. We do not
          run third-party analytics or advertising trackers at this time.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and contact you about EduSeek's programs.</li>
        <li>To send a welcome confirmation email after you submit the form.</li>
        <li>To improve our website and the experience we offer parents and learners.</li>
        <li>To comply with legal obligations under applicable Indian law.</li>
      </ul>

      <h2>3. Children's privacy</h2>
      <p>
        EduSeek is a service for parents and guardians. The enquiry form is
        intended to be filled out by an adult on behalf of a child. We do not
        knowingly collect personal information directly from children under
        the age of 18. If you believe a child has submitted information to us,
        please contact us at{" "}
        <a href="mailto:info@eduseekindia.com">info@eduseekindia.com</a> and we
        will delete it.
      </p>

      <h2>4. Sharing your information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We share it
        only with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> who help us operate (for example,
          our transactional email provider that delivers your welcome
          message). They may only use the information to perform the service
          we ask of them.
        </li>
        <li>
          <strong>Authorities</strong> if required by law, regulation, or
          legal process.
        </li>
      </ul>

      <h2>5. How we store and protect your information</h2>
      <p>
        We use reasonable technical and organisational safeguards designed to
        protect personal information from loss, misuse, and unauthorised
        access. No system is perfectly secure, so we cannot guarantee absolute
        security — but we treat your data with care.
      </p>

      <h2>6. How long we keep your information</h2>
      <p>
        We retain enquiry information for as long as we have a working
        relationship with you, and afterwards only as long as needed to
        comply with legal obligations or resolve disputes.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Subject to applicable law (including India's Digital Personal Data
        Protection Act, 2023), you may have the right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Ask us to correct information that is inaccurate.</li>
        <li>Ask us to delete your information.</li>
        <li>Withdraw consent for future communications.</li>
      </ul>
      <p>
        To exercise any of these rights, write to{" "}
        <a href="mailto:info@eduseekindia.com">info@eduseekindia.com</a>. We
        will respond within a reasonable time.
      </p>

      <h2>8. Third-party links</h2>
      <p>
        Our website may link to other sites we don't operate. This policy
        does not apply to those sites — please review their privacy policies
        before sharing any information with them.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will
        update the “Last updated” date at the top of this page. Material
        changes will be communicated through the website.
      </p>

      <h2>10. Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we
        handle your information, please reach out:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:info@eduseekindia.com">info@eduseekindia.com</a>
        </li>
        <li>
          Phone: <a href="tel:+917034988630">+91 703 498 8630</a>
        </li>
        <li>EduSeek Institute, India</li>
      </ul>
    </LegalPage>
  );
}
