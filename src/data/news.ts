export interface Article {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
}

export interface NewsContent {
  eyebrow: string;
  headlinePlain: string;
  headlineAccent: string;
  articles: Article[];
  viewAllHref: string;
}

export const newsContent: NewsContent = {
  eyebrow: "Health & Wellbeing",
  headlinePlain: "News &",
  headlineAccent: "Articles",
  viewAllHref: "#",
  articles: [
    {
      tag: "Post-Op Rehab",
      date: "March 2025",
      title: "Knee Replacement Recovery: How Home Physiotherapy Speeds Up Healing",
      excerpt:
        "Recovering from a total knee replacement is a significant journey. Discover how home-based physiotherapy can accelerate your recovery.",
      href: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      tag: "MSK Rehab",
      date: "February 2025",
      title: "What Is MSK Physiotherapy and Could It Help You?",
      excerpt:
        "Musculoskeletal physiotherapy covers a wide range of conditions affecting bones, muscles and joints. Here's what you need to know.",
      href: "#",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    },
    {
      tag: "Recovery",
      date: "January 2025",
      title: "Post-Operative Rehab at Home: What to Expect from Your Physiotherapist",
      excerpt:
        "Going home after surgery is just the beginning. Learn what your post-operative sessions will involve and how to get the most from them.",
      href: "#",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    },
  ],
};