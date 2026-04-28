import type { Slide, NavLink } from "../types";

export const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
    eyebrow: "Your Partner in Health",
    headline: ["World-Class Care,", "Close To Home."],
    accentWords: ["Close To Home."],
    sub: "Comprehensive medical services tailored to every stage of your life — delivered with compassion and expertise.",
    cta: "Book Appointment",
    ctaSecondary: "Our Services",
  },
  {
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=80",
    eyebrow: "Expert Medical Team",
    headline: ["Specialists Who", "Truly Listen."],
    accentWords: ["Truly Listen."],
    sub: "Our team of board-certified physicians and specialists are dedicated to understanding your unique health journey.",
    cta: "Meet Our Doctors",
    ctaSecondary: "Book Appointment",
  },
  {
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600&q=80",
    eyebrow: "Advanced Technology",
    headline: ["Modern Medicine,", "Human Touch."],
    accentWords: ["Human Touch."],
    sub: "State-of-the-art diagnostics and treatment facilities, paired with the warmth of personalised patient care.",
    cta: "Explore Services",
    ctaSecondary: "Contact Us",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80",
    eyebrow: "Wellness For All",
    headline: ["Strength At", "Every Stage Of Life."],
    accentWords: ["Every Stage Of Life."],
    sub: "From preventive care to specialised treatment — we're with you at every step, every age, every need.",
    cta: "Book Appointment",
    ctaSecondary: "Learn More",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  {
    label: "Services",
    href: "#",
    dropdown: ["Cardiology", "Neurology", "Orthopaedics", "Paediatrics"],
  },
  { label: "Doctors", href: "#" },
  { label: "News & Articles", href: "#" },
  { label: "Contact", href: "#" },
];