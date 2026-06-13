import { motion, useScroll, useTransform } from "framer-motion";
import { Outlet } from "react-router-dom";

import { SmoothScrollProvider } from "@/context/SmoothScrollContext";
import { Asterisk } from "@/components/icons/Asterisk";
import { Star } from "@/components/icons/Star";
import { useReducedMotion } from "@/hooks/useReducedMotion";

import { Footer } from "./Footer";
import { Nav } from "./Nav";

function DecorativeLayer() {
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();
  const y1 = useTransform(scrollY, [0, 800], [0, reducedMotion ? 0 : 60]);
  const y2 = useTransform(scrollY, [0, 800], [0, reducedMotion ? 0 : -40]);
  const y3 = useTransform(scrollY, [0, 1200], [0, reducedMotion ? 0 : 80]);

  return (
    <>
      <motion.div style={{ y: y1 }}>
        <Asterisk className="hidden md:block absolute top-32 left-6 w-6 h-6 text-ink/20 animate-spin-slow" />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <Star className="hidden md:block absolute top-60 right-10 w-5 h-5 text-accent/50 animate-spin-slow-reverse" />
      </motion.div>
      <motion.div style={{ y: y3 }}>
        <Asterisk className="hidden lg:block absolute top-[520px] right-16 w-4 h-4 text-accent/30 rotate-45 animate-float" />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <Star className="hidden lg:block absolute top-[900px] left-12 w-3 h-3 text-ink/15 animate-float" />
      </motion.div>
    </>
  );
}

function LayoutContent() {
  return (
    <div className="min-h-screen bg-paper text-ink relative overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-0 paper-texture z-50 mix-blend-multiply"
      />

      <DecorativeLayer />

      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function RootLayout() {
  return (
    <SmoothScrollProvider>
      <LayoutContent />
    </SmoothScrollProvider>
  );
}
