import { motion } from "framer-motion";
import { fadeUp, scaleFade, stagger, VIEWPORT, EASE } from "../../lib/motion";

const CHIPS = [
  { k: "Intake", v: "Engaging and thorough" },
  { k: "Portal", v: "Reliable, secure" },
  { k: "Reports", v: "Ready for you, or edit" },
  { k: "Storage", v: "Organized data" },
];

export default function Preview() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
      <motion.div
        className="grid gap-16 lg:grid-cols-12 lg:items-center"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-5">
          <motion.p variants={fadeUp} className="eyebrow-light text-teal-light flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-cream/30" />
            The experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-cream">
            Secure, premium software for{" "}
            <span className="italic text-teal-light" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              high trust
            </span>{" "}
            client work
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mt-7 text-cream/70">
            Estate planning is personal work. Every screen in Legacy Louisiana is designed
            to be clear and easy to follow, for you and your clients.
          </motion.p>
          <motion.div variants={stagger(0.08, 0.2)} className="mt-8 grid grid-cols-2 gap-3">
            {CHIPS.map((c) => (
              <motion.div
                key={c.k}
                variants={fadeUp}
                className="rounded-xl border border-cream/15 bg-cream/[0.04] p-4"
              >
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/55">
                  {c.k}
                </div>
                <div className="mt-1.5 text-cream/90 text-[0.95rem]">{c.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            variants={scaleFade}
            className="relative rounded-[20px] border border-cream/20 bg-cream/[0.04] p-3 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm"
            style={{ transform: "rotate(-0.6deg)" }}
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between rounded-xl bg-ink/40 px-4 py-2.5 border border-cream/10">
              <div className="flex gap-1.5">
                <span className="block h-2.5 w-2.5 rounded-full bg-cream/25" />
                <span className="block h-2.5 w-2.5 rounded-full bg-cream/25" />
                <span className="block h-2.5 w-2.5 rounded-full bg-cream/25" />
              </div>
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-cream/45 uppercase">
                legacy.app / dashboard
              </span>
              <span className="font-mono text-[0.65rem] text-cream/35">●</span>
            </div>

            {/* Dashboard content mock */}
            <div className="mt-3 grid gap-3 rounded-xl bg-paper p-5 text-ink lg:grid-cols-[1.2fr,2fr]">
              {/* Left rail */}
              <div className="rounded-lg border border-ink/10 bg-cream p-4">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-teal">Matters</div>
                <ul className="mt-3 space-y-2.5 text-[0.85rem]">
                  {[
                    ["Boudreaux Family Trust", "in progress"],
                    ["Theriot Succession", "intake"],
                    ["Hebert Will Revision", "review"],
                    ["LeBlanc Estate Plan", "draft"],
                  ].map(([n, s], i) => (
                    <li key={n} className={`flex items-center justify-between border-b border-ink/8 pb-2.5 last:border-0 last:pb-0 ${i === 0 ? "text-ink" : "text-ink/70"}`}>
                      <span className="font-display text-[0.92rem]" style={{ fontVariationSettings: "'opsz' 24" }}>{n}</span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-teal/80">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column — active matter */}
              <div className="rounded-lg border border-ink/10 bg-cream p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-teal">Active matter</div>
                    <div className="mt-1 font-display text-xl text-ink" style={{ fontVariationSettings: "'opsz' 48" }}>
                      Boudreaux Family Trust
                    </div>
                  </div>
                  <div className="rounded-full bg-teal/12 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-teal">
                    Step 4 / 7
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ink/10">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "57%" }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
                    className="h-full bg-teal"
                  />
                </div>

                {/* Rows */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-[0.78rem]">
                  {[
                    ["Beneficiaries", "6"],
                    ["Assets logged", "23"],
                    ["Documents", "11"],
                  ].map(([k, v]) => (
                    <div key={k} className="min-w-0 rounded-md border border-ink/8 bg-paper px-2 py-2.5 sm:px-3">
                      <div className="whitespace-nowrap font-mono text-[0.48rem] sm:text-[0.6rem] uppercase tracking-[0.08em] sm:tracking-[0.16em] text-muted">{k}</div>
                      <div className="mt-1 font-display text-lg leading-none text-ink" style={{ fontVariationSettings: "'opsz' 48" }}>{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-md bg-paper border border-ink/8 p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-teal">Next step</span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Due Fri</span>
                  </div>
                  <div className="mt-1 text-[0.88rem] text-ink/85">Review asset schedule with client and confirm executor designations.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
