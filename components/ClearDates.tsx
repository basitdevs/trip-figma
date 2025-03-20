"use client";

import { motion } from "framer-motion";
import Calender from "./CalenderDate";

const ClearDates: React.FC = () => {
  return (
    <div className="w-full flex justify-start items-start mb-10">
      <div className="w-full  flex flex-col justify-start items-start gap-2">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full flex justify-between items-start gap-3"
        >
          <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-urbanist ">
            Your Baltic Sea Fishing Trip
          </h3>
          <button className="hidden lg:block text-[#997658] text-[16px] font-normal .font-firtree text-center p-2 px-4 rounded-4xl border-[1px] border-[#997658] hover:text-[#ffffff] hover:bg-[#997658] transition-all duration-300 cursor-pointer mt-2">
            Clear Dates
          </button>
        </motion.div>
        <motion.h4
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="text-[20px] text-[#000] font-urbanist -mt-2"
        >
          2 nights of adventure
        </motion.h4>
        <span className="text-[14px] text-[#3A3A3A] font-urbanist">
          May 24, 2025 – May 26, 2025
        </span>

        <Calender />
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className=" lg:hidden text-[#997658] text-[16px] font-normal .font-firtree text-center p-2 px-4 rounded-4xl border-[1px] border-[#997658] hover:text-[#ffffff] hover:bg-[#997658] transition-all duration-300 cursor-pointer mt-3 -mb-5 lg:mb-0"
        >
          Clear Dates
        </motion.button>
      </div>
    </div>
  );
};

export default ClearDates;
