import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Ubaid ur Rehman — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Ubaid ur Rehman, full-stack developer and Computer Science student at IIU Islamabad. Selected works in React, Node, MongoDB and Postgres.",
      },
      { property: "og:title", content: "Muhammad Ubaid ur Rehman — Portfolio" },
      {
        property: "og:description",
        content: "Full-stack developer & CS student in Islamabad. Selected works.",
      },
    ],
  }),
});

/* ------------------------------- ornaments ------------------------------- */

const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowScribble = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 40" fill="none" className={className} aria-hidden>
    <path
      d="M4 22 C 30 8, 60 36, 92 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M82 10 L94 18 L84 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z" />
  </svg>
);

const StampRing = ({ label, sub }: { label: string; sub: string }) => (
  <div className="relative w-28 h-28 rounded-full border-2 border-dashed border-ink/40 flex flex-col items-center justify-center text-center rotate-[8deg] bg-paper/70 backdrop-blur-sm">
    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/80">
      {label}
    </span>
    <span className="text-[9px] font-mono uppercase tracking-widest text-ink/50 mt-1">
      {sub}
    </span>
    <Asterisk className="absolute top-2 right-3 w-3 h-3 text-accent" />
  </div>
);

/* -------------------------------- projects ------------------------------- */

type Project = {
  index: string;
  title: string;
  blurb: string;
  tags: string[];
  github: string;
  cover: ReactNode;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Intelligent PDF Search Engine",
    blurb:
      "Role-based AI app that lets users query a corpus of PDFs with vector search and LLMs. Responsive React + Tailwind frontend.",
    tags: ["React", "Tailwind", "Vector Search"],
    github: "https://github.com/BlackShadow7166/pdf-search-engine-frontend",
    cover: (
      <div className="relative w-full h-full bg-[oklch(0.96_0.01_80)] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px opacity-25">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="bg-ink/10" />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-10 gap-3">
          <div className="h-2 w-1/3 bg-ink/80" />
          <div className="h-2 w-2/3 bg-ink/25" />
          <div className="h-2 w-1/2 bg-ink/25" />
          <div className="h-11 mt-4 w-full border border-ink/60 flex items-center px-4 gap-3 bg-paper">
            <div className="w-3 h-3 rounded-full border border-ink/60" />
            <div className="h-1.5 flex-1 bg-ink/30" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
              query
            </span>
          </div>
        </div>
        <Star className="absolute top-5 right-5 w-5 h-5 text-accent" />
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
    cover: (
      <div className="relative w-full h-full bg-accent overflow-hidden">
        <div className="absolute inset-0 p-8 flex flex-col gap-2 text-paper">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-80">
            issue n° 04
          </span>
          <h4 className="font-serif italic text-5xl leading-[0.9] mt-3">
            On craft,
            <br /> code &amp;
            <br /> quiet hours.
          </h4>
          <div className="mt-auto flex items-center justify-between text-[10px] font-mono uppercase tracking-widest opacity-80">
            <span>— editorial</span>
            <span>read · 6 min</span>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-paper/40" />
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
    cover: (
      <div className="relative w-full h-full bg-ink overflow-hidden">
        <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full">
          <g
            stroke="oklch(0.962 0.012 80)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="square"
          >
            <path d="M10 10h180M10 10v130M190 10v130M10 140h180" />
            <path d="M40 10v40M40 50h40M80 50v40M40 90h80M120 50v60M80 130v-30" />
            <path d="M120 10v20M150 30h40M150 30v60M120 90h70M150 110v30" />
            <path d="M60 110h20v20" />
          </g>
          <circle cx="25" cy="25" r="4" fill="#D95D39" />
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
    cover: (
      <div className="relative w-full h-full bg-muted overflow-hidden p-8 flex flex-col justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-7xl leading-none">$</span>
          <ArrowScribble className="w-12 h-6 text-accent" />
          <span className="font-serif text-7xl leading-none italic">€</span>
        </div>
        <div className="font-mono text-xs leading-relaxed text-ink/70">
          <div>1.000 USD</div>
          <div className="text-accent">0.924 EUR</div>
          <div className="opacity-50">↗ +0.12% · 24h</div>
        </div>
        <Asterisk className="absolute top-6 right-6 w-6 h-6 text-ink/40" />
      </div>
    ),
  },
];

/* ---------------------------------- page --------------------------------- */

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink relative overflow-x-hidden">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700;9..144,900&family=Inter:wght@400;500;600&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <div className="pointer-events-none fixed inset-0 paper-texture z-50 mix-blend-multiply" />

      <Asterisk className="hidden md:block absolute top-32 left-6 w-6 h-6 text-ink/20 rotate-12" />
      <Star className="hidden md:block absolute top-60 right-10 w-5 h-5 text-accent/50" />

      <Nav />
      <Hero />
      <ProjectsSection />
      <Marquee />
      <SkillsSection />
      <Footer />
    </div>
  );
}

/* ---------------------------------- nav ---------------------------------- */

function Nav() {
  return (
    <nav className="max-w-6xl mx-auto px-8 py-10 flex justify-between items-center relative z-10">
      <a href="/" className="flex items-baseline gap-2">
        <span className="font-serif text-2xl font-bold italic tracking-tight">
          M.U.R
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          /portfolio
        </span>
      </a>
      <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.2em]">
        <a
          href="#work"
          className="hover:text-accent transition-colors underline decoration-accent/50 underline-offset-[6px]"
        >
          Work
        </a>
        <a href="#stack" className="hover:text-accent transition-colors">
          Stack
        </a>
        <a href="#contact" className="hover:text-accent transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}

/* ---------------------------------- hero --------------------------------- */

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-8 pt-12 pb-32 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-ink/25 rounded-full text-[10px] uppercase tracking-[0.25em]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available · Spring 2026
            </span>
            <span className="font-hand text-accent text-2xl -rotate-3">
              hello!
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.85] tracking-tighter">
            Muhammad
            <br />
            Ubaid <span className="text-accent italic font-medium">ur</span>{" "}
            Rehman
          </h1>

          <div className="mt-10 flex flex-col md:flex-row gap-10 items-start">
            <p className="max-w-md text-lg leading-relaxed text-ink/80">
              Full-stack engineer &amp; CS student in Islamabad. I build{" "}
              <span className="font-serif italic">considered</span> digital
              products with React, Node and a strong typographic point of view.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
              <div className="flex items-center gap-2">
                <Asterisk className="w-3 h-3 text-accent" />
                Based · Islamabad, PK
              </div>
              <div className="flex items-center gap-2">
                <Asterisk className="w-3 h-3 text-accent" />
                Studying · IIU
              </div>
              <div className="flex items-center gap-2">
                <Asterisk className="w-3 h-3 text-accent" />
                Stack · MERN + Postgres
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6">
          <div className="relative">
            <div className="absolute -top-5 -left-8 -rotate-12 bg-accent text-paper px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md z-10">
              Profile · 26
            </div>
            <div className="w-64 aspect-[3/4] bg-muted p-3 shadow-2xl rotate-[3deg] relative">
              <img
                src={portrait}
                alt="Portrait of Muhammad Ubaid ur Rehman"
                width={640}
                height={832}
                className="w-full h-full object-cover grayscale-[15%] sepia-[15%]"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-accent/40 rotate-3 backdrop-blur-sm" />
            </div>
            <div className="absolute -bottom-6 -right-6">
              <StampRing label="Designed" sub="by hand" />
            </div>
          </div>
          <p className="font-hand text-ink/70 text-2xl rotate-[-3deg] mr-4">
            ~ that's me.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- projects ------------------------------- */

function ProjectsSection() {
  return (
    <section
      id="work"
      className="bg-ink text-paper py-32 torn-edge-top relative z-20"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-serif italic">
            Selected Works
          </h2>
          <div className="h-px grow bg-paper/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-paper/60">
            01 — 04
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.index} project={p} offset={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  offset,
}: {
  project: Project;
  offset: boolean;
}) {
  return (
    <article className={`group ${offset ? "md:mt-24" : ""}`}>
      <div className="relative mb-6 overflow-hidden aspect-[4/3] outline outline-1 outline-paper/10">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
          {project.cover}
        </div>
        <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper bg-ink/70 backdrop-blur px-2 py-1">
          № {project.index}
        </div>
      </div>

      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
          <p className="text-paper/60 text-sm leading-relaxed max-w-[44ch]">
            {project.blurb}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 border border-paper/15 text-paper/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 w-12 h-12 rounded-full border border-paper/30 grid place-items-center text-paper hover:bg-accent hover:border-accent transition-colors"
          aria-label={`Open ${project.title} on GitHub`}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
            <path
              d="M7 17L17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

/* --------------------------------- marquee ------------------------------- */

function Marquee() {
  const words = [
    "Front-end",
    "Full-stack",
    "React",
    "Node",
    "Postgres",
    "Mongo",
    "Designed in Islamabad",
    "Available for work",
  ];
  return (
    <div className="border-y border-ink/10 py-6 overflow-hidden bg-paper">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center gap-10 pr-10">
            {words.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-10">
                <span className="font-serif italic text-4xl text-ink">{w}</span>
                <Star className="w-4 h-4 text-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- skills -------------------------------- */

const stack: Record<string, string[]> = {
  Languages: ["JavaScript", "C++", "Java", "HTML", "CSS"],
  Frontend: ["React.js", "Tailwind", "Material UI", "Redux", "React Router"],
  Backend: ["Node.js", "Express.js", "Appwrite"],
  Data: ["MongoDB", "PostgreSQL", "MS Access"],
  Tools: ["Git", "GitHub", "Vite", "Vercel", "VS Code"],
};

function SkillsSection() {
  return (
    <section
      id="stack"
      className="max-w-6xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-20 relative"
    >
      <div>
        <div className="mb-16 relative">
          <ArrowScribble className="absolute -left-16 -top-2 w-12 h-8 text-accent hidden md:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            02 — Toolkit
          </span>
          <h2 className="text-5xl font-serif mt-3 mb-10 leading-[0.95]">
            The bench
            <br />
            <span className="italic">where things get made.</span>
          </h2>

          <div className="space-y-5">
            {Object.entries(stack).map(([group, items]) => (
              <div
                key={group}
                className="grid grid-cols-[110px_1fr] gap-6 items-baseline border-b border-ink/10 pb-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                  {group}
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {items.map((it, i) => (
                    <span key={it} className="text-lg font-serif text-ink/90">
                      {it}
                      {i < items.length - 1 && (
                        <span className="text-accent/60 ml-3">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            03 — Education
          </span>
          <div className="mt-4 p-6 border-l-2 border-accent bg-muted/40 relative">
            <h4 className="font-serif text-2xl">
              International Islamic University
            </h4>
            <p className="text-sm text-ink/60 mt-1">
              BS Computer Science · Islamabad, Pakistan
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] mt-3 text-ink/40">
              In progress
            </p>
            <span className="absolute -top-3 -right-3 bg-paper border border-ink/20 px-2 py-1 text-[9px] font-mono uppercase tracking-widest rotate-3">
              B.S. C.S.
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-ink/70">
            <div className="p-3 border border-ink/10">
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink/40 mb-1">
                Cert · 01
              </div>
              Modern JavaScript Bootcamp — Udemy
            </div>
            <div className="p-3 border border-ink/10">
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink/40 mb-1">
                Cert · 02
              </div>
              Learn JavaScript — Codecademy
            </div>
          </div>
        </div>
      </div>

      <ContactCard />
    </section>
  );
}

function ContactCard() {
  const items = [
    { k: "Email", v: "uurrehman735@gmail.com", href: "mailto:uurrehman735@gmail.com" },
    { k: "GitHub", v: "github.com/Snowden-0", href: "https://github.com/Snowden-0" },
    { k: "LinkedIn", v: "linkedin.com/in/ubaidurr", href: "https://linkedin.com/in/ubaidurr" },
    { k: "Phone", v: "+92 316 1499937", href: "tel:+923161499937" },
  ];
  return (
    <div id="contact" className="relative lg:sticky lg:top-12 self-start">
      <div className="bg-accent text-paper p-10 md:p-12 -rotate-[1.2deg] shadow-2xl relative">
        <div className="absolute -top-4 -left-4 bg-ink text-paper px-3 py-1 text-[10px] font-mono uppercase tracking-widest rotate-[-6deg]">
          Open envelope
        </div>
        <Asterisk className="absolute top-5 right-5 w-8 h-8 text-paper/30" />

        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-90">
          04 — Correspondence
        </span>
        <h2 className="text-5xl font-serif mt-3 mb-10 leading-[0.95]">
          Let's make
          <br />
          <span className="italic">something good.</span>
        </h2>

        <dl className="space-y-5">
          {items.map(({ k, v, href }) => (
            <div key={k}>
              <dt className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">
                {k}
              </dt>
              <dd>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-lg md:text-xl font-medium border-b border-paper/40 hover:border-paper transition-all break-all"
                >
                  {v}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 pt-6 border-t border-paper/25 flex items-center justify-between">
          <span className="font-hand text-3xl rotate-[-3deg]">— Ubaid</span>
          <div className="flex gap-2">
            <div className="w-10 h-10 border border-paper/40 grid place-items-center rotate-3">
              <Star className="w-3 h-3" />
            </div>
            <div className="w-10 h-10 border border-paper/40 grid place-items-center -rotate-6">
              <Asterisk className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 bg-paper border border-ink/15 px-4 py-2 rotate-[6deg] shadow-md">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">
          PKR · GMT+5
        </span>
      </div>
    </div>
  );
}

/* --------------------------------- footer -------------------------------- */

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-8 pb-10 pt-16 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-ink/40 font-mono">
      <p>© 2026 Muhammad Ubaid ur Rehman</p>
      <p className="flex items-center gap-2">
        <Star className="w-2.5 h-2.5 text-accent" />
        Set in Fraunces &amp; Inter — printed digitally in Islamabad
      </p>
    </footer>
  );
}
