"use client";
import { AnimatePresence, motion } from "framer-motion";
interface Packages {
  title: string;
  duration: string;
}

const PackagesItem: Packages[] = [
  { title: "Ice Fishing", duration: "5 Days 4 Nights" },
  { title: "Carp Fishing Paradise", duration: "4 Days 3 Nights" },
  { title: "Lake Constance Fishing", duration: "6 Days 4 Nights" },
  { title: "Wild Salmon Fishing", duration: "3 Days 2 Nights" },
];
const PopularPakages: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-12  xl:px-16 flex flex-col justify-center items-center gap-4 my-5">
      <div className="text-center flex justify-center items-center gap-2 flex-col">
        <motion.div
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="w-full text-center flex justify-center gap-3 items-center leading-tight"
        >
          <h1 className="text-[32px] md:text-[44px] lg:text-[48px] xl:text-[55px] font-bold text-[#997658] font-urbanist ">
            Popular{" "}
          </h1>
          <h1 className="text-[32px] md:text-[44px] lg:text-[48px] xl:text-[55px] font-bold text-[#000] font-urbanist">
            Packages
          </h1>
        </motion.div>
        <motion.p
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="text-[16px] lg:text-[18px] text-[#3A3A3A] text-center"
        >
          Find the perfect getaway with our exclusive travel deals!
        </motion.p>
      </div>
      <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-4 py-10">
        <AnimatePresence>
          {PackagesItem.map((item: Packages, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: "easeIn" }}
              key={i}
              className="w-full overflow-hidden rounded-2xl p-4 flex justify-end items-start bg-[url('/packageImg_1.jpeg')] bg-cover bg-center bg-no-repeat h-[50vh] lg:h-[60vh] flex-col cursor-pointer hover:scale-[1.03] transition-all duration-300"
            >
              <h5 className="text-[#ffffff] text-[22px] font-urbanist ">
                {item.title}
              </h5>
              <span className="text-[#ffffff] text-[16px] .font-firtree">
                {item.duration}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PopularPakages;
