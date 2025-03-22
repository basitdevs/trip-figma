"use client";
import FadeUpTitle from "./motion/FadeUpTitle";
import SearchBarSection from "./SearchBarSection";

const Hero: React.FC = () => {
  return (
    <section className="w-full px-1 md:px-2">
      <div className="relative w-full rounded-2xl overflow-hidden bg-[url('/heroimg.jpg')] bg-no-repeat bg-center bg-cover  h-[74vh]">
        <div className="w-full bg-[rgba(0,0,0,0.6)] h-full absolute top-0 left-0 flex justify-center items-center flex-col ">
          <FadeUpTitle>
            <h1 className="text-[#ffffff] text-[40px] md:text-[46px] lg:text-[50px] xl:text-[60px] font-semibold font-urbanist text-center leading-tight">
              Find Your Perfect Fishing Adventure
            </h1>
          </FadeUpTitle>
          <FadeUpTitle>
            <p className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal .font-firtree text-[#ffffff] max-w-[300px] sm:max-w-full leading-1.3 my-1 mb-4">
              Discover and book unforgettable fishing experiences with expert
              guides across Germany & Europe.
            </p>
          </FadeUpTitle>
        </div>
      </div>
      <SearchBarSection />
    </section>
  );
};

export default Hero;
