"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { HiMiniUser } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
const [mobileNav,setMobileNav]=useState<boolean>(false)

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  return (
    <div className="w-full mx-auto relative">
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: easeInOut }}
      className="max-w-[88vw] md:max-w-[86vw] mx-auto py-[30px] flex justify-between items-center gap-2 lg:gap-4"
    >
      <div className="w-auto">
        <Image
          src="/LOGOHERE.svg"
          alt="log"
          width={200}
          height={30}
          priority
          className="w-[150px] lg:w-[200]"
        />
      </div>
      <Nav />
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-4 border-[1px] border-[#997658] rounded-full  cursor-pointer">
          <div className="flex justify-center items-center px-1 pr-2 gap-3  h-[45px] rounde-2xl">
            <div className="rounded-full w-[40px] h-[40px]  bg-[#997658] flex justify-center items-end transition-all duration-200 hover:bg-[#8d6c4f]">
              <HiMiniUser className="text-[#ffffff] text-[34px]" />
            </div>
            <IoMenu className="text-[#997658] hover:text-[#8d6c4f] text-[30px]  " />
          </div>
        </div>
        <button className="hidden md:flex w-[130px] h-[46px] rounded-[50px]  justify-center items-center text-[#ffffff] text-[16px] xl:text-[18px] bg-[#836448] transition-all duration-200 hover:bg-[#8e6c4e] .font-firetree text-center cursor-pointer">
          {" "}
          Contact{" "}
        </button>
      </div>
    </motion.div>

    {/* Mobile menu */}

    <div className={`${mobileNav ? 'fixed top-[25px] md:top-[30px]' :'fixed top-[-100px] md:top-[-70px]'}  z-[100] left-1/2 transform -translate-x-1/2 w-full max-w-[80%]  md:max-w-[500px]  rounded-4xl bg-[#836448] p-3 text-[18px] px-8 text-[#ffffff] lg:hidden transition-all duration-300`}>
      <ul className="w-full flex justify-between items-center gap-3 md:gap-6 text-[14px] md:text-[16px] font-light ">
        <Link href='/' className="cursor-pointer">Home</Link>
        <Link href='/' className="cursor-pointer">Explore Fishing Spots</Link>
        <Link href='/' className="cursor-pointer">Reviews</Link>
      </ul>
    </div>
    </div>
  );
};

export default NavBar;