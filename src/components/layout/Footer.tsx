import type { ReactElement } from "react";
import { footerContent } from "../../data/footer";
import type { FooterContactItem } from "../../data/footer";

// ── Social Icons ───────────────────────────────────────────────────────────

const socialIcons: Record<string, ReactElement> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};


// ── Iris Logo Icon ─────────────────────────────────────────────────────────

function IrisLogoIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C16 2 10 8 10 16C10 20 12 23 16 24C20 23 22 20 22 16C22 8 16 2 16 2Z" fill="#6B4EC6" opacity="0.9" />
      <path d="M16 24C16 24 6 20 4 14C3 10 5 7 8 7C11 7 13 10 14 13" stroke="#6B4EC6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M16 24C16 24 26 20 28 14C29 10 27 7 24 7C21 7 19 10 18 13" stroke="#6B4EC6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <line x1="16" y1="24" x2="16" y2="36" stroke="#6B4EC6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="12" y2="34" stroke="#6B4EC6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <line x1="16" y1="30" x2="20" y2="34" stroke="#6B4EC6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function Footer() {
  const { tagline, mission, socials, columns, contact, legal } = footerContent;

  return (
    <footer className="bg-[#0D0D1A] text-white">

      {/* ── Top CTA strip ─────────────────────────────────────────────── */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg">Ready to take control of your health?</p>
            <p className="text-gray-400 text-sm mt-1">Book a consultation today — same-day slots available.</p>
          </div>
          <a
            href={contact.ctaHref}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            {contact.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Main footer grid ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-[#A48ED9] text-sm font-semibold italic mb-3">{tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{mission}</p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#6B4EC6] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {socialIcons[s.platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 & 3 — Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#A48ED9] text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#6B4EC6]/0 group-hover:bg-[#6B4EC6] transition-colors duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              {contact.heading}
            </h4>
            <ul className="space-y-4">
              {contact.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-3 text-gray-400 hover:text-[#A48ED9] transition-colors duration-200 group"
                    >
                      <span className="text-sm leading-relaxed">{item.value}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-400">
                      <span className="text-sm leading-relaxed">{item.value}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{legal.copyright}</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {legal.links.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-[#A48ED9] text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
                {i < legal.links.length - 1 && (
                  <span className="w-px h-3 bg-white/10" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
