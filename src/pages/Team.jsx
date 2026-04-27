import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import CTASection from '../components/CTASection.jsx'
import { team } from '../data/team.js'

export default function Team() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <span className="eyebrow bg-white/10 text-brand-100">Our Team</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Specialist clinicians, united by a passion for great care.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Every Prohab clinician is HCPC-registered and trained in the latest evidence-based assessment and treatment.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(p => (
            <article key={p.name} className="card text-center">
              <div className={`mx-auto h-32 w-32 rounded-full bg-gradient-to-br ${p.color} grid place-items-center text-white text-3xl font-extrabold shadow-soft`}>
                {p.initials}
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
              <p className="text-sm font-semibold text-brand-700">{p.role}</p>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{p.bio}</p>
              <div className="mt-5 flex justify-center gap-2">
                {['linkedin','mail'].map(s => (
                  <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white transition">
                    <Icon name={s === 'mail' ? 'mail' : 'shield'} className="h-4 w-4"/>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-50/50 py-20 md:py-28">
        <div className="container-x text-center max-w-2xl mx-auto">
          <span className="eyebrow">Join us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">We're hiring great clinicians.</h2>
          <p className="mt-3 text-ink/70">If you believe in slower, better, patient-centred physiotherapy — we'd love to hear from you.</p>
          <a href="mailto:careers@prohabclinics.co.uk" className="btn-primary mt-8">Send us your CV</a>
        </div>
      </section>

      <CTASection />
    </>
  )
}
