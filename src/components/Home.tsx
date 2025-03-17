import AboutUs from "./About-home/AboutUs";
import HeroSection from "./Hero/Hero";
import CoffeeProductsSection from "./min/Products";
import TestimonialsSection from "./min/Testimonials/Testimonials";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoffeeProductsSection />
      <TestimonialsSection />
      <AboutUs />
    </div>
  );
}
