import Image from "next/image";
import FadeUpTitle from "./motion/FadeUpTitle";
import FadeUp from "./motion/FadeUp";

const StayItems1: string[] = [
  "Check-in after 2:00 PM",
  "Checkout before 11:00 AM",
  "No smoking inside the property",
];
const StayItems2: string[] = [
  "24/7 security monitoring",
  "Fire extinguisher & first-aid kit available",
  "Smart lock entry system",
];

const StayItems3: string[] = [
  "Free cancellation up to 7 days before check-in.",
  "Partial refund available for cancellations up to 3 days before check-in.",
  "Review full policy for more details.",
];
const ThingsToKnow: React.FC = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col justify-start items-start gap-4 px-3 md:px-12 lg:px-16 pb-20">
      <FadeUpTitle>
        <h3 className="text-[#232323] text-[22px] md:text-[26] lg:text-[30px] font-medium font-urbanist ">
          Things to Know
        </h3>
      </FadeUpTitle>
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6 md:gap-3 lg:gap-6 md:justify-between md:items-start">
        <div className="w-full flex flex-col gap-2 justify-between items-start">
          <FadeUpTitle>
            <h4 className="text-[20px] font-semibold font-urbanist text-[#232323] text-left">
              Where You’ll Stay
            </h4>
          </FadeUpTitle>
          <div className="w-full flex flex-col gap-2 justify-between items-start md:min-h-[250px] lg:min-h-[224px] xl:min-h-[170px]">
            <div className="flex justify-center items-start flex-col gap-3">
              {StayItems1.map((item: string, i: number) => (
                <FadeUp key={i} delay={0.04 * i}>
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      src="/checkIcon.svg"
                      alt="check_icon"
                      priority
                      width={10}
                      height={10}
                      className="w-[16px]"
                    />
                    <span className="text-[14px] md:text-[16px] .font-firtree">
                      {item}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
            <a
              href=""
              className="text[16px] .font-firtree text-[#836448] underline mt-6 justify-self-end items-s"
            >
              Show More
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 justify-between items-start">
          <FadeUpTitle>
            <h4 className="text-[20px] font-semibold font-urbanist text-[#232323] text-left">
              Where You’ll Stay
            </h4>
          </FadeUpTitle>
          <div className="w-full flex flex-col gap-2 justify-between items-start md:min-h-[250px]  lg:min-h-[224px] xl:min-h-[170px]">
            <div className="flex justify-center items-start flex-col gap-3">
              {StayItems2.map((item: string, i: number) => (
                <FadeUp key={i} delay={0.04 * i}>
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      src="/checkIcon.svg"
                      alt="check_icon"
                      priority
                      width={10}
                      height={10}
                      className="w-[16px]"
                    />
                    <span className="text-[14px] md:text-[16px] .font-firtree">
                      {item}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
            <a
              href=""
              className="text[16px] .font-firtree text-[#836448] underline mt-6 justify-self-end items-s"
            >
              Show More
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 justify-between items-start max-w-[360px]">
          <FadeUpTitle>
            <h4 className="text-[20px] font-semibold font-urbanist text-[#232323] text-left">
              Where You’ll Stay
            </h4>
          </FadeUpTitle>
          <div className="w-full flex flex-col gap-2 justify-between items-start md:min-h-[250px]  lg:min-h-[224px] xl:min-h-[170px]">
            <div className="flex justify-center items-start flex-col gap-3">
              {StayItems3.map((item: string, i: number) => (
                <FadeUp key={i} delay={0.04 * i}>
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      src="/checkIcon.svg"
                      alt="check_icon"
                      priority
                      width={10}
                      height={10}
                      className="w-[16px]"
                    />
                    <span className="text-[14px] md:text-[16px] .font-firtree">
                      {item}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
            <a
              href=""
              className="text[16px] .font-firtree text-[#836448] underline mt-6 justify-self-end items-s"
            >
              Show More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
