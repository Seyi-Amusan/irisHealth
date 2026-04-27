import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600" aria-hidden="true" />
        <div className="absolute inset-0 opacity-25 mix-blend-overlay" aria-hidden="true"
             style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 0, transparent 35%), radial-gradient(circle at 80% 60%, #f59f3b 0, transparent 40%)' }} />
        <div className="container-x relative grid md:grid-cols-2 gap-10 items-center py-20 md:py-32 text-white">
          <div>
            <span className="eyebrow bg-white/10 text-brand-100">Trusted UK Physiotherapy</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Move better. <span className="text-accent">Recover faster.</span> Live stronger.
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              Prohab Clinics combines hands-on physiotherapy with evidence-led rehabilitation —
              so you can get back to the work, sport, and life you love.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-accent">Book Appointment <Icon name="arrow" className="h-4 w-4" /></Link>
              <Link to="/services" className="btn-ghost">Explore Services</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80">
              <div className="flex items-center gap-2"><Icon name="shield" className="h-5 w-5 text-accent" /> HCPC Registered</div>
              <div className="flex items-center gap-2"><Icon name="award"  className="h-5 w-5 text-accent" /> 4.9★ Patient Rating</div>
              <div className="flex items-center gap-2"><Icon name="clock"  className="h-5 w-5 text-accent" /> Same-week Appointments</div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-2xl" aria-hidden="true" />
            <div className="relative grid gap-4">
              <div className="rounded-3xl bg-white/95 text-ink p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon name="heart" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink/60 font-semibold">Free 15-min consult</p>
                    <p className="font-semibold">Talk to a physio first.</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[
                    { v: '14+', l: 'Years experience' },
                    { v: '12k', l: 'Patients treated' },
                    { v: '98%', l: 'Would recommend' }
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl bg-brand-50/60 p-3">
                      <p className="text-2xl font-extrabold text-brand-700">{s.v}</p>
                      <p className="text-[11px] uppercase tracking-wide text-ink/60 font-semibold mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-accent/95 text-white p-5 shadow-soft">
                  <Icon name="clock" className="h-6 w-6" />
                  <p className="mt-3 text-sm font-semibold">Open today</p>
                  <p className="text-xs opacity-90">Mon–Fri 8am – 8pm</p>
                </div>
                <div className="rounded-3xl bg-brand-700 text-white p-5 shadow-soft">
                  <Icon name="pin" className="h-6 w-6" />
                  <p className="mt-3 text-sm font-semibold">Central London</p>
                  <p className="text-xs opacity-90">12 Wellness Road, EC1A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-y border-black/5 bg-brand-50/40">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-y-3 text-sm text-ink/60">
          <span className="font-semibold text-ink/70">Recognised by:</span>
          {['BUPA','AXA Health','Aviva','VitalityHealth','WPA','HCPC'].map(p => (
            <span key={p} className="font-display font-bold tracking-tight text-ink/40 hover:text-ink/70 transition">{p}</span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <Section
        eyebrow="What we treat"
        title="Specialist care for every stage of recovery"
        subtitle="From acute injuries to long-term conditions, our team delivers tailored treatment plans backed by the latest research."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map(s => (
            <Link to="/services" key={s.slug} className="card hover:-translate-y-1 hover:shadow-lg transition group">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition">
                <Icon name={s.icon} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Learn more <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <section className="bg-brand-50/50 py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-700 to-brand-500 shadow-soft relative overflow-hidden">
              <div className="absolute inset-0 opacity-30"
                   style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #fff 0, transparent 40%), radial-gradient(circle at 70% 80%, #f59f3b 0, transparent 35%)' }} />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <Icon name="award" className="h-7 w-7 text-accent" />
                  <div>
                    <p className="font-bold">Outcome-focused care</p>
                    <p className="text-xs text-ink/60">Goals set on day one. Progress tracked every visit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5">
              <p className="text-3xl font-extrabold text-brand-700">4.9<span className="text-base font-bold">/5</span></p>
              <div className="flex gap-1 mt-1 text-accent">
                {Array.from({length: 5}).map((_,i) => <Icon key={i} name="star" className="h-4 w-4" />)}
              </div>
              <p className="text-xs mt-2 text-ink/60">Based on 1,200+ patient reviews</p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Why Prohab</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              A team that treats <span className="text-brand-600">you</span>, not just your symptoms.
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Every patient gets a personalised plan, hands-on treatment, and an active rehab programme — not a one-size-fits-all approach.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                ['One-to-one care', 'Full 45-minute sessions with the same clinician throughout your journey.'],
                ['Evidence-based treatment', 'Treatments grounded in the latest peer-reviewed research and clinical guidelines.'],
                ['Direct insurer billing', 'We work with all major UK insurers — minimal admin, no surprises.'],
                ['Same-week availability', 'Appointments often within 48 hours. Saturday slots available.']
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon name="check" className="h-5 w-5" stroke={2.5} />
                  </span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="text-sm text-ink/65">{d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-3">
              <Link to="/about" className="btn-primary">More about us</Link>
              <Link to="/team" className="btn-outline">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Section
        eyebrow="How it works"
        title="Your journey to recovery"
        subtitle="Three clear steps — from your first call to feeling like yourself again."
        center
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: '01', t: 'Book your assessment', d: 'Call us or book online. Same-week appointments available across all our clinics.' },
            { n: '02', t: 'Personalised plan',     d: 'A 60-minute deep-dive assessment plus a clear, written rehab plan tailored to your goals.' },
            { n: '03', t: 'Treatment & progress',  d: 'Hands-on treatment plus active rehab. We track every milestone with you.' }
          ].map(s => (
            <div key={s.n} className="card relative overflow-hidden">
              <span className="absolute -top-6 -right-2 text-7xl font-extrabold text-brand-50">{s.n}</span>
              <p className="relative text-sm font-semibold text-brand-700">{s.n}</p>
              <h3 className="relative mt-2 text-xl font-bold">{s.t}</h3>
              <p className="relative mt-2 text-ink/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-brand-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <span className="eyebrow bg-white/10 text-brand-200">From our patients</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Real stories. Real results.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_,i) => <Icon key={i} name="star" className="h-5 w-5" />)}
                </div>
                <p className="mt-4 text-white/90 leading-relaxed">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 font-bold">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
