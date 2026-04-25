import LegalPage from "../components/LegalPage.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Terms() {
  usePageMeta(
    "Terms of Use",
    "The terms and conditions that apply when you use the EduSeek India website and submit an enquiry."
  );

  return (
    <LegalPage
      eyebrow="Terms of Use"
      title="The rules of the road."
      lastUpdated="25 April 2026"
    >
      <p>
        Welcome to EduSeek. These Terms of Use (“Terms”) govern your access
        to and use of the website at{" "}
        <a href="https://eduseekindia.com">eduseekindia.com</a> (the
        “Website”). By using the Website you agree to these Terms. If you do
        not agree, please do not use the Website.
      </p>

      <h2>1. About EduSeek</h2>
      <p>
        EduSeek is a learning institution based in India that helps young
        learners discover real-world skills, alongside the academics they
        study at school. The Website is the public-facing home for
        information about our approach, our team, and the programs we
        offer.
      </p>

      <h2>2. Use of the Website</h2>
      <p>You agree to use the Website lawfully and respectfully. You will not:</p>
      <ul>
        <li>Use the Website in any way that breaks the law or violates anyone's rights.</li>
        <li>
          Attempt to gain unauthorised access to any part of the Website,
          our servers, or our infrastructure.
        </li>
        <li>
          Upload or transmit malware, scrape the site without permission,
          or interfere with how the Website works for other people.
        </li>
        <li>
          Submit false or misleading information through any form on the
          Website.
        </li>
      </ul>

      <h2>3. Enquiry submissions</h2>
      <p>
        When you submit information through our enquiry form, you confirm
        that the information is accurate and that, if you are submitting
        information on behalf of a minor, you are the parent or legal
        guardian and you consent to us contacting you. The information you
        submit is handled as described in our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        All content on the Website — including text, graphics, logos, the
        EduSeek name and wordmark, illustrations, and software — is the
        property of EduSeek or our licensors and is protected by Indian and
        international intellectual-property laws. You may view and share
        the content for personal, non-commercial use, but you may not copy,
        republish, or use it commercially without our written permission.
      </p>

      <h2>5. Educational guidance, not guarantees</h2>
      <p>
        Information on the Website is provided for general information
        about EduSeek and our approach. It is not a guarantee of any
        particular learning outcome, academic result, or career path.
        Every child's growth is unique, and we do not promise specific
        results.
      </p>

      <h2>6. Third-party links and services</h2>
      <p>
        The Website may include links to third-party websites or services
        we don't operate. We are not responsible for the content, policies,
        or practices of any third party. Links are provided for
        convenience only.
      </p>

      <h2>7. Disclaimer of warranties</h2>
      <p>
        The Website is provided “as is” and “as available” without any
        warranties, express or implied, to the maximum extent permitted by
        law. We do not warrant that the Website will always be available,
        uninterrupted, error-free, or free of harmful components.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, EduSeek and its
        team will not be liable for any indirect, incidental, special,
        consequential, or punitive damages arising from your use of the
        Website. Nothing in these Terms limits any liability that cannot be
        excluded or limited under applicable Indian law.
      </p>

      <h2>9. Changes to the Website and these Terms</h2>
      <p>
        We may change, suspend, or discontinue parts of the Website at any
        time without notice. We may also update these Terms — when we do,
        we will update the “Last updated” date above. Continued use of the
        Website after changes means you accept the updated Terms.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Any dispute arising
        out of or relating to these Terms or the Website is subject to the
        exclusive jurisdiction of the competent courts in India.
      </p>

      <h2>11. Contact us</h2>
      <p>If you have any questions about these Terms, please reach out:</p>
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
