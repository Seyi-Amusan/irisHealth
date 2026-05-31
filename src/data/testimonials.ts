export interface Testimonial {
  quote: string;
  name: string;
  tag: string;
  rating: number; // out of 5
}

export interface TestimonialsContent {
  eyebrow: string;
  headlinePlain: string;
  headlineAccent: string;
  headlineEnd: string;
  backgroundImage: string;
  testimonials: Testimonial[];
}

export const testimonialsContent: TestimonialsContent = {
  eyebrow: "Client Feedback",
  headlinePlain: "Our Clients",
  headlineAccent: "Share Their True Stories",
  headlineEnd: "Of Health & Healing",
  backgroundImage:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=80",
  testimonials: [
    {
      quote:
        "I came in with chronic back pain I'd lived with for three years. The team at IrisHealth didn't just manage the symptoms — they found the root cause and built a plan around my life. Six weeks later I'm pain-free and back at the gym.",
      name: "Sarah M.",
      tag: "Chronic Pain Relief",
      rating: 5,
    },
    {
      quote:
        "From the moment I walked in, everything felt different. The diagnostic process was thorough and the doctor actually listened. I finally feel like my health is in good hands.",
      name: "James O.",
      tag: "General Consultation",
      rating: 5,
    },
    {
      quote:
        "IrisHealth guided me through my pregnancy with such care and expertise. Every appointment felt personalised. I can't recommend them enough to any expecting mother.",
      name: "Amara K.",
      tag: "Women's Health",
      rating: 5,
    },
    {
      quote:
        "After my surgery, I wasn't sure I'd get back to full fitness. The rehabilitation programme they designed was incredible — progressive, well-monitored and genuinely effective.",
      name: "David T.",
      tag: "Post-Surgery Rehab",
      rating: 5,
    },
  ],
};