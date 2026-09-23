import { motion } from "framer-motion";
import { EASE } from "../lib/motion";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.35, ease: EASE, delay: 0.3 + i * 0.13 },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden bg-ink text-cream"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/legacy-family-hero.png"
          alt=""
          className="h-full w-full object-cover scale-[1.04] origin-center"
          style={{ filter: "saturate(0.85) contrast(1.05)" }}
        />
      </div>

      {/* Atmospheric overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,39,39,0.55) 0%, rgba(42,39,39,0.35) 35%, rgba(42,39,39,0.92) 100%), linear-gradient(90deg, rgba(42,39,39,0.78) 0%, rgba(42,39,39,0.38) 55%, rgba(42,39,39,0) 100%)",
        }}
      />
      {/* Teal wash vignette */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-50"
        style={{
          background:
            "radial-gradient(55% 50% at 25% 45%, rgba(43,120,128,0.45), transparent 70%)",
        }}
      />
      {/* Grain */}
      <div className="absolute inset-0 grain rounded-none" aria-hidden />

      {/* Content — header occupies top, main copy centered with safe gutters */}
      <div className="relative z-10 flex h-full flex-col mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* spacer for header clearance */}
        <div className="h-24 sm:h-28 shrink-0" aria-hidden />

        {/* main content — centered vertically */}
        <div className="flex-1 flex items-center">
          <div className="max-w-3xl">
            <motion.p
              variants={reveal} initial="hidden" animate="show" custom={0}
              className="eyebrow-light flex items-center gap-3"
            >
              <span className="inline-block h-px w-10 bg-cream/40" />
              Premium legal technology
            </motion.p>

            <motion.h1
              variants={reveal} initial="hidden" animate="show" custom={1}
              className="display-xl mt-6 text-cream"
            >
              <span className="block text-[0.88em]">The future of</span>
              <span
                className="block italic font-display text-teal-light text-[1.12em]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                Louisiana
              </span>
              <span className="block text-[0.88em]">estate planning</span>
              <span className="block text-[0.88em]">is here</span>
            </motion.h1>

            <motion.p
              variants={reveal} initial="hidden" animate="show" custom={2}
              className="lede mt-6 text-cream/75 max-w-[64ch]"
            >
              Transform your practice with automated client intake, secure data{" "}<br className="hidden sm:block" />
              management, and report generation. Empower your firm to deliver a{" "}<br className="hidden sm:block" />
              superior client experience. One seamless platform, engineered{" "}<br className="hidden sm:block" />
              specifically for Louisiana's unique legal landscape.
            </motion.p>

            <motion.div
              variants={reveal} initial="hidden" animate="show" custom={3}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-[0.92rem] font-medium text-ink transition-all hover:bg-teal-light"
              >
                Request a demo
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#problem"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-[0.92rem] text-cream/85 transition-all hover:border-cream hover:text-cream"
              >
                See how it works
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom rail — kept lightweight */}
        <motion.div
          variants={reveal} initial="hidden" animate="show" custom={4}
          className="shrink-0 pb-8 sm:pb-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-4">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
              Scroll
            </span>
            <span className="hidden sm:block font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
              Purpose-built for Louisiana attorneys
            </span>
            <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full border border-cream/30 text-cream/70">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M2 8l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
