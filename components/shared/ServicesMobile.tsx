import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { items } from "./AppsOnDemand";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const Services = () => {
  return (
    <motion.div
      id="services"
      initial={{
        opacity: 0,
      }}
      viewport={{
        once: true,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      }}
      className="flex md:hidden flex-col w-full  items-center gap-5 pt-2 pb-12 md:px-8  my-[20px] md:my-[30px]"
    >
      <h2 className=" text-base   2xl:xl tracking-wide ">
        Go beyond just visuals...
      </h2>
      <h1
        className={` text-2xl px-5 relative md:text-3xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
      >
        With <span className=" text-[#F149FF] ">Splenify,</span> you get the
        full <span className=" text-[#7165FF] ">buffet</span>{" "}
        <Image
          src="/images/line_vector2.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" hidden md:block dark:invert  w-[140px] 2xl:w-[200px] absolute right-[19.5rem] 2xl:right-[32rem] 2xl:-bottom-4 rotate-1  "
        />
        <Image
          src="/images/line_vector.svg"
          alt="Splenify"
          width={160}
          height={140}
          className="  dark:invert hidden md:block  w-[100px] 2xl:w-[170px] absolute right-[1rem] 2xl:right-[0rem] -bottom-1 2xl:-bottom-4   "
        />
      </h1>

      {items.map((item, index) => (
        <div
          key={index}
          className=" w-[95%] max-w-md p-3   bg-[#F3F3F9] dark:bg-gray-900 flex  items-center rounded-3xl justify-center"
        >
          <div
            className={`flex items-center  p-5 gap-4 bg-white dark:bg-slate-800 rounded-3xl  w-full flex-row ${
              index % 2 == 0
                ? "justify-start  flex-row"
                : "justify-start flex-row-reverse"
            }`}
          >
            <Image
              src={item.img}
              alt="Splenify"
              width={65}
              height={65}
              className=" dark:invert "
            />
            <h3 className=" italic text-xl  font-semibold  text-center text-gray-500 dark:text-gray-300">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Services;
