import {
  Puzzle,
  Search,
  GitBranch,
  Lightbulb,
  Beaker,
  RefreshCcw,
  Anchor,
} from "lucide-react";
import SkillPage from "../../components/SkillPage.jsx";

export default function ProblemSolving() {
  return (
    <SkillPage
      metaTitle="Problem-solving"
      metaDescription="At EduSeek India, we teach children to face problems with calm, curiosity, and a method — turning big, scary challenges into clear, doable steps."
      eyebrow="Problem-solving"
      icon={Puzzle}
      accent="#2FB673"
      titleLead="Big problems, broken"
      titleHighlight="into small, clear,"
      titleTail="doable steps."
      intro="Life keeps handing children problems that aren't on any test — a friendship that breaks, a project that fails, a question with no obvious answer. At EduSeek, we teach problem-solving as a calm, repeatable practice: define it, decompose it, try something small, learn, repeat."
      whyHeadline="Why the most important question your child can learn is 'what's actually the problem here?'"
      whyBody={[
        "When children panic, it's usually not because the problem is too hard. It's because the problem is too vague. They don't know what to do because they don't know what's actually being asked. Teach them to define the problem clearly, and half the panic goes away.",
        "Most schools teach problem-solving as a special skill that lives inside math class. We treat it as a life-wide habit. The same calm method works for a stuck homework question, a misunderstood friend, a broken bicycle, or a startup idea ten years from now.",
        "We replace the question 'what's the answer?' with the question 'what's the next step?' That single shift changes everything. Children stop freezing in front of the unknown and start moving through it.",
      ]}
      pillars={[
        {
          icon: Search,
          title: "Define It",
          body: "Restating the problem clearly, in your own words, before doing anything else. Half the work, hidden in plain sight.",
        },
        {
          icon: GitBranch,
          title: "Decompose It",
          body: "Breaking a big problem into smaller ones — small enough that the next step is obvious.",
        },
        {
          icon: Lightbulb,
          title: "Multiple Options",
          body: "Generating at least three possible approaches before picking one. The first idea is rarely the best.",
        },
        {
          icon: Beaker,
          title: "Test Small",
          body: "Trying the cheapest possible version of an idea, on purpose. Failing fast, learning faster.",
        },
        {
          icon: RefreshCcw,
          title: "Reflect & Iterate",
          body: "Looking back at what worked, what didn't, and what to change — without shame, just curiosity.",
        },
        {
          icon: Anchor,
          title: "Embrace Constraints",
          body: "Treating limits as a gift. Tight constraints unlock better, sharper, more honest solutions.",
        },
      ]}
      processSteps={[
        {
          title: "Real problems, not textbook ones",
          body: "Children solve actual problems — in the school, in the community, in their own lives. The stakes are real, the answers are not in the back of a book, and the learning sticks.",
        },
        {
          title: "Socratic dialogue",
          body: "Mentors do not give answers. They ask better questions. 'What do you actually know? What are you assuming? What's the smallest test you could try?' Over time, children begin asking themselves these questions automatically.",
        },
        {
          title: "Design sprints",
          body: "Short, time-boxed problem-solving sprints — define, ideate, prototype, test — give children a repeatable method they can carry into any future challenge.",
        },
        {
          title: "Stuck is welcome",
          body: "We teach 'stuck' as a normal, productive state — not a personal failure. Children learn the specific moves that get a stuck mind moving again.",
        },
        {
          title: "Show your thinking",
          body: "Working out is shared, not just answers. Children sketch on whiteboards, talk through reasoning, and learn that thinking is something to be proud of — not hidden.",
        },
        {
          title: "Calmer under pressure",
          body: "We do small, low-stakes 'pressure moments' — surprise constraints, time limits, twists — so that when real pressure arrives, children have already practiced staying calm inside it.",
        },
      ]}
      activities={[
        "Run a design sprint to redesign one part of the school.",
        "Solve a real community problem — and show the result.",
        "Build a Rube Goldberg machine within strict constraints.",
        "Take an existing product, find three flaws, propose a fix.",
        "Tackle a 'no-Google' challenge using only their own thinking.",
        "Write a short reflection on a recent failure and what they'd try next time.",
      ]}
      outcomes={[
        "Stays calm when they don't immediately know what to do.",
        "Asks 'what's actually the problem here?' before reacting.",
        "Breaks intimidating tasks into small, obvious next steps.",
        "Tries cheap experiments before committing to big plans.",
        "Treats failure as data — not as identity.",
        "Knows how to ask for help in a way that respects everyone's time.",
      ]}
      faqs={[
        {
          q: "Is this just math problem-solving?",
          a: "Far from it. Math is one playground for the skill, but at EduSeek we apply problem-solving across friendships, projects, life decisions, broken things, and creative work. The method is the same — and it transfers.",
        },
        {
          q: "What if my child gives up easily?",
          a: "That is exactly the habit we work on. Giving up is rarely about the problem being too hard — it's about the next step being unclear. We teach the moves that turn 'I can't' into 'I haven't yet.' It's not magic, but it does become reliable.",
        },
        {
          q: "Will this help with school exams?",
          a: "Yes, as a side effect. Children who can define a problem, generate options, and stay calm under pressure perform better on exams without studying differently. But our goal is bigger than exams — we're training a way of thinking they will use for life.",
        },
        {
          q: "How is this different from 'critical thinking'?",
          a: "Critical thinking is mostly about evaluating ideas — questioning what you read, spotting flawed reasoning. Problem-solving is about acting — turning a stuck situation into a moving one. We grow both at EduSeek; they support each other beautifully.",
        },
      ]}
      ctaHeadline="Give your child the calm, doable method they'll use for the rest of their life."
      ctaBody="Reach out — a mentor will get in touch and listen carefully to where your child is. From there, we'll talk about what problem-solving practice could look like for them."
      relatedSkills={[
        { to: "/skills/communication", label: "Communication" },
        { to: "/skills/leadership", label: "Leadership" },
        { to: "/skills/creativity", label: "Creativity" },
        { to: "/skills/technology", label: "Technology" },
      ]}
    />
  );
}
