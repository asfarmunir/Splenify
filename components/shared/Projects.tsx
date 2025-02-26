"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Modal from "./Modal";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });
import "./projects.css";

const blink = [
  "/projectMockups/o1.webp",
  "/projectMockups/o2.webp",
  "/projectMockups/o3.webp",
  "/projectMockups/o4.webp",
  "/projectMockups/o5.webp",
  "/projectMockups/o6.webp",
  "/projectMockups/o7.webp",
  "/projectMockups/o8.webp",
];

const bluepro = [
  "/projectMockups/1.webp",
  "/projectMockups/2.webp",
  "/projectMockups/3.webp",
  "/projectMockups/4.webp",
  "/projectMockups/5.webp",
  "/projectMockups/6.webp",
  "/projectMockups/7.webp",
];

const media = [
  "/projectMockups/p1.webp",
  "/projectMockups/p2.webp",
  "/projectMockups/p3.webp",
  "/projectMockups/p4.webp",
  // "/projectMockups/p5.webp",
  "/projectMockups/p6.webp",
  "/projectMockups/p7.webp",
];
const gregbet = [
  "/projectMockups/b1.webp",
  "/projectMockups/b2.webp",
  "/projectMockups/b3.webp",
  "/projectMockups/b4.webp",
  "/projectMockups/b5.webp",
  "/projectMockups/b6.webp",
  "/projectMockups/b7.webp",
];

const Projects = () => {
  return (
    <>
      {/* Desktop Version  */}
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
        id="projects"
        className="hidden md:flex flex-col overflow-x-hidden w-full relative  items-center gap-3 2xl:gap-5  "
      >
        <Image
          src="/images/left-arrow.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" absolute hidden md:block  top-0   rotate-1 right-0 
          xl:w-[340px] lg:w-[230px] 2xl:w-[420px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className=" absolute left-0   hidden md:block  xl:rotate-1  
          lg:w-[230px] xl:w-[340px] 2xl:w-[400px] dark:invert
          "
        />
        <h2 className=" text-base   lg:text-[32px] mb-4 tracking-wide ">
          Catch the latest
        </h2>
        <h1
          className={` text-3xl relative   md:text-4xl lg:text-[48px] tracking-wide text-center mb-[50px] ${recoleta.className}`}
        >
          Browse our most{" "}
          <span className="text-[#7165FF]">recent projects</span>
        </h1>
        <div className=" w-full gridContainer max-w-5xl xl:max-w-6xl    2xl:max-w-7xl gap-12 2xl:gap-16 ">
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className="flex flex-col  gridItem item1 "
          >
            <div className="  rounded-2xl overflow-hidden max-h-[800px]  w-full h-full ">
              <Image
                src="/projectModal/hero2.webp"
                alt="Splenify"
                loading="lazy"
                width={995}
                height={923}
                className=" w-full h-full object-cover  object-top"
              />
            </div>
            <div className="flex items-start w-full pt-6 justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Mobile Application</p>
                <h2 className="text-xl font-bold ">Aura IOS | Android</h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero2.webp"
                heroBg="/projectModal/orangeBg.webp"
                heroLogo="/projectModal/logo2.svg"
                testimonialBg=" bg-gradient-to-l from-[#FF796B] to-[#FF5047]"
                color="orange"
                imgs={blink}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className="  flex flex-col w-full gridItem item2  "
          >
            <div className=" w-full h-full max-h-[490px] rounded-2xl overflow-hidden ">
              <Image
                src="/projectModal/hero3.webp"
                // src="/images
                loading="lazy"
                alt="Splenify"
                width={985}
                height={923}
                className=" w-full h-full object-cover object-top "
              />
            </div>

            <div className="flex items-start w-full pt-6 justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Video Animation</p>
                <h2 className="text-xl font-bold ">AB.S Snack Animation</h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero3.webp"
                heroBg="/projectModal/skyBg.webp"
                heroLogo="/projectModal/logo3.svg"
                testimonialBg=" bg-gradient-to-l from-[#38B6FF] to-[#0069CA]"
                color="blue"
                imgs={gregbet}
              />{" "}
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className="flex flex-col w-full -mt-1 gridItem item3 "
          >
            <div className=" w-full h-full  max-h-[490px] overflow-hidden rounded-2xl">
              <Image
                src="/projectModal/hero4.webp"
                loading="lazy"
                // src="/images/p3.svg"
                alt="Splenify"
                width={985}
                height={923}
                className=" w-full  h-full object-cover object-top "
              />
            </div>
            <div className="flex items-start w-full pt-6  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Web Development</p>
                <h2 className="text-xl font-bold ">
                  Gradient Website <br /> Development
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero4.webp"
                heroBg="/projectModal/pinkBg.webp"
                heroLogo="/projectModal/logo4.svg"
                testimonialBg=" bg-gradient-to-l from-[#FF1589] to-[#B6005B]"
                color="pink"
                imgs={media}
              />{" "}
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className=" flex flex-col gridItem item4 "
          >
            <div className=" w-full h-full max-h-[800px]  rounded-2xl overflow-hidden">
              <Image
                src="/projectModal/hero1.webp"
                alt="Splenify"
                loading="lazy"
                width={985}
                height={923}
                className=" w-full h-full object-cover object-center  "
              />
            </div>

            <div className="flex items-start w-full pt-6  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">
                  Full Stack Web Development
                </p>
                <h2 className="text-xl font-bold ">Dashboard Teamify</h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero1.webp"
                heroBg="/projectModal/skyBg.webp"
                heroLogo="/projectModal/logo1.svg"
                testimonialBg=" bg-gradient-to-l from-[#38B6FF] to-[#0069CA]"
                color="blue"
                imgs={bluepro}
              />{" "}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Version */}
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
        id="mobile-projects"
        className="flex  flex-col md:hidden w-full relative  items-center  px-8 gap-4 2xl:gap-5   my-[20px] md:my-[30px]"
      >
        <h2 className=" text-[16px] sm:text-[32px] tracking-wide ">
          Catch the latest
        </h2>
        <h1
          className={` text-[28px] sm:text-[48px] relative  tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          Browse our most <br className="hidden sm:block" />
          <span className="text-[#7165FF]">recent projects</span>
        </h1>

        <Image
          src="/images/left-arrow.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" absolute  top-12   rotate-1 right-0 
          w-[190px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className=" absolute left-0  top-16  -rotate-6
          w-[150px] dark:invert
          "
        />

        <div className=" w-full max-w-5xl 2xl:max-w-7xl space-y-8   2xl:gap-16 ">
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className=" flex h-[400px] sm:h-[800px]   flex-col  "
          >
            <div className=" w-full h-full rounded-3xl overflow-hidden">
              <Image
                src="/projectModal/hero2.webp"
                alt="Splenify"
                loading="lazy"
                width={985}
                height={923}
                className=" w-full h-full  object-cover object-top "
              />
            </div>
            <div className="flex items-center w-full pt-4 justify-between">
              <div className="flex flex-col">
                <p className=" text-sm font-thin md:text-base">
                  Video Animation
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  AB.S Snack Animation
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero2.webp"
                heroBg="/projectModal/orangeBg.webp"
                heroLogo="/projectModal/logo2.svg"
                testimonialBg=" bg-gradient-to-l from-[#FF796B] to-[#FF5047]"
                color="orange"
                imgs={blink}
              />{" "}
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className=" flex h-[400px] sm:h-[558px]   flex-col  "
          >
            <div className=" w-full h-full rounded-3xl overflow-hidden">
              <Image
                src="/projectModal/hero3.webp"
                alt="Splenify"
                loading="lazy"
                width={985}
                height={923}
                className=" w-full h-full object-cover object-top "
              />
            </div>
            <div className="flex items-center w-full pt-4  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-sm md:text-base">
                  Web Development
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  Gradient Website <br /> Development
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero3.webp"
                heroBg="/projectModal/skyBg.webp"
                heroLogo="/projectModal/logo3.svg"
                testimonialBg=" bg-gradient-to-l from-[#38B6FF] to-[#0069CA]"
                color="blue"
                imgs={gregbet}
              />{" "}
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className=" flex h-[400px] sm:h-[558px]   flex-col  "
          >
            <div className=" w-full h-full rounded-3xl overflow-hidden">
              <Image
                src="/projectModal/hero4.webp"
                loading="lazy"
                alt="Splenify"
                width={985}
                height={923}
                className=" w-full h-full object-cover object-top "
              />
            </div>
            <div className="flex items-center w-full pt-4  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-sm md:text-base">
                  Full Stack Web Development
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  Dashboard Teamify
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero4.webp"
                heroBg="/projectModal/pinkBg.webp"
                heroLogo="/projectModal/logo4.svg"
                testimonialBg=" bg-gradient-to-l from-[#FF1589] to-[#B6005B]"
                color="pink"
                imgs={media}
              />{" "}
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            className=" flex h-[400px] sm:h-[820px]  flex-col  "
          >
            <div className=" w-full h-full  rounded-3xl overflow-hidden">
              <Image
                src="/projectModal/hero1.webp"
                alt="Splenify"
                loading="lazy"
                width={985}
                height={923}
                className=" w-full h-full object-cover object-top "
              />
            </div>
            <div className="flex items-center w-full pt-4 justify-between">
              <div className="flex flex-col">
                <p className=" text-sm font-thin md:text-base">
                  Mobile Application{" "}
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  Aura IOS | Android{" "}
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero1.webp"
                heroBg="/projectModal/skyBg.webp"
                heroLogo="/projectModal/logo1.svg"
                testimonialBg=" bg-gradient-to-l from-[#38B6FF] to-[#0069CA]"
                color="blue"
                imgs={bluepro}
              />{" "}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateRows: "repeat(5, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    // Default gaps (optional)
    // rowGap: "40px",
    // columnGap: "70px",

    // Media query for tablets (e.g., screens less than 1024px)
    "@media (max-width: 1024px)": {
      gridTemplateRows: "repeat(4, 1fr)",
      gridTemplateColumns: "repeat(3, 1fr)",
    },

    // Media query for mobile devices (e.g., screens less than 768px)
    "@media (max-width: 768px)": {
      gridTemplateRows: "repeat(3, 1fr)",
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    // Media query for small mobile devices (e.g., screens less than 480px)
    "@media (max-width: 480px)": {
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateColumns: "1fr",
    },
  },
  gridItem: {
    display: "flex",
    // backgroundColor: "#F3F3F9",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "20px",
    fontWeight: "bold",

    // Adjust font size for smaller screens
    "@media (max-width: 768px)": {
      fontSize: "16px",
    },
    "@media (max-width: 480px)": {
      fontSize: "14px",
    },
  },
  item1: {
    gridRow: "1 / span 3",
    gridColumn: "1 / span 2",

    // Adjust for tablets
    "@media (max-width: 1024px)": {
      gridRow: "1 / span 2",
      gridColumn: "1 / span 2",
    },

    // Adjust for mobile
    "@media (max-width: 768px)": {
      gridRow: "1 / span 1",
      gridColumn: "1 / span 2",
    },

    // Adjust for small mobile
    "@media (max-width: 480px)": {
      gridRow: "auto",
      gridColumn: "auto",
    },
  },
  item2: {
    gridRow: "1 / span 2",
    gridColumn: "3 / span 2",

    // Adjust for tablets
    "@media (max-width: 1024px)": {
      gridRow: "1 / span 2",
      gridColumn: "3 / span 1",
    },

    // Adjust for mobile
    "@media (max-width: 768px)": {
      gridRow: "2 / span 1",
      gridColumn: "1 / span 2",
    },

    // Adjust for small mobile
    "@media (max-width: 480px)": {
      gridRow: "auto",
      gridColumn: "auto",
    },
  },
  item3: {
    gridRow: "4 / span 2",
    gridColumn: "1 / span 2",

    // Adjust for tablets
    "@media (max-width: 1024px)": {
      gridRow: "3 / span 2",
      gridColumn: "1 / span 2",
    },

    // Adjust for mobile
    "@media (max-width: 768px)": {
      gridRow: "3 / span 1",
      gridColumn: "1 / span 2",
    },

    // Adjust for small mobile
    "@media (max-width: 480px)": {
      gridRow: "auto",
      gridColumn: "auto",
    },
  },
  item4: {
    gridRow: "3 / span 3",
    gridColumn: "3 / span 2",

    // Adjust for tablets
    "@media (max-width: 1024px)": {
      gridRow: "3 / span 2",
      gridColumn: "3 / span 1",
    },

    // Adjust for mobile
    "@media (max-width: 768px)": {
      gridRow: "4 / span 1",
      gridColumn: "1 / span 2",
    },

    // Adjust for small mobile
    "@media (max-width: 480px)": {
      gridRow: "auto",
      gridColumn: "auto",
    },
  },
};
