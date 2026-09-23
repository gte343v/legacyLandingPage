import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

const WORKFLOWS = [
  {
    t: "Will & trust planning",
    d: "Includes the information needed for your clients to prepare the documents they need to have peace of mind.",
  },
  {
    t: "Succession (probate)",
    d: "After clients lose a loved one, make it as easy as possible for them to get the data needed for an efficient succession process.",
  },
  {
    t: "Power of attorneys",
    d: "Quickly and easily provide a valuable service to your clients who have children moving away.",
  },
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
            Purpose built
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink">
            Designed for{" "}
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              Louisiana
            </span>{" "}
            planning needs.
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mt-7 text-ink-2/85">
            Developed with Louisiana attorneys to address the practice challenges they
            encounter every day.
          </motion.p>

          {/* Image is integrated into the section rather than presented as a
              clickable thumbnail: no hard frame, edges feather into the page. */}
          <motion.figure
            variants={fadeUp}
            className="mt-12 relative aspect-[5/4] w-full max-w-md"
          >
            <img
              src="/assets/legacy-family-hero.png"
              alt="A Louisiana family at home"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                filter: "saturate(0.86) contrast(1.02) brightness(0.98)",
                WebkitMaskImage:
                  "radial-gradient(120% 120% at 30% 30%, #000 45%, transparent 92%)",
                maskImage:
                  "radial-gradient(120% 120% at 30% 30%, #000 45%, transparent 92%)",
              }}
            />
            {/* soft wash so the image reads as part of the page background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,244,239,0) 40%, rgba(247,244,239,0.55) 100%)",
              }}
            />
          </motion.figure>
        </div>

        <motion.div
          className="lg:col-span-6 lg:col-start-7 space-y-6"
          variants={stagger(0.12, 0.2)}
        >
          {WORKFLOWS.map((w, i) => (
            <motion.article
              key={w.t}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-cream p-8 lg:p-10 transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-teal/40"
            >
              {/* oversized serif index, varies the rhythm from card to card */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none font-display italic text-ink/[0.05] leading-none"
                style={{ fontSize: "9rem", fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                {i + 1}
              </span>
              <div className="relative flex items-center gap-3">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-teal">
                  {`No. 0${i + 1}`}
                </span>
                <span className="h-px flex-1 bg-ink/10" />
              </div>
              <h3 className="relative mt-5 display-md text-ink text-[1.6rem] lg:text-[2.05rem] leading-[1.05]">
                {w.t}
              </h3>
              <p className="relative mt-3 max-w-[52ch] text-ink-2/75 leading-[1.65] text-[1.02rem]">
                {w.d}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
