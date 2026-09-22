import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

export default function Problem() {
  return (
    <div id="how" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 pt-28 pb-16 lg:pt-40 lg:pb-20">
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
            PRACTICE EVOLUTION
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              Modernize
            </span>{" "}
            your workflow from intake to output.
          </motion.h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-14">
          <motion.p
            variants={fadeUp}
            className="lede text-ink-2/85 text-[1.1rem] lg:text-[1.18rem] leading-[1.65]"
          >
            This is the lifecycle management your estate practice is missing. Say goodbye to
            fragmented data and unorganized planning histories. Move your firm into a unified
            platform that handles the heavy lifting:
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-6 space-y-4 text-ink-2/85 text-[1.02rem] lg:text-[1.08rem] leading-[1.65]"
          >
            <p><strong className="text-ink">Data Intake:</strong> Seamless entry that can help keep client files current over the years.</p>
            <p><strong className="text-ink">Instant Analysis:</strong> Tools built specifically for Louisiana's distinct legal landscape.</p>
            <p><strong className="text-ink">Client-First Output:</strong> Intuitive visual presentations that clients easily understand.</p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
