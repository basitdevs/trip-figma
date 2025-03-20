"use client";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa6";
import { motion } from "framer-motion";
const Booking: React.FC = () => {
  return (
    <motion.div className="w-full flex flex-col gap-4 ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full flex flex-col gap-3 rounded-3xl bg-[#ffffff] shadow-lg shadow-gray-200 p-4 py-6"
      >
        <div className="flex md:flex-col lg:flex-row justify-between items-center gap-6">
          <div className="w-full flex flex-col justify-start gap-3">
            <span className="text-[19px] font-normal  text-[#232323B2] ">
              Check in{" "}
            </span>
            <div className="w-full rounded-4xl p-3 flex justify-center items-center gap-2 border-[1px] border-[#232323B2]">
              <Image
                src="/calender_icon.png"
                alt="calender"
                priority
                width={10}
                height={10}
                className="w-4"
              />
              <span className="text-[11px] sm:text-[14px] font-normal font-urbanist">
                Mon, 20 Mar 2025
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start gap-3">
            <span className="text-[19px] font-normal  text-[#232323B2]  ">
              Check Out{" "}
            </span>
            <div className="w-full rounded-4xl p-3 flex justify-center items-center gap-2 border-[1px] border-[#232323B2]">
              <Image
                src="/calender_icon.png"
                alt="calender"
                priority
                width={10}
                height={10}
                className="w-4"
              />
              <span className="text-[11px] sm:text-[14px] font-normal font-urbanist">
                Sun, 25 Mar 2025
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start gap-3">
          <span className="text-[19px] font-normal  text-[#232323B2] ">
            Guest{" "}
          </span>
          <div className="w-full rounded-4xl p-3 flex justify-between items-center gap-2 border-[1px] border-[rgba(35,35,35,0.7)]">
            <div className="flex justify-start gap-2 items-center w-full">
              <Image
                src="/user_icon.png"
                alt="calender"
                priority
                width={10}
                height={10}
                className="w-4"
              />
              <span className="text-[16px] font-normal font-urbanist">04</span>
            </div>
            <MdKeyboardArrowDown className="text-[rgba(35,35,35,0.7)] text-[28px]" />
          </div>
        </div>
        <div className="flex justify-start items-center text-[30px] font-semibold">
          <FaEuroSign className="text-[24px]" />
          <span className="text-[30px] font-semibold ">120</span>/
          <span className="text-[30px] font-semibold ">night</span>
        </div>
        <p className="text-[12px] font-normal font-urbanist text-left -mt-1 mb-2 ml-1">
          {" "}
          Limited Availability! Secure your spot now before it’s fully booked.
        </p>
        <div className="w-full flex justify-between items-center gap-3 mx-1">
          <div className="flex gap-2">
            <Image
              src="/cleaningFeeIcon.png"
              alt="cleaningFee-icon"
              width={16}
              height={16}
              priority
              className="w-[14px]"
            />
            <span className="text-[13px] sm:text-[14px] text-[#3A3A3A] font-urbanist">
              Cleaning Fee
            </span>
          </div>
          <span className="font-urbanist text-[13px] sm:text-[14px] text-[#3A3A3A]">$5</span>
        </div>
        <div className="w-full flex justify-between items-center gap-3 my-2 mx-1">
          <div className="flex gap-2">
            <Image
              src="/serviceFee.png"
              alt="serviceFee-icon"
              width={16}
              height={16}
              priority
              className="w-[14px]"
            />
            <span className="text-[13px] sm:text-[14px] text-[#3A3A3A] font-urbanist">
              Service Fee
            </span>
          </div>
          <span className="font-urbanist text-[13px] sm:text-[14px] text-[#3A3A3A] font-urbanist">
            $74
          </span>
        </div>
        <hr className="w-full text-[#000]" />
        <div className="w-full flex justify-between items-center gap-3 my-1 mx-1">
          <div className="flex gap-2">
            <span className="text-[13px] sm:text-[14px] text-[#3A3A3A] font-urbanist">
              Total Before Taxes
            </span>
          </div>
          <span className="font-urbanist text-[13px] sm:text-[14px] text-[#3A3A3A] font-urbanist">
            $568
          </span>
        </div>
        <button className="w-full p-4 text-[16px] text-[#ffffff] font-normal font-urbanist rounded-[32px] bg-[#836448] hover:bg-[#ffffffff] cursor-pointer hover:text-[#836448] transition-all duration-300 mt-2">
          Reserve Now
        </button>
        <p className="text-[12px] font-normal text-[#3A3A3A] text-center">
          You won't be charged yet
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className=" border-[1px] border-[#3A3A3A] rounded-2xl p-2 px-6 flex items-center gap-2  mt-1"
      >
        <Image
          src="/ExclusiveExperience_icon.png"
          alt=""
          priority
          width={14}
          height={14}
          className="w-[22px] h-[22px] md:-mt-12 lg:-mt-4 items-self-start"
        />
        <div className="flex flex-col items-start gap-1">
          <h5 className="l text-[16px] g:text-[18px] text-[#3A3A3A] font-urbanist font-semibold">
            Exclusive Experience
          </h5>
          <span className="text-[12px] text-[#3A3A3A]  font-semibold">
            This spot is highly sought after and gets booked quickly.
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full flex justify-center items-center gap-1"
      >
        <Image
          src="/flag_icon.png"
          alt="flag_icon"
          priority
          width={10}
          height={10}
          className="w-3"
        />
        <span className="text-[13px] sm:text-[14px] text-[#3A3A3A] font-urbanist">
          Report this Listing
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Booking;
