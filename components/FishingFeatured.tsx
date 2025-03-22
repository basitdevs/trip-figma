"use client";
import Image from "next/image";
import FeaturedDropdown from "./FeaturedDropdowm";
import { useState } from "react";
import FadeUp from "./motion/FadeUp";

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
const FishingFeatured: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  return (
    <div className="w-full">
      <ul className="hidden  md:grid sm:grid-cols-3 xl:grid-cols-6 gap-4 w-full px-3 md:px-0">
        {FishingFeaturedItem.map((item: FishingFeaturedItem, i: number) => (
          <FadeUp delay={0.03 * 1} key={i}>
            <div
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(0)}
              className={`group w-full transition-all duration-200 p-[13px] flex justify-start items-center gap-2 rounded-4xl border-[1px] cursor-pointer font-urbanist ${
                i == 5 ? "bg-[#9875591A]" : ""
              } ${
                hoveredIndex == i && hoveredIndex != 5
                  ? "bg-[#836448] text-[#ffffff]"
                  : "border-[#836448]"
              }`}
            >
              <Image
                src={item.icon}
                width={12}
                height={10}
                priority
                className={`w-[24px] group-hover:filter hover:brightness-0 hover:invert ${
                  hoveredIndex == i &&
                  hoveredIndex != 5 &&
                  "filter brightness-0 invert"
                }`}
                alt="icon"
              />
              <span className="text-[16px]">{item.value}</span>
            </div>
          </FadeUp>
        ))}
      </ul>
      <FeaturedDropdown />
    </div>
  );
};

export default FishingFeatured;
