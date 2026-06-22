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
        <div className="relative w-full h-[450px] bg-[#F3F0FB] dark:bg-[#151528]">
        
        {/* Loading placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-0">
            <div className="w-10 h-10 rounded-full border-4 border-[#6B4EC6]/20 border-t-[#6B4EC6] animate-spin" />
            <p className="text-gray-400 text-sm font-medium">Loading map...</p>
        </div>

        {/* Map sits on top once loaded */}
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5!2d0.7594!3d51.3415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d4e3c3b3b3b3%3A0x1234567890abcdef!2sSt%20Georges%20Business%20Park%2C%20Castle%20Rd%2C%20Sittingbourne%20ME10%203TB%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, position: "relative", zIndex: 1 }}
            allowFullScreen={true}
            allow="fullscreen"
            sandbox="allow-scripts allow-same-origin allow-popups"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IrisPhysio Location"
        />
        </div>

      <Footer />
    </>
  );
}