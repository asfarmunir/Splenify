"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

export const items = [
  {
    img: "/images/phoneCall.svg",
    title: "Discovery Call",
  },
  {
    img: "/images/research.svg",
    title: "Research",
  },
  {
    img: "/images/design.svg",
    title: "UI/Ux Design",
  },
  {
    img: "/images/frontend.svg",
    title: "Front-End Development",
  },
  {
    img: "/images/backend.svg",
    title: "Backend-End Development",
  },
  {
    img: "/images/deployment.svg",
    title: "Depolyment",
  },
  {
    img: "/images/mentain.svg",
    title: "Maintenance",
  },
];

const AppsOnDemand = () => {
  return (
    <motion.div
      id="about"
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
          delay: 0.3,
          ease: "easeInOut",
        },
      }}
      className="hidden md:flex flex-col w-full  items-center gap-5  my-[20px] md:pt-[100px] md:my-[30px]"
    >
      <h2 className=" text-base   2xl:xl tracking-wide ">See how we do it!</h2>
      <h1
        className={` text-2xl px-3  mb-8 lg:mb-0 leading-loose  relative md:text-3xl 2xl:text-5xl tracking-wide text-center ${recoleta.className}`}
      >
        Disrupt the digital market with our <br /> proven app creation{" "}
        <span className=" text-[#DF56FE] ">process!</span>
        <Image
          src="/images/line_vector.svg"
          alt="Splenify"
          width={200}
          height={200}
          className=" hidden md:block w-[150px] 2xl:w-[200px] absolute right-9 2xl:right-16 -bottom-3 -rotate-4 "
        />
      </h1>
      {/* Mobile version */}
      {items.map((item, index) => (
        <div
          key={index}
          className=" w-[95%] max-w-md p-3   bg-[#F3F3F9] dark:bg-gray-900 flex lg:hidden  items-center rounded-3xl justify-center"
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

      {/* Large Screen Version  */}
      <motion.div
        viewport={{ once: true }}
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        }}
        className="hidden lg:flex flex-col w-full lg:w-fit px-5 lg:px-0 lg:flex-row items-end my-16 gap-8 lg:gap-0 2xl:my-20"
      >
        <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] 2xl:h-[7.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-center rounded-tr-3xl rounded-tl-3xl md:rounded-bl-3xl  justify-center">
          <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
            <Image
              src="/images/phoneCall.svg"
              alt="Splenify"
              width={70}
              height={70}
              className=" dark:invert w-[58px] 2xl:w-[70px] h-[58px] 2xl:h-[70px] absolute -top-12 2xl:-top-14"
            />
            <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
              Discovery <br /> Call
            </h3>
          </div>
        </div>
        <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[8rem] 2xl:h-[9rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
          <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
            <Image
              src="/images/research.svg"
              alt="Splenify"
              width={70}
              height={70}
              className=" w-[62px]  dark:invert  2xl:w-[75px] h-[62px] 2xl:h-[75px] absolute -top-10 2xl:-top-12"
            />
            <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
              Research
            </h3>
          </div>
        </div>
        <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[9.5rem] 2xl:h-[10.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
          <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
            <Image
              src="/images/design.svg"
              alt="Splenify"
              width={70}
              height={70}
              className=" w-[62px]  dark:invert  2xl:w-[80px] h-[62px] 2xl:h-[80px] absolute -top-12 2xl:-top-[4.5rem]"
            />
            <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
              UI/Ux <br /> Design
            </h3>
          </div>
        </div>
        <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[11rem] 2xl:h-[12rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
          <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
            <Image
              src="/images/frontend.svg"
              alt="Splenify"
              width={70}
              height={70}
              className=" w-[62px]  dark:invert  2xl:w-[80px] h-[62px] 2xl:h-[80px] absolute -top-12 2xl:-top-16"
            />
            <h3 className=" italic text-sm 2xl:text-base  font-semibold  text-center text-gray-500 dark:text-gray-300">
              Front-End Development
            </h3>
          </div>
        </div>
        <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[12.5rem] 2xl:h-[13.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
          <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
            <Image
              src="/images/backend.svg"
              alt="Splenify"
              width={70}
              height={70}
              className=" w-[62px]  dark:invert  2xl:w-[83px] h-[62px] 2xl:h-[83px] absolute -top-12 2xl:-top-[4.5rem]"
            />
            <h3 className=" italic text-sm 2xl:text-base  font-semibold  text-center text-gray-500 dark:text-gray-300">
              Backend-End Development
            </h3>
          </div>
        </div>
        <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[14rem] 2xl:h-[15rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
          <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
            <Image
              src="/images/deployment.svg"
              alt="Splenify"
              width={70}
              height={70}
              className=" w-[69px]  dark:invert  2xl:w-[90px] h-[69px] 2xl:h-[90px] absolute -top-12 2xl:-top-[4.5rem]"
            />
            <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
              Depolyment
            </h3>
          </div>
        </div>
        <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[15.5rem] 2xl:h-[16.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl md:rounded-br-3xl   justify-center">
          <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
            <Image
              src="/images/mentain.svg"
              alt="Splenify"
              width={70}
              height={70}
              className=" w-[70px]  dark:invert  2xl:w-[95px] h-[70px] 2xl:h-[95px] absolute -top-12 2xl:-top-[4.5rem]"
            />
            <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
              Maintenance
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppsOnDemand;
