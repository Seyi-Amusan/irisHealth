import { aboutStoryContent } from "../../data/aboutStory";

export default function AboutStory() {
  const { eyebrow, heading, paragraphs, pullQuote, cta, ctaHref, images } =
    aboutStoryContent;

  return (
    <section className="bg-[#F3F0FB] dark:bg-[#0D0D1A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Image collage ───────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-4 h-full">

            {/* Tall image — spans full height on left */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow-xl h-[420px] sm:h-[500px] lg:h-full min-h-[420px]">
              <img
                src={images.tall.src}
                alt={images.tall.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Top-right image */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[200px] sm:h-[240px]">
              <img
                src={images.topRight.src}
                alt={images.topRight.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom-right image */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[200px] sm:h-[240px]">
              <img
                src={images.bottomRight.src}
                alt={images.bottomRight.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

          {/* ── Right: Text ───────────────────────────────────────────── */}
          <div className="flex flex-col justify-center">

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

            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-7"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {heading}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-[#6B4EC6] pl-5 mb-8">
              <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed italic">
                {pullQuote}
              </p>
            </blockquote>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-white/10 mb-8" />

            {/* CTA */}
            <div>
              <a
                href={ctaHref}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:scale-95 group"
              >
                {cta}
                <span className="flex items-center justify-center w-7 h-7 bg-white/20 group-hover:bg-white/30 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
