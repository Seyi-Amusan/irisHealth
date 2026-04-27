import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About' },
  { to: '/team',     label: 'Our Team' },
  { to: '/contact',  label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-white'}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-ink/80 hover:text-brand-700 hover:bg-brand-50/60'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+441234567890" className="text-sm font-semibold text-ink/70 hover:text-brand-700">
            01234 567 890
          </a>
          <Link to="/contact" className="btn-primary">Book Appointment</Link>
        </div>

        <button
          className="md:hidden grid h-11 w-11 place-items-center rounded-xl ring-1 ring-black/10"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>
              : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="container-x py-3 flex flex-col gap-1">
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-ink/80 hover:bg-brand-50/60'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Book Appointment</Link>
          </div>
        </div>
      )}
    </header>
  )
}
