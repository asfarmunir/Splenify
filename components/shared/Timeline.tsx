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
import { Poppins } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const data = [
  {
    title: "Discovery Call",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
      >
        <p
          className={`text-black ${poppins.className} dark:text-neutral-200 text-[14px] sm:text-[20px]   mb-8`}
        >
          We start with a friendly discovery call to understand your vision,
          goals, and challenges. This step lays the foundation for a clear and
          focused roadmap, ensuring we’re aligned with your objectives from day
          one.
        </p>
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Carousel className=" sm:hidden ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src="/images/about.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    ),
  },
  {
    title: "Research",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
      >
        {" "}
        <p
          className={`text-black ${poppins.className} dark:text-neutral-200 text-[14px] sm:text-[20px]   mb-8`}
        >
          Our team dives deep into market research and user analysis to uncover
          insights that shape your app. We identify key opportunities and craft
          a strategy to ensure your app stands out in a competitive landscape.
        </p>
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Carousel className=" sm:hidden ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src="/images/about.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    ),
  },
  {
    title: "UI/UX Design",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
      >
        {" "}
        <p
          className={`text-black ${poppins.className} dark:text-neutral-200 text-[14px] sm:text-[20px]   mb-8`}
        >
          With your vision in mind, we create intuitive, eye-catching designs
          that deliver exceptional user experiences. Every screen and
          interaction is crafted to delight users while keeping functionality at
          the forefront.
        </p>
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Carousel className=" sm:hidden ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src="/images/about.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    ),
  },
  {
    title: "Front-End Development",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
      >
        {" "}
        <p
          className={`text-black  ${poppins.className} dark:text-neutral-200 text-[14px] sm:text-[20px]   mb-8`}
        >
          Our developers bring your designs to life with pixel-perfect
          precision. Using cutting-edge technologies, we ensure your app is
          fast, responsive, and performs seamlessly across all devices.
        </p>
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Carousel className=" sm:hidden ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src="/images/about.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    ),
  },
  {
    title: "Back-End Development",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
      >
        {" "}
        <p
          className={`text-black ${poppins.className} dark:text-neutral-200 text-[14px] sm:text-[20px]   mb-8`}
        >
          Behind the scenes, we build a robust and scalable back-end that powers
          your app. From APIs to database management, we ensure your app is
          secure, efficient, and ready to grow with your business.
        </p>
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Carousel className=" sm:hidden ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src="/images/about.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    ),
  },
  {
    title: "Deployement",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
      >
        {" "}
        <p
          className={`text-black ${poppins.className} dark:text-neutral-200 text-[14px] sm:text-[20px]   mb-8`}
        >
          Once the app is perfected, we handle the deployment process, ensuring
          a smooth launch on all relevant app stores. We make sure your app
          meets all requirements and is ready to impress users.
        </p>
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Carousel className=" sm:hidden ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src="/images/about.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    ),
  },
  {
    title: "Maintenance",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
      >
        {" "}
        <p
          className={`text-black ${poppins.className} dark:text-neutral-200 text-[14px] sm:text-[20px]   mb-8`}
        >
          Our support doesn’t stop after launch. We offer ongoing maintenance
          and updates, ensuring your app remains secure, optimized, and aligned
          with evolving user needs and industry trends.
        </p>
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/images/about.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Carousel className=" sm:hidden ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src="/images/about.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-[10px] object-cover xl:w-[350px] w-[275px] h-[220px] lg:h-[217px] xl:h-[295px]  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
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
      className="w-full bg-white max-w-6xl mx-auto  dark:bg-neutral-950 font-sans  "
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
        <h2 className=" text-[16px]  sm:text-[32px] mb-2 sm:mb-4 ">
          How we do it?
        </h2>
        <h1
          className={` px-4 relative text-[25px] sm:text-[48px] mb-4 max-w-2xl xl:max-w-7xl lg:leading-[65px] lg:text-[48px] tracking-wide text-center  ${recoleta.className}`}
        >
          World-class apps on demand, with our{" "}
          <span className=" text-[#DF56FE] "> process!</span>
        </h1>
      </motion.div>

      <div
        ref={ref}
        className="relative max-w-2xl pl-4 lg:max-w-5xl xl:max-w-7xl mx-auto "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start ${
              index !== data.length - 1 ? "pb-20 2xl:pb-24" : ""
            } md:gap-4`}
          >
            <div className=" sticky flex flex-col md:flex-row z-40 items-center top-40    self-start max-w-xs lg:max-w-sm md:w-full">
              <div className=" -ml-1 sm:-ml-5 lg:ml-0  lg:absolute border-8 border-white dark:border-slate-950 top-0 -left-5   rounded-full bg-[#E9E8FF] dark:bg-black flex items-center justify-center">
                {/* <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" /> */}
                <Image
                  src={`icons/timeline${index + 1}.svg`}
                  alt="circle"
                  width={50}
                  height={50}
                />
              </div>
              <h3
                className={`hidden md:block  md:pl-20 text-[40px]   dark:text-slate-200 ${recoleta.className}`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative  xl:pl-[4.1rem] pl-3  sm:pl-[1.8rem] w-full pr-4 md:pr-0 ">
              <h3
                className={` ${recoleta.className} md:hidden block text-[28px] sm:text-5xl mb-4 text-left   dark:text-slate-200`}
              >
                {item.title}
              </h3>
              <p className="text-black text-[20px]">{item.content} </p>
            </div>
          </div>
        ))}
        <div
          style={{
            height: "100%",
            // height: height + "px"
          }}
          className="absolute left-9 sm:left-6 top-0 overflow-hidden w-[4px] bg-[#5956E9] dark:bg-neutral-400  "
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
