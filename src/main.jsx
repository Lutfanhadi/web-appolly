import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/global.css"
import HeroSection from "./components/organisms/hero-section";
import AboutSection from "./components/organisms/about-section";
import AppFeaturesSection from "./components/organisms/app-features-section";
import AppPerfectlySection from "./components/organisms/app-perfectly-section";
import CheckoutSection from "./components/organisms/checkout-section";
import OurHappyCustomers from "./components/organisms/our-happy-customers";
import OurRecentBlogSection from "./components/organisms/our-recent-blog-section";
import Footer from "./components/organisms/footer";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroSection />
    <AboutSection />
    <AppFeaturesSection />
    <AppPerfectlySection />
    <CheckoutSection />
    <OurHappyCustomers />
    <OurRecentBlogSection />
    <Footer />
  </StrictMode>
);
