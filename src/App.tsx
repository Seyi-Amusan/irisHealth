import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HeroSection from './components/sections/Herosection'
import AboutSection from './components/sections/Aboutsection'
import ServicesSection from './components/sections/Servicessection'
import WhyUsSection from './components/sections/WhyUsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import Footer from './components/sections/Footer'



export default function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
