import VillaCarousel from "./common/VillaCarousel";
import Navbar from "./common/Navbar";
import FeaturedSection from "./common/FeaturedSection";
import VideoViewSection from "./common/VideoViewSection";
import BestDealSection from "./common/BestDealSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <VillaCarousel />
      <FeaturedSection />
      <VideoViewSection />
      <BestDealSection />
    </>
  );
}
