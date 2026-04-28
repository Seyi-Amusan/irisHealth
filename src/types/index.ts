// ── Hero ──────────────────────────────────────────────────────────────────

export interface Slide {
  image: string;
  eyebrow: string;
  headline: [string, string];
  accentWords: string[];
  sub: string;
  cta: string;
  ctaSecondary: string;
}

// ── Navigation ────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  dropdown?: string[];
}


// ── Hero ──────────────────────────────────────────────────────────────────

export interface Slide {
  image: string;
  eyebrow: string;
  headline: [string, string];
  accentWords: string[];
  sub: string;
  cta: string;
  ctaSecondary: string;
}

// ── About ─────────────────────────────────────────────────────────────────

export interface AboutContent {
  eyebrow: string;
  headlinePlain: string;
  headlineAccent: string;
  paragraphs: string[];
  cta: string;
  image: string;
  imageAlt: string;
}

// ── Navigation ────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  dropdown?: string[];
}