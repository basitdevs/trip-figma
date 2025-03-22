"use client";
import Image from "next/image";
import FadeLeft from "./motion/FadeLeft";
import FadeRight from "./motion/FadeRight";

const otherImgs: string[] = [
  "/detailImg_1.jpeg",
  "/detailImg_2.jpeg",
  "/detilImg_3.jpeg",
  "/detailImg_4.jpeg",
];

const DetailHero: React.FC = () => {
  return (
    <div className="w-full px-3 md:px-12 xl:px-16 py-6 overflow-hidden">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-4">
        {/* Left Section */}
        <div className="w-full  sm:basis-[60%] rounded-4xl group overflow-hidden cursor-pointer">
          <FadeLeft>
            <Image
              src="/featuredImg_1.jpeg"
              alt="img"
              width={400}
              height={400}
              className="w-full group-hover:scale-[1.05] transition-all duration-200 object-cover object-center h-auto"
              priority
            />
          </FadeLeft>
        </div>

        {/* Right Section */}
        <div className="w-full sm:basis-[60%] grid grid-cols-2 gap-4  self-start">
          {otherImgs.map((item: string, i: number) => (
            <FadeRight delay={i * 0.1} key={i}>
              <div className="relative overflow-hidden h-full cursor-pointer rounded-2xl group">
                <Image
                  src={item}
                  alt="img"
                  priority
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.05] transition-all duration-200"
                />
                {i === 3 && (
                  <div
                    style={{ background: "rgba(0,0,0,0.3)" }}
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                  >
                    <span className="text-[#ffffff] text-3xl font-medium">
                      8+
                    </span>
                  </div>
                )}
              </div>
            </FadeRight>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
