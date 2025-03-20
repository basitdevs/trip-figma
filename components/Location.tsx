"use client";
import { motion } from "framer-motion";

const Location: React.FC = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden justify-start items-start gap-4 px-3 md:px-12 lg:px-16">
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.37, ease: "easeInOut" }}
        className="text-[#232323] text-[30px] font-semibold text-left font-urbanist"
      >
        Welcome to Your Stay
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.37, ease: "easeInOut" }}
        className="w-full max-h-[50vh] rounded-2xl overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24661.24349725006!2d-76.99557925502229!3d39.409300741760234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8252d6f173c3b%3A0xf4f21880fb7f617d!2sEmerald%20Valley%2C%20Eldersburg%2C%20MD%2021784%2C%20USA!5e0!3m2!1sen!2s!4v1742395378262!5m2!1sen!2s"
          width="100%"
          height="400px"
          style={{ border: "0px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
      <motion.h4
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.37, ease: "easeInOut" }}
        className="text-[#232323] text-[25px] font-medium font-urbanist"
      >
        Sunridge Heights, Emerald Valley
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.37, ease: "easeInOut" }}
        className="text-[18px] font-normal .font-firtree text-left -mt-3"
      >
        We are situated in a secure and peaceful neighborhood, offering privacy
        and comfort. The area is well-protected, with security fencing ensuring
        a safe environment. Our surroundings feature spacious properties,
        allowing for a serene and exclusive experience. Nestled in an elevated
        spot, you’ll enjoy breathtaking views and the calming sounds of nature,
        with only birdsong breaking the silence.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.37, ease: "easeInOut" }}
        className="text-[#997658] text-[16px] font-normal .font-firtree text-center p-3 px-5 rounded-4xl border-[1px] border-[#997658] hover:text-[#ffffff] hover:bg-[#997658] transition-all duration-300 cursor-pointer "
      >
        View More
      </motion.button>
      <motion.hr
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.37, ease: "easeInOut" }}
        className="w-full text-[#000] my-3"
      />
    </div>
  );
};

export default Location;
