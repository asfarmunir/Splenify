"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import { FaArrowRightLong } from "react-icons/fa6";

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
      className="flex flex-col   w-full items-center px-4 justify-center    gap-4 py-16 2xl:py-20 md:px-8  mt-[20px] md:mt-[30px]"
    >
      <h1
        className={`text-[27px] mb-7 md:text-[40px] lg:text-[46px]  ${recoleta.className}    text-center `}
      >
        Ready To <span className="text-[#DF56FE]">Start</span> Your{" "}
        <span className="text-[#7165FF]">Flutter Journey</span>?
      </h1>

      <div className=" flex w-full max-w-7xl items-start justify-center  flex-col md:flex-row gap-8">
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
          className="max-w-2xl   px-8 py-16 w-full h-[43rem] rounded-xl gap-5 flex flex-col     "
        >
          <div className="relative w-fit ">
            <Image
              src="/images/contact_hero.png"
              alt="contact"
              width={200}
              height={200}
              className=" "
            />
            <div className=" absolute  -bottom-12 -right-28  p-4 px-6 shadow rounded-lg backdrop-blur  ">
              <h2 className="text-2xl font-bold">Musa</h2>
              <p className="text-sm text-[#747576]">
                Head of Technology Solution
              </p>
            </div>
          </div>
          <h2 className="2xl:text-lg  mt-16  text-[#4E4E4E] dark:text-slate-400">
            I would love to talk to you about your project or needs.
          </h2>
          <h2 className="2xl:text-lg   text-[#4E4E4E] dark:text-slate-400">
            Fill in the form or send us an email to <br /> hello@splenify.com{" "}
          </h2>
          <h1 className="text-xl 2xl:text-2xl font-bold capitalize tracking-wide">
            Talk to you in less than 24hs.
          </h1>
          <div className=" w-full p-5 mt-12 2xl:p-7 rounded-lg bg-[#7165FF33]">
            <h2 className="text-xl mb-4 2xl:text-2xl font-bold ">
              Schedule A Call
            </h2>
            <p className="mb-6">
              Feel free to select a time at your convenience!
            </p>
            <button className="text-[#7165FF]  inline-flex items-center gap-2  font-semibold">
              Lets Talk
              <FaArrowRightLong className="text-lg" />
            </button>
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
          className="max-w-2xl w-full"
        >
          <form
            action=""
            className=" bg-white  dark:bg-slate-900 dark:shadow-inner border dark:border-none border-[#D9D9D9] dark:shadow-gray-800 p-8   rounded-xl  flex flex-col gap-2"
          >
            <h2 className={`text-2xl 2xl:text-3xl font-bold mb-2`}>
              Got an idea? We’ve got the skills.
            </h2>
            <p className="text-sm 2xl:text-base capitalize text-slate-800 dark:text-slate-300 tracking-wide leading-loose  ">
              Fill out our contact form and we’ll get in touch!
            </p>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1 font-semibold text-[#4E4E4E] dark:text-slate-400"
              >
                Name
              </label>
              <input
                placeholder="enter name..."
                type="text"
                required
                className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1 font-semibold text-[#4E4E4E] dark:text-slate-400"
              >
                Last Name
              </label>
              <input
                placeholder="enter last name..."
                type="text"
                required
                className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1 font-semibold text-[#4E4E4E] dark:text-slate-400"
              >
                Email
              </label>
              <input
                placeholder="email@gmail.com"
                type="text"
                required
                className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1 font-semibold text-[#4E4E4E] dark:text-slate-400"
              >
                Phone Number
              </label>
              <input
                placeholder=" +1 234 567 890"
                type="text"
                required
                className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1 font-semibold text-[#4E4E4E] dark:text-slate-400"
              >
                Solution
              </label>
              <input
                placeholder="enter here..."
                type="text"
                required
                className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1 font-semibold text-[#4E4E4E] dark:text-slate-400"
              >
                How did you hear about us?
              </label>
              <input
                placeholder="add details..."
                type="text"
                required
                className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label
                htmlFor=""
                className=" text-sm 2xl:text-base mb-1 font-semibold text-[#4E4E4E] dark:text-slate-400"
              >
                Tell us about your project
              </label>
              <textarea
                placeholder="enter message..."
                required
                className=" w-full md:h-24 border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-[#7165FF]  p-4 w-full rounded-[8px] font-semibold mt-4 2xl:text-lg text-white"
            >
              Submit{" "}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
