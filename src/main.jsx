import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/global.css"
import HeroSection from './components/organisms/hero-section'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection/>
  </StrictMode>,
)
