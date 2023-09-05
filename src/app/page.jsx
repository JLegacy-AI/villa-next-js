import VillaCarousel from "./common/VillaCarousel";
import Navbar from "./common/Navbar";
import FeaturedSection from "./common/FeaturedSection";
import VideoViewSection from "./common/VideoViewSection";
import BestDealSection from "./common/BestDealSection";
import PropertiesSection from "./common/PropertiesSection";
import Footer from "./common/Footer";
import ContactSection from "./common/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <VillaCarousel />
      <FeaturedSection />
      <VideoViewSection />
      <BestDealSection />
      <PropertiesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
