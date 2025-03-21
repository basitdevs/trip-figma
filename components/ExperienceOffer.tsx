"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-urbanist "
        >
          What This Experience Offers
        </motion.h3>
        <div className="w-full grid grid-cols-2 gap-2">
          {ExperienceItems.map((item: ExperienceItem, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.03 * i, ease: "easeInOut" }}
              key={i}
              className="w-full py-2 flex justify-start items-center gap-2 md:gap-4  cursor-pointer "
            >
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
            </motion.div>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay:0.15, ease: "easeInOut" }}
          className="p-3 mt-2 border-[1px] border-[#997658] text-[16px] md:text-[18px] .font-firtree flex justify-center items-center text-[#997658] rounded-4xl px-6 cursor-pointer hover:bg-[#997658] hover:text-[#ffffff] transition-all duration-200"
        >
          Show all available amenities
        </motion.button>
        <motion.hr
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.22, ease: "easeInOut" }}
          className="w-full text-[#000000] my-6"
        />
      </div>
    </div>
  );
};

export default ExperienceOffer;
