import {
  Cpu,
  Code2,
  Bot,
  Brain,
  Shield,
  Lightbulb,
  Wrench,
} from "lucide-react";
import SkillPage from "../../components/SkillPage.jsx";

export default function Technology() {
  return (
    <SkillPage
      metaTitle="Technology"
      metaDescription="At EduSeek India, we don't teach children to fear technology or follow it blindly. We teach them to question it, build with it, and stay human alongside it."
      eyebrow="Technology"
      icon={Cpu}
      accent="#9B7DF2"
      titleLead="Don't fear it."
      titleHighlight="Don't worship it."
      titleTail="Build with it."
      intro="Technology will shape every job, every relationship, and every choice your child makes. Our goal isn't to turn every learner into a coder — it's to make sure no learner is intimidated, fooled, or replaced by tools they could have understood. We help children become builders and thinkers in a digital world."
      whyHeadline="Why technology fluency is now the new literacy."
      whyBody={[
        "A generation ago, the divide was between people who could read and those who couldn't. Today, the divide is forming between people who can think with technology and those who only consume it. Your child is growing up in that divide, and where they land will shape what's possible for them.",
        "But fluency in technology is not the same as time on screens. Watching videos, playing games, scrolling apps — that is consumption. Real fluency is the ability to question what an app is showing you, build a small thing that didn't exist before, and notice when an algorithm is shaping your behavior.",
        "We teach technology with a strong human spine. Curiosity over hype. Skepticism over fear. Building over consuming. By the time a child finishes their journey with us, they don't just use technology — they understand it, shape it, and choose when to put it down.",
      ]}
      pillars={[
        {
          icon: Brain,
          title: "Computational Thinking",
          body: "Breaking problems into clear steps — the way a computer would, but with a human's judgment.",
        },
        {
          icon: Code2,
          title: "Coding Fundamentals",
          body: "Writing simple, working code. Reading other people's code. Knowing what is possible.",
        },
        {
          icon: Wrench,
          title: "Hardware & Robotics",
          body: "Building physical things that move, sense, and respond. Bridging code and the real world.",
        },
        {
          icon: Bot,
          title: "AI Literacy",
          body: "Using AI tools well, prompting clearly, knowing what they can do — and where they fail.",
        },
        {
          icon: Shield,
          title: "Digital Citizenship",
          body: "Privacy, safety, kindness online, and recognising manipulation when they meet it.",
        },
        {
          icon: Lightbulb,
          title: "Design Thinking",
          body: "Choosing what to build before figuring out how — because the right idea matters more than the clever one.",
        },
      ]}
      processSteps={[
        {
          title: "Hands first, theory after",
          body: "We start every technology block with a working thing — a small game, a simple bot, a tiny site. Children see code do something before they hear what code is.",
        },
        {
          title: "Age-appropriate stacks",
          body: "Younger learners begin with block-based languages and visual coding. As they grow, they move into Python, basic web tools, and beginner robotics — always at a pace that feels exciting, never overwhelming.",
        },
        {
          title: "AI as a thinking partner",
          body: "Children learn to use AI tools the way a professional would: to brainstorm, to draft, to debug, to push back. They also learn what AI gets wrong — and how to spot it.",
        },
        {
          title: "Build something real",
          body: "Every term ends with a project that actually works in the real world. A site for a community group. A robot that sorts recycling. A small app a parent can actually use.",
        },
        {
          title: "Tech ethics conversations",
          body: "We sit with hard questions in plain language. Should this app exist? Why does this video keep auto-playing? What is this game trying to do to my attention? Children leave with a calmer, sharper mind around technology.",
        },
        {
          title: "Healthy boundaries",
          body: "We model balance. Phones away during deep work. Screens off during meals. Conversation valued over notifications. Technology fluency includes knowing when to switch it off.",
        },
      ]}
      activities={[
        "Code a small game and watch younger learners play it.",
        "Build a simple robot that responds to light, sound, or touch.",
        "Design a website for a real community group or small business.",
        "Use an AI tool to draft, refine, and ship a real piece of work — and reflect on what was theirs and what wasn't.",
        "Investigate one app's design and explain how it tries to keep them scrolling.",
        "Debate a current tech ethics question (privacy, AI, attention) with peers.",
      ]}
      outcomes={[
        "Comfortable opening a code editor and making something work.",
        "Curious about how digital products are built — not intimidated by them.",
        "Uses AI tools thoughtfully, with skepticism, and credits them honestly.",
        "Spots manipulation in apps, ads, and feeds — and adjusts their own behavior.",
        "Knows the difference between consuming technology and creating with it.",
        "Can put the device down without anxiety, because their identity isn't living inside it.",
      ]}
      faqs={[
        {
          q: "Do you turn every child into a programmer?",
          a: "No. The goal is fluency, not specialization. Some children fall in love with coding and dive deep. Others just become confident, comfortable users and thinkers. Both are wins. We don't push one path over the other.",
        },
        {
          q: "Will my child's screen time go up?",
          a: "Often it actually goes down. Once children start building with technology, passive consumption becomes less interesting to them. They begin to ask harder questions of the apps they use, and choose the screen on their own terms.",
        },
        {
          q: "How young can technology learning begin?",
          a: "From around age 6, with the right framing — playful, hands-on, mostly off-screen at first. We grow the technical depth gradually as children grow, and we keep the human and ethical conversations going at every level.",
        },
        {
          q: "What about AI? Should I be worried?",
          a: "Worried, no. Aware, yes. We teach children to use AI tools as collaborators, not crutches. They learn what AI is genuinely good at, where it fails, what credit it deserves, and what only their own minds can do. That is the most valuable conversation a child can have right now.",
        },
      ]}
      ctaHeadline="Help your child meet technology as a builder, not just a user."
      ctaBody="Talk to us about your child's relationship with technology — what excites them, what worries you. A mentor will reach out and walk you through what learning at EduSeek could look like."
      relatedSkills={[
        { to: "/skills/communication", label: "Communication" },
        { to: "/skills/leadership", label: "Leadership" },
        { to: "/skills/creativity", label: "Creativity" },
        { to: "/skills/problem-solving", label: "Problem-solving" },
      ]}
    />
  );
}
