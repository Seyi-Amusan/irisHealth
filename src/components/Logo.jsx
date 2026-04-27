import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-soft group-hover:bg-brand-700 transition">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12c0-4.4 3.6-8 8-8 3.3 0 6 2.4 6 5.5 0 2.5-1.7 4.3-4.2 4.7l-3.6.5c-1.7.2-2.7 1.2-2.7 2.7V20H4v-8z"/>
          <circle cx="9" cy="18.5" r="1.5" fill="currentColor"/>
        </svg>
      </span>
      <span className={`font-display text-xl font-extrabold leading-none ${light ? 'text-white' : 'text-ink'}`}>
        Prohab<span className="text-brand-500"> Clinics</span>
      </span>
    </Link>
  )
}
