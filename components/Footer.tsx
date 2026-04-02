"use client";

const footerLinks = {
  Products: ["Zenith X Pro", "Zenith X Sport", "Zenith X Studio", "Accessories", "Compare"],
  Support: ["Help Center", "Warranty", "Returns", "Contact Us", "Firmware Updates"],
  Company: ["About", "Careers", "Press", "Sustainability", "Investors"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  return (
    <footer id="about" className="relative border-t border-white/5">
      {/* Top gradient */}
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Newsletter row */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white/90">
              Stay in the loop
            </h3>
            <p className="text-sm font-light text-white/50">
              Get notified about new products, exclusive drops, and audio insights.
            </p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/25 focus:bg-white/8"
            />
            <button className="shrink-0 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-white/40 transition-colors duration-200 hover:text-white/80"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-white"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 19V6l12-3v13" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="19" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight text-white/80">
              Zenith<span className="text-white/40"> X</span>
            </span>
          </div>

          <p className="text-xs font-light text-white/30">
            © 2026 Zenith X Audio. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              // Twitter/X
              <svg key="x" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>,
              // Instagram
              <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>,
              // YouTube
              <svg key="yt" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
              </svg>,
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 hover:bg-white/10 hover:text-white/80"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
