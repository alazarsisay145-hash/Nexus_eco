export type FAQ = {
  question: string;
  answer: string;
};

/** FAQs shown on the AI Access page. */
export const aiAccessFaqs: FAQ[] = [
  {
    question: "What exactly is NEXUS AI Access?",
    answer:
      "NEXUS AI Access is a simple way to get premium AI tools at an affordable price. Instead of paying for several expensive individual subscriptions, you get one plan through NEXUS that unlocks leading chat models, image generation and productivity tools.",
  },
  {
    question: "Who is AI Access for?",
    answer:
      "It is built for students, young developers, creators, freelancers and small teams — anyone who needs serious AI capability without enterprise pricing. No technical background is required to get started.",
  },
  {
    question: "How do I get access after choosing a plan?",
    answer:
      "Choose a plan, complete the request through the NEXUS AI Access channel, and our team activates your access — usually within a few hours. You'll receive setup instructions and a quick-start guide.",
  },
  {
    question: "Which AI tools are included?",
    answer:
      "Plans include access to leading conversational models, image generation and writing/coding assistants. The exact lineup evolves as the AI landscape changes — the current toolset is always listed on this page.",
  },
  {
    question: "Can I upgrade or cancel my plan?",
    answer:
      "Yes. Plans are monthly, and you can upgrade, downgrade or stop at the end of any billing period by messaging the NEXUS team. No long-term lock-in.",
  },
  {
    question: "Is my usage private?",
    answer:
      "Yes. Your conversations and generations are your own. NEXUS does not read, store or resell your usage content.",
  },
];

/** General FAQs shown on the contact page. */
export const generalFaqs: FAQ[] = [
  {
    question: "What is NEXUS?",
    answer:
      "NEXUS is a youth-focused technology ecosystem. We build software for businesses, provide affordable AI access, run a developer community, curate learning resources and connect young people with opportunities.",
  },
  {
    question: "How do I join the NEXUS community?",
    answer:
      "Membership is free. Tap “Join NEXUS” anywhere on the site and you'll land in our community space, where builders share projects, opportunities and help each other grow.",
  },
  {
    question: "How do I request a software project?",
    answer:
      "Reach out through the contact page with a short description of what you need. We'll schedule a discovery conversation, scope the work and send a clear proposal — no obligation.",
  },
  {
    question: "Does NEXUS work with clients outside Ethiopia?",
    answer:
      "Yes. We work remotely with startups and organizations globally, while staying rooted in growing the East African tech ecosystem.",
  },
];
