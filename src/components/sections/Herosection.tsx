import { useState, useEffect, useRef } from "react";
import { slides } from "../../data/hero";

interface HeadlineProps {
  lines: [string, string];
  accentWords: string[];
}

function Headline({ lines, accentWords }: HeadlineProps) {
  return (
    <>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block ${accentWords.includes(line) ? "text-[#A48ED9]" : "text-white"}`}
        >
          {line}
        </span>
      ))}
    </>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [tabExpanded, setTabExpanded] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number): void => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 600);
  };

  const next = (): void => goTo((current + 1) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, animating]);

  const slide = slides[current]!;

  return (
    <div className="relative w-full font-sans">

      {/* ── HERO CAROUSEL ──────────────────────────────────────────────── */}
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden">

        {/* Slide backgrounds */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}

        {/* Slide content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">

              <div key={`eyebrow-${current}`} className="flex items-center gap-3 mb-5 animate-fadeInUp">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-[#A48ED9]" />
                  <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
                </div>
                <span className="text-[#A48ED9] text-sm font-semibold tracking-widest uppercase">
                  {slide.eyebrow}
                </span>
              </div>

              <h1
                key={`headline-${current}`}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp animation-delay-100"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                <Headline lines={slide.headline} accentWords={slide.accentWords} />
              </h1>

              <p
                key={`sub-${current}`}
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl animate-fadeInUp animation-delay-200"
              >
                {slide.sub}
              </p>

              <div key={`cta-${current}`} className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-300">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:scale-95"
                >
                  {slide.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  {slide.ctaSecondary}
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2.5 bg-[#6B4EC6]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <div key={current} className="h-full bg-[#6B4EC6] animate-progress" />
        </div>

        {/* Sticky tab */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center"
          onMouseEnter={() => setTabExpanded(true)}
          onMouseLeave={() => setTabExpanded(false)}
        >
          <div
            className={`flex items-center gap-3 bg-[#6B4EC6] text-white cursor-pointer transition-all duration-500 ease-out overflow-hidden shadow-2xl shadow-purple-900/50 ${
              tabExpanded ? "rounded-l-2xl pl-5 pr-4 py-4" : "rounded-l-xl py-4 w-10"
            }`}
            style={{ width: tabExpanded ? "auto" : "40px" }}
          >
            <div className="relative flex-shrink-0 w-5 flex justify-center">
              <span className="w-2.5 h-2.5 bg-white rounded-full relative z-10" />
              {!tabExpanded && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-5 h-5 bg-white/30 rounded-full animate-ping" />
                </span>
              )}
            </div>
            <div
              className={`flex items-center gap-3 transition-all duration-300 ${
                tabExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
              }`}
              style={{ whiteSpace: "nowrap" }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Free</p>
                <p className="text-sm font-bold">15-Min Consultation</p>
              </div>
              <a
                href="#"
                aria-label="Book a free 15-minute consultation call"
                className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .animate-fadeInUp    { animation: fadeInUp 0.6s ease-out both; }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animate-progress    { animation: progress 5.5s linear forwards; }
      `}</style>

    </div>
  );
}
