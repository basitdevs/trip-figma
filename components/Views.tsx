"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Viewer {
  img: string;
  name: string;
  location: string;
  des: string;
}

const viewers: Viewer[] = [
  {
    img: "/emilyImg.png",
    name: "Emily R.",
    location: "New York, USA",
    des: "Absolutely loved my stay! The place was spotless, and the amenities were exactly as described. The check-in process was seamless, and the host was incredibly responsive to any questions I had. The location was perfect, with easy access to restaurants and local attractions—definitely worth every penny!",
  },
  {
    img: "/jamseImg.png",
    name: "James T.",
    location: "London, UK",
    des: "This was one of the best stays I’ve had in a while. The home was clean, modern, and had everything I needed for a comfortable visit. The host provided great recommendations, and their communication was excellent. The neighborhood was peaceful, making it a great retreat after a long day of exploring.",
  },
  {
    img: "/sarahImg.png",
    name: "Sarah L.",
    location: "Sydney, Australia",
    des: "The property exceeded my expectations! The kitchen was fully equipped, making it easy to cook meals, and the view from the balcony was stunning. The only downside was a minor issue with the Wi-Fi connection, but the host quickly resolved it. Overall, I would highly recommend this place!",
  },
  {
    img: "/danialImg.png",
    name: "Daniel M.",
    location: "Toronto, Canada",
    des: "From the moment I arrived, I felt at home. The check-in process was super easy, and the space was even better than the pictures. The bed was incredibly comfortable, and the place had a cozy yet stylish vibe. I especially appreciated the attention to detail—everything was well thought out to ensure a great experience!",
  },
];
const Stars = Array(5).fill(undefined);

const Views: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full mt-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {viewers.map((view: Viewer, i: number) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            key={i}
            className="w-full p-5 cursor-pointer rounded-xl flex flex-col gap-2 bg-[#ffffff] shadow-lg shadow-gray-200 hover:scale-[1.03] transition-all duration-300 "
          >
            <div className="w-full flex justify-between items-center gap-4">
              <div className="flex gap-3 items-center">
                <Image
                  src={view.img}
                  className="w-[70px] h-[70px] rounded-full"
                  width={70}
                  height={70}
                  priority
                  alt="viewer_img"
                />
                <div className="flex flex-col ">
                  <h3 className="text-[20px] xl:text-[22px] text-[#000000] font-semibold">
                    {view.name}
                  </h3>
                  <span className="text-[14px] font-normal text-[#3A3A3A]">
                    {view.location}
                  </span>
                </div>
              </div>
              <div className=" flex justify-end items-center gap-2">
                {Stars.map((_, i: number) => (
                  <Image
                    key={i}
                    src="/Star.svg"
                    alt="Star"
                    width={20}
                    height={20}
                    priority
                    className="w-5"
                  />
                ))}
              </div>
            </div>
            <p className=" w-full text-left">{view.des}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-[#997658] text-[18px] font-normal .font-firtree text-center p-3 px-7 rounded-4xl border-[1px] border-[#997658] hover:text-[#ffffff] hover:bg-[#997658] transition-all duration-300 cursor-pointer mt-5 mb-[4px]"
      >
        Show All Reviews
      </motion.button>
      <motion.hr
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-[#000] w-full"
      />
    </div>
  );
};

export default Views;
