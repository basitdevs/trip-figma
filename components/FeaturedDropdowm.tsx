"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

interface FishingFeaturedItem {
  value: string;
  icon: string;
}
const FishingFeaturedItem: FishingFeaturedItem[] = [
  {
    value: "Trending Now",
    icon: "/trendingNow_icon.png",
  },
  {
    value: "Best Fishing Spots",
    icon: "/bestFinshingSport-icon.png",
  },
  {
    value: "Boat Fishing ",
    icon: "/boatFishing_icon.png",
  },
  {
    value: "Exotic Locations",
    icon: "/exoticLoacation-icon.png",
  },
  {
    value: "Guest Favorites",
    icon: "/GuestFavorites_icon.png",
  },
  {
    value: "Filter by",
    icon: "/filter_icon.png",
  },
];

const FeaturedDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FishingFeaturedItem>(
    FishingFeaturedItem[0]
  );

  const handleDropDown = (item: (typeof FishingFeaturedItem)[0]) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="md:hidden w-full "
    >
      <div className="">
        <div
          className="w-full p-3 rounded-4xl text-left flex justify-between items-center text-[#3A3A3A] border-[#836448] font-urbanist"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-full max-w-[220px] p-[13px] py-[10px] flex justify-start items-center gap-2 rounded-4xl border-[1px] bg-[#836448] text-[#ffffff]  font-urbanist">
            <Image
              src={selectedItem.icon}
              width={12}
              height={10}
              priority
              className="w-[24px] "
              alt="icon"
            />
            <span className="text-[16px]  text-[#ffffff]">
              {selectedItem.value}
            </span>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#9875591A] flex justify-center items-center">
            <IoIosArrowDown
              className={`w-5 h-5 transform transition-transform  duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={`${
                isOpen ? "h-auto" : "h-0"
              } mt-2 bg-white  rounded-4xl p-3 shadow-md transition-all duration-300`}
            >
              {FishingFeaturedItem.map(
                (item: FishingFeaturedItem, i: number) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    key={i}
                    className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg cursor-pointer "
                    onClick={() => handleDropDown(item)}
                  >
                    <Image
                      src={item.icon}
                      width={25}
                      height={24}
                      alt="icon"
                      className="w-5"
                    />
                    <span className="text-[16px] text-[#3A3A3A]">
                      {item.value}
                    </span>
                  </motion.li>
                )
              )}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Grid Layout for Larger Screens */}

      <ul className="hidden sm:grid sm:grid-cols-3 xl:grid-cols-6 gap-4">
        {FishingFeaturedItem.map((item: FishingFeaturedItem, i: number) => (
          <li
            key={i}
            className="w-full p-[13px] flex justify-start items-center gap-2 rounded-4xl border-[1px] border-[#836448] font-urbanist"
          >
            <Image
              src={item.icon}
              width={24}
              height={24}
              priority
              className="w-6"
              alt="icon"
            />
            <span className="text-[16px] text-[#3A3A3A]">{item.value}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeaturedDropdown;
