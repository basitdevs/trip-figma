"use client";

import { useState } from "react";

const navItems: string[] = ["Home", "Explore Fishing Spots", "Reviews"];

const Nav: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0); // Default to 0

  return (
    <div className="hidden lg:block">
      <nav className="w-[30vw] md:max-w-[300px] lg:max-w-[360px]">
        <ul className="w-full flex justify-between items-center gap-2 lg:gap-4">
          {navItems.map((item, i) => (
            <li
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(0)} // Reset to 0 on leave
              className={`border-b-[1px] cursor-pointer ${
                hoveredIndex === i
                  ? "border-[#836448] text-[#836448]"
                  : "text-[#3A3A3A] border-[#ffffff]"
              } hover:border-[#836448] hover:text-[#836448] list-none transition-border duration-500`}
            >
              <p className="text-[16px]  xl:text-[18px] font-normal">{item}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
