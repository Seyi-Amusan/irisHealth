export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContactItem {
  icon: "phone" | "mail" | "map-pin";
  label: string;
  value: string;
  href?: string;
}

export interface FooterContent {
  tagline: string;
  mission: string;
  socials: { platform: string; href: string }[];
  columns: {
    heading: string;
    links: FooterLink[];
  }[];
  contact: {
    heading: string;
    items: FooterContactItem[];
    cta: string;
    ctaHref: string;
  };
  legal: {
    copyright: string;
    links: FooterLink[];
  };
}

export const footerContent: FooterContent = {
  tagline: "See it. Own it. Heal it.",
  mission:
    "World-class healthcare delivered with compassion — empowering every patient to live stronger, longer, and better.",
  socials: [
    { platform: "facebook", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "linkedin", href: "#" },
  ],
  columns: [
    {
      heading: "Quick Links",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Our Doctors", href: "#" },
        { label: "News & Articles", href: "#" },
        { label: "Book Appointment", href: "#" },
      ],
    },
    {
      heading: "Our Services",
      links: [
        { label: "General Consultation", href: "#" },
        { label: "Women's Health", href: "#" },
        { label: "Cardiology", href: "#" },
        { label: "Physiotherapy", href: "#" },
        // { label: "Advanced Diagnostics", href: "#" },
        { label: "Paediatric Care", href: "#" },
        { label: "Mental Health", href: "#" },
      ],
    },
  ],
  contact: {
  heading: "Get In Touch",
    items: [
      {
        icon: "phone",
        label: "Phone",
        value: "07307 369 776 / 07780 395 388",
        href: "tel:07307369776",
      },
      {
        icon: "mail",
        label: "Email",
        value: "admin@irisphysio.co.uk",
        href: "mailto:admin@irisphysio.co.uk",
      },
      {
        icon: "map-pin",
        label: "Address",
        value: "24 Wellness Avenue, Suite 100, New York, NY 10001",
      },
    ],
    cta: "Book an Appointment",
    ctaHref: "mailto:admin@irisphysio.co.uk",
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} IrisHealth. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
};