/** Public portfolio copy. Outcomes come from Paul's reviewed AI engineer resume. */
export const profile = {
  name: "Paul John Butad",
  handle: "butadpj",
  role: "AI Engineer & Founder",
  email: "butadpj@gmail.com",
  location: "Antipolo, Philippines",
  resume: "/Paul-John-Butad-Resume-AI-Engineer.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/butadpj" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paul-john-butad-5bb70a218",
    },
    { label: "Dev.to", href: "https://dev.to/butadpj" },
    { label: "YouTube", href: "https://www.youtube.com/@butadpj" },
  ],
};

export const navigation = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/#learn" },
  { label: "Contact", href: "/#contact" },
];

export const experience = [
  {
    id: "egoist-labs",
    company: "Egoist Labs",
    role: "Founder",
    dates: "Dec 2025 — Present",
    focus: "AI × learning",
    details: [
      "Integrated AI into differentiated lesson planning and task assignment. Preparation for five learners went from a full day to 20–30 minutes per mentor.",
      "Built Capability Studio for skill-based curriculum authoring, connecting expert feedback with AI regeneration for each 3–6-month cohort.",
      "Built progress dashboards to help mentors spot learners who may be stuck and prioritize support.",
    ],
  },
  {
    id: "pioneer",
    company: "PioneerDev.AI",
    role: "Fullstack Developer",
    dates: "Mar 2025 — Mar 2026",
    focus: "Agentic systems & evaluation",
    details: [
      "Architected an agentic AI system with serverless, event-driven pipelines for image processing.",
      "Deployed an LLM-as-a-judge evaluation framework that reduced production AI chat regressions by 90%.",
      "Built CI/CD pipelines and automated integration tests that increased feature deployment velocity by 4×.",
    ],
  },
  {
    id: "prosple",
    company: "Prosple",
    role: "Backend Engineer · previously Frontend Engineer",
    dates: "Feb 2025 — Present",
    focus: "Systems & developer experience",
    details: [
      "Backend Engineer since August 2025. Led the redesign of a mission-critical system, reducing costs by 50%, and standardized production logging.",
      "As a Frontend Engineer, built a design system and automated staging workflows. Testing abstractions and test-driven development helped reduce regression bugs by 50%.",
    ],
  },
  {
    id: "quantrics",
    company: "Quantrics",
    role: "Front-end Web Developer",
    dates: "Aug 2022 — Feb 2025",
    focus: "Interfaces & test automation",
    details: [
      "Led test automation for legacy QA workflows, reducing manual regression testing time by 80%.",
    ],
  },
];

export const skills = [
  {
    label: "AI engineering",
    items: ["Agentic systems", "LLM evaluation", "AI workflows"],
  },
  {
    label: "Build & ship",
    items: ["Python", "TypeScript", "Go", "React", "AWS", "CI/CD"],
  },
];
