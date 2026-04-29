import { useRef, useState } from "react";
import { servicesData } from "../../data/services";
import type { ServiceCard } from "../../types";

// ── Arrow Button ───────────────────────────────────────────────────────────

interface ArrowButtonProps {
  active?: boolean;
}

function ArrowButton({ active = false }: ArrowButtonProps) {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
        active
          ? "bg-[#6B4EC6] text-white shadow-lg shadow-purple-500/40"
          : "bg-white/90 dark:bg-white/10 text-gray-700 dark:text-white"
      }`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </div>
  );
}

// ── Photo Card ─────────────────────────────────────────────────────────────

function PhotoCard({ card }: { card: ServiceCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[280px] sm:w-[300px] h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.imageAlt ?? card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Arrow button — top right */}
      <div className="absolute top-4 right-4 z-10">
        <ArrowButton active={hovered} />
      </div>

      {/* Text — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {card.tag && (
          <p className="text-[#A48ED9] text-xs font-semibold uppercase tracking-widest mb-2">
            {card.tag}
          </p>
        )}
        <h3 className="text-white text-xl font-semibold leading-snug mb-3">
          {card.title}
        </h3>
        <div className="w-10 h-px bg-white/40 group-hover:w-16 group-hover:bg-[#6B4EC6] transition-all duration-300" />
      </div>
    </div>
  );
}

// ── Solid Card ─────────────────────────────────────────────────────────────

function SolidCard({ card }: { card: ServiceCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[280px] sm:w-[300px] h-[400px] rounded-2xl overflow-hidden cursor-pointer group bg-[#1E1E38] dark:bg-[#151528] border border-white/5 flex flex-col justify-between p-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Purple glow on hover */}
      <div className="absolute inset-0 bg-[#6B4EC6]/0 group-hover:bg-[#6B4EC6]/10 transition-colors duration-300 rounded-2xl" />

      {/* Arrow button */}
      <div className="self-end z-10">
        <ArrowButton active={hovered} />
      </div>

      {/* Text — bottom */}
      <div className="z-10">
        {card.tag && (
          <p className="text-[#A48ED9] text-xs font-semibold uppercase tracking-widest mb-3">
            {card.tag}
          </p>
        )}
        <h3 className="text-white text-2xl font-semibold leading-snug mb-4">
          {card.title}
        </h3>
        <div className="w-10 h-px bg-white/20 group-hover:w-16 group-hover:bg-[#6B4EC6] transition-all duration-300" />
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function ServicesSection() {
  const { eyebrow, headlineStart, headlineAccent, headlineEnd, footnote, cards } = servicesData;

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = cards.length;

  // Drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.pageX - startX.current;
    trackRef.current.scrollLeft = scrollStart.current - delta;
    updateDot();
  };

  const onMouseUp = () => { isDragging.current = false; };

  const updateDot = () => {
    if (!trackRef.current) return;
    const cardWidth = 316; // 300px + gap
    const idx = Math.round(trackRef.current.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, totalDots - 1));
  };

  const scrollToCard = (idx: number) => {
    if (!trackRef.current) return;
    const cardWidth = 316;
    trackRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
    setActiveIndex(idx);
  };

  return (
    <section className="bg-white dark:bg-[#0D0D1A] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-14">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#6B4EC6]" />
            <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
            <span className="text-[#6B4EC6] text-sm font-semibold tracking-widest uppercase">
              {eyebrow}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
            <div className="w-8 h-px bg-[#6B4EC6]" />
          </div>

          {/* Headline */}
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white max-w-3xl mx-auto"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {headlineStart}{" "}
            <span className="text-[#6B4EC6]">{headlineAccent}</span>{" "}
            {headlineEnd}
          </h2>
        </div>

      </div>

      {/* ── Carousel (full bleed so cards can scroll edge to edge) ───── */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-4 sm:px-8 lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))] cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onScroll={updateDot}
      >
        {cards.map((card, i) =>
          card.variant === "photo" ? (
            <PhotoCard key={i} card={card} />
          ) : (
            <SolidCard key={i} card={card} />
          )
        )}
        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* ── Dots + Footnote ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col items-center gap-6">

        {/* Dots */}
        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2.5 bg-[#6B4EC6]"
                  : "w-2.5 h-2.5 bg-gray-300 dark:bg-white/20 hover:bg-[#A48ED9]"
              }`}
            />
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm max-w-2xl leading-relaxed">
          {footnote}
        </p>

      </div>
    </section>
  );
}