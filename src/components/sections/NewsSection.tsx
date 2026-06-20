import { useRef, useState } from "react";
import { newsContent } from "../../data/news";
import type { Article } from "../../data/news";

// ── Article Card ───────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white dark:bg-[#151528] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-white/5 flex flex-col">

      {/* Image banner */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Purple overlay */}
        <div className="absolute inset-0 bg-[#6B4EC6]/40" />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">

        {/* Tag + date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-[#F3F0FB] dark:bg-[#1E1E38] text-[#6B4EC6] text-xs font-semibold rounded-full">
            {article.tag}
          </span>
          <span className="text-gray-400 dark:text-gray-500 text-sm">
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-gray-900 dark:text-white font-bold text-lg leading-snug mb-3"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {article.excerpt}
        </p>

        {/* Read more link */}
        <a
          href={article.href}
          className="inline-flex items-center gap-2 text-[#6B4EC6] dark:text-[#A48ED9] font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          Read Article
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function NewsSection() {
  const { eyebrow, headlinePlain, headlineAccent, articles, viewAllHref } = newsContent;

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    trackRef.current.scrollLeft = scrollStart.current - (e.pageX - startX.current);
    updateDot();
  };

  const onMouseUp = () => { isDragging.current = false; };

  const updateDot = () => {
    if (!trackRef.current) return;
    const cardWidth = 356;
    setActiveIndex(Math.min(Math.round(trackRef.current.scrollLeft / cardWidth), articles.length - 1));
  };

  const scrollToCard = (idx: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: idx * 356, behavior: "smooth" });
    setActiveIndex(idx);
  };

  return (
    <section className="bg-[#F3F0FB] dark:bg-[#0D0D1A] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#6B4EC6]" />
            <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
            <span className="text-[#6B4EC6] text-sm font-semibold tracking-widest uppercase">
              {eyebrow}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#6B4EC6]" />
            <div className="w-8 h-px bg-[#6B4EC6]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {headlinePlain}{" "}
            <span className="text-[#6B4EC6]">{headlineAccent}</span>
          </h2>
        </div>

      </div>

      {/* ── Carousel ────────────────────────────────────────────────────── */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4 sm:px-8 lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))] cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onScroll={updateDot}
      >
        {articles.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* ── Dots + View All button ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col items-center gap-8">

        {/* Dots */}
        <div className="flex items-center gap-2">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to article ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2.5 bg-[#6B4EC6]"
                  : "w-2.5 h-2.5 bg-gray-300 dark:bg-white/20 hover:bg-[#A48ED9]"
              }`}
            />
          ))}
        </div>

        {/* View All Articles button
        <a
          href={viewAllHref}
          className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#6B4EC6] text-[#6B4EC6] dark:text-[#A48ED9] dark:border-[#A48ED9] font-semibold rounded-xl hover:bg-[#6B4EC6] hover:text-white dark:hover:bg-[#6B4EC6] dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
        >
          View All Articles
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a> */}

      </div>
    </section>
  );
}