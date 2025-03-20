"use client";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
const PromotionalItems: string[] = [
  "Premium fishing gear provided",
  "Learn from experienced local fishermen",
  "Enjoy breathtaking coastal scenery and peaceful ocean vibes",
  "Ideal for solo travelers, families, or groups",
];
const WhyChooseThisPackage: React.FC = () => {
  return (
    <div className="w-full flex justify-start items-start px-3 md:px-12 xl:px-16">
      <div className="w-full md:max-w-[60%] flex flex-col justify-start items-start gap-4">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold .font-urbanist "
        >
          Why Choose This Package?
        </motion.h3>
        <div className="w-full flex flex-col justify-start items-start gap-3">
          {PromotionalItems.map((item: string, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * 1, ease: easeInOut }}
              key={i}
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
              <span className="text-[14px] md:text-[16px] xl:text-[18px] font-normal .font-urbanist text-[#3A3A3A]">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.hr
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="w-full text-[#000000] my-4"
        />
      </div>
    </div>
  );
};

export default WhyChooseThisPackage;
