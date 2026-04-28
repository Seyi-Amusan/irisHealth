import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HeroSection from './components/sections/Herosection'
import AboutSection from './components/sections/Aboutsection'



export default function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  )
}
