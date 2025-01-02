"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const data = [
  {
    title: "Discovery Call",
    content: (
      <div className=" w-full mx-auto flex flex-col md:flex-row gap-8 items-center justify-between py-10 2xl:py-16 ">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="space-y-5 w-full max-w-2xl"
        >
          {" "}
          <h3
            className={`${recoleta.className} text-2xl 2xl:text-4xl  max-w-2xl`}
          >
            Four graduates,{" "}
            <span className="text-[#DB14F1]">one shared vision</span>
          </h3>
          <p className="text-sm 2xl:text-lg tracking-wide leading-snug max-w-2xl  font-poppins ">
            Splenify was born in 2019, when four software graduate students came
            together with a shared passion for technology and a mission to build
            applications that deliver real value—for businesses and their
            customers alike. What started as a dream quickly turned into a
            purpose: to create mobile solutions that make an impact.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className=""
        >
          <Image src="/images/about.png" alt="about" width={320} height={320} />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Research",
    content: (
      <div className=" w-full mx-auto flex flex-col md:flex-row-reverse gap-8 items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="space-y-5 w-full max-w-2xl"
        >
          {" "}
          <h3
            className={`${recoleta.className} text-2xl 2xl:text-4xl  max-w-2xl`}
          >
            A place to learn, grow, and thrive
          </h3>
          <p className="text-sm 2xl:text-lg tracking-wide leading-snug max-w-2xl ">
            At Splenify, we believe that success is a team effort. Our growing
            family of 25+ developers, designers, strategists, and creatives is
            united by a drive to learn, improve, and innovate together. We
            foster a culture of collaboration and growth, where every challenge
            is an opportunity to elevate ourselves and our work.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className=""
        >
          <Image src="/images/about.png" alt="about" width={320} height={320} />
        </motion.div>
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    content: (
      <div className=" w-full mx-auto flex flex-col md:flex-row gap-8 items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="space-y-5 w-full max-w-2xl"
        >
          {" "}
          <h3
            className={`${recoleta.className} text-2xl 2xl:text-4xl  max-w-2xl`}
          >
            100+ applications and counting
          </h3>
          <p className="text-sm 2xl:text-lg tracking-wide leading-snug max-w-2xl ">
            Over the years, we’ve designed, developed, and launched 100+
            applications, each tailored to deliver real results. From seamless
            user experiences to robust, scalable solutions, we’ve helped
            businesses across industries bring their ideas to life and achieve
            their goals.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className=""
        >
          <Image src="/images/about.png" alt="about" width={320} height={320} />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Front-End Development",
    content: (
      <div className=" w-full mx-auto flex flex-col md:flex-row-reverse gap-8 items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="space-y-5 w-full max-w-2xl"
        >
          {" "}
          <h3
            className={`${recoleta.className} text-2xl 2xl:text-4xl  max-w-2xl`}
          >
            Splenify:{" "}
            <span className="text-[#7165FF]">Turning visions into reality</span>
          </h3>
          <p className="text-sm 2xl:text-lg tracking-wide leading-snug max-w-2xl ">
            Our name reflects what we aim to do: "Splenify"—to transform and
            elevate. Every app we develop is more than just code—it’s a blend of
            strategy, design, and technology, crafted to bring our clients’
            visions to life. We measure success by the value we create, the
            impact we deliver, and the dreams we help realize.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className=""
        >
          <Image src="/images/about.png" alt="about" width={320} height={320} />
        </motion.div>
      </div>
    ),
  },
];

export const Story = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full bg-white  dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="mb-12 2xl:mb-16 flex flex-col items-center gap-3 2xl:gap-5">
        <h2 className=" text-base   2xl:xl tracking-wide ">How we do it?</h2>
        <h1
          className={` px-2 relative text-5xl md:text-4xl 2xl:text-5xl tracking-wide text-center  ${recoleta.className}`}
        >
          World-class apps on demand, with our{" "}
          <span className=" text-[#DF56FE] "> process!</span>
        </h1>
      </div>
      <div ref={ref} className="relative h-fit max-w-7xl  mx-auto ">
        {data.map((item, index) => (
          <div key={index} className={`flex justify-start  md:gap-4`}>
            <div className="sticky flex flex-col   md:flex-row z-40 items-center top-40 self-start ">
              <div className="h-8 absolute border-4 bg-[#5956E9] border-white dark:border-slate-950 left-[5.2rem] top-32   w-8  rounded-full  flex items-center justify-center"></div>
            </div>

            <div className="relative   pl-36 2xl:pl-[12rem]  w-full pr-4 md:pr-0 ">
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: "100%",
            // height: height + "px",
          }}
          className="absolute left-8 md:left-24 top-0 overflow-hidden w-[5px] rounded-md bg-neutral-200 dark:bg-neutral-400  "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[4px] bg-[#5956E9]  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
