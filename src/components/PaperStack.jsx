import { Children, cloneElement, isValidElement, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * PaperSheet — one layer in the Docere-style stack.
 * Sticky-pinned at the top so it stays put while the next sheet rises over it.
 * Adds a subtle scale + tint as it goes "underneath" the next sheet, giving depth.
 */
export function PaperSheet({
  id,
  variant = "paper",
  index = 0,
  total = 1,
  children,
}) {
  const ref = useRef(null);

  // Track this sheet against the next one rising up
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // As the NEXT sheet covers this one, push this one back slightly
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.965]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.28]);

  const variantClass =
    variant === "ink"
      ? "paper-sheet--ink"
      : variant === "teal"
      ? "paper-sheet--teal"
      : variant === "cream"
      ? "paper-sheet--cream"
      : variant === "paper2"
      ? "paper-sheet--paper2"
      : "";

  const isLast = index === total - 1;

  return (
    <section
      ref={ref}
      id={id}
      style={{ zIndex: 10 + index }}
      className={`paper-stack-slot sticky top-0 ${isLast ? "" : "min-h-screen"}`}
    >
      <motion.div
        style={{ scale, y }}
        className={`paper-sheet ${variantClass} grain relative overflow-hidden`}
      >
        <div className="relative z-[1]">{children}</div>
        {/* Dimming overlay so this sheet recedes as the next covers it */}
        <motion.div
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 z-[2] bg-ink"
        />
      </motion.div>
    </section>
  );
}

export default function PaperStack({ children }) {
  const sheets = Children.toArray(children).filter(isValidElement);
  const total = sheets.length;
  return (
    <div className="relative">
      {sheets.map((child, i) =>
        cloneElement(child, { index: i, total, key: child.key ?? i })
      )}
    </div>
  );
}
