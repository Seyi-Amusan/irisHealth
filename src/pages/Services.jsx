import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive physiotherapy & rehab"
        subtitle="Whether you're recovering from injury, surgery, or simply moving better in everyday life — there's a programme here for you."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.slug} className="card flex flex-col">
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={s.icon} />
                </div>
                <span className="text-xs font-semibold text-ink/50">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">{s.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">
                <li className="flex gap-2"><Icon name="check" className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" stroke={2.5}/> 60-minute initial assessment</li>
                <li className="flex gap-2"><Icon name="check" className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" stroke={2.5}/> Tailored home programme</li>
                <li className="flex gap-2"><Icon name="check" className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" stroke={2.5}/> Insurer billing supported</li>
              </ul>
              <Link to="/contact" className="btn-outline mt-6 self-start">Book this service</Link>
            </article>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <section className="bg-brand-50/50 py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Pricing</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Transparent, all-inclusive fees</h2>
            <p className="mt-3 text-ink/70">No hidden charges. We accept all major UK insurers and self-pay clients.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Initial Assessment', price: '£85', dur: '60 minutes', features: ['Full assessment', 'Diagnosis & plan', 'First treatment included', 'Written home programme'] },
              { name: 'Follow-up Session', price: '£65', dur: '45 minutes', features: ['Hands-on treatment', 'Progress review', 'Programme update', 'Insurer billing'], highlight: true },
              { name: 'Sports Massage',     price: '£55', dur: '45 minutes', features: ['Deep-tissue therapy', 'Recovery focus', 'Pre/post-event options', 'Block bookings available'] }
            ].map(p => (
              <div key={p.name} className={`card relative ${p.highlight ? 'ring-2 ring-brand-600' : ''}`}>
                {p.highlight && <span className="absolute -top-3 left-6 rounded-full bg-brand-600 text-white text-xs font-semibold px-3 py-1">Most Popular</span>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-ink/60">{p.dur}</p>
                <p className="mt-4 text-4xl font-extrabold text-brand-700">{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.features.map(f => (
                    <li key={f} className="flex gap-2"><Icon name="check" className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" stroke={2.5}/> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${p.highlight ? 'bg-brand-600 text-white hover:bg-brand-700' : 'border border-brand-600 text-brand-700 hover:bg-brand-50'} transition`}>
                  Book {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      <div className="container-x py-20 md:py-28">
        <span className="eyebrow bg-white/10 text-brand-100">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
