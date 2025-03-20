import Image from "next/image";
import { title } from "process";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import {easeInOut, motion} from 'framer-motion'
interface SearchItem {
  title: string;
  icon: string;
  value: string;
}

const searchItems: SearchItem[] = [
  {
    title: "Location",
    icon: "/loaction_icon.png",
    value: "Singapore",
  },
  {
    title: "Check in ",
    icon: "/calender_icon.png",
    value: "Mon, 20 Mar 2025",
  },
  {
    title: "Check Out",
    icon: "/calender_icon.png",
    value: "Sun, 25 Mar 2025",
  },
  {
    title: "Guest",
    icon: "/guest-icon.png",
    value: "04",
  },
];

const SearchBarSection: React.FC = () => {
  return (
    <motion.div
           initial={{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.8, delay:0.2, ease:easeInOut}}
    className="w-full absolute -bottom-10 left-1/2 transform -translate-x-1/2       ">
      <div className="hidden lg:flex   w-[92%] mx-auto bg-[#ffffff] rounded-2xl  flex-col justify-center items-center shadow-lg shadow-gray-100 z-100 px-8 py-6">
        <div className="w-full flex justify-between items-center gap-4">
          <div className="flex flex-col justify-start items-start">
            <p className="text-[#454545] text-[16px] xl:text-[18px] .font-urbanist ">
              Your Location
            </p>
            <h3 className="text-[#232323] text-[28px] font-semibold .font-urbanist mb-3">
              Berlin, Germany
            </h3>
          </div>
          <div className="flex justify-center  items-center gap-2 mt-[-8px]">
            <span className="text-[16px] xl:text-[18px] text-[#836448] font-normal .font-urbanist ">
              Search History
            </span>
            <MdOutlineKeyboardArrowRight className="text-[20px] text-[#836448]" />
          </div>
        </div>
        <hr className="w-full text-[#232323] my-1" />
        <div className="flex items-end justify-center gap-4  mb-1">
          <div className=" w-full flex justify-between items-center gap-4  ">
            {searchItems.map((item: SearchItem, i: number) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start w-full min-w-[18vw] xl:min-w-[19vw]"
                >
                  <span className="text-[17px] xl:text-[19px] text-[#232323] .font-urbanist my-3">
                    {item.title}
                  </span>
                  <div className="p-2 px-3 rounded-4xl flex justify-start items-center border-[1px] border-[#3A3A3A] gap-2 w-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={12}
                      priority
                      className="W-[17PX] h-[17px]"
                    />
                    <span className="text-[#3A3A3A] text-[16px] xl:text-[18px] .font-urbanist ">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[69px] h-[64px] xl:w-[75px] xl:h-[70px]  rounded-full flex justify-center items-center bg-[#836448] hover:bg-[#967253] transition-colors duration-300 cursor-pointer">
            <IoSearch className="text-[#ffffff] text-[30px]" />
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className=" lg:hidden flex   w-[90%] mx-auto bg-[#ffffff] rounded-2xl  flex-col justify-center items-center shadow-xl shadow-gray-100 z-100 px-4 py-6">
        <div className="w-full flex justify-between  gap-4">
          <div className="flex flex-col justify-start items-start">
            <p className="text-[#454545] text-[14px] sm:text-[16px] .font-urbanist ">
              Your Location
            </p>
            <h3 className="text-[#232323] text-[22px] sm:tetx-[26px] font-semibold .font-urbanist mb-3">
              Berlin, Germany
            </h3>
          </div>
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#836448] hover:bg-[#967253] transition-colors duration-300 ">
            <IoSearch className="text-[#ffffff] text-[24px]" />
          </div>
        </div>
        <hr className="w-full text-[#232323] my-1" />
        <div className=" w-full flex flex-col items-start justify-center gap-4  mb-1">
          <div className=" w-full grid grid-cols-2 gap-4 gap-y-1 ">
            {searchItems.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start w-full "
                >
                  <span className="text-[16px]  text-[#232323] .font-urbanist my-3">
                    {item.title}
                  </span>
                  <div className="p-2 px-3 rounded-4xl flex justify-start items-center border-[1px] border-[#3A3A3A] gap-2 w-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={12}
                      priority
                      className="W-[14PX] h-[14px]"
                    />
                    <span className="text-[#3A3A3A] text-[14px] .font-urbanist ">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center  items-center gap-2 text-center">
            <span className="text-[16px] xl:text-[18px] text-[#836448] font-normal .font-urbanist ">
              Search History
            </span>
            <MdOutlineKeyboardArrowRight className="text-[20px] text-[#836448]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBarSection;
