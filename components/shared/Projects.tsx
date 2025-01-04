"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Modal from "./Modal";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

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

import pinkBg from "@/public/projectModal/pinkBg.webp";
import orangeBg from "@/public/projectModal/orangeBg.webp";
import skyBg from "@/public/projectModal/skyBg.webp";
import logo1 from "@/public/projectModal/logo1.svg";
import logo2 from "@/public/projectModal/logo2.svg";
import logo3 from "@/public/projectModal/logo3.svg";
import logo4 from "@/public/projectModal/logo4.svg";
import hero1 from "@/public/projectModal/hero1.webp";
import hero2 from "@/public/projectModal/hero2.webp";
import hero3 from "@/public/projectModal/hero3.webp";
import hero4 from "@/public/projectModal/hero4.webp";
import modalHero1 from "@/public/projectModal/modalHero1.webp";
import modalHero2 from "@/public/projectModal/modalHero2.webp";
import modalHero3 from "@/public/projectModal/modalHero3.webp";
import modalHero4 from "@/public/projectModal/modalHero4.webp";

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
          className=" absolute hidden md:block  top-12  2xl:top-6 rotate-1 right-0 
          w-[340px] 2xl:w-[420px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className=" absolute left-0 hidden md:block top-4 rotate-1  
          w-[340px] 2xl:w-[400px] dark:invert
          "
        />
        <h2 className=" text-base   2xl:xl tracking-wide ">Catch the latest</h2>
        <h1
          className={` text-3xl relative capitalize md:text-4xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          Browse our most recent projects{" "}
        </h1>
        <div
          style={styles.gridContainer}
          className=" w-full max-w-5xl mt-8 justify-items-start  2xl:max-w-7xl gap-12 2xl:gap-16 "
        >
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item1 }}
            className="flex flex-col  mt-11 2xl:-mt-2.5 "
          >
            <div className="  rounded-2xl overflow-hidden max-h-[800px]  w-full h-full ">
              <Image
                src="/projectModal/hero2.webp"
                alt="Splenify"
                loading="lazy"
                width={995}
                height={923}
                className=" w-full h-full object-cover object-top"
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item2 }}
            className="  flex flex-col w-full  "
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item3 }}
            className="flex flex-col w-full -mt-1"
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item4 }}
            className=" flex flex-col "
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
        className="flex flex-col md:hidden w-full relative  items-center  px-8 gap-4 2xl:gap-5   my-[20px] md:my-[30px]"
      >
        <Image
          src="/images/left-arrow.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" absolute    top-12 rotate-3 -right-4 
          w-[100px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className=" absolute -left-4 top-8 rotate-1  
          w-[100px]  dark:invert
          "
        />
        <h2 className=" text-base   2xl:xl tracking-wide ">
          Catch the latest...
        </h2>
        <h1
          className={` text-3xl relative md:text-4xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          Browse our latest <br /> projects
        </h1>
        <div className=" w-full max-w-5xl 2xl:max-w-7xl space-y-8  2xl:gap-16 ">
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className=" flex h-[400px] flex-col  "
          >
            <div className=" w-full h-full rounded-3xl overflow-hidden">
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className=" flex max-h-[400px]  flex-col  "
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className=" flex max-h-[400px]  flex-col  "
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
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className=" flex max-h-[400px]  flex-col  "
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
    padding: "10px",
    // rowGap: "40px",
    // columnGap: "70px",
  },
  gridItem: {
    display: "flex",
    // backgroundColor: "#F3F3F9",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "20px",
    fontWeight: "bold",
  },
  item1: {
    gridRow: "1 / span 3",
    gridColumn: "1 / span 2",
  },
  item2: {
    gridRow: "1 / span 2",
    gridColumn: "3 / span 2",
  },
  item3: {
    gridRow: "4 / span 2",
    gridColumn: "1 / span 2",
  },
  item4: {
    gridRow: "3 / span 3",
    gridColumn: "3 / span 2",
  },
};
