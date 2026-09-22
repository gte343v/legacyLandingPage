import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT, EASE } from "../../lib/motion";


export default function Attorneys() {
  return (
    <div id="attorneys" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
      <motion.div
        className="grid gap-14 lg:grid-cols-12 lg:gap-16"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-6">
          <motion.p variants={fadeUp} className="eyebrow flex items-center gap-3 text-teal">
            <span className="inline-block h-px w-10 bg-teal/40" />
            For attorneys
          </motion.p>

          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
            Exceptional{" "}
            <span
              className="italic text-teal"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              client experiences
            </span>{" "}
            yield exceptional{" "}
            <span
              className="italic text-teal"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              firm growth
            </span>
            .
          </motion.h2>
        </div>

        <div className="lg:col-span-6 lg:pt-16">
          <motion.div variants={fadeUp} className="border-t border-ink/15">
            {[
              {
                no: "01",
                title: "Better client experience",
                copy: "A modern, responsive planning experience.",
              },
              {
                no: "02",
                title: "Stronger relationships",
                copy: "Stay connected as client needs evolve.",
              },
              {
                no: "03",
                title: "More referrals & firm growth",
                copy: "Turn great experiences into lasting advocacy.",
              },
            ].map((item, index) => (
              <div
                key={item.no}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-5 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.18em] text-teal/70">
                  {item.no}
                </span>
                <div>
                  <h3
                    className={`font-display text-[1.35rem] leading-tight ${
                      index === 2 ? "italic text-teal" : "text-ink"
                    }`}
                    style={index === 2 ? { fontVariationSettings: "'opsz' 144, 'SOFT' 100" } : undefined}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.94rem] leading-[1.55] text-muted">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
