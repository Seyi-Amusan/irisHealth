export interface AboutStoryContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  pullQuote: string;
  cta: string;
  ctaHref: string;
  images: {
    tall: { src: string; alt: string };
    topRight: { src: string; alt: string };
    bottomRight: { src: string; alt: string };
  };
}

export const aboutStoryContent: AboutStoryContent = {
  eyebrow: "Our Story",
  heading: "Healthcare Built Around You",
  paragraphs: [
    "IrisHealth was founded on a simple but powerful belief — that every patient deserves more than a rushed appointment. We saw a gap between what healthcare could be and what it often was, and we set out to close it.",
    "Today, our clinics bring together specialists across multiple disciplines, united by a shared commitment to evidence-based, patient-first care. We don't treat symptoms in isolation — we look at the whole person.",
  ],
  pullQuote:
    "True healing comes from more than treatment. It's built on trust, patience, and compassion — reflected in every small victory and ongoing step forward.",
  cta: "Learn More",
  ctaHref: "#",
  images: {
    tall: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      alt: "IrisHealth specialist with patient",
    },
    topRight: {
      src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"  ,
      alt: "Advanced diagnostic assessment",
    },
    bottomRight: {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      alt: "Rehabilitation session",
    },
  },
};