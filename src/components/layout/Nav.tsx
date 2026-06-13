import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useSmoothScroll } from "@/context/SmoothScrollContext";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { EASE_OUT, fadeUp, motionTransition } from "@/lib/motion";

const NAV_LINKS = [
  { href: "#work", label: "Work", id: "work" as const },
  { href: "#stack", label: "Stack", id: "stack" as const },
  { href: "#contact", label: "Contact", id: "contact" as const },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { dark, toggle } = useDarkMode();
  const activeSection = useScrollSpy();
  const reducedMotion = useReducedMotion();

  useFocusTrap(menuOpen, menuRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
    setMenuOpen(false);
  };

  const handleThemeToggle = () => {
    document.documentElement.classList.add("theme-transition");
    toggle();
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 500);
  };

  return (
    <>
      <motion.header
        initial={reducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={motionTransition(0.6)}
        className={`sticky top-0 z-40 transition-[padding,background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md py-4"
            : "border-b border-transparent bg-transparent py-6 md:py-10"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
          <Link to="/" className="flex items-baseline gap-2 active:scale-100">
            <span className="font-serif text-xl sm:text-2xl font-bold italic tracking-tight">
              M.U.R
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 hidden sm:inline">
              /portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                data-active={activeSection === link.id}
                className={`nav-link text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                  activeSection === link.id ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleThemeToggle}
              className="font-mono text-[10px] uppercase tracking-[0.2em] border border-ink/20 px-3 py-1.5 hover:border-accent hover:text-accent transition-colors active:scale-95"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={handleThemeToggle}
              className="font-mono text-[10px] uppercase tracking-[0.15em] border border-ink/20 px-2.5 py-1 hover:border-accent transition-colors"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? "Lt" : "Dk"}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="relative w-10 h-10 border border-ink/20 flex flex-col items-center justify-center gap-1.5"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-5 h-px bg-ink transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-ink transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-ink transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-paper/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, ease: EASE_OUT, duration: 0.5 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-active={activeSection === link.id}
                  className={`nav-link text-2xl font-serif italic tracking-tight ${
                    activeSection === link.id ? "text-accent" : "text-ink"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={motionTransition(0.5, 0.35)}
              className="absolute bottom-10 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40"
            >
              M.U.R — Portfolio
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
