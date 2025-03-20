import FeaturedFishingTips from "@/components/FeaturedFishingTips";
import Hero from "@/components/Hero";
import HighlightBanner from "@/components/HighlightBanner";
import NavBar from "@/components/NavBar";
import PopularPakages from "@/components/PopularPakages";
import VideoSection from "@/components/VideoSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full ">
    <Hero/>
    <FeaturedFishingTips/>
    <VideoSection/>
    <PopularPakages/>
    <WhyChooseUs/>
    <HighlightBanner/>
   </div>
  );
}
