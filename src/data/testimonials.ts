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
      "After my knee replacement I was really struggling. Having the physio come to my home made such a difference — I didn't have to worry about getting to appointments and the personalised care meant I recovered much faster than expected.",
      name: "Magaret J.",
      tag: "Post knee replacement · Manchester",
      rating: 5,
    },
    {
      quote:
      "I'd had back pain for years and just accepted it. Iris Physio identified the root cause in the first session and within 6 weeks I was back playing golf. Incredible service delivered with real compassion and expertise.",
      name: "David T.",
      tag: "Chronic back pain · Warrington",
      rating: 5,
    },
    {
      quote:
      "The convenience of home visits is unmatched. As someone who finds travel difficult, having expert physiotherapy at home has been life-changing. Professional, caring and very knowledgeable — I cannot recommend them highly enough.",
      name: "Sandra R.",
      tag: "MSK rehabilitation · Liverpool",
      rating: 5,
    },
  ],
};