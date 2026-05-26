import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, EASE } from "../../lib/motion";

const STEPS = [
  {
    n: "I",
    title: "Reduce manual follow-up",
    body: "Automated reminders, intake nudges, and progress tracking eliminate the administrative drag.",
  },
  {
    n: "II",
    title: "Standardise intake & communication",
    body: "A consistent, polished experience across every matter — client and attorney alike.",
  },
  {
    n: "III",
    title: "Deliver a modern experience",
    body: "Make the firm's care for craft visible in every interaction your clients have with you.",
  },
];

export default function Attorneys() {
  return (
    <div id="attorneys" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
      <motion.div
        className="grid gap-14 lg:grid-cols-12"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-5">
          <motion.p variants={fadeUp} className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-teal/50" />
            Chapter IV · For attorneys
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
            More efficiency.{" "}
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              Better
            </span>{" "}
            service. Stronger growth.
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mt-7 text-ink-2/85 max-w-[44ch]">
            Legacy Louisiana helps firms reduce manual work, improve responsiveness, and
            create a smoother experience clients remember — and refer.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-ink/15 bg-paper-2 px-5 py-2.5"
          >
            <span className="grid h-2 w-2 place-items-center rounded-full bg-teal" />
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-2">
              Spend more time practicing law
            </span>
          </motion.div>
        </div>

        <motion.ol
          className="lg:col-span-6 lg:col-start-7 space-y-4"
          variants={stagger(0.13, 0.2)}
        >
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.35, ease: EASE },
                },
              }}
              className="group relative grid grid-cols-[auto,1fr] items-start gap-6 rounded-2xl border border-ink/10 bg-cream p-7 lg:p-9 transition-[transform,border-color,background-color] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-teal/40 hover:bg-paper hover:-translate-y-1"
            >
              <div
                className="grid h-14 w-14 place-items-center rounded-xl border border-ink/15 bg-paper font-display text-2xl text-teal"
                style={{ fontVariationSettings: "'opsz' 48, 'SOFT' 30" }}
              >
                {s.n}
              </div>
              <div>
                <h3 className="display-md text-ink text-[1.55rem] lg:text-[1.85rem] leading-[1.1]">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink-2/80 leading-[1.65] text-[0.97rem]">{s.body}</p>
              </div>
              <div className="absolute right-7 top-7 hidden text-teal lg:block">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </div>
  );
}
