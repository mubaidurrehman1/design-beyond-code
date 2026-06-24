import { motion } from "framer-motion";

import { fadeUp, motionTransition } from "@/lib/motion";

type ProjectsHeaderProps = {
  inView: boolean;
};

export function ProjectsHeader({ inView }: ProjectsHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={motionTransition(0.6)}
      className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14"
    >
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          01 — Selected Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif italic mt-2">Things I&apos;ve built.</h2>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/40">
        04 entries
      </span>
    </motion.div>
  );
}
