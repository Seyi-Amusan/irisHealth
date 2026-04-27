export default function Section({ id, eyebrow, title, subtitle, children, className = '', center = false, dark = false }) {
  return (
    <section id={id} className={`${dark ? 'bg-brand-900 text-white' : ''} py-20 md:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <div className={`mb-12 ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
            {eyebrow && <span className={`eyebrow ${dark ? 'bg-white/10 text-brand-200' : ''}`}>{eyebrow}</span>}
            {title && (
              <h2 className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${dark ? 'text-white' : 'text-ink'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-ink/70'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
