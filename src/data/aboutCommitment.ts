export interface AboutCommitmentContent {
  eyebrow: string;
  heading: string;
  paragraph: string;
  listHeading: string;
  bullets: string[];
  images: {
    left: { src: string; alt: string };
    right: { src: string; alt: string };
  };
}

export const aboutCommitmentContent: AboutCommitmentContent = {
  eyebrow: "Excellence in Care",
  heading: "Our Commitment",
  paragraph:
    "We are committed to making world-class healthcare accessible to everyone. By championing cutting-edge technology and evidence-based practice, we ensure advanced care is not limited to the few — but available to all who need it.",
  listHeading: "Every patient benefits from:",
  bullets: [
    "Board-certified, internationally trained specialists",
    "Private, modern consultation and treatment facilities",
    "Transparent pricing with no hidden costs",
    "Individualised care plans tailored to your goals",
  ],
  images: {
    left: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      alt: "IrisHealth specialist with patient",
    },
    right: {
      src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      alt: "Rehabilitation and training session",
    },
  },
};