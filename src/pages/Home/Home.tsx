import HeroSection from "../../components/Hero/Hero";
import CoffeeProductsSection from "@/components/min/Products";
import TestimonialsSection from "../../components/min/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoffeeProductsSection />
      <TestimonialsSection />
    </div>
  );
}
