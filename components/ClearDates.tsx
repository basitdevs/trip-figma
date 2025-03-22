import Calender from "./CalenderDate";
import FadeUp from "./motion/FadeUp";

const ClearDates: React.FC = () => {
  return (
    <div className="w-full flex justify-start items-start mb-10">
      <div className="w-full  flex flex-col justify-start items-start gap-2">
        <FadeUp>
          <div className="w-full flex justify-between items-start gap-3">
            <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-urbanist ">
              Your Baltic Sea Fishing Trip
            </h3>
            <button className="hidden lg:block text-[#997658] text-[16px] font-normal .font-firtree text-center p-2 px-4 rounded-4xl border-[1px] border-[#997658] hover:text-[#ffffff] hover:bg-[#997658] transition-all duration-300 cursor-pointer mt-2">
              Clear Dates
            </button>
          </div>
        </FadeUp>
        <FadeUp>
          <h4 className="text-[20px] text-[#000] font-urbanist -mt-2">
            2 nights of adventure
          </h4>
        </FadeUp>

        <span className="text-[14px] text-[#3A3A3A] font-urbanist">
          May 24, 2025 – May 26, 2025
        </span>

        <Calender />
        <FadeUp>
          <button className=" lg:hidden text-[#997658] text-[16px] font-normal .font-firtree text-center p-2 px-4 rounded-4xl border-[1px] border-[#997658] hover:text-[#ffffff] hover:bg-[#997658] transition-all duration-300 cursor-pointer mt-3 -mb-5 lg:mb-0">
            Clear Dates
          </button>
        </FadeUp>
      </div>
    </div>
  );
};

export default ClearDates;
