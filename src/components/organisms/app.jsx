import { useEffect, useState } from "react";
import Loading from "./loading";

// import semua section kamu
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import AppFeaturesSection from "./app-features-section";
import AppPerfectlySection from "./app-perfectly-section";
import CheckoutSection from "./checkout-section";
import OurHappyCustomers from "./our-happy-customers";
import OurRecentBlogSection from "./our-recent-blog-section";
import Footer from "./footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulasi loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <HeroSection />
      <AboutSection />
      <AppFeaturesSection />
      <AppPerfectlySection />
      <CheckoutSection />
      <OurHappyCustomers />
      <OurRecentBlogSection />
      <Footer />
    </>
  );
};

export default App;
