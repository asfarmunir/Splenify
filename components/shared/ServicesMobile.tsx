"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const services = [
  {
    title: "Research & Strategy",
    icon: "/icons/research.svg",
  },
  {
    title: "User Journey Map",
    icon: "/icons/user.svg",
  },
  {
    title: "Information Architecture",
    icon: "/icons/info.svg",
  },
  {
    title: "Usability testing",
    icon: "/icons/testing.svg",
  },
  {
    title: "UX Writing",
    icon: "/icons/writing.svg",
  },
];

const Services = () => {
  return (
    <motion.div
      id="mobileServices"
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
      <div className="grid grid-cols-1 max-w-5xl 2xl:max-w-7xl sm:grid-cols-2 lg:grid-cols-3  gap-8 px-8 md:px-4 2xl:px-0  p-2 w-full">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
        >
          <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">UX</h2>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
              <Image
                src="/icons/audit.svg"
                alt="Splenify"
                width={22}
                height={22}
                className=" w-[16px] 2xl:w-[22px] "
              />
              <p className="text-[#7165FF]  text-xs   2xl:text-base">
                UX Audit
              </p>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
              >
                <Image
                  src={service.icon}
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" dark:invert w-[16px] 2xl:w-[22px] "
                />
                <p className="text-[#4E758D] dark:text-slate-300 text-xs   2xl:text-base">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
        >
          {" "}
          <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">UI</h2>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
              <Image
                src="/icons/audit.svg"
                alt="Splenify"
                width={22}
                height={22}
                className=" w-[16px] 2xl:w-[22px] "
              />
              <p className="text-[#7165FF]  text-xs   2xl:text-base">
                UX Audit
              </p>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
              >
                <Image
                  src={service.icon}
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px] dark:invert 2xl:w-[22px] "
                />
                <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
        >
          {" "}
          <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">
            Front-End
          </h2>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
              <Image
                src="/icons/audit.svg"
                alt="Splenify"
                width={22}
                height={22}
                className=" w-[16px]  2xl:w-[22px] "
              />
              <p className="text-[#7165FF]  text-xs   2xl:text-base">
                UX Audit
              </p>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
              >
                <Image
                  src={service.icon}
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px] dark:invert 2xl:w-[22px] "
                />
                <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
        >
          {" "}
          <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">Back-end</h2>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
              <Image
                src="/icons/audit.svg"
                alt="Splenify"
                width={22}
                height={22}
                className=" w-[16px]  2xl:w-[22px] "
              />
              <p className="text-[#7165FF]  text-xs   2xl:text-base">
                UX Audit
              </p>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
              >
                <Image
                  src={service.icon}
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px] dark:invert 2xl:w-[22px] "
                />
                <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
        >
          {" "}
          <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">
            Deployment
          </h2>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
              <Image
                src="/icons/audit.svg"
                alt="Splenify"
                width={22}
                height={22}
                className=" w-[16px]  2xl:w-[22px] "
              />
              <p className="text-[#7165FF]  text-xs   2xl:text-base">
                UX Audit
              </p>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
              >
                <Image
                  src={service.icon}
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px] dark:invert 2xl:w-[22px] "
                />
                <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
        >
          {" "}
          <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">
            Maintenance
          </h2>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
              <Image
                src="/icons/audit.svg"
                alt="Splenify"
                width={22}
                height={22}
                className=" w-[16px]  2xl:w-[22px] "
              />
              <p className="text-[#7165FF]  text-xs   2xl:text-base">
                UX Audit
              </p>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
              >
                <Image
                  src={service.icon}
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px] dark:invert 2xl:w-[22px] "
                />
                <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
