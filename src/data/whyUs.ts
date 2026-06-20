export interface WhyUsFeature {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface WhyUsContent {
  left: {
    eyebrow: string;
    headlinePlain: string;
    headlineAccent: string;
    features: WhyUsFeature[];
  };
  right: {
    eyebrow: string;
    headlinePlain: string;
    headlineAccent: string;
    paragraphs: string[];
    cta: string;
    ctaHref: string;
  };
}

export const whyUsContent: WhyUsContent = {
  left: {
    eyebrow: "Quality Healthcare Services",
    headlinePlain: "Why Choose",
    headlineAccent: "IrisHealth?",
    features: [
      {
        icon: "shield-check",
        title: "Transparent Pricing",
        description: "Clear, honest rates with no hidden costs or surprise bills — ever.",
      },
      {
        icon: "award",
        title: "CSP & HCPC-registered Physiotherapists",
        description: "Expert care delivered by fully registered and trained clinicians",
      },
      {
        icon: "clock",
        title: "Flexible Appointments",
        description: "Same-day and next-day slots available, including evenings and weekends.",
      },
      {
        icon: "building-2",
        title: "Private, Modern Facilities",
        description: "Purpose-built consultation rooms and diagnostic suites in a welcoming environment.",
      },
    ],
  },
  right: {
    eyebrow: "Why Us",
    headlinePlain: "About",
    headlineAccent: "IrisHealth",
    paragraphs: [
      "The name “Iris” reflects the clarity of vision - the Iris of the eye regulates light and focus, symbolizing Iris Physio’s commitment to clear, focused and evidence-based clinical care.",
      "At IrisHealth, we take a 360° approach to your wellbeing, combining cutting-edge diagnostics with compassionate, hands-on care. Our mission is to shift healthcare from reactive treatment to proactive, data-led prevention. By identifying root causes early, we create tailored care plans that deliver lasting results.",
      "We empower every patient to understand their health, prevent illness, and take control of their life with clarity and confidence — at every age and every stage.",
    ],
    cta: "Find Out More About Us",
    ctaHref: "#",
  },
};