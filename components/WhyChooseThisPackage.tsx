"use client";
import Image from "next/image";
import FadeUpTitle from "./motion/FadeUpTitle";
import FadeUp from "./motion/FadeUp";

const PromotionalItems: string[] = [
  "Premium fishing gear provided",
  "Learn from experienced local fishermen",
  "Enjoy breathtaking coastal scenery and peaceful ocean vibes",
  "Ideal for solo travelers, families, or groups",
];

const WhyChooseThisPackage: React.FC = () => {
  return (
    <div className="w-full flex justify-start items-start ">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <FadeUpTitle>
          <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-urbanist ">
            Why Choose This Package?
          </h3>
        </FadeUpTitle>
        <div className="w-full flex flex-col justify-start items-start gap-3">
          {PromotionalItems.map((item: string, i: number) => (
            <FadeUp key={i} delay={0.03 * i}>
              <div
                style={{
                  boxShadow:
                    "inset 0 2px 6px rgba(0, 0, 0, 0.08), inset 0 -2px 4px rgba(0, 0, 0, 0.05)",
                }}
                className="w-full p-3 flex justify-start items-center gap-2 bg-[#ffffff] rounded-xl cursor-pointer "
              >
                <Image
                  src="/checkIcon.svg"
                  alt="check_icon"
                  height={20}
                  width={20}
                  priority
                  className=" w-3 md:w-4 "
                />
                <span className="text-[14px] md:text-[16px] xl:text-[18px] font-normal font-urbanist text-[#3A3A3A]">
                  {item}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
        <hr className="w-full text-[#000000] my-4" />
      </div>
    </div>
  );
};

export default WhyChooseThisPackage;
