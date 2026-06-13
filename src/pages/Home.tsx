import { motion } from "framer-motion";
import { useState } from "react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedUnderlineLink } from "@/components/ui/AnimatedUnderlineLink";
import { Asterisk } from "@/components/icons/Asterisk";
import { ArrowScribble } from "@/components/icons/ArrowScribble";
import { Star } from "@/components/icons/Star";
import { type Project, projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  EASE_OUT,
  fadeUp,
  motionTransition,
  scaleIn,
  slideFromLeft,
  slideFromRight,
  staggerChildren,
} from "@/lib/motion";

const HERO_NAME = [
  { text: "Muhammad", italic: false, accent: false },
  { text: "Ubaid", italic: false, accent: false },
  { text: "ur", italic: true, accent: true },
  { text: "Rehman", italic: false, accent: false },
];

function StampRing({ label, sub }: { label: string; sub: string }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ ...motionTransition(0.6, 0.9), type: "spring", stiffness: 200, damping: 18 }}
      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed border-ink/40 flex flex-col items-center justify-center text-center rotate-[8deg] bg-paper/70 backdrop-blur-sm"
    >
      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-ink/80">
        {label}
      </span>
      <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-ink/50 mt-1">
        {sub}
      </span>
      <Asterisk className="absolute top-2 right-3 w-3 h-3 text-accent" />
    </motion.div>
  );
}

function Hero() {
  const { ref, inView } = useScrollReveal({ once: true, amount: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20 sm:pb-32 relative z-10"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
        <div className="lg:col-span-8">
          <motion.div
            variants={staggerChildren(0.1, 0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <motion.span
              variants={fadeUp}
              transition={motionTransition(0.5)}
              className="inline-flex items-center gap-2 px-3 py-1 border border-ink/25 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available · Spring 2026
            </motion.span>
            <motion.span
              variants={fadeUp}
              transition={motionTransition(0.5, 0.15)}
              className="font-hand text-accent text-xl sm:text-2xl -rotate-3"
            >
              hello!
            </motion.span>
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.85] tracking-tighter">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={motionTransition(0.7, 0.25)}
              className="block overflow-hidden"
            >
              Muhammad
            </motion.span>
            <span className="block">
              {HERO_NAME.slice(1).map((word, i) => (
                <motion.span
                  key={word.text}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={motionTransition(0.6, 0.35 + i * 0.06)}
                  className={`inline-block mr-[0.2em] ${
                    word.accent ? "text-accent italic font-medium" : ""
                  } ${word.italic && !word.accent ? "italic" : ""}`}
                >
                  {word.text}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            variants={staggerChildren(0.08, 0.5)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-8 sm:mt-10 flex flex-col md:flex-row gap-8 md:gap-10 items-start"
          >
            <motion.p
              variants={fadeUp}
              transition={motionTransition(0.6)}
              className="max-w-md text-base sm:text-lg leading-relaxed text-ink/80"
            >
              Full-stack engineer &amp; CS student in Islamabad. I build{" "}
              <span className="font-serif italic">considered</span> digital products with React,
              Node and a strong typographic point of view.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={motionTransition(0.6)}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink/60 w-full md:w-auto"
            >
              {["Based · Islamabad, PK", "Studying · IIU", "Stack · MERN + Postgres"].map(
                (line) => (
                  <div key={line} className="flex items-center gap-2">
                    <Asterisk className="w-3 h-3 text-accent shrink-0" />
                    {line}
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-4 sm:gap-6 mt-4 lg:mt-0">
          <div className="relative mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, rotate: 8, y: 24 }}
              animate={inView ? { opacity: 1, rotate: 3, y: 0 } : {}}
              transition={motionTransition(0.8, 0.55)}
              className="absolute -top-4 sm:-top-5 -left-4 sm:-left-8 -rotate-12 bg-accent text-paper px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-md z-10"
            >
              Specimen · No. 26
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 8, scale: 0.96 }}
              animate={inView ? { opacity: 1, rotate: 3, scale: 1 } : {}}
              transition={motionTransition(0.85, 0.5)}
              className="w-48 sm:w-56 md:w-64 aspect-[3/4] bg-paper border border-ink/20 p-4 sm:p-5 shadow-2xl rotate-[3deg] relative flex flex-col mx-auto"
            >
              <div className="flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink/60">
                <span>Aa — Bb</span>
                <span>’99 / PK</span>
              </div>

              <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                <span className="font-serif italic text-[8rem] sm:text-[10rem] md:text-[14rem] leading-none text-ink select-none">
                  U
                </span>
                <span className="absolute top-2 right-0 font-hand text-accent text-2xl sm:text-3xl rotate-[8deg]">
                  hi.
                </span>
                <Asterisk className="absolute bottom-4 left-0 w-4 sm:w-5 h-4 sm:h-5 text-accent" />
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
                      <span key={i} className="bg-ink w-[2px]" style={{ height: `${h * 4}px` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-accent/30 rotate-[-4deg]" />
            </motion.div>

            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6">
              <StampRing label="Designed" sub="by hand" />
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={motionTransition(0.6, 0.95)}
            className="font-hand text-ink/70 text-xl sm:text-2xl rotate-[-3deg] mr-0 lg:mr-4 text-center lg:text-right"
          >
            ~ a type specimen.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { ref, inView } = useScrollReveal({ amount: 0.15 });

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-ink text-paper py-20 sm:py-32 torn-edge-top relative z-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={motionTransition(0.7)}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic shrink-0">
            Selected Works
          </h2>
          <div className="h-px grow bg-paper/20 hidden sm:block" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-paper/60">01 — 04</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 sm:gap-y-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.index} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const offset = index % 2 === 1;
  const fromLeft = index % 2 === 0;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <motion.article
      variants={fromLeft ? slideFromLeft : slideFromRight}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={motionTransition(0.75, index * 0.12)}
      className={`group ${offset ? "md:mt-16 lg:mt-24" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
    >
      <div
        className="relative mb-5 sm:mb-6 overflow-hidden aspect-[4/3] outline outline-1 outline-paper/10"
        onMouseMove={onMouseMove}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: hovered ? 1.03 : 1,
            x: tilt.x,
            y: tilt.y,
          }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          {project.cover}
        </motion.div>
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper bg-ink/70 backdrop-blur px-2 py-1">
          № {project.index}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-serif mb-2">{project.title}</h3>
          <p className="text-paper/60 text-sm leading-relaxed max-w-[44ch]">{project.blurb}</p>
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={false}
            animate={hovered ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
          >
            {project.tags.map((t) => (
              <motion.span
                key={t}
                variants={fadeUp}
                transition={motionTransition(0.35)}
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 border border-paper/15 text-paper/70"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <MagneticButton
          as="a"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          strength={0.25}
          aria-label={`Open ${project.title} on GitHub`}
          className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-paper/30 grid place-items-center text-paper hover:bg-accent hover:border-accent transition-colors active:scale-95"
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
        </MagneticButton>
      </div>
    </motion.article>
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
    <div className="border-y border-ink/10 py-4 sm:py-6 overflow-hidden bg-paper">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
            {words.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-6 sm:gap-10">
                <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ink">
                  {w}
                </span>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
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
  const { ref, inView } = useScrollReveal({ amount: 0.1 });
  const stackEntries = Object.entries(stack);

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 relative"
    >
      <div>
        <div className="mb-12 sm:mb-16 relative">
          <ArrowScribble className="absolute -left-16 -top-2 w-12 h-8 text-accent hidden md:block" />
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={motionTransition(0.5)}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent"
          >
            02 — Toolkit
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={motionTransition(0.6, 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 mb-8 sm:mb-10 leading-[0.95]"
          >
            The bench
            <br />
            <span className="italic">where things get made.</span>
          </motion.h2>

          <div className="space-y-4 sm:space-y-5">
            {stackEntries.map(([group, items], rowIndex) => (
              <motion.div
                key={group}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={motionTransition(0.55, 0.15 + rowIndex * 0.06)}
                className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[110px_1fr] gap-3 sm:gap-6 items-baseline border-b border-ink/10 pb-4 sm:pb-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/50">
                  {group}
                </span>
                <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
                  {items.map((it, i) => (
                    <span key={it} className="text-base sm:text-lg font-serif text-ink/90">
                      {it}
                      {i < items.length - 1 && (
                        <span className="text-accent/60 ml-2 sm:ml-3">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={motionTransition(0.6, 0.45)}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            03 — Education
          </span>
          <div className="mt-4 p-5 sm:p-6 border-l-2 border-accent bg-muted/40 relative">
            <h4 className="font-serif text-xl sm:text-2xl">International Islamic University</h4>
            <p className="text-sm text-ink/60 mt-1">BS Computer Science · Islamabad, Pakistan</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] mt-3 text-ink/50">
              In progress
            </p>
            <span className="absolute -top-3 -right-2 sm:-right-3 bg-paper border border-ink/20 px-2 py-1 text-[9px] font-mono uppercase tracking-widest rotate-3">
              B.S. C.S.
            </span>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-ink/70">
            <div className="p-3 border border-ink/10">
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-1">
                Cert · 01
              </div>
              Modern JavaScript Bootcamp — Udemy
            </div>
            <div className="p-3 border border-ink/10">
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink/50 mb-1">
                Cert · 02
              </div>
              Learn JavaScript — Codecademy
            </div>
          </div>
        </motion.div>
      </div>

      <ContactCard inView={inView} />
    </section>
  );
}

function ContactCard({ inView }: { inView: boolean }) {
  const items = [
    { k: "Email", v: "uurrehman735@gmail.com", href: "mailto:uurrehman735@gmail.com" },
    { k: "GitHub", v: "github.com/Snowden-0", href: "https://github.com/Snowden-0" },
    { k: "LinkedIn", v: "linkedin.com/in/ubaidurr", href: "https://linkedin.com/in/ubaidurr" },
    { k: "Phone", v: "+92 316 1499937", href: "tel:+923161499937" },
  ];

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, rotate: -4, y: 32 }}
      animate={inView ? { opacity: 1, rotate: 0, y: 0 } : {}}
      transition={motionTransition(0.8, 0.35)}
      className="relative lg:sticky lg:top-24 self-start mt-4 lg:mt-0"
    >
      <div className="bg-accent text-paper p-8 sm:p-10 md:p-12 rotate-0 sm:-rotate-[1.2deg] shadow-2xl relative">
        <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-ink text-paper px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest rotate-[-6deg]">
          Open envelope
        </div>
        <Asterisk className="absolute top-5 right-5 w-6 sm:w-8 h-6 sm:h-8 text-paper/30 animate-spin-slow" />

        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-90">
          04 — Correspondence
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 mb-8 sm:mb-10 leading-[0.95]">
          Let's make
          <br />
          <span className="italic">something good.</span>
        </h2>

        <dl className="space-y-4 sm:space-y-5">
          {items.map(({ k, v, href }) => (
            <div key={k}>
              <dt className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">{k}</dt>
              <dd>
                <AnimatedUnderlineLink
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-base sm:text-lg md:text-xl font-medium border-b border-paper/40 pb-0.5 break-all text-paper hover:text-paper"
                >
                  {v}
                </AnimatedUnderlineLink>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 sm:mt-10 pt-6 border-t border-paper/25 flex items-center justify-between gap-4">
          <span className="font-hand text-2xl sm:text-3xl rotate-[-3deg]">— Ubaid</span>
          <div className="flex gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 border border-paper/40 grid place-items-center rotate-3">
              <Star className="w-3 h-3" />
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 border border-paper/40 grid place-items-center -rotate-6">
              <Asterisk className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-paper border border-ink/15 px-3 sm:px-4 py-2 rotate-[6deg] shadow-md">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">
          PKR · GMT+5
        </span>
      </div>
    </motion.div>
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
