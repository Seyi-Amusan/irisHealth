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

// ── Services ──────────────────────────────────────────────────────────────
 
export type ServiceCardVariant = "photo" | "solid";
 
export interface ServiceCard {
  variant: ServiceCardVariant;
  title: string;
  tag?: string;
  image?: string;
  imageAlt?: string;
  href: string;
}
 
export interface ServicesSection {
  eyebrow: string;
  headlineStart: string;
  headlineAccent: string;
  headlineEnd: string;
  footnote: string;
  cards: ServiceCard[];
}