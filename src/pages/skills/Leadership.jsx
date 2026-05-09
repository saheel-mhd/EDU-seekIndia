import {
  Flag,
  Compass,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Eye,
  Users,
} from "lucide-react";
import SkillPage from "../../components/SkillPage.jsx";

export default function Leadership() {
  return (
    <SkillPage
      metaTitle="Leadership"
      metaDescription="Leadership at EduSeek India isn't about being loud. It's about taking responsibility, lifting others, and choosing what's right when no one is watching."
      eyebrow="Leadership"
      icon={Flag}
      accent="#EB4331"
      titleLead="Leadership isn't a"
      titleHighlight="title — it's a habit"
      titleTail="of showing up well."
      intro="At EduSeek, leadership is not about being the loudest voice or the captain of the team. It's the everyday practice of taking ownership, listening with care, choosing courage over comfort, and lifting people up around you. We grow these habits early, gently, in real situations."
      whyHeadline="Why every child not just the chosen few deserves to learn leadership."
      whyBody={[
        "There is an old idea that leadership belongs to the prefects, the captains, and the head of the class. That idea is outdated and unkind. Real leadership belongs to anyone willing to take responsibility for what happens around them.",
        "The world your child is growing into will demand leaders of a new kind. Calmer. Kinder. Quicker to listen. More willing to be wrong in public. Less interested in being right than in getting it right. We help children practice that kind of leadership long before they ever need it.",
        "We do not crown leaders at EduSeek — we cultivate them. Through rotating responsibilities, real ownership of real outcomes, and mentors who model what good leadership actually looks like in everyday life.",
      ]}
      pillars={[
        {
          icon: Eye,
          title: "Self-awareness",
          body: "Knowing your own strengths, blind spots, and how you show up in a room — before trying to lead anyone else.",
        },
        {
          icon: Scale,
          title: "Decision-making",
          body: "Choosing thoughtfully under pressure. Weighing the easy answer against the right one.",
        },
        {
          icon: HeartHandshake,
          title: "Empathy First",
          body: "Leading with understanding. Asking how someone feels before telling them what to do.",
        },
        {
          icon: ShieldCheck,
          title: "Owning Outcomes",
          body: "Taking responsibility when it goes well — and especially when it doesn't.",
        },
        {
          icon: Users,
          title: "Building Teams",
          body: "Bringing different kinds of people together, and getting the best from each of them.",
        },
        {
          icon: Compass,
          title: "Inner Compass",
          body: "Choosing what's right when no one's watching, no one's grading, and the easier path is open.",
        },
      ]}
      processSteps={[
        {
          title: "Rotating ownership",
          body: "Every child takes turns leading something — a project, a circle, a community task. No permanent captains, no permanent followers. Leadership belongs to everyone, in turn.",
        },
        {
          title: "Mentor-modelled, not lectured",
          body: "Our mentors do not give leadership speeches. They show up consistently, take responsibility openly, apologize when wrong, and ask for help when stuck. Children learn leadership by watching it lived.",
        },
        {
          title: "Decisions with weight",
          body: "We give children real decisions with real consequences — what to build, how to spend a small budget, who does what. Real stakes teach what hypothetical games can never teach.",
        },
        {
          title: "Reflection circles",
          body: "After every project, the team sits in a quiet circle and reviews honestly: what worked, what didn't, what I will do differently. No blame, just growth.",
        },
        {
          title: "Lifting younger learners",
          body: "Older children mentor younger ones. Nothing teaches leadership faster than being responsible for someone smaller, kinder, more uncertain than you.",
        },
        {
          title: "Conflict, faced calmly",
          body: "When disagreements happen, mentors guide children to face them — not avoid them. We teach the skill of disagreeing without disliking.",
        },
      ]}
      activities={[
        "Lead a school-wide assembly on a topic they care about.",
        "Plan and run a community project from idea to outcome.",
        "Mediate a real disagreement between two younger learners.",
        "Mentor a junior learner through a project for an entire term.",
        "Manage a small team budget for a real event.",
        "Take ownership of a 'failed' project and present what was learned.",
      ]}
      outcomes={[
        "Speaks up when it matters — even when it isn't easy.",
        "Says 'I was wrong' without losing self-esteem.",
        "Listens to a teammate before pushing their own idea.",
        "Volunteers for hard, unglamorous work without being asked.",
        "Stays calm when a plan falls apart, and helps others stay calm too.",
        "Treats the quietest person in the room as well as the loudest.",
      ]}
      faqs={[
        {
          q: "What if my child isn't naturally a 'leader type'?",
          a: "Good. The world has enough people who think they were born to lead. The leaders we need are the ones who grew into it — slowly, thoughtfully, by caring for others and taking small responsibilities seriously. That kind of leader can be cultivated in any child.",
        },
        {
          q: "Will this make my child overconfident or arrogant?",
          a: "On the contrary. The leadership we teach is rooted in humility — listening before speaking, lifting others, owning mistakes. Real leadership and arrogance are opposites. Children who practice it become more grounded, not more inflated.",
        },
        {
          q: "Is this only for older children?",
          a: "No. Leadership habits begin early — in how a six-year-old shares a toy, helps a friend who's hurt, or owns up to a small mistake. We adjust the depth and the language by age, but the practice begins from day one.",
        },
        {
          q: "How is this different from a school's prefect system?",
          a: "Most prefect systems are status-based — a few children are appointed leaders for a year. We do the opposite. Leadership opportunities rotate through every child, and the focus is on the practice itself, not the badge.",
        },
      ]}
      ctaHeadline="Help your child grow into the kind of person others want to follow."
      ctaBody="Reach out and a mentor will get back to you personally. We'll spend time understanding your child first — then talk about how leadership can be grown, gently, in their own way."
      relatedSkills={[
        { to: "/skills/communication", label: "Communication" },
        { to: "/skills/creativity", label: "Creativity" },
        { to: "/skills/technology", label: "Technology" },
        { to: "/skills/problem-solving", label: "Problem-solving" },
      ]}
    />
  );
}
