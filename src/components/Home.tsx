import Footer from "./Footer/Fotter";
import HeroSection from "./Hero/Hero";
// import HomePage, { ProductsPage } from "./min/min";
import CoffeeProductsSection from "./min/Products";
import TestimonialsSection from "./min/Testimonials/Testimonials";
import Navbar from "./Nav-bar/Nav";


export default function Home() {
  return (
    <div>
<Navbar companyName={"Coffee Company"}/>
<HeroSection/>
{/* <ProductsPage/> */}
<CoffeeProductsSection/>
<TestimonialsSection/>
{/* <HomePage/> */}
<Footer/>

    </div>
  )
}
