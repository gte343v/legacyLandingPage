import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "../../lib/motion";

const FEATURES = [
  {
    n: "01",
    title: "Guided client intake",
    body: "Secure online questionnaires clients complete at their convenience.",
  },
  {
    n: "02",
    title: "Attorney dashboard",
    body: "Track invitations, progress, completed files, and client activity.",
  },
  {
    n: "03",
    title: "Secure information storage",
    body: "Keep client planning information organized and accessible.",
  },
  {
    n: "04",
    title: "Report generation",
    body: "Produce polished planning summaries and reports in minutes.",
  },
  {
    n: "05",
    title: "Better client experience",
    body: "Deliver a modern, professional onboarding experience.",
  },
  {
    n: "06",
    title: "Scalable growth",
    body: "Serve more families without increasing administrative burden.",
  },
];

export default function Platform() {
  return (
    <div id="platform" className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-28 lg:py-40">
      <motion.div
        className="grid gap-12 lg:grid-cols-12 lg:items-start"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="lg:col-span-7">
          <motion.p variants={fadeUp} className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-teal/50" />
            THE PLATFORM
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mt-6 text-ink max-w-[16ch]">
            Everything you need to run a{" "}
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              modern,
            </span>{" "}
            more{" "}
            <span className="italic text-teal" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              efficient
            </span>{" "}
            planning practice.
          </motion.h2>
        </div>
        <motion.div variants={fadeUp} className="lg:col-span-4 lg:col-start-9 lg:pt-[7.6rem]">
          <p className="lede text-ink-2/85">
            A centralized platform for secure intake, planning, report creation, and ongoing
            client management.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.08, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        {FEATURES.map((f) => (
          <motion.article
            key={f.n}
            variants={fadeUp}
            className="group relative flex flex-col gap-6 bg-paper p-7 lg:p-9 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-cream"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-teal">
                {`No. ${f.n}`}
              </span>
              <span
                aria-hidden
                className="inline-block h-px w-12 bg-ink/15 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20 group-hover:bg-teal"
              />
            </div>
            <h3 className="display-md text-ink leading-[1.05] max-w-[14ch]">{f.title}</h3>
            <p className="text-ink-2/80 leading-[1.65] text-[0.97rem]">{f.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
