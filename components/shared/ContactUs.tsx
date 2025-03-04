"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const ContactUs = () => {
  return (
    <motion.div
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
      id="contact"
      className="flex  flex-col  pb-[80px] xl:pb-[224px] max-w-2xl md:max-w-6xl mx-auto  w-full items-center overflow-x-hidden  justify-center    gap-4 md:px-2  mt"
    >
      <h1
        className={`text-[28px]   sm:text-[47px] mb-4 md:mb-[60px] md:text-[40px] lg:text-[46px]  ${recoleta.className}    text-center `}
      >
        Ready to <span className="text-[#DF56FE]">start</span> your{" "}
        <span className="text-[#7165FF]">Flutter journey</span>?
      </h1>

      <div className=" flex flex-col lg:h-[855px] xl:h-[860px] 2xl:h-[900px]  xl:px-[60px] 2xl:px-0  w-full  max-w-2xl lg:max-w-5xl xl:max-w-6xl  items-start  justify-center   lg:flex-row gap-4 lg:gap-4 xl:gap-8">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="max-w-2xl     w-full h-full  rounded-xl  flex flex-col  justify-between   "
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center lg:items-start lg:flex-col gap-24 lg:gap-4 ">
            <div className="relative w-fit ">
              <Image
                src="/images/contact_hero.png"
                alt="contact"
                width={200}
                height={200}
                className=" "
              />
              <div className=" absolute  -bottom-12 -right-20  p-4 px-6 shadow-custom2 rounded-lg backdrop-blur  ">
                <h2 className="text-[20px] sm:text-2xl font-bold">Shayan</h2>
                <p className="text-sm text-[#747576] dark:text-slate-400 ">
                  Solution Specialist
                </p>
              </div>
            </div>
            <div className=" space-y-4">
              <h2 className="sm:text-[20px]  lg:mt-16 dark:text-slate-400">
                Got a mobile app that needs <br /> to be taken care of?
              </h2>
              <h2 className="sm:text-[20px]    dark:text-slate-400">
                We’ve got your back.
              </h2>
              <h2 className="sm:text-[20px]   max-w-xs  dark:text-slate-400">
                Schedule a call below, or send a quick email to
                <span className="text-[#7165FF]">
                  {" "}
                  teamsplenify@splenify.com
                </span>
              </h2>
            </div>
          </div>

          <h1
            className={` ${recoleta.className} mt-7 sm:mt-20 lg:mt-5 leading-[33px] text-[28px] text-center  sm:text-start sm:text-[33px] xl:text-[36px]   tracking-wide`}
          >
            Talk to you <br className="block sm:hidden" /> in less than{" "}
            <span className="text-[#DF56FE] px-1">24hs.</span>
          </h1>
          <div className=" hidden sm:block mt-[60px] w-full xl:w-[90%] p-6 mb-[15px] lg:mb-[0px] xl:p-7 rounded-lg bg-[#7165FF33]">
            <div className="flex items-center lg:items-start justify-between gap-6 lg:flex-col ">
              <div className=" w-full">
                <h2
                  className={`${recoleta.className} text-xl mb-4 sm:text-[28px] font-semibold `}
                >
                  Schedule A Call
                </h2>
                <p className=" sm:text-[20px] max-w-xs">
                  Feel free to select a time at your convenience!
                </p>
              </div>
              <Link
                href={"https://www.cal.com/splenify"}
                className="text-[#7165FF]   inline-flex text-nowrap items-center gap-2 xl:text-[20px]  font-semibold"
              >
                Lets Talk
                <FaArrowRightLong className="text-lg" />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="max-w-2xl w-full   h-full "
        >
          <form
            action=""
            className=" bg-white h-full  dark:bg-slate-900 dark:shadow-inner border dark:border-none border-[#D9D9D9] dark:shadow-gray-800 p-4 sm:p-8   rounded-xl  flex flex-col gap-1 xl:gap-2"
          >
            <h2
              className={` text-center  sm:capitalize  leading-[28px] sm:leading-[38px] sm:text-start text-[28px]  mb-2 ${recoleta.className}`}
            >
              Got an idea? <br className=" sm:hidden" />
              <span className="text-[#7165FF] px-0.5 sm:text-[#DF56FE] ">
                We’ve got the skills.
              </span>
            </h2>
            <p className="text-sm text-center sm:text-start sm:text-[20px]  text-slate-800 dark:text-slate-300 tracking-wide leading-[30px]  ">
              Fill out our contact form and we’ll <br className="sm:hidden" />{" "}
              get in touch!
            </p>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1   dark:text-slate-400"
              >
                Name
              </label>
              <input
                placeholder="enter name..."
                type="text"
                required
                className=" w-full text-[#B3B3B3] placeholder:text-[#B3B3B3] border p-1.5 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1   dark:text-slate-400"
              >
                Last Name
              </label>
              <input
                placeholder="enter last name..."
                type="text"
                required
                className=" w-full text-[#B3B3B3] placeholder:text-[#B3B3B3] border p-1.5 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1   dark:text-slate-400"
              >
                E-mail
              </label>
              <input
                placeholder="email@gmail.com"
                type="text"
                required
                className=" w-full text-[#B3B3B3] placeholder:text-[#B3B3B3] border p-1.5 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor="phone"
                className="text-sm 2xl:text-base mb-1 dark:text-slate-400"
              >
                Phone Number
              </label>
              <div className="flex flex-row gap-2">
                {" "}
                {/* Responsive container */}
                {/* Country Code Dropdown */}
                <Select>
                  <SelectTrigger className="w-1/4 text-[#B3B3B3] border p-1.5 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800  px-3 sm:px-4 rounded-[8px] appearance-none">
                    <SelectValue placeholder="+1 (USA)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+1">+1 USA</SelectItem>
                    <SelectItem value="+44">+44 UK</SelectItem>
                    <SelectItem value="+91">+91 India</SelectItem>
                    <SelectItem value="+92">+92 Pk</SelectItem>
                    <SelectItem value="+61">+61 Aus</SelectItem>
                    <SelectItem value="+33">+33 France</SelectItem>
                  </SelectContent>
                </Select>
                {/* Phone Number Input */}
                <input
                  placeholder="234 567 890"
                  type="text"
                  required
                  className="w-full md:w-3/4 text-[#B3B3B3] placeholder:text-[#B3B3B3] border p-1.5 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1   dark:text-slate-400"
              >
                Solution
              </label>

              <Select>
                <SelectTrigger className=" w-full text-[#B3B3B3]  placeholder:text-[#B3B3B3] border p-1.5 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-[8px]">
                  <SelectValue placeholder="Solution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Web Development</SelectItem>
                  <SelectItem value="dark">UI/UX Design</SelectItem>
                  <SelectItem value="system">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1   dark:text-slate-400"
              >
                How did you hear about us?
              </label>
              <input
                placeholder="add details..."
                type="text"
                required
                className=" w-full text-[#B3B3B3] placeholder:text-[#B3B3B3] border p-1.5 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1   dark:text-slate-400"
              >
                Tell us about your project
              </label>
              <input
                placeholder="enter message..."
                required
                className=" w-full border p-1.5 h-12 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-[8px]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#7165FF]  p-4 w-full rounded-[8px]  mt-4 xl:text-[17px] text-white"
            >
              Submit{" "}
            </button>
          </form>
        </motion.div>
        <div className=" sm:hidden block w-full p-6 sm:mt-12  xl:p-7 rounded-lg bg-[#7165FF33]">
          <div className="flex items-start justify-between gap-6 flex-col ">
            <div className=" w-full">
              <h2
                className={`${recoleta.className} mb-4 text-[28px] font-semibold `}
              >
                Schedule a call
              </h2>
              <p className="  [sm:text-[20px] max-w-xs">
                Feel free to select a time at your convenience!
              </p>
            </div>
            <Link
              href={"https://www.cal.com/splenify"}
              className="text-[#7165FF]   inline-flex text-nowrap items-center gap-2 xl:text-[20px]  font-semibold"
            >
              Let's Talk
              <FaArrowRightLong className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
