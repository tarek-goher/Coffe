import { Outlet } from "react-router-dom"
import Navbar from "../components/Nav-bar/Nav"
import ScrollToTop from "../components/ScrollToTop"
import Footer from "../components/Footer/Footer"

const MainLayout = () => {
  return (
    <>
      <Navbar companyName={"Coffee Company"}/>
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default MainLayout