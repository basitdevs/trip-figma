"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface packageDetails {
  title: string;
  icon: string;
  des: string;
}
const packageDetails: packageDetails[] = [
  {
    title: "Duration",
    icon: "/duration.png",
    des: "3 Days, 2 Nights",
  },
  {
    title: "Accommodation",
    icon: "/accomudation.png",
    des: "Cozy seaside cabin with stunning ocean views",
  },
  {
    title: "Meals",
    icon: "/meals.png",
    des: "Freshly cooked seafood from the day’s catch",
  },
  {
    title: "Fishing Experience",
    icon: "/fishingExperinece.png",
    des: "Deep-sea fishing, coastal angling, and expert-led guidance",
  },
  {
    title: "Transportation",
    icon: "/transport.png",
    des: "Round-trip boat transfers included",
  },
];
const PackageDetail: React.FC = () => {
  return (
    <div className="w-full py-1 md:py-3 flex flex-col justify-start items-start gap-4">
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="text-[22px] lg:text-[30px] font-semibold text-[#000] font-urbanist"
      >
        Package Details
      </motion.h3>
      <div className="w-full grid grid-cols-2 gap-6">
        {packageDetails.map((item: packageDetails, i: number) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            key={i}
            className="flex justify-start items-center gap-3 "
          >
            <Image
              src={item.icon}
              alt="icon"
              priority
              className="w-[20px] h-auto md:w-[22px]"
              width={20}
              height={20}
            />
            <div className="flex flex-col items-start justify-center ">
              <h5 className="text-[16px] md:text-[22px] font-urbanist text-[#3A3A3A] font-medium">
                {item.title}
              </h5>
              <span className=" text-[10px] md:text-[14px] text-[#3A3A3A] .font-firtree">
                {item.des}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.hr
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.3, ease: "easeInOut" }}
        className="w-full text-[#000] md:my-2"
      />
      <div className="w-full flex flex-col items-start justify-center gap-3">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className=" text-[22px] md:text-[30px] text-[#000] font-semiboldfont-urbanistv"
        >
          Description
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeInOut" }}
          className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-left text-[#3A3A3A]"
        >
          Set sail on an unforgettable fishing adventure in the heart of the
          Baltic Sea. Enjoy breathtaking coastal views while expert guides take
          you to the best fishing spots. Experience the thrill of catching fresh
          seafood, with all equipment provided for a hassle-free trip. After a
          day on the water, relax on a private beach or enjoy a delicious meal
          prepared from your own catch. Whether you're a seasoned angler or a
          beginner, this experience promises excitement, relaxation, and the
          beauty of the open sea.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="text-[#997658] text-[16px] font-normal .font-firtree text-center p-2 px-5 rounded-4xl border-[1px] border-[#997658] hover:text-[#ffffff] hover:bg-[#997658] transition-all duration-300 cursor-pointer "
        >
          View More
        </motion.button>
        <hr className="w-full text-[#000] my-2 md:mt-4" />
      </div>
    </div>
  );
};

export default PackageDetail;
