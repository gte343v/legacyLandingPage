import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

export default function CTA() {
  return (
    <div id="contact" className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
      <motion.div
        className="grid gap-14 lg:grid-cols-12 lg:items-end"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-7">
          <motion.h2 variants={fadeUp} className="display-xl text-cream">
            Modernize your{" "}
            <span className="italic text-teal-light" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              practice.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mt-7 text-cream/70 max-w-[52ch]">
            See how Legacy Louisiana can help your firm save time, improve client experience,
            and grow efficiently.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:admin@legacylouisiana.com"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-[0.95rem] font-medium text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-teal-light"
            >
              Schedule a demo
              <span
                aria-hidden
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="mailto:admin@legacylouisiana.com"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-[0.95rem] text-cream/85 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-cream hover:text-cream"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-7">
            <p className="eyebrow-light">Get in touch</p>
            <p
              className="mt-4 font-display text-2xl text-cream"
              style={{ fontVariationSettings: "'opsz' 48, 'SOFT' 60" }}
            >
              admin@legacylouisiana.com
            </p>
            <div className="mt-6 grid gap-3 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-cream/55">
              <div className="flex justify-between border-b border-cream/15 pb-3">
                <span>Covington, LA</span>
                <span className="text-cream/85">HQ</span>
              </div>
              <div className="flex justify-between border-b border-cream/15 pb-3">
                <span>Hours</span>
                <span className="text-cream/85">Mon to Fri</span>
              </div>
              <div className="flex justify-between">
                <span>Response</span>
                <span className="text-cream/85">&lt; 24h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative seal */}
      <div aria-hidden className="pointer-events-none absolute -right-12 -top-6 hidden lg:block opacity-25">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <circle cx="110" cy="110" r="108" stroke="#8fd0d5" strokeWidth="0.5" />
          <circle cx="110" cy="110" r="92" stroke="#8fd0d5" strokeWidth="0.5" />
          <circle cx="110" cy="110" r="74" stroke="#8fd0d5" strokeWidth="0.5" strokeDasharray="2 6" />
          <text
            x="110"
            y="116"
            textAnchor="middle"
            fontFamily="Fraunces, serif"
            fontSize="22"
            fontStyle="italic"
            fill="#8fd0d5"
          >
            LL
          </text>
        </svg>
      </div>
    </div>
  );
}
