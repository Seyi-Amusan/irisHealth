import { aboutCommitmentContent } from "../../data/aboutCommitment";

export default function AboutCommitment() {
  const { eyebrow, heading, paragraph, listHeading, bullets, images } =
    aboutCommitmentContent;

  return (
    <section className="bg-white dark:bg-[#151528] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ───────────────────────────────────────────── */}
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

            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {heading}
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {paragraph}
            </p>

            {/* List heading */}
            <p className="text-gray-900 dark:text-white font-semibold text-base mb-5">
              {listHeading}
            </p>

            {/* Bullet list */}
            <ul className="space-y-4">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#6B4EC6] mt-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Two images side by side ────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[360px]">
              <img
                src={images.left.src}
                alt={images.left.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[360px]">
              <img
                src={images.right.src}
                alt={images.right.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}