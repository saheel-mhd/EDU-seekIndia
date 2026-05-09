import {
  MessageCircle,
  Ear,
  Mic2,
  PenLine,
  BookOpen,
  Users,
  Smile,
} from "lucide-react";
import SkillPage from "../../components/SkillPage.jsx";

export default function Communication() {
  return (
    <SkillPage
      metaTitle="Communication"
      metaDescription="At EduSeek India, communication isn't a soft skill — it's the bridge between a great idea and a great life. We help children speak, listen, and connect with clarity."
      eyebrow="Communication"
      icon={MessageCircle}
      accent="#516ED6"
      titleLead="The art of being"
      titleHighlight="heard, and the gift"
      titleTail="of really hearing."
      intro="In every classroom, every friendship, and every career, the children who thrive are the ones who can express what they think and listen to what others mean. At EduSeek, communication isn't an after-school activity. It's woven through every project, every circle, every day."
      whyHeadline="Why communication shapes everything that comes next."
      whyBody={[
        "Long after the syllabus is forgotten, the way a child speaks to a stranger, listens to a friend in pain, or writes an email asking for help that is what shapes their life. Communication is the difference between a brilliant idea trapped inside a head and a brilliant idea that moves the world.",
        "Most children are not born nervous in front of an audience. They are taught to be. Years of being told to sit quietly, raise their hand, and answer only what the textbook expects slowly trains the voice out of them. We work to bring it back.",
        "At EduSeek, we treat communication as a daily practice not a yearly performance. Children speak in small circles before they speak on stages. They learn to listen before they learn to lead. They write to be understood, not to be graded.",
      ]}
      pillars={[
        {
          icon: Mic2,
          title: "Clear Speech",
          body: "Speaking with calm, structure, and presence without fillers, without rush, without fear.",
        },
        {
          icon: Ear,
          title: "Active Listening",
          body: "Hearing what someone means, not just what they said. Asking the question behind the question.",
        },
        {
          icon: BookOpen,
          title: "Storytelling",
          body: "Turning ideas into stories so that ideas actually land and stay landed.",
        },
        {
          icon: Users,
          title: "Public Speaking",
          body: "Owning the room without losing yourself. Comfort, not bravado, is the goal.",
        },
        {
          icon: PenLine,
          title: "Written Expression",
          body: "Writing emails, captions, essays, and messages that say exactly what they mean.",
        },
        {
          icon: Smile,
          title: "Body & Tone",
          body: "Reading the room, mirroring warmth, choosing the right voice for the right moment.",
        },
      ]}
      processSteps={[
        {
          title: "Daily speaking circles",
          body: "Every learning week opens with a small-group circle where every child speaks. Short, low-pressure, gradually more ambitious. Confidence is built in repetition, not in performance.",
        },
        {
          title: "Listening drills, not lectures",
          body: "We teach listening as a real skill. Reflect back. Ask one more question. Wait. Children learn that being interested is more powerful than being interesting.",
        },
        {
          title: "Story before structure",
          body: "Before a child writes an essay, they tell the story aloud. Structure follows meaning, not the other way around.",
        },
        {
          title: "Mentor feedback, never grading",
          body: "Our mentors give specific, kind, written feedback after every presentation what worked, what to try next. Never a number out of ten.",
        },
        {
          title: "Real audiences",
          body: "Children present their work to younger learners, to parents, to the community. Real audiences sharpen real skill.",
        },
        {
          title: "Quiet voices welcome",
          body: "We never confuse loudness with confidence. Introverts get the time, scaffolding, and respect their voice deserves.",
        },
      ]}
      activities={[
        "Host a 6-episode podcast on a topic they choose and care about.",
        "Deliver a 5-minute talk in front of parents at the term-end showcase.",
        "Write and publish a short opinion piece for the EduSeek learner journal.",
        "Lead a peer interview — ask, listen, transcribe, share.",
        "Run a class debate on a topic with no obvious right answer.",
        "Send a real email to a real expert — and follow up like a professional.",
      ]}
      outcomes={[
        "Speaks in front of a group without panic even when the topic is hard.",
        "Listens before responding, especially in disagreement.",
        "Writes clear, polite, persuasive messages without parental help.",
        "Knows how to introduce themselves to an adult, an expert, or a stranger.",
        "Reads the emotional temperature of a room and adjusts tone accordingly.",
        "Asks better questions than most adults in the room.",
      ]}
      faqs={[
        {
          q: "My child is shy. Will this overwhelm them?",
          a: "Not at all. Shy children are some of our most thoughtful communicators they just need warm, gradual, low-pressure spaces to practice. We never force a child to a stage. We earn their voice slowly, and the difference within a few months is almost always remarkable.",
        },
        {
          q: "Is this the same as elocution or public-speaking class?",
          a: "No. Elocution focuses on the polish of delivery. We focus on the substance: thinking clearly, listening fully, expressing honestly, and adapting to the moment. Polish follows when there is something real to say.",
        },
        {
          q: "How is progress measured?",
          a: "Through visible artifacts, not numbers. Recordings of presentations from month one and month six. Written work over time. Mentor reflections. You will see the change and so will your child.",
        },
        {
          q: "Will it help with English fluency?",
          a: "Yes, in practice — but fluency is a side effect, not the goal. We focus on clarity of thought, and the language follows. Children who think clearly speak clearly, in any language.",
        },
      ]}
      ctaHeadline="A confident voice is a lifelong gift. Let's help your child find theirs."
      ctaBody="Tell us a little about your child. A mentor will reach out personally — calmly, without sales pressure to understand where they are, and where they want to go."
      relatedSkills={[
        { to: "/skills/leadership", label: "Leadership" },
        { to: "/skills/creativity", label: "Creativity" },
        { to: "/skills/technology", label: "Technology" },
        { to: "/skills/problem-solving", label: "Problem-solving" },
      ]}
    />
  );
}
