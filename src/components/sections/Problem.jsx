import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

const STATS = [
  { n: "47%", l: "Avg. intake time reclaimed" },
  { n: "1×", l: "Single source of truth" },
  { n: "0", l: "Lost client emails" },
];

export default function Problem() {
  return (
    <div id="how" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
      <motion.div
        className="grid gap-16 lg:grid-cols-12"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-5">
          <motion.p variants={fadeUp} className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-teal/50" />
            Chapter I · The problem
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
            Your practice deserves better than{" "}
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              notepads,
            </span>{" "}
            spreadsheets, and back and forth emails.
          </motion.h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <motion.p
            variants={fadeUp}
            className="lede text-ink-2/85 text-[1.1rem] lg:text-[1.18rem] leading-[1.65]"
          >
            Your firm does not have an organized way to create and maintain your clients'
            estate plans throughout the years.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="lede mt-5 text-ink-2/85 text-[1.1rem] lg:text-[1.18rem] leading-[1.65]"
          >
            We provide the valuable resources to assist with the data entry, data analysis,
            and data output to create the client friendly visual presentations your clients
            want and need, all native to Louisiana's unique legal environment.
          </motion.p>

          <motion.div
            variants={stagger(0.1, 0.15)}
            className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10"
          >
            {STATS.map((s) => (
              <motion.div key={s.l} variants={fadeUp} className="bg-paper px-5 py-7">
                <div
                  className="font-display text-3xl lg:text-4xl text-ink"
                  style={{ fontVariationSettings: "'opsz' 96" }}
                >
                  {s.n}
                </div>
                <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
