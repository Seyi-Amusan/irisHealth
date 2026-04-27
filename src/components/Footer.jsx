import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white/80">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            Expert physiotherapy and rehabilitation. Helping you move better, recover faster, and stay stronger.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {['facebook','instagram','twitter','linkedin'].map(s => (
              <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent transition">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Clinic</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/team" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Treatments</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white">Physiotherapy</Link></li>
            <li><Link to="/services" className="hover:text-white">Sports Injury</Link></li>
            <li><Link to="/services" className="hover:text-white">Manual Therapy</Link></li>
            <li><Link to="/services" className="hover:text-white">Post-Surgical Rehab</Link></li>
            <li><Link to="/services" className="hover:text-white">Sports Massage</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-2 text-sm">
            <li>12 Wellness Road, London, EC1A 1AA</li>
            <li><a className="hover:text-white" href="tel:+441234567890">01234 567 890</a></li>
            <li><a className="hover:text-white" href="mailto:hello@prohabclinics.co.uk">hello@prohabclinics.co.uk</a></li>
            <li>Mon–Fri: 8:00 — 20:00</li>
            <li>Sat: 9:00 — 16:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Prohab Clinics. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
