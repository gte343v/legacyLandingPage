import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "For Attorneys", href: "#attorneys" },
  { label: "Louisiana", href: "#louisiana" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,background,box-shadow] duration-300 ${
        scrolled
          ? "py-2 bg-ink/90 backdrop-blur-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]"
          : "py-3 bg-gradient-to-b from-ink/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 sm:px-10 lg:px-14">
        <a href="#top" className="block shrink-0" aria-label="Legacy Louisiana home">
          <img
            src="/assets/legacy-logo.svg"
            alt="Legacy Louisiana, LLC"
            className="block h-9 sm:h-10 w-auto rounded-[3px]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-[0.86rem]">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-cream/75 transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://www.legacylouisiana.com/account/login"
            className="text-[0.86rem] text-cream/75 transition-colors hover:text-cream"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2 text-[0.84rem] font-medium text-cream transition-all hover:bg-teal-2"
          >
            Request demo
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-cream/25 text-cream"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-px w-full bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-5 mt-3 rounded-2xl border border-cream/15 bg-ink/95 backdrop-blur-xl p-3"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-cream/80 hover:bg-cream/10 hover:text-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 block rounded-xl bg-cream px-4 py-3 text-center font-medium text-ink">
              Request demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
