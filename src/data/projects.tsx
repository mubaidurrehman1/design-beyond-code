import type { ReactNode } from "react";

import { ArrowScribble } from "@/components/icons/ArrowScribble";
import { Asterisk } from "@/components/icons/Asterisk";
import { Star } from "@/components/icons/Star";

export type Project = {
  index: string;
  title: string;
  blurb: string;
  tags: string[];
  github: string;
  cover: ReactNode;
  role: string;
  year: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Intelligent PDF Search Engine",
    blurb:
      "Role-based AI app that lets users query a corpus of PDFs with vector search and LLMs. Responsive React + Tailwind frontend.",
    tags: ["React", "Tailwind", "Vector Search"],
    github: "https://github.com/BlackShadow7166/pdf-search-engine-frontend",
    role: "Frontend lead · Team project",
    year: "2025",
    featured: true,
    cover: (
      <div className="relative w-full h-full bg-[oklch(0.96_0.01_80)] overflow-hidden border border-ink/10">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px opacity-25">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="bg-ink/10" />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 gap-3">
          <div className="h-2 w-1/3 bg-ink/80" />
          <div className="h-2 w-2/3 bg-ink/25" />
          <div className="h-2 w-1/2 bg-ink/25" />
          <div className="h-11 mt-4 w-full border border-ink/60 flex items-center px-4 gap-3 bg-paper">
            <div className="w-3 h-3 rounded-full border border-ink/60" />
            <div className="h-1.5 flex-1 bg-ink/30 relative overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-px bg-accent animate-blink" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
              query
            </span>
          </div>
        </div>
        <Star className="absolute top-5 right-5 w-5 h-5 text-accent animate-float" />
      </div>
    ),
  },
  {
    index: "02",
    title: "Full-Stack Blog Application",
    blurb:
      "Writing platform with auth, post CRUD and DB managed through Appwrite. Built end-to-end with React and Tailwind.",
    tags: ["React", "Appwrite", "Redux"],
    github: "https://github.com/Snowden-0/blogApp",
    role: "Full-stack · Solo",
    year: "2024",
    cover: (
      <div className="relative w-full h-full bg-accent overflow-hidden border border-paper/20">
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col gap-2 text-paper">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-80">
            issue n° 04
          </span>
          <h4 className="font-serif italic text-3xl sm:text-4xl leading-[0.9] mt-3">
            On craft,
            <br /> code &amp;
            <br /> quiet hours.
          </h4>
          <div className="mt-auto flex items-center justify-between text-[10px] font-mono uppercase tracking-widest opacity-80">
            <span>— editorial</span>
            <span>read · 6 min</span>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-paper/40 animate-drift" />
      </div>
    ),
  },
  {
    index: "03",
    title: "Web Based Maze Game",
    blurb:
      "Procedurally generated maze with custom 2D physics via matter.js and pure-JS movement. A small study in algorithms and play.",
    tags: ["JavaScript", "matter.js", "Canvas"],
    github: "https://github.com/Snowden-0/Maze",
    role: "Game dev · Solo",
    year: "2024",
    cover: (
      <div className="relative w-full h-full bg-ink overflow-hidden">
        <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full animate-float">
          <g stroke="oklch(0.962 0.012 80)" strokeWidth="1.6" fill="none" strokeLinecap="square">
            <path d="M10 10h180M10 10v130M190 10v130M10 140h180" />
            <path d="M40 10v40M40 50h40M80 50v40M40 90h80M120 50v60M80 130v-30" />
            <path d="M120 10v20M150 30h40M150 30v60M120 90h70M150 110v30" />
            <path d="M60 110h20v20" />
          </g>
          <circle cx="25" cy="25" r="5" fill="#D95D39" className="animate-drift" />
          <rect x="180" y="130" width="6" height="6" fill="oklch(0.962 0.012 80)" />
        </svg>
        <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-paper/60">
          seed · 0x73
        </span>
      </div>
    ),
  },
  {
    index: "04",
    title: "Currency Converter",
    blurb:
      "Real-time exchange rates in a tidy React + Vite build. Custom hooks for input, swap and live conversion.",
    tags: ["React", "Vite", "Custom Hooks"],
    github: "https://github.com/Snowden-0/currencyConverter",
    role: "Frontend · Solo",
    year: "2024",
    cover: (
      <div className="relative w-full h-full bg-muted overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-ink/10">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-4xl sm:text-5xl leading-none">$</span>
          <ArrowScribble className="w-10 sm:w-12 h-5 sm:h-6 text-accent animate-drift" />
          <span className="font-serif text-4xl sm:text-5xl leading-none italic">€</span>
        </div>
        <div className="font-mono text-xs leading-relaxed text-ink/70">
          <div>1.000 USD</div>
          <div className="text-accent">0.924 EUR</div>
          <div className="opacity-50">↗ +0.12% · 24h</div>
        </div>
        <Asterisk className="absolute top-6 right-6 w-6 h-6 text-ink/40 animate-spin-slow" />
      </div>
    ),
  },
];
