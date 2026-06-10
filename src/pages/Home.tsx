import { Asterisk } from "@/components/icons/Asterisk";
import { ArrowScribble } from "@/components/icons/ArrowScribble";
import { Star } from "@/components/icons/Star";
import { type Project, projects } from "@/data/projects";

function StampRing({ label, sub }: { label: string; sub: string }) {
  return (
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
}

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
              Specimen · No. 26
            </div>

            <div className="w-64 aspect-[3/4] bg-paper border border-ink/20 p-5 shadow-2xl rotate-[3deg] relative flex flex-col">
              <div className="flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink/60">
                <span>Aa — Bb</span>
                <span>’99 / PK</span>
              </div>

              <div className="flex-1 flex items-center justify-center relative">
                <span className="font-serif italic text-[14rem] leading-none text-ink select-none">
                  U
                </span>
                <span className="absolute top-2 right-0 font-hand text-accent text-3xl rotate-[8deg]">
                  hi.
                </span>
                <Asterisk className="absolute bottom-4 left-0 w-5 h-5 text-accent" />
              </div>

              <div className="border-t border-dashed border-ink/30 pt-3 mt-2">
                <div className="font-serif text-sm leading-tight">
                  Muhammad Ubaid
                  <br />
                  <span className="italic text-ink/70">ur Rehman</span>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/60">
                    Engineer
                    <br />
                    &amp; Builder
                  </div>
                  <div className="flex items-end gap-[2px] h-6">
                    {[3, 5, 2, 6, 3, 4, 2, 5, 3, 6, 4, 2, 5].map((h, i) => (
                      <span
                        key={i}
                        className="bg-ink w-[2px]"
                        style={{ height: `${h * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-accent/30 rotate-[-4deg]" />
            </div>

            <div className="absolute -bottom-6 -right-6">
              <StampRing label="Designed" sub="by hand" />
            </div>
          </div>
          <p className="font-hand text-ink/70 text-2xl rotate-[-3deg] mr-4">
            ~ a type specimen.
          </p>
        </div>
      </div>
    </section>
  );
}

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

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Marquee />
      <SkillsSection />
    </>
  );
}
