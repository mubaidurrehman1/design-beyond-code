import { motion } from "framer-motion";

import type { ExperienceEntry } from "@/data/experience";
import { fadeUp, motionTransition } from "@/lib/motion";

type ExperienceRowProps = {
  entry: ExperienceEntry;
  inView: boolean;
  index: number;
  isLast: boolean;
};

export function ExperienceRow({ entry, inView, index, isLast }: ExperienceRowProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={motionTransition(0.55, 0.12 + index * 0.08)}
      className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 last:pb-0"
    >
      <span
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${
          entry.current ? "bg-accent border-accent" : "bg-paper border-ink/30"
        } -translate-x-1/2`}
        aria-hidden
      />
      {!isLast && (
        <span
          className="absolute left-0 top-4 bottom-0 w-px border-l-2 border-dashed border-ink/20 -translate-x-1/2"
          aria-hidden
        />
      )}

      <div className="relative">
        {entry.stamp && (
          <span
            className={`absolute -top-1 ${
              index % 2 === 0 ? "-right-1 sm:-right-3" : "-right-2 sm:-right-4"
            } bg-paper border border-ink/20 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest rotate-3 shadow-sm z-10`}
          >
            {entry.stamp}
          </span>
        )}

        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
          {entry.period}
        </span>
        <h3 className="font-serif text-xl sm:text-2xl mt-1 leading-tight">{entry.role}</h3>
        <p className="text-sm text-ink/60 mt-0.5">
          {entry.company}
          <span className="text-ink/30 mx-2">·</span>
          {entry.location}
        </p>
        <p className="text-sm sm:text-base text-ink/75 mt-3 leading-relaxed max-w-xl">
          {entry.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 border border-ink/15 text-[10px] font-mono uppercase tracking-widest text-ink/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
