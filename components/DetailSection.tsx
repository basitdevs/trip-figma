"use client";
import Image from "next/image";
import PackageDetail from "./PackageDetail";
import Booking from "./Booking";
import { motion } from "framer-motion";
import WhyChooseThisPackage from "./WhyChooseThisPackage";
import ExperienceOffer from "./ExperienceOffer";
import ClearDates from "./ClearDates";

const Stars = Array(5).fill(undefined);

const DetailSection: React.FC = () => {
  return (
    <div className="min-h-screen px-3 md:px-12 xl:px-16 pt-6">
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 relative">
        <div className="md:basis-[74%]">
          <div className="w-full flex flex-col items-start gap-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full flex justify-between items-center flex-wrap gap-1 mb-2"
            >
              <h2 className="text-[32px] md:text-[34px] lg:text-[45px] leading-[1.3] text-black font-semibold">
                Baltic Sea Fishing
              </h2>
              <div className="flex gap-1 items-center">
                {Stars.map((_, i: number) => (
                  <Image
                    key={i}
                    src="/Star.svg"
                    alt="Star"
                    width={20}
                    height={20}
                    priority
                    className="w-4 md:w-5 h-auto"
                  />
                ))}
                <span className="text-[16px] md:text-[18px] font-normal">
                  4.5
                </span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-[18px] text-[#3A3A3A] -mt-5"
            >
              Set sail for an exciting fishing experience in the breathtaking
              waters of the Baltic Sea. Whether you’re a seasoned angler or a
              first-timer, this trip promises relaxation, adventure, and the
              freshest catch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex gap-3 items-center my-2"
            >
              <Image
                src="/jamseImg.png"
                className="w-[70px] h-[70px] rounded-full"
                width={70}
                height={70}
                priority
                alt="viewer_img"
              />
              <div className="flex flex-col">
                <h3 className="text-[20px] xl:text-[22px] text-black font-semibold">
                  Hosted by Alex
                </h3>
                <span className="text-[14px] font-normal text-[#3A3A3A]">
                  Premier Host · 7 years of exceptional hospitality
                </span>
              </div>
            </motion.div>
            <motion.hr
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full border-t border-gray-300"
            />
            <PackageDetail />
          </div>
          <WhyChooseThisPackage />
          <ExperienceOffer />
          <ClearDates />
        </div>
        <div className="md:basis-[36%] w-full">
          <div className="sticky top-10">
            <Booking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
