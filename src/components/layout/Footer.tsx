import { Star } from "@/components/icons/Star";

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 pt-12 sm:pt-16 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/50 font-mono text-center md:text-left">
      <p>© 2026 Muhammad Ubaid ur Rehman</p>
      <p className="flex items-center gap-2 max-w-sm md:max-w-none">
        <Star className="w-2.5 h-2.5 text-accent shrink-0" />
        Set in Fraunces &amp; Inter — printed digitally in Islamabad
      </p>
    </footer>
  );
}
