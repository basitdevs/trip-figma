'use client'
import SearchBarSection from "./SearchBarSection";
import {easeInOut, motion} from 'framer-motion'
const Hero: React.FC = () => {
  return (
    <section className="w-full px-1 md:px-2">
      <div className="relative w-full rounded-2xl overflow-hidden bg-[url('/heroimg.jpg')] bg-no-repeat bg-center bg-cover  h-[74vh]">
        <div className="w-full bg-[rgba(0,0,0,0.6)] h-full absolute top-0 left-0 flex justify-center items-center flex-col ">
          <motion.h1
          initial={{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.7, ease:easeInOut}}
          className="text-[#ffffff] text-[40px] md:text-[46px] lg:text-[50px] xl:text-[60px] font-semibold font-urbanist text-center leading-tight">
            Find Your Perfect Fishing Adventure
          </motion.h1>
          <motion.p
          initial={{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.7,delay:0.1, ease:easeInOut}}
          className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal .font-firtree text-[#ffffff] max-w-[300px] sm:max-w-full leading-1.3 my-1 mb-4">
            Discover and book unforgettable fishing experiences with expert
            guides across Germany & Europe.
          </motion.p>
        </div>
      </div>
      <SearchBarSection />
    </section>
  );
};

export default Hero;
