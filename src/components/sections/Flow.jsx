import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, EASE } from "../../lib/motion";

/* The estate plan as it actually moves between the two people who touch it:
   the firm (top lane) and the client (bottom lane). One token travels the rail
   left to right and lights each step as it lands, so the hand-offs are legible. */
const STEPS = [
  { actor: "firm",   k: "01", t: "Send a secure invite",     d: "Invite your client to their private portal in one click." },
  { actor: "client", k: "02", t: "Complete guided intake",   d: "Your client answers clear questions at their own pace." },
  { actor: "client", k: "03", t: "Add family and assets",    d: "Details and documents are captured once, safely." },
  { actor: "firm",   k: "04", t: "Review in your dashboard", d: "Everything arrives organized and ready to act on." },
  { actor: "firm",   k: "05", t: "Generate the report",      d: "Produce a polished plan in minutes, not hours." },
  { actor: "client", k: "06", t: "Deliver the finished plan", d: "Your client receives a clear plan they can trust." },
];

const COL = 100 / STEPS.length; // width of one step column, in %
const centerOf = (i) => (i + 0.5) * COL;

export default function Flow() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const wrapRef = useRef(null);

  // Only animate while the section is on screen (keeps it calm and cheap).
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setRunning(e.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % STEPS.length);
    }, 1900);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div
      id="flow"
      ref={wrapRef}
      className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 pt-16 pb-28 lg:pt-20 lg:pb-40"
    >
      {/* Heading block */}
      <motion.div
        className="max-w-3xl"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.p variants={fadeUp} className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-teal/50" />
          The workflow
        </motion.p>
        <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
          Let the work{" "}
          <span
            className="italic text-teal"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
          >
            flow.
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} className="lede mt-6 text-ink-2/85 max-w-[54ch]">
          Watch a plan move between your clients and your firm, from the first invite all the
          way to a finished plan. 
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.92rem] font-medium text-cream transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-teal"
          >
            Get started
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* ---------- Desktop swimlane visualization ----------
          Two 6-column grids (firm on top, client on bottom) share a center rail.
          Each card lives inside its own grid cell, so it can never spill past the
          container edge, and its cell center lines up with its rail node. */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mt-16 hidden lg:block"
      >
        <div className="rounded-[28px] border border-ink/10 bg-cream p-8 xl:p-12">
          {/* Firm lane label */}
          <div className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-teal">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-teal/12">◆</span>
            Your firm
          </div>

          {/* Firm lane (top) */}
          <div className="mt-5 grid grid-cols-6 items-end">
            {STEPS.map((s, i) => (
              <div key={s.k} className="px-2">
                {s.actor === "firm" ? (
                  <LaneCard step={s} active={active === i} side="top" />
                ) : null}
              </div>
            ))}
          </div>

          {/* Center rail */}
          <div className="relative my-5 h-px w-full bg-ink/12">
            {/* progress fill up to the active node */}
            <motion.div
              className="absolute left-0 top-0 h-px bg-teal"
              animate={{ width: `${centerOf(active)}%` }}
              transition={{ duration: 1.1, ease: EASE }}
            />
            {/* nodes + stems */}
            {STEPS.map((s, i) => (
              <div
                key={s.k}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${centerOf(i)}%` }}
              >
                <span
                  aria-hidden
                  className={`absolute left-1/2 -translate-x-1/2 w-px transition-colors duration-500 ${
                    active === i ? "bg-teal/50" : "bg-ink/10"
                  } ${s.actor === "firm" ? "bottom-1/2 h-7" : "top-1/2 h-7"}`}
                />
                <span
                  className={`block h-2.5 w-2.5 rounded-full transition-colors duration-500 ${
                    i <= active ? "bg-teal" : "bg-ink/20"
                  }`}
                />
              </div>
            ))}
            {/* the travelling work token */}
            <motion.div
              className="absolute top-1/2 z-10"
              animate={{ left: `${centerOf(active)}%` }}
              transition={{ duration: 1.1, ease: EASE }}
              style={{ translateX: "-50%", translateY: "-50%" }}
            >
              <span className="relative grid place-items-center">
                <span className="absolute h-9 w-9 rounded-full bg-teal/20 animate-ping" />
                <span className="relative grid h-6 w-6 place-items-center rounded-full bg-teal text-cream shadow-[0_6px_20px_-6px_rgba(43,120,128,0.9)]">
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </motion.div>
          </div>

          {/* Client lane (bottom) */}
          <div className="grid grid-cols-6 items-start">
            {STEPS.map((s, i) => (
              <div key={s.k} className="px-2">
                {s.actor === "client" ? (
                  <LaneCard step={s} active={active === i} side="bottom" />
                ) : null}
              </div>
            ))}
          </div>

          {/* Client lane label */}
          <div className="mt-5 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-ink/55">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink/8">●</span>
            Client
          </div>
        </div>
      </motion.div>

      {/* ---------- Mobile / tablet vertical timeline ---------- */}
      <motion.ol
        variants={stagger(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mt-14 space-y-3 lg:hidden"
      >
        {STEPS.map((s, i) => {
          const isActive = active === i;
          const firm = s.actor === "firm";
          return (
            <motion.li
              key={s.k}
              variants={fadeUp}
              className={`relative grid grid-cols-[auto,1fr] items-start gap-4 rounded-2xl border p-5 transition-colors duration-500 ${
                isActive ? "border-teal/40 bg-cream" : "border-ink/10 bg-paper"
              }`}
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl font-mono text-[0.72rem] transition-colors duration-500 ${
                  isActive ? "bg-teal text-cream" : firm ? "bg-teal/10 text-teal" : "bg-ink/6 text-ink/60"
                }`}
              >
                {s.k}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] ${
                      firm ? "text-teal" : "text-ink/50"
                    }`}
                  >
                    {firm ? "Your firm" : "Client"}
                  </span>
                </div>
                <h3 className="mt-1 display-md text-ink text-[1.3rem] leading-tight">{s.t}</h3>
                <p className="mt-1.5 text-ink-2/75 text-[0.92rem] leading-[1.6]">{s.d}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  );
}

/* One card in a desktop lane. It fills its grid cell (which is centered on its
   rail node), so positioning is handled entirely by the grid — no absolute
   offsets that could overflow the container. */
function LaneCard({ step, active, side }) {
  const top = side === "top";
  return (
    <motion.div
      className="w-full"
      animate={{ y: active ? (top ? -4 : 4) : 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div
        className={`rounded-2xl border p-4 xl:p-5 transition-all duration-500 ${
          active
            ? "border-teal/45 bg-paper shadow-[0_24px_60px_-30px_rgba(43,120,128,0.7)]"
            : "border-ink/10 bg-paper"
        }`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] transition-colors duration-500 ${
              active ? "text-teal" : "text-ink/40"
            }`}
          >
            No. {step.k}
          </span>
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
              active ? "bg-teal" : "bg-ink/15"
            }`}
          />
        </div>
        <h3 className="mt-3 font-display text-[1.12rem] xl:text-[1.24rem] leading-[1.12] text-ink" style={{ fontVariationSettings: "'opsz' 48" }}>
          {step.t}
        </h3>
        <p className="mt-2 text-ink-2/70 text-[0.82rem] leading-[1.5]">{step.d}</p>
      </div>
    </motion.div>
  );
}
