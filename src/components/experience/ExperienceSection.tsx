import { motion } from "framer-motion";

import { ExperienceRow } from "@/components/experience/ExperienceRow";
import { ArrowScribble } from "@/components/icons/ArrowScribble";
import { Asterisk } from "@/components/icons/Asterisk";
import { Star } from "@/components/icons/Star";
import { experience } from "@/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fadeUp, motionTransition, slideFromRight } from "@/lib/motion";

function CareerSpecimen({ inView }: { inView: boolean }) {
  const layers = [
    { label: "2025", rotate: "-rotate-[4deg]", offset: "translate-x-2" },
    { label: "2024", rotate: "rotate-[2deg]", offset: "-translate-x-1" },
    { label: "2023", rotate: "-rotate-[1deg]", offset: "translate-x-1" },
  ];

  return (
    <motion.div
      variants={slideFromRight}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={motionTransition(0.8, 0.25)}
      className="relative lg:sticky lg:top-24 self-start"
    >
      <div className="absolute -top-3 sm:-top-4 -left-2 sm:-left-4 bg-accent text-paper px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-md rotate-[-6deg] z-10">
        Career · Specimen
      </div>

      <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto aspect-[4/5] min-h-[320px]">
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            className={`absolute inset-0 bg-paper border border-ink/20 shadow-lg p-5 sm:p-6 flex flex-col ${layer.rotate} ${layer.offset}`}
            style={{ top: `${i * 12}px`, left: `${i * 8}px`, zIndex: layers.length - i }}
          >
            <div className="flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink/60">
              <span>Exp · {layer.label}</span>
              <span>PK</span>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-3 mt-4">
              {[0, 1, 2].map((dot) => (
                <div key={dot} className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      dot === 0 ? "bg-accent" : "border border-ink/30"
                    }`}
                  />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-1.5 bg-ink/15 w-full" />
                    <div className="h-1.5 bg-ink/10 w-2/3" />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-ink/30 pt-3 mt-2 flex items-end justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-ink/50">
                Timeline
              </span>
              <div className="flex gap-[2px] h-5">
                {[2, 4, 3, 5, 2, 4].map((h, j) => (
                  <span key={j} className="bg-ink/30 w-[2px]" style={{ height: `${h * 3}px` }} />
                ))}
              </div>
            </div>
          </div>
        ))}

        <Star className="absolute -bottom-2 -right-2 w-5 h-5 text-accent animate-float z-20" />
        <Asterisk className="absolute top-8 -right-4 w-4 h-4 text-accent/80 animate-spin-slow z-20" />
      </div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={motionTransition(0.6, 0.5)}
        className="font-hand text-ink/70 text-xl sm:text-2xl rotate-[-3deg] mt-6 text-center lg:text-right lg:mr-4"
      >
        ~ the résumé, lightly edited.
      </motion.p>
    </motion.div>
  );
}

export function ExperienceSection() {
  const { ref, inView } = useScrollReveal({ amount: 0.1 });

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <div className="mb-10 sm:mb-14 relative">
            <ArrowScribble className="absolute -left-16 -top-2 w-12 h-8 text-accent hidden md:block" />
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={motionTransition(0.5)}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent"
            >
              02 — Experience
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={motionTransition(0.6, 0.1)}
              className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 leading-[0.95]"
            >
              Where I&apos;ve
              <br />
              <span className="italic">been making things.</span>
            </motion.h2>
          </div>

          <div className="relative border-l-2 border-dashed border-ink/20 ml-1.5">
            {experience.map((entry, i) => (
              <ExperienceRow
                key={entry.id}
                entry={entry}
                inView={inView}
                index={i}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>

        <CareerSpecimen inView={inView} />
      </div>
    </section>
  );
}
