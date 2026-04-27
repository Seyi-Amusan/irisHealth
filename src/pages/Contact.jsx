import { useState } from 'react'
import Icon from '../components/Icon.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <span className="eyebrow bg-white/10 text-brand-100">Contact</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Let's get you moving again.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Tell us a little about what's going on. We'll be in touch within one working day to book you in.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          {/* FORM */}
          <div className="card p-8 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Icon name="check" className="h-7 w-7" stroke={2.5} />
                </div>
                <h2 className="mt-5 text-2xl font-extrabold">Thanks, {form.name || 'there'}!</h2>
                <p className="mt-2 text-ink/70">Your message is on its way. A member of our team will reply within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <h2 className="text-2xl font-extrabold">Book an appointment</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" required>
                    <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                           className="input" placeholder="Jane Doe" />
                  </Field>
                  <Field label="Email" required>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                           className="input" placeholder="jane@email.com" />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone">
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                           className="input" placeholder="07900 000 000" />
                  </Field>
                  <Field label="Service of interest">
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="input">
                      <option value="">Select…</option>
                      <option>Physiotherapy</option>
                      <option>Sports Injury</option>
                      <option>Manual Therapy</option>
                      <option>Post-Surgical Rehab</option>
                      <option>Sports Massage</option>
                      <option>Acupuncture</option>
                      <option>Clinical Pilates</option>
                      <option>Online Consultation</option>
                    </select>
                  </Field>
                </div>
                <Field label="How can we help?" required>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                            className="input" placeholder="Tell us briefly what's going on — pain location, when it started, etc." />
                </Field>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Enquiry <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="text-xs text-ink/55">By submitting you agree to our privacy policy. We never share your data.</p>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-5">
            <InfoCard icon="phone" title="Phone us">
              <a href="tel:+441234567890" className="text-brand-700 font-semibold">01234 567 890</a><br/>
              Mon–Fri 8am – 8pm<br />Sat 9am – 4pm
            </InfoCard>
            <InfoCard icon="mail" title="Email">
              <a href="mailto:hello@prohabclinics.co.uk" className="text-brand-700 font-semibold">hello@prohabclinics.co.uk</a><br/>
              Replies within one working day
            </InfoCard>
            <InfoCard icon="pin" title="Visit us">
              12 Wellness Road<br />London EC1A 1AA<br />
              <span className="text-ink/60">Plus 3 partner clinics across the UK</span>
            </InfoCard>

            <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-soft">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 via-brand-50 to-white relative">
                <div className="absolute inset-0 grid place-items-center text-brand-700">
                  <div className="text-center">
                    <Icon name="pin" className="h-12 w-12 mx-auto" />
                    <p className="mt-2 font-bold">Map preview</p>
                    <p className="text-xs text-ink/60">12 Wellness Road, London EC1A 1AA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local input style */}
      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(15,27,42,0.12);
          background: #fff;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          outline: none;
          border-color: #1f807a;
          box-shadow: 0 0 0 4px rgba(31,128,122,0.15);
        }
      `}</style>
    </>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink/80">{label}{required && <span className="text-accent ml-0.5">*</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="card flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon name={icon} />
      </span>
      <div className="text-sm text-ink/75 leading-relaxed">
        <p className="text-base font-bold text-ink">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}
