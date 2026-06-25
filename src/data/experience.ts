export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  stamp?: string;
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    id: "exp-01",
    role: "Frontend Developer Intern",
    company: "TechVenture Labs",
    period: "2025 — Present",
    location: "Islamabad, PK · Remote",
    description:
      "Building responsive React interfaces, collaborating on design systems, and shipping features across a product squad.",
    tags: ["React", "Tailwind", "TypeScript"],
    stamp: "Hired · '25",
    current: true,
  },
  {
    id: "exp-02",
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2024 — Present",
    location: "Islamabad, PK",
    description:
      "End-to-end client work — landing pages, dashboards, and small full-stack apps with a focus on typography and performance.",
    tags: ["React", "Node.js", "Vite"],
    stamp: "Freelance",
    current: true,
  },
  {
    id: "exp-03",
    role: "Open Source Contributor",
    company: "Community Projects",
    period: "2024",
    location: "GitHub",
    description:
      "Contributing bug fixes, documentation, and small features to open-source JavaScript and React projects.",
    tags: ["JavaScript", "Git", "React"],
    stamp: "OSS · '24",
  },
];
