import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import CTASection from '../components/CTASection.jsx'

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow bg-white/10 text-brand-100">About Prohab</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              People-first physiotherapy since 2011.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              We started with one clinic and a clear belief: rehabilitation works best when patients feel heard, supported, and progressing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '14+', l: 'Years in practice' },
              { v: '12k+', l: 'Patients treated' },
              { v: '4', l: 'Clinic locations' },
              { v: '20', l: 'Specialist clinicians' }
            ].map(s => (
              <div key={s.l} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur">
                <p className="text-4xl font-extrabold">{s.v}</p>
                <p className="text-sm text-white/70 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Our story"
        title="Built around outcomes that matter to you"
        subtitle="From acute sports injury to long-term back pain, we've spent over a decade refining a model of care that puts the patient back in charge of their recovery."
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              Prohab Clinics was founded in 2011 by a small group of clinicians who shared a frustration with rushed, ten-minute appointments
              and template treatment plans. We knew patients deserved better.
            </p>
            <p>
              Today, our therapists treat everyone from international athletes to office workers in chronic pain — but the principle is unchanged:
              every patient gets a full assessment, a clear plan, and the time and tools to get back to what matters.
            </p>
            <p>
              We invest heavily in clinician development and the latest evidence-based practice, so the care you receive at Prohab today
              reflects the very best of modern physiotherapy.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { i: 'heart', t: 'Patient-centred', d: 'Your goals shape your plan — not the other way around.' },
              { i: 'shield', t: 'Highly qualified', d: 'All our clinicians are HCPC-registered with postgraduate training.' },
              { i: 'award',  t: 'Outcome-driven', d: 'We measure progress in ways that actually matter to you.' },
              { i: 'clock',  t: 'Accessible', d: 'Same-week, evening, and Saturday appointments available.' }
            ].map(v => (
              <div key={v.t} className="card flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={v.i} />
                </span>
                <div>
                  <p className="font-bold">{v.t}</p>
                  <p className="text-sm text-ink/65 mt-1">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-brand-50/50 py-20 md:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our values</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">What we stand for</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: 'Listen first', d: 'Every body is different. We start with your story.' },
              { t: 'Educate always', d: 'You leave each session knowing what we did and why.' },
              { t: 'Empower, don\u2019t depend', d: 'Our goal is to make ourselves redundant — for the right reasons.' }
            ].map(v => (
              <div key={v.t} className="card">
                <h3 className="text-xl font-bold text-brand-700">{v.t}</h3>
                <p className="mt-2 text-ink/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
