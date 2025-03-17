// import HeroSection from "./components/Hero/Hero";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
// import Navbar from "./components/Nav-bar/Nav";
import OurStory from "./components/Ourstore/Ourstore";
import OurMenu from "./components/our menu/OurMenu";
import ContactPage from "./components/contactus/ContactUS";
import Home from "./components/Home";
// import Products from "./components/product/Product";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Nav-bar/Nav';
import Footer from './components/Footer/Fotter';
import OrderPage from './components/Order/order';


function App() {

  return (
    <Router>
        <ScrollToTop /> 
    <Navbar companyName="Coffee Company"  />
    <Routes>
      <Route path="*" element={< Home/>} />
      <Route path="/OurMenu" element={<OurMenu />} />
      {/* <Route path="/product" element={<Products />} /> */}
      <Route path="/Ourstore" element={<OurStory />} />
      <Route path="/Order" element={<OrderPage />} />
      <Route path="/contactus" element={<ContactPage />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
