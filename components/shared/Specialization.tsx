"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const specializations = [
  {
    title: "FineTech",
    description:
      "Navigate complex technological decisions from industry-vetted IT professionals, and make the best decisions for you and your business today.",
    image: "/images/avatar2.png",
    tags: ["Secure Transaction", "Crypto MVP", "Banking"],
  },
  {
    title: "Healthcare",
    description:
      "Navigate complex technological decisions from industry-vetted IT professionals, and make the best decisions for you and your business today.",
    image: "/images/avatar2.png",
    tags: ["Secure Transaction", "Crypto MVP", "Banking"],
  },
  {
    title: "Education",
    description:
      "Navigate complex technological decisions from industry-vetted IT professionals, and make the best decisions for you and your business today.",
    image: "/images/avatar2.png",
    tags: ["Secure Transaction", "Crypto MVP", "Banking"],
  },
  {
    title: "Fashion",
    description:
      "Navigate complex technological decisions from industry-vetted IT professionals, and make the best decisions for you and your business today.",
    image: "/images/avatar2.png",
    tags: ["Secure Transaction", "Crypto MVP", "Banking"],
  },
  {
    title: "Media & Entertainment",
    description:
      "Navigate complex technological decisions from industry-vetted IT professionals, and make the best decisions for you and your business today.",
    image: "/images/avatar2.png",
    tags: ["Secure Transaction", "Crypto MVP", "Banking"],
  },
  {
    title: "Retail & Ecommerce",
    description:
      "Navigate complex technological decisions from industry-vetted IT professionals, and make the best decisions for you and your business today.",
    image: "/images/avatar2.png",
    tags: ["Secure Transaction", "Crypto MVP", "Banking"],
  },
  // {
  //   title: '',
  //   description: '',
  //   image: '',
  //   tags: []
  // }
];

const Specialization = () => {
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
      className="flex flex-col w-full  items-center gap-5  "
    >
      <div className="mb-7 2xl:mb-10 flex flex-col items-center gap-3  2xl:gap-5">
        <h2 className=" text-base   xl:text-[32px] tracking-wide mb-4 ">
          What do we specialize in?
        </h2>
        <h1
          className={` text-5xl  px-3.5 relative md:text-3xl mb-4 xl:text-[48px] tracking-wide text-center  ${recoleta.className}`}
        >
          Our partners hire us to{" "}
          <span className=" text-[#7165FF] "> design & develop</span> their…
          <Image
            src="/images/line_vector2.svg"
            alt="Splenify"
            width={380}
            height={380}
            className="  dark:invert hidden lg:block  w-[270px] 2xl:w-[380px] absolute right-28 2xl:right-52  -rotate-4 "
          />
        </h1>
      </div>

      {/* <div className="grid grid-cols-1 max-w-6xl 2xl:max-w-7xl lg:grid-cols-2 gap-8 px-6 md:px-12 2xl:px-0  p-2 w-full">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col-reverse sm2:flex-row w-full   overflow-hidden  rounded-2xl "
        >
          <div className=" py-5 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl text-center md:text-start md:text-lg 2xl:text-2xl font-semibold mb-2 px-8">
              Mobile App Development
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              We create custom, adaptable apps tailored to your business and
              audience growth.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              loading="lazy"
              width={225}
              className=" w-full h-full object-cover object-center "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col-reverse sm2:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-center md:text-start text-2xl md:text-lg 2xl:text-2xl px-8 font-semibold mb-2">
              Software Development
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              We help businesses develop custom software and update systems to
              boost efficiency and drive innovation.
            </p>
          </div>
          <div className=" w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              loading="lazy"
              width={325}
              className=" w-full h-full object-cover  object-center  "
              height={323}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col-reverse sm2:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              UI/UX Design
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              Deliver WOW with designs that captivate. Our experts create apps
              and dashboards that boost engagement, growth, and sales.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              loading="lazy"
              width={225}
              className=" w-full h-full object-cover object-center "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col-reverse sm2:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              QA & Testing
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              We deliver flawless solutions with rigorous quality assurance,
              ensuring top performance and efficiency.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              loading="lazy"
              width={225}
              className=" w-full h-full object-cover"
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col-reverse sm2:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className="text-center md:text-start text-2xl md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              Digital Transformation
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              Modernize legacy systems to attract customers, increase revenue,
              and boost social engagement.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              loading="lazy"
              width={225}
              className=" w-full h-full object-cover object-center "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col-reverse sm2:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl text-center md:text-start md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              IT Consultation
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              Get expert guidance to make the best tech decisions for your
              business.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              loading="lazy"
              width={225}
              className=" w-full h-full object-cover"
              height={123}
            />
          </div>
        </motion.div>
      </div> */}

      <div className=" w-full grid max-w-6xl 2xl:max-w-7xl  grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 2xl:gap-12">
        {specializations.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            viewport={{ once: true, amount: 0.05 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            key={index}
            className="flex items-center py-4 flex-col justify-center sm2:flex-row gap-6 px-5 sm:px-0  2xl:gap-8  "
          >
            <div className=" w-full ">
              <Image
                src={item.image}
                alt="Splenify"
                loading="lazy"
                width={225}
                className=" w-full h-full object-cover object-center rounded-2xl"
                height={123}
              />
            </div>
            <div className=" w-full flex flex-col justify-center  ">
              <h2 className="text-xl 2xl:text-2xl font-semibold mb-2 capitalize">
                {item.title}
              </h2>
              <p className="text-[18px] sm:text-xs lg:text-sm  max-w-xs 2xl:max-w-sm">
                {item.description}
              </p>
              <div className="flex mt-3 sm:mt-2  items-center flex-wrap w-full gap-2 ">
                {item.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-xs  bg-[#7165FF1A] text-[#7165FF] px-3 font-semibold py-1 2xl:py-1.5 rounded-full"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Specialization;
