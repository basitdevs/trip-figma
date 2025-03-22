import FeaturedCards from "./featuredCards";
import FishingFeatured from "./FishingFeatured";
import FadeUpTitle from "./motion/FadeUpTitle";

const FeaturedFishingTips: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-12  xl:px-16 pt-[240px] lg:ty-[180px] pb-6 text-center">
      <div className="w-full text-center flex justify-center items-center gap-2  mb-8">
        <FadeUpTitle>
          <h1 className="text-[28px] md:text-[44px] lg:text-[48px] xl:text-[55px] font-bold text-[#000] font-urbanist ">
            Featured{" "}
          </h1>
        </FadeUpTitle>
        <FadeUpTitle>
          <h1 className="text-[28px] md:text-[44px] lg:text-[48px] xl:text-[55px] font-bold text-[#997658] font-urbanist">
            Fishing Trips
          </h1>
        </FadeUpTitle>
      </div>
      <FishingFeatured />
      <FeaturedCards />
      <button className="text-[16px] text-[#ffffff] bg-[#997658] outline-none border-[1px] hover:border-[#997658] p-3 font-urbanist rounded-4xl px-7 transition-all duration-300 hover:bg-[#ffffff] hover:text-[#997658] cursor-pointer ">
        View More
      </button>
    </section>
  );
};

export default FeaturedFishingTips;
