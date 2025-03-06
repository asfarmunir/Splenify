"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { containerVariants, fadeInVariants } from "@/lib/animations";
import HeroBentoGrid from "@/components/shared/HeroBentoGrid";
import Link from "next/link";
import { scrollToSection } from "./Navbar";
import Partners from "./Partners";
import BentoGrid from "./BentoGrid";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const acheivments = [
  {
    title: "Happy Clients",
    number: "300+",
  },

  {
    title: "Year of Market",
    number: "10+",
  },
  {
    title: "App Built",
    number: "35+",
  },
  {
    title: "Skillful Talent",
    number: "25+",
  },
];

const Hero = () => {
  return (
    <section className=" overflow-x-hidden">
      <header
        id="home"
        className="flex flex-col items-center gap-8 2xl:mt-6 mb-14 md:mb-10"
      >
        <div className="flex items-center py-1 sm:pt-2  relative gap-3 md:gap-3 2xl:gap-5">
          <Image
            src="/icons/left-arrow.svg"
            alt="Splenify"
            className="  absolute w-[43px] sm:w-[50px]  left-6 md:left-14 top-12 2xl:top-14"
            width={50}
            height={50}
          />
          <Image
            src="/icons/right-arrow.svg"
            alt="Splenify"
            className=" absolute w-[35px] sm:w-[42px] right-8 md:right-14 top-10 sm:top-12 2xl:top-14
            
            "
            width={42}
            height={42}
          />
          <h3 className=" text-xs sm:text-sm px-2.5 py-1.5 sm:px-6 sm:py-2  2xl:py-2  2xl:px-8 border   -rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            App Dev
          </h3>
          <h3 className=" text-xs sm:text-sm px-2.5 py-1.5 sm:px-6 sm:py-2   2xl:py-2  2xl:px-8 border   rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            UI | UX
          </h3>
          <h3 className=" text-xs sm:text-sm px-2.5 py-1.5 sm:px-6 sm:py-2  2xl:py-2  2xl:px-8 border   -rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            Design
          </h3>
          <h3 className=" text-xs sm:text-sm px-2.5 py-1.5 sm:px-6 sm:py-2   2xl:py-2  2xl:px-8 border   rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            Website
          </h3>
        </div>
        <h2 className=" text-[18px] sm:text-[35px] mt-2  md:text-[1.9rem] font-normal 2xl:text-[2.3rem]  ">
          We help you
        </h2>
      </header>
      <section className="flex  flex-col   items-center gap-2 sm:gap-4  ">
        <motion.div
          viewport={{ once: true }}
          initial={
            {
              opacity: 0,
              scale: 0.6,
            } /* Set initial properties */
          }
          whileInView={
            {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            } /* Animate when in view */
          }
          className={`  sm:max-w-full -mt-10   md:-mt-4 leading-snug sm:leading-none  -tracking-wide  text-[32px] sm2:text-[2.8rem]   sm:text-[64px]   lg:text-[80px] xl:text-[98px] px-0.5 text-center ${recoleta.className}`}
        >
          Design. <span className="grad_text md:px-4 2xl:px-6 ">Develop.</span>{" "}
          Deploy
        </motion.div>
        <p className=" text-[14px] sm:text-[17px] lg:text-[17px] tracking-wide my-1 px-4 text-center sm2:max-w-lg sm:max-w-xl md:max-w-2xl text-[#000000AD] dark:text-white">
          We’re a modern app-building company that creates apps that your
          customers love and that evolve with your business.
        </p>
        <div className="flex mb-9 xl:mb-[40px] sm:mb-[44px]  items-center justify-center gap-3 w-full   md:gap-4 px-5 md:px-12">
          <button
            onClick={() => scrollToSection("contact")}
            className=" bg-gradient-to-r hover:bg-gradient-to-tr w-[119px] hover:bg-[#DF56FE] transition-colors text-xs md:flex-grow-0  sm:w-[174px] lg:w-[194px] from-[#DF56FE] to-[#7165FF]   md:text-base 2xl:text-lg text-white font-normal rounded-[8px]  2xl:px-8 py-[0.8rem] sm:py-[1.1rem]  "
          >
            Contact Us
          </button>
          <Link
            href={"https://www.cal.com/splenify"}
            className=" bg-white dark:bg-transparent text-center w-[119px]   tracking-tight hover:shadow-lg    duration-400 transition-shadow   sm:w-[174px] lg:w-[194px] text-xs md:text-base 2xl:text-lg text-[#7165FF] font-semibold rounded-[8px]  p 2xl:px-8 py-[0.7rem]  sm:py-[0.95rem]  border-[3px] border-[#7165FF]"
          >
            Book Meeting
          </Link>
        </div>
        {/* <HeroBentoGrid /> */}
        <BentoGrid />
      </section>
      <div className="w-full px-[18px] sm:px-0 mb-[30px] sm:mb-[120px] mt-9 sm:mt-[64px] lg:mt-[112px]  xl:mt-[224px]  max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl gap-2 sm:gap-4 2xl:gap-6 mx-auto grid grid-cols-2 lg:grid-cols-4 justify-items-center ">
        {acheivments.map((acheivment, index) => (
          <motion.div
            key={index}
            className="px-7 md:px-12 xl:px-[16px] p-2 h-[81px] sm:h-[145px] pb-2 md:py-[16px] border-[2px] w-full border-[#DF56FE] rounded-[12px] sm:rounded-[20px] flex items-center justify-center  flex-col"
            initial={{ opacity: 0 }} // Initial state (opacity 0, positioned left)
            whileInView={{ opacity: 1 }} // Final state (fully visible, at normal position)
            transition={{
              duration: 0.6, // Duration of the animation
              delay: index * 0.1, // Staggering the animation for each item
              ease: "easeInOut", // Ease effect
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <h1
              className={` ${recoleta.className} text-[24px] text-center sm:text-[46px] xl:text-[48px] grad_text   font-semibold`}
            >
              {acheivment.number}
            </h1>
            <p className="text-[14px] sm:text-[19px]  text-center xl:text-[24px] text-slate-700 font-roboto">
              {acheivment.title}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1.3,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className=" w-full flex flex-col  items-center sm:gap-5"
      >
        <h2 className={` ${recoleta.className} text-[16px]  sm:text-[48px]`}>
          We have <span className="text-[#DF56FE]">worked</span> with
        </h2>
        <Partners />
      </motion.div>
      {/* <div className="flex gap-1 max-w-7xl mx-auto px-3 md:gap-8  justify-center items-center  md:items-start  relative ">
        <h2 className=" block  md:hidden text-lg  2xl:text-xl text-center absolute top-0">
          Our long list of happy clients include:
        </h2>
        <div className="flex flex-col gap-3">
          <h3 className=" p-2.5 px-3 text-nowrap 2xl:p-4 md:px-8 2xl:px-10 border flex flex-col text-slate-400/80   rotate-12  rounded-2xl md:rounded-3xl bg-white dark:bg-slate-900 dark:border-slate-700  border-slate-300 text-[0.65rem] md:text-base 2xl:text-lg ">
            <span className=" text-lg md:text-3xl 2xl:text-4xl text-[#7268FA] font-semibold">
              300+
            </span>
            Happy Clients
          </h3>
          <h3 className=" p-2.5 px-3 2xl:p-4 md:px-8 2xl:px-10 border flex flex-col text-slate-400/80   -rotate-12   rounded-2xl md:rounded-3xl bg-white dark:bg-slate-900 dark:border-slate-700  border-slate-300 text-[0.65rem] md:text-base 2xl:text-lg ">
            <span className=" text-lg md:text-3xl 2xl:text-4xl text-[#7268FA] font-semibold">
              40+
            </span>
            Skillful Talent
          </h3>
        </div>
        <div className="flex flex-col px-4 items-center justify-center space-y-8">
          <h2 className="  hidden md:block text-lg  2xl:text-xl text-center">
            Our long list of happy clients include:
          </h2>
          <div className="flex items-center gap-8 justify-center flex-wrap max-w-2xl 2xl:max-w-4xl">
            <motion.div
              variants={containerVariants} // Apply the container variant for staggering
              initial="initial"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="animate" // Trigger the staggered animation
              className="flex items-center gap-x-1 md:gap-x-4 gap-y-2 justify-center flex-wrap"
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                  variants={fadeInVariants} // Each child fades in
                  key={index}
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative"
                >
                  <Image
                    src={`/images/partner${index + 1}.svg`}
                    alt="Clients"
                    width={130}
                    className={` dark:invert dark:opacity-70 opacity-40 
              w-[80px] md:w-[120px] 2xl:w-[130px] `}
                    height={130}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className=" p-2.5 text-nowrap px-3 2xl:p-4 md:px-5 2xl:px-10 border flex flex-col text-slate-400/80   -rotate-12 rounded-2xl  md:rounded-3xl border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-700 text-[0.65rem] md:text-base 2xl:text-lg ">
            <span className=" text-lg md:text-3xl 2xl:text-4xl text-[#7268FA] font-semibold">
              10+
            </span>
            Year of Market
          </h3>
          <h3 className=" p-2.5 text-nowrap px-3 2xl:p-4 md:px-5 2xl:px-10 border flex flex-col text-slate-400/80   rotate-12 bg-white dark:bg-slate-900 dark:border-slate-700  rounded-2xl md:rounded-3xl border-slate-300 text-[0.65rem] md:text-base 2xl:text-lg ">
            <span className="text-lg md:text-3xl 2xl:text-4xl text-[#7268FA] font-semibold">
              80+
            </span>
            App Built
          </h3>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
