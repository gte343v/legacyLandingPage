import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

const WORKFLOWS = [
  { t: "Wills & trust planning", d: "Workflows tuned for Louisiana's civil-law tradition." },
  { t: "Succession matters", d: "Organise heirs, assets, and procedures cleanly." },
  { t: "Family information", d: "Collect once. Reuse across every matter." },
  { t: "Ongoing plan maintenance", d: "Keep plans current as families and assets change." },
];

export default function Louisiana() {
  return (
    <div id="louisiana" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
      <motion.div
        className="grid gap-16 lg:grid-cols-12 lg:items-start"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-5">
          <motion.p variants={fadeUp} className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-teal/50" />
            Chapter V · Louisiana
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
            Designed for{" "}
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              Louisiana
            </span>{" "}
            planning needs.
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mt-7 text-ink-2/85">
            Built with Louisiana attorneys in mind — including workflows relevant to wills,
            trusts, succession matters, family information collection, asset organisation,
            and ongoing plan maintenance.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 relative aspect-[5/4] w-full max-w-md overflow-hidden rounded-2xl border border-ink/10"
          >
            <img
              src="/assets/legacy-family-hero.png"
              alt="A Louisiana family at home"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: "saturate(0.9) contrast(1.04) brightness(0.95)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p
                className="font-display text-cream text-2xl leading-tight"
                style={{ fontVariationSettings: "'opsz' 48, 'SOFT' 70" }}
              >
                A practice built around the families you serve.
              </p>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cream/70">
                Pointe Coupee Parish, LA
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-6 lg:col-start-7"
          variants={stagger(0.1, 0.2)}
        >
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-cream">
            {WORKFLOWS.map((w, i) => (
              <motion.div
                key={w.t}
                variants={fadeUp}
                className="group relative grid grid-cols-[auto,1fr,auto] items-center gap-8 border-b border-ink/10 px-7 py-7 lg:px-9 lg:py-9 last:border-b-0 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-paper"
              >
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-teal">
                  {`No. 0${i + 1}`}
                </div>
                <div>
                  <h3 className="display-md text-ink text-[1.55rem] lg:text-[1.95rem] leading-[1.08]">
                    {w.t}
                  </h3>
                  <p className="mt-2 text-ink-2/75 leading-[1.6] text-[0.97rem]">{w.d}</p>
                </div>
                <span
                  aria-hidden
                  className="hidden sm:inline-grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink/55 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-teal group-hover:text-teal group-hover:rotate-[-12deg]"
                >
                  ↗
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
