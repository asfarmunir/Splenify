"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mulish",
});

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
      className="flex flex-col md:flex-row  w-full items-center px-4 justify-center bg-[#F3F3F9]   dark:bg-gray-950   gap-4 py-16 2xl:py-20 md:px-8  mt-[20px] md:mt-[30px]"
    >
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
        className="hidden md:block"
      >
        {/* <Image
          src="/images/contact_hero.svg"
          width={300}
          height={300}
          className=" w-full h-full  mt-16 2xl:mt-20 max-w-xl"
          alt=" hero"
        /> */}
      </motion.div>
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
        className="max-w-xl bg-[#7165FF] relative px-8 py-12 w-full h-[43rem] rounded-xl flex flex-col justify-between "
      >
        <Image
          src="/icons/contact-bg.svg"
          alt="Splenify"
          width={200}
          height={200}
          className="absolute bottom-0 right-0"
        />
        <Image
          src="/bento grid/star2.webp"
          alt="Splenify"
          width={100}
          height={100}
          className="absolute right-10 top-10"
        />
        <div className=" z-10">
          <h2 className="text-2xl 2xl:text-4xl font-bold mb-3 text-white ">
            Contact Information
          </h2>
          <p className=" text-[#C9C9C9] text-lg 2xl:text-xl">
            Say something to start a live chat!
          </p>
        </div>
        <div className=" space-y-10 my-12 z-10">
          <div className="flex items-center gap-6">
            <Image
              src="/icons/phone.svg"
              alt="Splenify"
              width={30}
              height={30}
            />
            <p className=" text-white text-xl">+1 234 567 890</p>
          </div>
          <div className="flex items-center gap-6">
            <Image
              src="/icons/mail.svg"
              alt="Splenify"
              width={30}
              height={30}
            />
            <p className=" text-white text-xl">demo@gmail.com</p>
          </div>
          <div className="flex items-center gap-6">
            <Image src="/icons/map.svg" alt="Splenify" width={30} height={30} />
            <p className=" text-white text-xl">
              1234 North Avenue Luke Lane, <br /> South Bend, IN 360001
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="  w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-white hover:bg-[#F149FF]  ">
            <Image
              src="/icons/twitter.svg"
              className=" invert hover:invert-0"
              alt="Splenify"
              width={20}
              height={20}
            />
          </p>
          <p className="  w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-white hover:bg-[#F149FF]  ">
            <Image
              src="/icons/insta2.svg"
              className="  hover:invert"
              alt="Splenify"
              width={20}
              height={20}
            />
          </p>
          <p className="  w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-white hover:bg-[#F149FF]  ">
            <Image
              src="/icons/discord.svg"
              className=" invert hover:invert-0"
              alt="Splenify"
              width={20}
              height={20}
            />
          </p>
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
        className="max-w-xl"
      >
        <form
          action=""
          className=" bg-white h-[43rem] dark:bg-slate-900 dark:shadow-inner dark:shadow-gray-800 p-8   rounded-xl  flex flex-col gap-2"
        >
          <h2
            className={`text-2xl 2xl:text-4xl ${recoleta.className} font-black mb-2`}
          >
            Lets Get Connected
          </h2>
          <p className="text-sm 2xl:text-base font-thin text-slate-800 dark:text-slate-300 tracking-wide leading-loose  ">
            Unique and powerful suite of software to run your entire business,
            brought to you transform the way you work.
          </p>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="" className=" 2xl:text-lg">
              Name
            </label>
            <input
              placeholder="enter your fullname..."
              type="text"
              required
              className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="" className=" 2xl:text-lg">
              Subject
            </label>
            <input
              placeholder="enter your subject..."
              type="text"
              required
              className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="" className=" 2xl:text-lg">
              Email
            </label>
            <input
              placeholder="enter your email..."
              type="text"
              required
              className=" w-full border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="" className=" 2xl:text-lg">
              Message
            </label>
            <textarea
              placeholder="enter message..."
              required
              className=" w-full md:h-24 border-2 p-2 border-[#D9D9D9] dark:border-slate-800 dark:bg-slate-800 px-4 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-[#7165FF]  p-3.5 w-full rounded-full mt-4 text-lg text-white"
          >
            Submit{" "}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
