import Image from "next/image";
import Link from "next/link";
import { FaEuroSign } from "react-icons/fa6";
import {easeInOut, motion} from 'framer-motion'
const cardsData = Array(6).fill(undefined);

const FeaturedCards: React.FC = () => {
  return (
    <section className="w-full py-14">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((item, i) => {
          return (
           <motion.div 
           key={i}

           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           transition={{duration:0.6,delay:0.1*i, ease:easeInOut}}
           className="w-full h-auto">

             <Link
              href={`/detail/${i + 1}`}
              
              className="w-full rounded-[20px]   overflow-hidden flex flex-col gap-3 justify-start   bg-[#ffffff] transition-all duration-300 hover:scale-[1.03]"
              style={{
                boxShadow: "0px 4px 4px rgba(128, 128, 128, 0.2)", // Gray shadow
              }}
            >
              <div
                className={`w-full bg-no-repeat bg-cover h-[240px] cursor-pointer`}
                style={{ backgroundImage: `url(/featuredImg_1.jpeg)` }}
              >
                <div
                  key={i}
                  className="w-full max-w-[190px] p-[8px] py-2  flex justify-start items-center gap-2 rounded-4xl border-[1px] border-[#ffffff] mt-4 ml-4 bg-[#ffffff] .font-urbanist"
                >
                  <Image
                    src="/GuestFavorites_icon.png"
                    width={12}
                    height={10}
                    priority
                    className="w-[20px] h-auto"
                    alt="icon"
                  />
                  <span className="text-[14px] text-[#3A3A3A] .font-urbanist">
                    Guest Favorites{" "}
                  </span>
                </div>{" "}
              </div>
              <div className="flex flex-col justify-start items-start gap-[6px] w-full px-4 py-6 pt-2">
                <div className=" w-full flex justify-between items-center">
                  <h3 className="text-[#000000] text-[25px] md:text-[20px] xl:text-[25px] font-semibold .font-urbanist">
                    Baltic Sea Fishing{" "}
                  </h3>
                  <div className="flex justify-between items-center gap-1 cursor-pointer">
                    <Image
                      src="/Star.svg"
                      alt="star "
                      width={10}
                      height={10}
                      priority
                      className="w-[12px] h-[12px]"
                    />
                    <span className="text-[16px] xl:text-[18px] font-normal .font-firtree text-[#000000]">
                      4.5
                    </span>
                  </div>
                </div>
                <p className="text-[16px] text-left xl:text-[18px] leading-tight .font-urbanist">
                  Catch cod and mackerel in the open sea with expert guides.{" "}
                </p>
                <div className="flex justify-star items-center gap-2 ">
                  <Image
                    src="/loaction_icon.png"
                    className="w-[14px] h-auto cursor-pointer"
                    alt="icon"
                    width={10}
                    height={106}
                    priority
                  />
                  <span className="text-[16px] xl:text-[18px] text-[#3A3A3A] .font-urbanist">
                    200 km from Berlin{" "}
                  </span>
                </div>
                <div className="flex justify-star items-center gap-2 ">
                  <Image
                    src="/calender_icon.png"
                    className="w-[16px] h-auto cursor-pointer"
                    alt="icon"
                    width={10}
                    height={10}
                    priority
                  />
                  <span className="text-[16px] xl:text-[18px] text-[#3A3A3A] .font-urbanist">
                    Apr 10 - 15{" "}
                  </span>
                </div>
                <div className="flex md:flex-col xl:flex-row justify-between md:justify-center xl:justify-between xl:items-center gap-2 w-full">
                  <div className="flex justify-start items-center text-[30px] font-semibold">
                    <FaEuroSign className="text-[24px]" />
                    <span className="text-[30px] font-semibold ">120</span>/
                    <span className="text-[30px] font-semibold text-[#836448]">
                      night
                    </span>
                  </div>
                  <motion.button
                  initial={{opacity:0,y:100}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{duration:0.6, ease:easeInOut}}
                  className="text-[16px] text-[#997658] outline-none border-[1px] border-[#997658] p-3 .font-urbanist rounded-4xl px-7 transition-all duration-300 hover:bg-[#997658] hover:text-[#ffffff] cursor-pointer">
                    Book Now
                  </motion.button>
                </div>
              </div>
            </Link>
           </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCards;
