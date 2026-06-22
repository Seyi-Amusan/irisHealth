export interface ContactContent {
  eyebrow: string;
  headlinePlain: string;
  headlineAccent: string;
  headlineEnd: string;
  subtext: string;
  contactItems: {
    label: string;
    value: string;
    href: string;
    icon: "phone" | "mail";
  }[];
  form: {
    submitEmail: string;
    buttonLabel: string;
  };
}

export const contactContent: ContactContent = {
  eyebrow: "Let Us Know How We Can Help",
  headlinePlain: "Feel",
  headlineAccent: "Better, Book",
  headlineEnd: "Today",
  subtext:
    "You can easily contact us for any advice or appointment bookings. We aim to respond within 24 hours.",
  contactItems: [
    {
      label: "Contact Numbers",
      value: "07307 369 776 / 07780 395 388",
      href: "tel:07307369776",
      icon: "phone",
    },
    {
      label: "Mail Address",
      value: "admin@irisphysio.co.uk",
      href: "mailto:admin@irisphysio.co.uk",
      icon: "mail",
    },
  ],
  form: {
    submitEmail: "admin@irisphysio.co.uk",
    buttonLabel: "Get In Touch",
  },
};