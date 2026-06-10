import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="max-w-6xl mx-auto px-8 py-10 flex justify-between items-center relative z-10">
      <Link to="/" className="flex items-baseline gap-2">
        <span className="font-serif text-2xl font-bold italic tracking-tight">
          M.U.R
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          /portfolio
        </span>
      </Link>
      <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.2em]">
        <a
          href="#work"
          className="hover:text-accent transition-colors underline decoration-accent/50 underline-offset-[6px]"
        >
          Work
        </a>
        <a href="#stack" className="hover:text-accent transition-colors">
          Stack
        </a>
        <a href="#contact" className="hover:text-accent transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}
