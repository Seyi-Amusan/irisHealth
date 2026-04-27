// Lightweight inline icon set so we don't pull in an icon library.
const paths = {
  physio: <><path d="M12 4v6"/><path d="M9 7h6"/><circle cx="12" cy="14" r="3"/><path d="M5 20c1.5-2 4-3 7-3s5.5 1 7 3"/></>,
  sports: <><path d="M5 12a7 7 0 0114 0"/><path d="M5 12a7 7 0 0014 0"/><path d="M5 12h14"/><path d="M12 5v14"/></>,
  manual: <><path d="M6 11l-2 4 5 1 2 4 4-7"/><path d="M14 4l4 2-1 4"/></>,
  rehab: <><path d="M4 14h6l2-3 2 6 2-3h4"/></>,
  massage: <><path d="M4 8c4-3 12-3 16 0"/><path d="M4 12c4-3 12-3 16 0"/><path d="M4 16c4-3 12-3 16 0"/></>,
  acupuncture: <><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/></>,
  pilates: <><circle cx="12" cy="12" r="9"/><path d="M3 12c4-2 14-2 18 0"/></>,
  consult: <><path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z"/></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></>,
  clock:  <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  award:  <><circle cx="12" cy="9" r="5"/><path d="M8 14l-2 7 6-3 6 3-2-7"/></>,
  heart:  <><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"/></>,
  phone:  <><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/></>,
  mail:   <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  pin:    <><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></>,
  check:  <><path d="M5 12l5 5L20 7"/></>,
  arrow:  <><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></>,
  star:   <><path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z"/></>,
  quote:  <><path d="M7 7h4v4H7zm0 4c0 3 3 4 4 4M13 7h4v4h-4zm0 4c0 3 3 4 4 4"/></>,
  menu:   <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>
}

export default function Icon({ name, className = 'h-6 w-6', stroke = 2 }) {
  const d = paths[name] || paths.physio
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d}
    </svg>
  )
}
