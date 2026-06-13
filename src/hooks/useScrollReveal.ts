import { useInView } from "framer-motion";
import { useRef } from "react";

import { useReducedMotion } from "./useReducedMotion";

type ScrollRevealOptions = {
  once?: boolean;
  amount?: number;
  margin?: string;
};

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { once = true, amount = 0.2, margin = "0px 0px -10% 0px" } = options;
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(ref, { once, amount, margin });

  return {
    ref,
    inView: reducedMotion ? true : inView,
    reducedMotion,
  };
}
