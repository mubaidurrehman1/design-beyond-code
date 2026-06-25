import { motion } from "framer-motion";

import { ArrowScribble } from "@/components/icons/ArrowScribble";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fadeUp, motionTransition, staggerChildren } from "@/lib/motion";

export function ServicesSection() {
  const { ref, inView } = useScrollReveal({ amount: 0.1 });

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-muted/30 border-y border-ink/10 py-20 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 relative">
          <ArrowScribble className="absolute -left-16 -top-2 w-12 h-8 text-accent hidden md:block" />
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={motionTransition(0.5)}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent"
          >
            03 — Services
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={motionTransition(0.6, 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 leading-[0.95]"
          >
            What I can
            <br />
            <span className="italic">build for you.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={staggerChildren(0.08, 0.15)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} inView={inView} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
