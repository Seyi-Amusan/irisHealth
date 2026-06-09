interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-[#0D0D1A] pt-40 pb-20 overflow-hidden">
      {/* Purple glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6B4EC6]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i < breadcrumbs.length - 1 ? (
                <>
                  <a
                    href={crumb.href}
                    className="text-gray-400 hover:text-[#A48ED9] transition-colors duration-200"
                  >
                    {crumb.label}
                  </a>
                  <span className="text-gray-600">/</span>
                </>
              ) : (
                <span className="text-[#A48ED9] font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}