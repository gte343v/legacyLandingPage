export default function Footer() {
  return (
    <footer id="about" className="relative z-10 bg-ink text-cream/65">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/assets/legacy-logo.svg"
              alt="Legacy Louisiana, LLC"
              className="block h-14 w-auto rounded-sm"
            />
            <p className="mt-6 max-w-md text-[0.78rem] leading-[1.7] text-cream/45">
              Legacy Louisiana, LLC is an estate planning management and technology platform for
              attorneys. Legacy Louisiana is not a law firm and does not provide legal services.
              Attorneys using the platform remain solely responsible for the legal services they
              provide to their clients.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/45">Platform</h4>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              <li><a className="link-underline hover:text-cream" href="#platform">Client intake</a></li>
              <li><a className="link-underline hover:text-cream" href="#platform">Attorney dashboard</a></li>
              <li><a className="link-underline hover:text-cream" href="#platform">Reports & storage</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/45">Practice</h4>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              <li><a className="link-underline hover:text-cream" href="#attorneys">For attorneys</a></li>
              <li><a className="link-underline hover:text-cream" href="#louisiana">Louisiana</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/45">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              <li>
                <a className="link-underline hover:text-cream" href="mailto:admin@legacylouisiana.com">
                  admin@legacylouisiana.com
                </a>
              </li>
              <li className="text-cream/55">212 Park Place</li>
              <li className="text-cream/55">Covington, LA 70433</li>
              <li>
                <a className="link-underline hover:text-cream" href="https://www.legacylouisiana.com/account/login">
                  Account login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/12 pt-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/45 lg:flex-row lg:items-center">
          <span>© 2026 Legacy Louisiana, LLC</span>
          <span>Louisiana estate planning technology</span>
          <span>Covington, Louisiana</span>
        </div>
      </div>
    </footer>
  );
}
