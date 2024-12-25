"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

export const items = [
  {
    img: "/images/phoneCall.svg",
    title: "Discovery Call",
  },
  {
    img: "/images/research.svg",
    title: "Research",
  },
  {
    img: "/images/design.svg",
    title: "UI/Ux Design",
  },
  {
    img: "/images/frontend.svg",
    title: "Front-End Development",
  },
  {
    img: "/images/backend.svg",
    title: "Backend-End Development",
  },
  {
    img: "/images/deployment.svg",
    title: "Depolyment",
  },
  {
    img: "/images/mentain.svg",
    title: "Maintenance",
  },
];

const AppsOnDemand = () => {
  return (
    // <motion.div
    //   id="about"
    //   initial={{
    //     opacity: 0,
    //   }}
    //   viewport={{
    //     once: true,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //     transition: {
    //       duration: 0.9,
    //       delay: 0.3,
    //       ease: "easeInOut",
    //     },
    //   }}
    //   className="hidden lg:flex flex-col w-full  items-center gap-5  my-[20px] md:pt-[40px] lg:pt-[100px] md:my-[30px]"
    // >
    //   <h2 className=" text-base   2xl:xl tracking-wide ">See how we do it!</h2>
    //   <h1
    //     className={` text-2xl px-3  mb-8 lg:mb-0 leading-loose  relative md:text-3xl 2xl:text-5xl tracking-wide text-center ${recoleta.className}`}
    //   >
    //     Disrupt the digital market with our <br /> proven app creation{" "}
    //     <span className=" text-[#DF56FE] ">process!</span>
    //     <Image
    //       src="/images/line_vector.svg"
    //       alt="Splenify"
    //       width={200}
    //       height={200}
    //       className=" hidden md:block w-[150px] 2xl:w-[200px] absolute right-9 2xl:right-16 -bottom-3 -rotate-4 "
    //     />
    //   </h1>
    //   {/* Mobile version */}
    //   {/* <div className="grid w-full grid-cols-2 px-5">
    //     {items.map((item, index) => (
    //       <div
    //         key={index}
    //         className=" w-[95%] max-w-md p-3   bg-[#F3F3F9] dark:bg-gray-900 flex lg:hidden  items-center rounded-3xl justify-center"
    //       >
    //         <div
    //           className={`flex items-center  p-5 gap-4 bg-white dark:bg-slate-800 rounded-3xl  w-full flex-row ${
    //             index % 2 == 0
    //               ? "justify-start  flex-row"
    //               : "justify-start flex-row-reverse"
    //           }`}
    //         >
    //           <Image
    //             src={item.img}
    //             alt="Splenify"
    //             width={65}
    //             height={65}
    //             className=" dark:invert "
    //           />
    //           <h3 className=" italic text-xl  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //             {item.title}
    //           </h3>
    //         </div>
    //       </div>
    //     ))}
    //   </div> */}

    //   {/* Large Screen Version  */}
    //   {/* <motion.div
    //     viewport={{ once: true }}
    //     initial={{
    //       opacity: 0,
    //       y: 100,
    //     }}
    //     whileInView={{
    //       y: 0,
    //       opacity: 1,
    //       transition: {
    //         duration: 0.7,
    //         ease: "easeOut",
    //       },
    //     }}
    //     className="hidden lg:flex flex-col w-full lg:w-fit px-5 lg:px-0 lg:flex-row items-end my-16 gap-8 lg:gap-0 2xl:my-20"
    //   >
    //     <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] 2xl:h-[7.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-center rounded-tr-3xl rounded-tl-3xl md:rounded-bl-3xl  justify-center">
    //       <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
    //         <Image
    //           src="/images/phoneCall.svg"
    //           alt="Splenify"
    //           width={70}
    //           height={70}
    //           className=" dark:invert w-[58px] 2xl:w-[70px] h-[58px] 2xl:h-[70px] absolute -top-12 2xl:-top-14"
    //         />
    //         <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //           Discovery <br /> Call
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[8rem] 2xl:h-[9rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
    //       <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
    //         <Image
    //           src="/images/research.svg"
    //           alt="Splenify"
    //           width={70}
    //           height={70}
    //           className=" w-[62px]  dark:invert  2xl:w-[75px] h-[62px] 2xl:h-[75px] absolute -top-10 2xl:-top-12"
    //         />
    //         <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //           Research
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[9.5rem] 2xl:h-[10.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
    //       <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
    //         <Image
    //           src="/images/design.svg"
    //           alt="Splenify"
    //           width={70}
    //           height={70}
    //           className=" w-[62px]  dark:invert  2xl:w-[80px] h-[62px] 2xl:h-[80px] absolute -top-12 2xl:-top-[4.5rem]"
    //         />
    //         <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //           UI/Ux <br /> Design
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[11rem] 2xl:h-[12rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
    //       <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
    //         <Image
    //           src="/images/frontend.svg"
    //           alt="Splenify"
    //           width={70}
    //           height={70}
    //           className=" w-[62px]  dark:invert  2xl:w-[80px] h-[62px] 2xl:h-[80px] absolute -top-12 2xl:-top-16"
    //         />
    //         <h3 className=" italic text-sm 2xl:text-base  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //           Front-End Development
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[12.5rem] 2xl:h-[13.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
    //       <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
    //         <Image
    //           src="/images/backend.svg"
    //           alt="Splenify"
    //           width={70}
    //           height={70}
    //           className=" w-[62px]  dark:invert  2xl:w-[83px] h-[62px] 2xl:h-[83px] absolute -top-12 2xl:-top-[4.5rem]"
    //         />
    //         <h3 className=" italic text-sm 2xl:text-base  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //           Backend-End Development
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[14rem] 2xl:h-[15rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
    //       <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
    //         <Image
    //           src="/images/deployment.svg"
    //           alt="Splenify"
    //           width={70}
    //           height={70}
    //           className=" w-[69px]  dark:invert  2xl:w-[90px] h-[69px] 2xl:h-[90px] absolute -top-12 2xl:-top-[4.5rem]"
    //         />
    //         <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //           Depolyment
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] md:h-[15.5rem] 2xl:h-[16.5rem] bg-[#F3F3F9] dark:bg-gray-900 flex py-2 items-start rounded-tr-3xl rounded-tl-3xl md:rounded-br-3xl   justify-center">
    //       <div className="flex bg-white dark:bg-slate-800 rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
    //         <Image
    //           src="/images/mentain.svg"
    //           alt="Splenify"
    //           width={70}
    //           height={70}
    //           className=" w-[70px]  dark:invert  2xl:w-[95px] h-[70px] 2xl:h-[95px] absolute -top-12 2xl:-top-[4.5rem]"
    //         />
    //         <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500 dark:text-gray-300">
    //           Maintenance
    //         </h3>
    //       </div>
    //     </div>
    //   </motion.div> */}

    //   <Timeline data={data} />
    // </motion.div>
    <Timeline data={data} />
  );
};

export default AppsOnDemand;

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Card grid component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Startup template Aceternity
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Random file upload lol
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];
