import type { ReactElement } from "react";
import { whyUsContent } from "../../data/whyUs";

// ── Inline SVG icon map (Lucide-style, no package dependency risk) ──────────

const icons: Record<string, ReactElement> = {
  "shield-check": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  "award": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  "clock": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  "building-2": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
    </svg>
  ),
  "cpu": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
};

// ── Main Component ─────────────────────────────────────────────────────────

export default function WhyUsSection() {
  const { left, right } = whyUsContent;

  return (
    <section className="bg-[#F3F0FB] dark:bg-[#0D0D1A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── LEFT COLUMN ───────────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#6B4EC6]" />
                <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
              </div>
              <span className="text-[#6B4EC6] text-sm font-semibold tracking-widest uppercase">
                {left.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-12"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {left.headlinePlain}{" "}
              <span className="text-[#6B4EC6]">{left.headlineAccent}</span>
            </h2>

            {/* Feature list */}
            <ul className="space-y-8">
              {left.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-5 group">
                  {/* Icon circle */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#6B4EC6] dark:bg-[#6B4EC6] text-white flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 group-hover:scale-105 transition-all duration-300">
                    {icons[feature.icon]}
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT COLUMN ──────────────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#6B4EC6]" />
                <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
              </div>
              <span className="text-[#6B4EC6] text-sm font-semibold tracking-widest uppercase">
                {right.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-8"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {right.headlinePlain}{" "}
              <span className="text-[#6B4EC6]">{right.headlineAccent}</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 mb-10">
              {right.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-[#6B4EC6]/30 mb-10" />

            {/* CTA */}
            <div>
              <a
                href={right.ctaHref}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:scale-95 group"
              >
                {right.cta}
                <span className="flex items-center justify-center w-7 h-7 bg-white/20 group-hover:bg-white/30 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
