import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowScribble } from "@/components/icons/ArrowScribble";
import { Asterisk } from "@/components/icons/Asterisk";
import { fadeUp, motionTransition } from "@/lib/motion";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 relative z-10">
      <div className="max-w-lg text-center relative">
        <Asterisk className="absolute -top-8 left-0 w-5 h-5 text-accent/40 hidden sm:block animate-spin-slow" />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={motionTransition(0.7)}
          className="font-serif text-[6rem] sm:text-[8rem] leading-none tracking-tighter text-ink"
        >
          404
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={motionTransition(0.6, 0.15)}
          className="font-hand text-accent text-2xl sm:text-3xl -rotate-2 mt-2"
        >
          this page wandered off…
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={motionTransition(0.6, 0.25)}
          className="mt-4 text-sm sm:text-base text-ink/70 leading-relaxed"
        >
          The sheet you requested isn&apos;t in this edition. Perhaps it was never printed, or moved
          to another folio.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={motionTransition(0.6, 0.35)}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <ArrowScribble className="w-16 h-6 text-accent rotate-90 sm:rotate-[100deg]" />
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-ink/25 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink hover:border-accent hover:text-accent transition-colors active:scale-95"
          >
            Return home
          </Link>
        </motion.div>

        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={motionTransition(0.5, 0.45)}
          className="block mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40"
        >
          Errata · Missing folio
        </motion.span>
      </div>
    </section>
  );
}
