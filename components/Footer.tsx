"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easeInOut }}
      className="w-full px-1 md:px-2 py-4"
    >
      <div className=" w-full rounded-4xl overflow-hidden bg-[#232323] pt-16 px-8 ">
        <div className="w-full  h-full justify-center items-center flex lg:justify-between lg:items-start flex-col flex-wrap xl:flex-nowrap lg:flex-row   gap-8 md:gap-10 pb-16 ">
          <div className="sm:max-w-[400px] lg:max-w-[26%]  flex flex-col justify-center items-center lg:items-start lg:justify-start gap-6 text-[#ffffff]">
            <Image
              src="/LOGOHERE_Footer.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-[200px]"
              priority
            />
            <p className="text-[16px] text-center lg:text-left text-[#ffffff] .font-firtree">
              Discover breathtaking destinations and seamless travel experiences
              with us. From luxury getaways to budget-friendly adventures, we
              make every journey unforgettable.
            </p>
          </div>
          <div className="flex flex-col lg:items-start lg:justify-start justify-center items-center gap-6">
            <h3 className="text-[30px] text-[#ffffff] font-semibold font-urbanist">
              Quick Links
            </h3>
            <Link
              href="/"
              className="text-[18px] text-[#ffffff] .font-firtree cursor-pointer"
            >
              Home{" "}
            </Link>
            <Link
              href="/"
              className="text-[18px] text-[#ffffff] .font-firtree cursor-pointer"
            >
              Explore Fishing Spots{" "}
            </Link>
            <Link
              href="/"
              className="text-[18px] text-[#ffffff] .font-firtree cursor-pointer"
            >
              Reviews{" "}
            </Link>
            <Link
              href="/"
              className="text-[18px] text-[#ffffff] .font-firtree cursor-pointer"
            >
              Contact{" "}
            </Link>
          </div>
          <div className=" lg:w-[32%] flex flex-col items-center justify-center lg:items-start lg:justift-start gap-6">
            <h1 className="text-[30px] text-[#ffffff] font-semibold font-urbanist">
              Contact Info
            </h1>
            <div className="flex justify-start items-start ">
              <span className="text-[18px] font-semibold text-[#ffffff]">
                Address:
              </span>
              <p className="text-[18px] ml-2 text-[#ffffff] font-normal">
                Your Travel Agency, City, Country
              </p>
            </div>
            <div className="flex justify-start items-start ">
              <span className="text-[18px] text-[#ffffff] font-semibold">
                Email:
              </span>
              <p className="text-[18px] ml-2 text-[#ffffff] font-normal">
                support@yourwebsite.com
              </p>
            </div>
            <div className="flex justify-start items-start ">
              <span className="text-[18px] text-[#ffffff] font-semibold">
                Phone:
              </span>
              <p className="text-[18px ] ml-2 text-[#ffffff] font-normal">
                +123 456 7890
              </p>
            </div>
          </div>
          <div className=" flex  flex-col lg:justify-strat lg:items-start justify-center items-center gap-4">
            <h3 className="text-[30px] text-[#ffffff] font-semibold font-urbanist">
              Follow Us
            </h3>
            <div className="flex gap-4 lg:gap-2">
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#836448] rounded-full cursor-pointer">
                <Image
                  src="/F.svg"
                  alt="fackbook"
                  width={20}
                  height={20}
                  priority
                  className="size-8"
                />
              </div>
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#836448] rounded-full cursor-pointer">
                <Image
                  src="/X.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  priority
                  className="size-8"
                />
              </div>
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#836448] rounded-full cursor-pointer">
                <Image
                  src="/Insta.svg"
                  alt="fackbook"
                  width={20}
                  height={20}
                  priority
                  className="size-8"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="text-[#ffffff] w-full" />
        <div className="w-full text-center py-3 md:p-2">
          <span className="text-[14px] md:text-[16px] xl:text-[18px] text-[#ffffff] .font-firtree text-center w-full">
            © 2025 Meinangel trip. All Rights Reserved.
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
