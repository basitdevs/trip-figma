"use client";
import Image from "next/image";
import Views from "./Views";
import { motion } from "framer-motion";

interface RatedItems {
  title: string;
  icon: string;
  value: string;
}

const items = Array(5).fill(undefined);
const RatedItems: RatedItems[] = [
  { title: "Cleanliness", icon: "/cleanlines.png", value: "4.9" },
  { title: "Accuracy", icon: "/accuracy.png", value: "5.0" },
  { title: "Check-in", icon: "/check_in.png", value: "5.0" },
  { title: "Communication", icon: "/communication.png", value: "4,9" },
  { title: "Location", icon: "/locationnnn.png", value: "4,9" },
  { title: "Value", icon: "/value.png", value: "4,9" },
];
const HighlyRatedChoise: React.FC = () => {
  return (
    <div className="w-full overflow-hidden px-3 md:px-12 xl:px-16 flex justify-center items-center flex-col gap-4">
      <motion.hr
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.356, ease: "easeInOut" }}
        className="w-full text-[#000000] mt-7"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.356, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/leavesImg.png"
          alt="leaves"
          width={100}
          height={100}
          className="w-[270px] h-[120px] relative "
          priority
        />
        <span className="text-[60px] font-semibold absolute font-urbanist top-[10px] left-[90px]">
          5.0
        </span>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.356, ease: "easeInOut" }}
        className="text-[22px] md:text-[30px] font-semibold font-urbanist text-center"
      >
        Highly Rated Choice
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.356, ease: "easeInOut" }}
        className="text-[14px] font-normal .font-firtree max-w-[500px] text-center text-[#3A3A3A]"
      >
        This property is among the top-rated stays, recognized for its
        exceptional service, comfort, and guest satisfaction.
      </motion.p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 my-6">
        <motion.ol
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.34, ease: "easeInOut" }}
          className="w-full  p-2  px-3 rounded-xl bg-[#ffffff] shadow-xl shadow-gray-200 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
        >
          <h5 className="text-[18px] font-semibold text-left">
            Overall Rating
          </h5>
          {items.map((item: undefined, i: number) => (
            <li key={i} className="flex justify-start items-center">
              {items.length - i}{" "}
              <div
                className={`rounded-3xl  w-full h-[6px] ml-2  ${
                  i == 0 ? "bg-amber-300" : "bg-[#D9D9D9]"
                }`}
              ></div>
            </li>
          ))}
        </motion.ol>
        {RatedItems.map((item: RatedItems, i: number) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.356, ease: "easeInOut" }}
            key={i}
            className="flex flex-col w-full justify-center items-start gap-3 p-2 py-5 rounded-xl bg-[#ffffff] shadow-xl shadow-gray-200  hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            <Image
              src={item.icon}
              width={30}
              height={30}
              alt="icon"
              priority
              className="w-[40px]"
            />
            <span className="text-[18px] font-medium font-urbanist text-[#3A3A3A]">
              {item.title}
            </span>
            <span className="text-[20px] font-urbanist font-semibold">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
      <Views />
    </div>
  );
};

export default HighlyRatedChoise;
