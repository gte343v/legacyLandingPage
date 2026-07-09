import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, EASE } from "../../lib/motion";

const BENEFITS = [
  { n: "I", title: "Organize and maintain a vast number of data points" },
  { n: "II", title: "Reduce your practice risk" },
  { n: "III", title: "Increase the chances of success for your clients' estate plans" },
  { n: "IV", title: "Earn with more consistency" },
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
          <motion.p variants={fadeUp} className="lede mt-7 text-ink-2/85 max-w-[46ch]">
            Legacy Louisiana helps to reduce manual work, improve responsiveness, and create a
            smoother experience clients appreciate, and then refer new clients to you.
          </motion.p>
        </div>

        <motion.ol
          className="lg:col-span-6 lg:col-start-7 space-y-4"
          variants={stagger(0.13, 0.2)}
        >
          <motion.li variants={fadeUp} className="hidden lg:block">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-teal">
              Key benefits
            </p>
          </motion.li>
          {BENEFITS.map((s) => (
            <motion.li
              key={s.n}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.35, ease: EASE },
                },
              }}
              className="group relative grid grid-cols-[auto,1fr] items-center gap-6 rounded-2xl border border-ink/10 bg-cream p-7 lg:p-8 transition-[transform,border-color,background-color] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-teal/40 hover:bg-paper hover:-translate-y-1"
            >
              <div
                className="grid h-14 w-14 place-items-center rounded-xl border border-ink/15 bg-paper font-display text-2xl text-teal"
                style={{ fontVariationSettings: "'opsz' 48, 'SOFT' 30" }}
              >
                {s.n}
              </div>
              <h3 className="display-md text-ink text-[1.35rem] lg:text-[1.6rem] leading-[1.15]">
                {s.title}
              </h3>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </div>
  );
}
