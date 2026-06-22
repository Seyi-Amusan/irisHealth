import Navbar from "../components/layout/Navbar";
import PageHero from "../components/layout/PageHero";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      <ContactSection />

      {/* ── Google Maps embed ── */}
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.123456789!2d0.7!3d51.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8e0e0e0e0e0e1%3A0x1234567890abcdef!2sSt%20Georges%20Business%20Park%2C%20Castle%20Rd%2C%20Sittingbourne%20ME10%203TB%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IrisPhysio Location"
        />
      </div>

      <Footer />
    </>
  );
}