"use client";
import { easeInOut, motion } from "framer-motion";
const HighlightBanner: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-12  xl:px-16 py-8 pb-26 flex justify-center items-center relative">
      <div className="w-full rounded-4xl flex justify-center items-center bg-[url('/promotionalimg.png')] bg-no-repeat bg-cover bg-center  ">
        <div
          style={{ backgroundColor: "rgba(138, 79, 26, 0.7)" }}
          className="w-full h-full flex-col flex justify-center items-center gap-6 lg:gap-2 rounded-4xl p-20 px-10 md:p-20 "
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="text-[#ffffff] text-[35px] md:text-[55px] text-center leading-[1.1] font-semibold .font-urbanist "
          >
            Your Next Adventure Awaits!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeInOut }}
            className="text-[12px] md:text-[16px] lg:text-[18px] text-[#ffffff] font-normal .font-firtree pb-2 md:pb-6 text-center w-full max-w-[600px]"
          >
            Explore breathtaking destinations with unbeatable deals. Book now
            and make unforgettable memories!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6,  ease: easeInOut }}
            className="text-[16px] lg:text-[18px] bg-[#ffffff] flex justify-center items-center p-3 px-6 rounded-4xl text-[#836448] .font-firtree hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            View More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HighlightBanner;
