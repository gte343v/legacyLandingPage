import { MotionConfig } from "framer-motion";
import { useLenis } from "./lib/useLenis";
import { EASE } from "./lib/motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/sections/Problem";
import Flow from "./components/sections/Flow";
import Platform from "./components/sections/Platform";
import Preview from "./components/sections/Preview";
import Attorneys from "./components/sections/Attorneys";
import Louisiana from "./components/sections/Louisiana";
import About from "./components/sections/About";
import CTA from "./components/sections/CTA";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <MotionConfig transition={{ duration: 1.2, ease: EASE }}>
    <div className="relative">
      <Header />

      {/* The single paper overlap: Hero is the desk; Problem is the first sheet
          that rises over it as you scroll. Everything after is normal flow. */}
      <div className="relative">
        <div className="sticky top-0 h-[100svh] z-0">
          <Hero />
        </div>

        <section id="problem" className="relative z-10 paper-sheet grain overflow-hidden">
          <Problem />
        </section>
      </div>

      {/* Normal sections from here */}
      <section
        className="relative"
        style={{ background: "linear-gradient(180deg, #f7f4ef 0%, #efe9dd 100%)" }}
      >
        <Flow />
      </section>
      <section className="relative bg-cream"><Platform /></section>
      <section className="relative bg-ink text-cream"><Preview /></section>
      <section className="relative bg-paper-2"><Attorneys /></section>
      <section
        className="relative"
        style={{ background: "linear-gradient(180deg, #dceced 0%, #d4e4e5 55%, #f7f4ef 100%)" }}
      >
        <Louisiana />
      </section>
      <section className="relative bg-paper"><About /></section>
      <section className="relative bg-ink text-cream"><CTA /></section>

      <Footer />
    </div>
    </MotionConfig>
  );
}
