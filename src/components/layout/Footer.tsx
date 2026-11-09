export function Footer() {
  return (
    <footer className="relative border-t border-sky-400/15 bg-[#040b12]/80 px-6 py-10 backdrop-blur-md">
      {/* Subtle Top Luminous Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        {/* Brand Name matching Navbar */}
        <span className="font-mono text-sm font-medium tracking-widest text-slate-100">
          PRAVINKUMAR <span className="text-sky-400">K</span>
        </span>

        {/* Social & Contact Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Pravin671231"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pravinkumar31"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-sky-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pravinkumar671231@gmail.com"
            className="transition-colors duration-200 hover:text-sky-300"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <span className="font-mono text-xs text-slate-500">
          © 2026 Pravinkumar K
        </span>
      </div>
    </footer>
  );
}
