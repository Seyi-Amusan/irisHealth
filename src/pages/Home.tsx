import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}