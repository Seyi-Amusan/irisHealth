import { useState, useEffect, useRef } from "react";
import { testimonialsContent } from "../../data/testimonials";

// ── Star Rating ────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-[#6B4EC6]" : "text-white/20"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Nav Arrow Button ───────────────────────────────────────────────────────

interface NavArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
}

function NavArrow({ direction, onClick }: NavArrowProps) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="w-12 h-12 rounded-full bg-white/15 hover:bg-[#6B4EC6] border border-white/20 hover:border-[#6B4EC6] text-white flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  const {
    eyebrow,
    headlinePlain,
    headlineAccent,
    headlineEnd,
    backgroundImage,
    testimonials,
  } = testimonialsContent;

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const transitionTo = (idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 350);
  };

  const prev = () =>
    transitionTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    transitionTo((current + 1) % testimonials.length);

  // Auto-advance every 7s
  useEffect(() => {
    timerRef.current = setInterval(next, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  const t = testimonials[current];

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[680px] overflow-hidden">

      {/* ── Background image (static) ─────────────────────────────────── */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[500px]">

          {/* Left — empty on desktop (image shows through), visible label on mobile */}
          <div className="hidden lg:block" />

          {/* Right — text content */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#A48ED9]" />
                <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
              </div>
              <span className="text-[#A48ED9] text-sm font-semibold tracking-widest uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Static headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-10"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {headlinePlain}{" "}
              <span className="text-[#A48ED9]">{headlineAccent}</span>{" "}
              {headlineEnd}
            </h2>

            {/* ── Animated testimonial content ──────────────────────── */}
            <div
              className="transition-all duration-350 ease-in-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {/* Quote */}
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-8 relative">
                {/* Opening quote mark */}
                <span className="absolute -top-4 -left-2 text-5xl text-[#6B4EC6]/40 font-serif leading-none select-none">
                  "
                </span>
                <span className="relative">{t.quote}</span>
              </blockquote>

              {/* Stars */}
              <div className="mb-6">
                <StarRating rating={t.rating} />
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-white/20 mb-6" />

              {/* Name + tag */}
              <div className="mb-10">
                <p className="text-white text-xl font-semibold">{t.name}</p>
                <p className="text-[#A48ED9] text-sm font-medium mt-1">{t.tag}</p>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-3">
                <NavArrow direction="prev" onClick={prev} />
                <NavArrow direction="next" onClick={next} />

                {/* Dot indicators */}
                <div className="flex items-center gap-2 ml-3">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => transitionTo(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-6 h-2 bg-[#6B4EC6]"
                          : "w-2 h-2 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}