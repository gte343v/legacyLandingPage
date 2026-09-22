/**
 * Shared motion config — long, gentle, premium.
 * One ease and one duration so everything across the site feels cohesive.
 */
export const EASE = [0.22, 1, 0.36, 1]; // smooth, deep ease-out — premium settle
export const DURATION = 1.2;

/* Earlier trigger: starts animating before the element is "obviously" in view,
   so reveals feel discovered, not announced. */
export const VIEWPORT = { once: true, margin: "0px 0px -8% 0px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

export const fadeRise = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.35, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION, ease: EASE } },
};

export const scaleFade = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.35, ease: EASE },
  },
};

export const stagger = (childDelay = 0.09, startDelay = 0.12) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: childDelay,
      delayChildren: startDelay,
    },
  },
});
