import {
  Palette,
  Lightbulb,
  Music2,
  Wand2,
  Hammer,
  PenTool,
  Eye,
} from "lucide-react";
import SkillPage from "../../components/SkillPage.jsx";

export default function Creativity() {
  return (
    <SkillPage
      metaTitle="Creativity"
      metaDescription="At EduSeek India, creativity is the human ability that no machine can replace. We help children think differently, express freely, and make boldly — with no fear of the blank page."
      eyebrow="Creativity"
      icon={Palette}
      accent="#F8BF40"
      titleLead="The skill that"
      titleHighlight="machines can't take,"
      titleTail="and the world keeps needing."
      intro="A child who can imagine a different answer is a child the world won't easily replace. Creativity isn't an art class — it's a way of seeing. At EduSeek, we protect it, practice it, and grow it as a daily habit, not a once-a-week activity."
      whyHeadline="Why creativity is no longer optional — it's the most human skill we have."
      whyBody={[
        "For decades, schools have rewarded the right answer over the original one. The cost has been quiet but enormous: an entire generation taught to second-guess their own ideas, to wait for permission, to copy the model answer.",
        "We are now in a moment where almost any standardized output can be done faster by software. What remains uniquely human is the act of creation itself — choosing what to make, why it matters, how to make it interesting, and why anyone should care.",
        "Creativity is not a fixed talent. It is a habit. A child who is given permission to be wrong, encouraged to be original, and surrounded by people who take their ideas seriously will become a creative adult. We make sure your child has all three.",
      ]}
      pillars={[
        {
          icon: Eye,
          title: "Curiosity",
          body: "Noticing what others walk past. Asking the question that everyone forgot to ask.",
        },
        {
          icon: Lightbulb,
          title: "Original Thinking",
          body: "Generating real ideas — not the first one, not the obvious one, the better one.",
        },
        {
          icon: PenTool,
          title: "Visual Expression",
          body: "Sketching, designing, illustrating — using the eye as a thinking tool.",
        },
        {
          icon: Hammer,
          title: "Maker Mindset",
          body: "Turning an idea into a thing — paper, code, cardboard, music, anything that exists in the world.",
        },
        {
          icon: Music2,
          title: "Rhythm & Movement",
          body: "Music, movement, and play as serious creative tools, not just leisure.",
        },
        {
          icon: Wand2,
          title: "Bold Storytelling",
          body: "Telling a story that surprises, that stays — written, spoken, drawn, or filmed.",
        },
      ]}
      processSteps={[
        {
          title: "Open studio time",
          body: "Every week, children get unstructured time and good materials. No prompt, no grade, no judgment. Just space to make. The hardest creative skill — starting — is practiced here.",
        },
        {
          title: "Maker challenges",
          body: "Once a week, a constraint-driven challenge. 'Build something that floats from one piece of paper.' 'Tell a true story in exactly six images.' Constraints unlock creativity, not the other way around.",
        },
        {
          title: "No-judgment culture",
          body: "Mentors model the most important creative habit: never insult an early idea. We praise effort over output, courage over perfection, and the willingness to share over the polish of the result.",
        },
        {
          title: "Cross-medium exposure",
          body: "Children move between drawing, writing, music, code, photography, and movement. Crossing mediums is where original ideas get born.",
        },
        {
          title: "Show your work",
          body: "Every child shares what they made — even when it's unfinished, even when it's odd. Sharing is part of the practice. Creativity that hides in a drawer slowly dies.",
        },
        {
          title: "Critique with kindness",
          body: "Older learners are taught to give feedback the way good editors do — specific, generous, honest. The goal is to make the work better, not to make the maker smaller.",
        },
      ]}
      activities={[
        "Build something useful from cardboard, glue, and one constraint.",
        "Write and illustrate a 12-page picture book on any topic.",
        "Compose a 60-second piece of music that tells a story.",
        "Design a poster for a real cause and put it up in the community.",
        "Run a 'six-word stories' challenge and publish the best ones.",
        "Reimagine a familiar product — and pitch it like a designer.",
      ]}
      outcomes={[
        "Faces a blank page or empty canvas without flinching.",
        "Generates many ideas before settling on one — and isn't precious about which survives.",
        "Sees patterns, jokes, and connections others miss.",
        "Takes feedback without collapsing — and gives it without bruising others.",
        "Finishes things. Shares them. Starts the next thing.",
        "Carries a quiet confidence that they have something to say, and that someone will care.",
      ]}
      faqs={[
        {
          q: "My child isn't 'artistic'. Is this still for them?",
          a: "Yes — and especially for them. We treat creativity as a thinking skill, not an art skill. A creative engineer, a creative founder, a creative parent matters as much as a creative painter. Every child has a creative muscle. We just help them find it.",
        },
        {
          q: "Will this take time away from academics?",
          a: "No. Creativity strengthens academic learning, it doesn't compete with it. Creative children write better essays, solve harder math problems, and stay engaged longer because they're used to being curious rather than compliant.",
        },
        {
          q: "What if my child says they have 'no ideas'?",
          a: "That's a learned habit, and a fixable one. Most children stop sharing ideas because someone, somewhere, told them their first idea was wrong. We rebuild idea-sharing slowly, in safe spaces, until the well refills. It always does.",
        },
        {
          q: "Is screen-time involved?",
          a: "Some, intentionally — for design tools, music software, photo and video. But most creative work at EduSeek happens hands-on, in physical materials, in conversation, in real places. The screen is one tool, not the centre.",
        },
      ]}
      ctaHeadline="Protect your child's imagination — and watch what they build with it."
      ctaBody="Tell us about your child. A mentor will reach out, listen carefully, and help you understand how the creative side of their mind can be nurtured at EduSeek."
      relatedSkills={[
        { to: "/skills/communication", label: "Communication" },
        { to: "/skills/leadership", label: "Leadership" },
        { to: "/skills/technology", label: "Technology" },
        { to: "/skills/problem-solving", label: "Problem-solving" },
      ]}
    />
  );
}
