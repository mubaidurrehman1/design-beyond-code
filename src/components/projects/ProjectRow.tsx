import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import { fadeUp, motionTransition } from "@/lib/motion";

type ProjectRowProps = {
  project: Project;
  inView: boolean;
  index: number;
};

export function ProjectRow({ project, inView, index }: ProjectRowProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={motionTransition(0.5, index * 0.07)}
      className="group border-t border-paper/10 py-6 sm:py-8"
    >
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="grid sm:grid-cols-[3rem_1fr_auto] gap-3 sm:gap-6 items-start"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/35 pt-1">
          {project.index}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-serif text-lg sm:text-xl text-paper group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/35">
              {project.year}
            </span>
          </div>

          <p className="mt-2 text-sm text-paper/50 leading-relaxed max-w-[52ch]">{project.blurb}</p>

          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/40">
            {project.role}
            <span className="mx-2 text-paper/20">·</span>
            {project.tags.join(" · ")}
          </p>
        </div>

        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 group-hover:text-accent transition-colors sm:pt-1 shrink-0"
          aria-hidden
        >
          GitHub →
        </span>
      </a>
    </motion.article>
  );
}
