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

        <div className="lg:col-span-6 lg:pt-24">
          <motion.p variants={fadeUp} className="lede text-muted">
            Your reputation is your firm's most valuable asset. Legacy Louisiana replaces
            manual friction and delays with a sleek, responsive digital platform. By
            delivering the modern, high-end experience today’s clients demand, you
            cultivate lifelong advocates who confidently refer new business to your firm.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
