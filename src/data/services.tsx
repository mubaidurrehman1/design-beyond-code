import type { ReactNode } from "react";

import { ArrowScribble } from "@/components/icons/ArrowScribble";
import { Asterisk } from "@/components/icons/Asterisk";
import { Star } from "@/components/icons/Star";

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  illustration: ReactNode;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "svc-01",
    index: "01",
    title: "Web Development",
    description:
      "Fast, accessible sites and web apps built with React, modern tooling, and a sharp eye for layout and motion.",
    featured: true,
    illustration: (
      <div className="relative w-full h-full bg-paper overflow-hidden border-b border-ink/10">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ink/10 bg-muted/50">
          <span className="w-2 h-2 rounded-full bg-ink/20" />
          <span className="w-2 h-2 rounded-full bg-ink/20" />
          <span className="w-2 h-2 rounded-full bg-ink/20" />
          <span className="ml-2 h-1.5 flex-1 bg-ink/10 rounded-sm" />
        </div>
        <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-ink/70">
          <span className="text-accent">{"<"}</span>
          <span className="text-ink/50">app</span>
          <span className="text-accent">{">"}</span>
          <div className="pl-3 mt-1">
            <span className="text-ink/40">{"  "}</span>
            <span className="text-accent">return</span>{" "}
            <span className="text-ink/90">{"<Craft />"}</span>
          </div>
          <span className="text-accent">{"</"}</span>
          <span className="text-ink/50">app</span>
          <span className="text-accent">{">"}</span>
        </div>
        <Star className="absolute bottom-3 right-3 w-4 h-4 text-accent animate-float" />
      </div>
    ),
  },
  {
    id: "svc-02",
    index: "02",
    title: "UI/UX Design",
    description:
      "Wireframes to polished interfaces — thoughtful hierarchy, spacing, and interaction patterns that feel intentional.",
    illustration: (
      <div className="relative w-full h-full bg-muted overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-px opacity-30 p-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="bg-ink/10" />
          ))}
        </div>
        <div className="absolute top-6 left-6 w-16 h-10 border-2 border-dashed border-ink/30 rounded-sm" />
        <div className="absolute top-20 left-6 right-6 h-2 bg-ink/15" />
        <div className="absolute top-28 left-6 w-2/3 h-2 bg-ink/10" />
        <div className="absolute bottom-8 right-8 w-5 h-5 rounded-full border-2 border-accent animate-drift" />
        <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-widest text-ink/40">
          wireframe · v2
        </span>
      </div>
    ),
  },
  {
    id: "svc-03",
    index: "03",
    title: "Full-Stack Applications",
    description:
      "MERN-style products with auth, APIs, and databases — from schema design to deployed, production-ready builds.",
    illustration: (
      <div className="relative w-full h-full bg-ink overflow-hidden border-b border-ink/10 flex flex-col justify-center gap-2 p-5 sm:p-6">
        {[
          { label: "Frontend", w: "w-4/5" },
          { label: "API", w: "w-3/5" },
          { label: "Database", w: "w-2/5" },
        ].map((layer, i) => (
          <div key={layer.label} className="flex items-center gap-3">
            <span className="font-mono text-[8px] uppercase tracking-widest text-paper/50 w-14 shrink-0">
              {layer.label}
            </span>
            <div
              className={`h-7 ${layer.w} border border-paper/30 bg-paper/10 flex items-center px-2`}
              style={{ marginLeft: `${i * 8}px` }}
            >
              <div className="h-1 flex-1 bg-paper/20" />
            </div>
          </div>
        ))}
        <Asterisk className="absolute top-4 right-4 w-5 h-5 text-accent animate-spin-slow" />
      </div>
    ),
  },
  {
    id: "svc-04",
    index: "04",
    title: "Technical Consulting",
    description:
      "Architecture reviews, stack recommendations, and hands-on guidance for teams shipping their next product.",
    illustration: (
      <div className="relative w-full h-full bg-accent/15 overflow-hidden border-b border-ink/10 p-5 sm:p-6 flex flex-col justify-between">
        <ArrowScribble className="w-12 h-6 text-accent animate-drift" />
        <div className="space-y-2 mt-4">
          {["Audit stack", "Define scope", "Ship roadmap"].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-3 h-3 border border-ink/30 flex items-center justify-center text-[8px] font-mono">
                {i < 2 ? "✓" : ""}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70">{item}</span>
            </div>
          ))}
        </div>
        <span className="font-hand text-accent text-lg rotate-[-2deg]">let&apos;s plan it.</span>
      </div>
    ),
  },
];
