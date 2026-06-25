import { motion } from "framer-motion";

import type { Service } from "@/data/services";
import { fadeUp, motionTransition } from "@/lib/motion";

type ServiceCardProps = {
  service: Service;
  inView: boolean;
  index: number;
};

export function ServiceCard({ service, inView, index }: ServiceCardProps) {
  const rotation = index % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-1";

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={motionTransition(0.55, 0.1 + index * 0.08)}
      className={`relative bg-paper border border-ink/15 shadow-md hover:shadow-lg transition-shadow ${rotation}`}
    >
      {service.featured && (
        <span className="absolute -top-2.5 left-4 bg-accent text-paper px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest rotate-[-2deg] z-10 shadow-sm">
          Most requested
        </span>
      )}

      <div className="aspect-[4/3] overflow-hidden">{service.illustration}</div>

      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-xl sm:text-2xl leading-tight">{service.title}</h3>
        <p className="text-sm sm:text-base text-ink/75 mt-3 leading-relaxed">{service.description}</p>
        <span className="inline-block mt-5 font-mono text-[9px] uppercase tracking-[0.25em] text-ink/45">
          Svc · {service.index}
        </span>
      </div>
    </motion.article>
  );
}
