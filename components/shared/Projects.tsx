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

const blinkContent = {
  title: "Transforming Restaurant Loyalty with NFC-Powered Rewards",
  challenge: {
    title: "Bridging the Gap Between Restaurants and Loyalty",
    points: [
      "Restaurant owners struggle to retain customers in a highly competitive market. Traditional loyalty programs often involve outdated punch cards or complicated point systems that lack engagement. The challenge was to create a seamless, modern solution that incentivizes repeat visits while providing users with an effortless way to discover and engage with restaurants.",
    ],
  },
  result: {
    title: " Engagement & Growth Through Innovation",
    points: [
      "Increased customer retention by making loyalty programs seamless and rewarding.",
      "Simplified reward redemption with NFC, removing the need for physical cards or manual tracking.",
      "Enhanced restaurant discovery experience, encouraging users to try new places and return.",
      "Provided businesses with actionable insights to optimize their offers and customer interactions.",
      "BLINQ redefines restaurant loyalty, making it effortless, digital, and rewarding for both businesses and customers.",
    ],
  },
  solution: {
    title: " NFC-Powered Loyalty & Discovery",
    points: [
      "Users explore nearby restaurants and cafes through an interactive map.",
      "NFC technology simplifies loyalty programs—customers tap their phones to earn rewards",
      "Businesses create custom loyalty rewards, offering discounts and free meals to frequent customers.",
      "The admin dashboard provides real-time insights into customer engagement and loyalty trends",
    ],
  },
};
const blueProContent = {
  title: "Step Up Your Fitness Game with Smart Tracking & Rewards",
  challenge: {
    title: "Bringing Financial Education & Community Together",
    points: [
      "Access to modern financial education is often scattered and unstructured, making it difficult for individuals to stay updated on money-making strategies, live sessions, and expert insights. The challenge was to build a unified platform that offers structured learning, live interactions, and community-driven discussions while keeping users engaged with a rewarding system",
    ],
  },
  result: {
    title: " The Ultimate Digital Asset Hub",
    points: [
      "Splenify developed BluPro, a mobile and web-based platform that makes financial education interactive and accessible. With BluPro",
      "Users explore modern money-making strategies and financial insights.",
      "'Connect' groups allow admins to create communities for focused discussions.",
      "Live sessions provide real-time learning opportunities with comments, likes, and participation.",
      "An event calendar keeps users updated on upcoming expert-led live sessions.",
      "A points-based level system rewards users for engagement, allowing them to redeem exclusive benefits.",
    ],
  },
  solution: {
    title: "Building a Knowledge-Driven Community ",
    points: [
      "Simplified financial education with structured content and expert-led sessions.",
      "Created a dynamic and engaged user base through live interactions.",
      "Encouraged continuous learning with a gamified points and rewards system.",
      "Fostered a collaborative space so users learn, connect, and grow financially.",
      "BluPro redefines financial education by merging knowledge, community, and engagement into one seamless platform",
    ],
  },
};
const gregbetContent = {
  title: "Step Up Your Fitness Game with Smart Tracking & Rewards",
  challenge: {
    title: "Making Fitness Tracking Engaging & Seamless",
    points: [
      "Tracking your steps should be easy, but most fitness apps are either too complicated, too basic, or lack motivation. Users often need multiple apps to track steps, monitor progress, and discover new routes. The challenge was to create an all-in-one solution that made fitness tracking simple, engaging, and rewarding.",
    ],
  },
  result: {
    title: " Your Ultimate Fitness Companion",
    points: [
      "Splenify developed Greg Bet, a cutting-edge mobile app that transforms step tracking into a rewarding experience. ",
      "Users can effortlessly track steps and monitor detailed performance reports.",
      "A milestone-based reward system keeps motivation high.",
      "Live route tracking and interactive maps help users discover new paths.",
      "Seamless smartwatch and phone integration provide real-time tracking and insights.",
      "A sleek, intuitive UI/UX makes navigation smooth and enjoyable.",
    ],
  },
  solution: {
    title: " A Smarter Way to Stay Active",
    points: [
      "Simplified fitness tracking with real-time, accurate step monitoring.",
      "Increased user motivation through gamified rewards.",
      "Enhanced user engagement with interactive maps and route exploration.",
      "A seamless, intuitive experience that makes staying active effortless.",
      "Greg Bet isn't just a step tracker—it's a complete fitness journey designed to keep users engaged, motivated, and always moving forward",
    ],
  },
};
const mediaContent = {
  title: " A Digital Marketplace for Creators & Sellers",
  challenge: {
    title: "A Seamless Digital Asset Marketplace",
    points: [
      "Creators and businesses often struggle to distribute, monetize, and track their digital assets efficiently. Traditional marketplaces lack flexibility, integration, and real-time insights. The challenge was to build an all-in-one platform where creators could upload, sell, and analyze their assets while ensuring users could easily discover and download content",
    ],
  },
  result: {
    title: "The Ultimate Digital Asset Hub",
    points: [
      "Splenify developed Makers Media, a mobile app and web platform designed for seamless asset management and sales. With Makers Media",
      "The platform owner uploads digital assets, making them available for users.",
      "Sellers can list their own assets, set prices, and sell directly on the marketplace.",
      "Users explore, download, and purchase assets effortlessly",
      "Integration with Shopify, Facebook, and other platforms enables smooth cross-platform transactions",
      "Built-in analytics provide insights into sales, downloads, and performance metrics",
    ],
  },
  solution: {
    title: "Empowering Creators, Maximizing Sales ",
    points: [
      "Enabled creators and businesses to monetize digital assets efficiently.",
      "Simplified asset discovery, purchase, and management for users.",
      "Provided sellers with key performance insights to optimize their listings.",
      "Enhanced sales potential with seamless third-party integrations.",
    ],
  },
};

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
        className="hidden lg:flex flex-col overflow-x w-full relative  items-center gap-3 2xl:gap-5  "
      >
        <Image
          src="/images/left-arrow.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" absolute hidden md:block  lg:-top-8 xl:-top-11   rotate-1 right-0 
           lg:w-[340px] xl:w-[480px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className=" absolute left-0 lg:-top-16  xl:-top-20  hidden md:block  xl:rotate-1  
          lg:w-[340px] xl:w-[420px] dark:invert
          "
        />
        <h2 className=" text-base   lg:text-[32px] mb-5 tracking-wide ">
          Catch the latest
        </h2>
        <h1
          className={` text-3xl relative   md:text-4xl lg:text-[48px] tracking-wide text-center mb-[50px] ${recoleta.className}`}
        >
          Browse our most{" "}
          <span className="text-[#7165FF]">recent projects</span>
        </h1>
        <div className=" w-full gridContainer overflow-x-hidden max-w-2xl lg:max-w-5xl xl:max-w-6xl    2xl:max-w-7xl gap-12 2xl:gap-16 ">
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
            <div className="flex  items-start w-full pt-6 justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-[#161C2D] text-base">
                  Mobile Application
                </p>
                <h2 className="text-xl text-[#161C2D] font-semibold ">
                  Aura IOS | Android
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero2.webp"
                heroBg="/projectModal/orangeBg.webp"
                heroLogo="/projectModal/logo2.svg"
                testimonialBg=" bg-gradient-to-l from-[#FF796B] to-[#FF5047]"
                color="orange"
                imgs={blink}
                content={blinkContent}
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
                <p className=" font-thin text-[#161C2D] text-base">
                  Video Animation
                </p>
                <h2 className="text-xl text-[#161C2D] font-semibold ">
                  AB.S Snack Animation
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero3.webp"
                heroBg="/projectModal/skyBg.webp"
                heroLogo="/projectModal/logo3.svg"
                testimonialBg=" bg-gradient-to-l from-[#38B6FF] to-[#0069CA]"
                color="blue"
                imgs={gregbet}
                content={gregbetContent}
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
                <p className=" font-thin text-[#161C2D] text-base">
                  Web Development
                </p>
                <h2 className="text-xl text-[#161C2D] font-semibold ">
                  Gradient Website <br className="xl:hidden " /> Development
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero4.webp"
                heroBg="/projectModal/pinkBg.webp"
                heroLogo="/projectModal/logo4.svg"
                testimonialBg=" bg-gradient-to-l from-[#FF1589] to-[#B6005B]"
                color="pink"
                imgs={media}
                content={mediaContent}
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
                <p className=" font-thin text-[#161C2D] text-base">
                  Full Stack Web Development
                </p>
                <h2 className="text-xl font-semibold  text-[#161C2D] ">
                  Dashboard Teamify
                </h2>
              </div>
              <Modal
                heroImg="/projectModal/modalHero1.webp"
                heroBg="/projectModal/skyBg.webp"
                heroLogo="/projectModal/logo1.svg"
                testimonialBg=" bg-gradient-to-l from-[#38B6FF] to-[#0069CA]"
                color="blue"
                imgs={bluepro}
                content={blueProContent}
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
        className="flex  flex-col lg:hidden w-full relative max-w-2xl mx-auto  items-center   gap-4 2xl:gap-5   my-[20px] md:my-[30px]"
      >
        <h2 className=" hidden sm:block text-[16px] sm:text-[32px] tracking-wide ">
          Catch the latest
        </h2>
        <h2 className=" sm:hidden text-[16px] sm:text-[32px] tracking-wide ">
          We go beyond just visuals
        </h2>
        <h1
          className={` hidden  sm:block text-[27px] sm:text-[48px] relative  tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          Browse our most <br className=" lg:hidden" />
          <span className="text-[#7165FF]">recent projects</span>
        </h1>
        <h1
          className={` text-[27px] sm:text-[41px] relative sm:hidden  tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          Browse our <span className="hidden sm:block">most</span>
          <span className="text-[#7165FF]">recent projects</span>
        </h1>
        <Image
          src="/images/left-arrow.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" absolute  sm:top-16 -top-4   rotate-1 -right-[3.5rem]   sm:-right-[4.5rem]  
          block w-[120px] sm:w-[200px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className="  w-[120px] block absolute -left-12 sm:-left-24  -top-5 sm:top-16  -rotate-6
          sm:w-[210px] dark:invert
          "
        />

        <div className=" w-full max-w-5xl 2xl:max-w-7xl space-y-8 px-5 sm:px-0   2xl:gap-16 ">
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
            className=" flex h-[400x] xs1:h-[510px] sm:h-[800px]   flex-col  "
          >
            <div className=" w-full h-full rounded-[10px] overflow-hidden">
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
                content={blinkContent}
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
            <div className=" w-full h-full rounded-[10px] overflow-hidden">
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
                content={gregbetContent}
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
            <div className=" w-full h-full rounded-[10px] overflow-hidden">
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
                content={mediaContent}
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
            className=" flex  h-[400x] xs1:h-[510px] sm:h-[820px]  flex-col  "
          >
            <div className=" w-full h-full  rounded-[10px] overflow-hidden">
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
                content={blueProContent}
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
