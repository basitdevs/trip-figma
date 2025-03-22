import Image from "next/image";
import FadeUp from "./motion/FadeUp";

const VideoSection: React.FC = () => {
  return (
      <FadeUp>
    <div className="w-full px-4 md:px-12  xl:px-16 py-16 flex justify-center items-center relative">
        <div className="w-full rounded-4xl flex justify-center items-center bg-[url('/videoImg.jpeg')] bg-no-repeat bg-cover bg-center h-[60vh] md:h-[70vh] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
          <span className="ripple ripple-1"></span>
          <span className="ripple ripple-2"></span>
          <span className="ripple ripple-3"></span>

          <button className="relative z-10 flex  justify-center items-center w-14 h-14 rounded-full bg-white shadow-md cursor-pointer">
            <Image
              src="/playIcon.svg"
              alt="playicon"
              width={10}
              height={10}
              className="w-[20px] ml-1"
              priority
            />
          </button>
        </div>
    </div>
      </FadeUp>
  );
};

export default VideoSection;
