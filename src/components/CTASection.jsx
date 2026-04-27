import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 p-10 md:p-14 text-white shadow-soft">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-brand-400/30 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div>
              <span className="eyebrow bg-white/10 text-brand-100">Ready to feel better?</span>
              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                Book your assessment today and take the first step back to full strength.
              </h3>
              <p className="mt-3 text-white/80 max-w-xl">
                Same-week appointments available. We accept all major insurers and self-pay clients.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
              <Link to="/contact" className="btn-accent">
                Book Appointment <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href="tel:+441234567890" className="btn-ghost">
                <Icon name="phone" className="h-4 w-4" /> 01234 567 890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
