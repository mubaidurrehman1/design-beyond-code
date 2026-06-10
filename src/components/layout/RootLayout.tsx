import { Outlet } from "react-router-dom";

import { Asterisk } from "@/components/icons/Asterisk";
import { Star } from "@/components/icons/Star";

import { Footer } from "./Footer";
import { Nav } from "./Nav";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 paper-texture z-50 mix-blend-multiply" />

      <Asterisk className="hidden md:block absolute top-32 left-6 w-6 h-6 text-ink/20 rotate-12" />
      <Star className="hidden md:block absolute top-60 right-10 w-5 h-5 text-accent/50" />

      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
