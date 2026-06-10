import { Star } from "@/components/icons/Star";

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-8 pb-10 pt-16 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-ink/40 font-mono">
      <p>© 2026 Muhammad Ubaid ur Rehman</p>
      <p className="flex items-center gap-2">
        <Star className="w-2.5 h-2.5 text-accent" />
        Set in Fraunces &amp; Inter — printed digitally in Islamabad
      </p>
    </footer>
  );
}
