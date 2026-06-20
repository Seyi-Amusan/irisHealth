import Navbar from "../components/layout/Navbar";
import PageHero from "../components/layout/PageHero";
import NewsSection from "../components/sections/NewsSection";
import Footer from "../components/layout/Footer";

export default function News() {
  return (
    <>
      <Navbar />
      <PageHero
        title="News & Articles"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News & Articles", href: "/news" },
        ]}
      />
      <NewsSection />
      <Footer />
    </>
  );
}