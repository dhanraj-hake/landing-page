import NavBar from "@/components/NavBar";
import HomeComp from "@/components/Home";
import Banners from "@/components/Banners";
import Services from "@/components/Services";
import TravelPoint from "@/components/TravelPoint";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="main-container">
      <div className="circle"></div>
      <NavBar />
      <HomeComp />
      <Banners/>
      <Services />
      <TravelPoint />
      <Contact />
      <Footer />
    </div>
  );
}
