"use client";

import Image from "next/image";
import FadeUpTitle from "./motion/FadeUpTitle";
import FadeUp from "./motion/FadeUp";

interface ExperienceItem {
  icon: string;
  des: string;
}

const ExperienceItems: ExperienceItem[] = [
  { icon: "/experIcon_1.png", des: "Guided Fishing Trips" },
  { icon: "/exper_Icon_2.png", des: "Professional Equipment" },
  { icon: "/exper_Icon_3.png", des: "Private Beach Access" },
  { icon: "/exper_Icon_4.png", des: "Free On-Site Parking" },
  { icon: "/exper_Icon_5.png", des: "Scenic Boat Rides" },
  { icon: "/exper_Icon_6.png", des: "Expert Advice" },
  { icon: "/exper_Icon_7.png", des: "Fresh Seafood Tasting " },
  { icon: "/exper_Icon_8.png", des: "Shower & Rest Area" },
];
const ExperienceOffer: React.FC = () => {
  return (
    <div className="w-full flex justify-start items-start">
      <div className="w-fullflex flex-col justify-start items-start gap-3">
        <FadeUpTitle>
          <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-urbanist ">
            What This Experience Offers
          </h3>
        </FadeUpTitle>
        <div className="w-full grid grid-cols-2 gap-2">
          {ExperienceItems.map((item: ExperienceItem, i: number) => (
            <FadeUp delay={0.03 * i} key={i}>
              <div className="w-full py-2 flex justify-start items-center gap-2 md:gap-4  cursor-pointer ">
                <Image
                  src={item.icon}
                  alt="icon"
                  height={20}
                  width={20}
                  priority
                  className=" w-5 md:w-7 "
                />
                <span className="text-[14px] md:text-[16px] xl:text-[18px] font-medium  font-urbanist text-[#3A3A3A]">
                  {item.des}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <button className="p-3 mt-2 border-[1px] border-[#997658] text-[16px] md:text-[18px] .font-firtree flex justify-center items-center text-[#997658] rounded-4xl px-6 cursor-pointer hover:bg-[#997658] hover:text-[#ffffff] transition-all duration-200">
            Show all available amenities
          </button>
        </FadeUp>
        <hr className="w-full text-[#000000] my-6" />
      </div>
    </div>
  );
};

export default ExperienceOffer;
