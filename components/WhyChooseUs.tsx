import Image from "next/image";
import FadeUpTitle from "./motion/FadeUpTitle";
import FadeUp from "./motion/FadeUp";

interface Features {
  title: string;
  icon: string;
  des: string;
}

const KeyFeatured: Features[] = [
  {
    title: "Flexible Travel Options",
    icon: "/whyIcon_1.png",
    des: "Choose from 500+ destinations with tailored packages to fit your needs.",
  },
  {
    title: "Expert Travel Advisors",
    icon: "/whyicon_2.png",
    des: "Get guidance from our experienced travel experts to plan the perfect trip",
  },
  {
    title: "Hassle-Free Booking",
    icon: "/whyicon_3.png",
    des: "Fast, secure, and simple booking process with instant confirmations.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-12  xl:px-16 flex flex-col justify-center items-center gap-4 my-14">
      <div className="text-center flex justify-center items-center gap-2 flex-col">
        <div className="w-full text-center flex justify-center items-center gap-4 leading-tight">
          <FadeUpTitle>
            <h1 className="text-[32px] md:text-[44px] lg:text-[48px] xl:text-[55px] font-bold text-[#000] font-urbanist ">
              Why Book {"  "}
            </h1>
          </FadeUpTitle>
          <FadeUpTitle>
            <h1 className="text-[32px] md:text-[44px] lg:text-[48px] xl:text-[55px] font-bold text-[#997658] font-urbanist">
              With Us?
            </h1>
          </FadeUpTitle>
        </div>
        <FadeUp>
          <p className="text-[16px] lg:text-[18px] text-[#3A3A3A] text-center">
            Enjoy exclusive benefits when choosing our travel services!
          </p>
        </FadeUp>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
        {KeyFeatured.map((item: Features, i: number) => (
          <FadeUp key={i} delay={i * 0.04}>
            <div className=" flex flex-col justify-center items-center gap-2 rounded-2xl bg-[#ffffff] text-center cursor-pointer shadow-lg shadow-gray-200 py-4 px-4 hover:scale-[1.03] transition-all duration-300">
              <div className="rounded-full flex justify-center items-center bg-[#836448] w-[70px] h-[70px] ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                  className="w-[35px] h-[35px] filter brightness-0 invert"
                />
              </div>
              <h4 className="text-[25px] text-[#000] font-urbanist">
                {item.title}
              </h4>
              <p className="text-[18px] text-[#3A3A3A] .font-firtree">
                {item.des}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
