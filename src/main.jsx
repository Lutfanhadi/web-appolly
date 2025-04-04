import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/global.css"
import HeroSection from './components/organisms/hero-section'
import AboutSection from './components/organisms/about-section'
import AppFeaturesSection from './components/organisms/app-features-section'
import CheckoutSetion from './components/organisms/checkout-section'
import AppPerfectlySetion from './components/organisms/app-perfectly-section'
import OurHappyCustomersSetion from './components/organisms/our-happy-customers'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection/>
    <AboutSection/>
    <AppFeaturesSection/>
    <CheckoutSetion/>
    <AppPerfectlySetion/>
    <OurHappyCustomersSetion/>
  </StrictMode>,
)
