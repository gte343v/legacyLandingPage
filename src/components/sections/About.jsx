import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

const POINTS = [
  { t: "Developed alongside Louisiana legal professionals", n: "01" },
  { t: "Focused on practical estate planning workflows", n: "02" },
  { t: "Designed for small and midsize firms", n: "03" },
  { t: "Built for trust, efficiency, and better service", n: "04" },
];

export default function About() {
  return (
    <div id="about" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
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
            Chapter VI · The makers
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
            Built{" "}
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              with
            </span>{" "}
            attorneys, around real workflow challenges.
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mt-7 text-ink-2/85">
            Legacy Louisiana was developed alongside practicing attorneys to solve the real
            friction points of modern estate planning.
          </motion.p>
        </div>

        <motion.div
          className="lg:col-span-7"
          variants={stagger(0.1, 0.2)}
        >
          <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {POINTS.map((p) => (
              <motion.div
                key={p.t}
                variants={fadeUp}
                className="flex min-h-[200px] flex-col justify-between bg-paper p-7 lg:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-teal">
                    No. {p.n}
                  </span>
                  <span
                    aria-hidden
                    className="font-display text-teal text-xl"
                    style={{ fontVariationSettings: "'opsz' 48" }}
                  >
                    ✦
                  </span>
                </div>
                <p
                  className="font-display text-[1.45rem] lg:text-[1.75rem] leading-[1.15] text-ink"
                  style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 50" }}
                >
                  {p.t}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
