import { aboutContent } from "../../data/about";

export default function AboutSection() {
  const { eyebrow, headlinePlain, headlineAccent, paragraphs, cta, image, imageAlt } = aboutContent;

  return (
    <section className="bg-[#F3F0FB] dark:bg-[#0D0D1A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ──────────────────────────────────────────────── */}
          <div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#6B4EC6]" />
                <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
              </div>
              <span className="text-[#6B4EC6] text-sm font-semibold tracking-widest uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-gray-900 dark:text-white"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {headlinePlain}{" "}
              <span className="text-[#6B4EC6]">{headlineAccent}</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 mb-10">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:scale-95"
            >
              {cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

          </div>

          {/* ── Right: Image ─────────────────────────────────────────────── */}
          <div className="relative">

            {/* Purple accent block behind image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#6B4EC6]/10 dark:bg-[#6B4EC6]/20" />

            {/* Border accent top-left */}
            <div className="absolute -top-3 -left-3 w-20 h-20 rounded-tl-2xl border-t-4 border-l-4 border-[#6B4EC6]/40" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/15">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[480px] lg:h-[540px] object-cover"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}