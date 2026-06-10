import Navbar from "../components/layout/Navbar";
import PageHero from "../components/layout/PageHero";
import AboutStory from "../components/sections/AboutStory";
import Footer from "../components/layout/Footer";
import AboutCommitment from "../components/sections/AboutCommitment";

export default function About() {
  return (
    <>
      <Navbar />
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <AboutStory />
      <AboutCommitment />
      <Footer />
    </>
  );
}