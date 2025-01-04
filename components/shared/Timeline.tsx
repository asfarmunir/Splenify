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

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const data = [
  {
    title: "Discovery Call",
    content: (
      <div>
        <p className="text-neutral-600  font-poppins dark:text-neutral-200 text-sm 2xl:text-lg font-semibold mb-8">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Research",
    content: (
      <div>
        <p className="text-neutral-600  font-poppins dark:text-neutral-200 text-sm 2xl:text-lg font-semibold mb-8">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    content: (
      <div>
        <p className="text-neutral-600  font-poppins dark:text-neutral-200 text-sm 2xl:text-lg font-semibold mb-8">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Front-End Development",
    content: (
      <div>
        <p className="text-neutral-600  font-poppins dark:text-neutral-200 text-sm 2xl:text-lg font-semibold mb-8">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Back-End Development",
    content: (
      <div>
        <p className="text-neutral-600  font-poppins dark:text-neutral-200 text-sm 2xl:text-lg font-semibold mb-8">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Deployement",
    content: (
      <div>
        <p className="text-neutral-600  font-poppins dark:text-neutral-200 text-sm 2xl:text-lg font-semibold mb-8">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Maintenance",
    content: (
      <div>
        <p className="text-neutral-600  font-poppins dark:text-neutral-200 text-sm 2xl:text-lg font-semibold mb-8">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-44 lg:h-72 2xl:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  // {
  //   title: "Early 2023",
  //   content: (
  //     <div>
  //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
  //         I usually run out of copy, but when I see content this big, I try to
  //         integrate lorem ipsum.
  //       </p>
  //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
  //         Lorem ipsum is for people who are too lazy to write copy. But we are
  //         not. Here are some more example of beautiful designs I built.
  //       </p>
  //       <div className="grid grid-cols-2 gap-4">
  //         <Image
  //           src="https://assets.aceternity.com/pro/hero-sections.png"
  //           alt="hero template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/features-section.png"
  //           alt="feature template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/pro/bento-grids.png"
  //           alt="bento template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/cards.png"
  //           alt="cards template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
  // {
  //   title: "Changelog",
  //   content: (
  //     <div>
  //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
  //         Deployed 5 new components on Aceternity today
  //       </p>
  //       <div className="mb-8">
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Card grid component
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Startup template Aceternity
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Random file upload lol
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Himesh Reshammiya Music CD
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Salman Bhai Fan Club registrations open
  //         </div>
  //       </div>
  //       <div className="grid grid-cols-2 gap-4">
  //         <Image
  //           src="https://assets.aceternity.com/pro/hero-sections.png"
  //           alt="hero template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/features-section.png"
  //           alt="feature template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/pro/bento-grids.png"
  //           alt="bento template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/cards.png"
  //           alt="cards template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
];

export const Timeline = () => {
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
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full bg-white  dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="mb-12 2xl:mb-16 flex flex-col items-center gap-3 2xl:gap-5"
      >
        <h2 className=" text-base   2xl:xl tracking-wide ">How we do it?</h2>
        <h1
          className={` px-2 relative text-5xl md:text-4xl 2xl:text-5xl tracking-wide text-center  ${recoleta.className}`}
        >
          World-class apps on demand, with our{" "}
          <span className=" text-[#DF56FE] "> process!</span>
        </h1>
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto ">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start ${
              index !== data.length - 1 ? "pb-20 2xl:pb-24" : ""
            } md:gap-4`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 2xl:h-16 absolute border-8 border-white dark:border-slate-950 left-3  md:left-2 2xl:left-1 w-12 2xl:w-1/6 rounded-full bg-white dark:bg-black flex items-center justify-center">
                {/* <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" /> */}
                <Image
                  src="/images/inovation2.svg"
                  alt="circle"
                  width={40}
                  height={40}
                />
              </div>
              <h3
                className={`hidden md:block text-2xl md:pl-20 2xl:text-4xl   dark:text-slate-200 ${recoleta.className}`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-[4.1rem]  md:pl-4 w-full pr-4 md:pr-0 ">
              <h3
                className={` ${recoleta.className} md:hidden block text-3xl mb-4 text-left   dark:text-slate-200`}
              >
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: "100%",
            // height: height + "px"
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-neutral-200 dark:bg-neutral-400  "
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
