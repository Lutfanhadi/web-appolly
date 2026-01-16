import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/organisms/hero-section";
import AboutSection from "./components/organisms/about-section";
import AppFeaturesSection from "./components/organisms/app-features-section";
import AppPerfectlySection from "./components/organisms/app-perfectly-section";
import CheckoutSection from "./components/organisms/checkout-section";
import OurHappyCustomers from "./components/organisms/our-happy-customers";
import OurRecentBlogSection from "./components/organisms/our-recent-blog-section";
import Footer from "./components/organisms/footer";


const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/features" element={<AppFeaturesSection />} />
            <Route path="/perfectly" element={<AppPerfectlySection />} />
            <Route path="/checkout" element={<CheckoutSection />} />
            <Route path="/customers" element={<OurHappyCustomers />} />
            <Route path="/blog" element={<OurRecentBlogSection />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;