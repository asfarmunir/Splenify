"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { InfiniteMovingCards } from "../ui/moving-images";
import { motion } from "framer-motion";

const Modal = ({
  heroImg,
  heroBg,
  heroLogo,
  testimonialBg,
  color,
  imgs = [], // Default to empty array if imgs is not provided
}: {
  heroImg: string;
  heroBg: string;
  heroLogo: string;
  testimonialBg: string;
  color: string;
  imgs: string[];
}) => {
  const duplicatedSlides = [...imgs, ...imgs];

  return (
    <Dialog>
      <DialogTrigger
        className="bg-[#7165FF] text-xs md:text-base
        px-6    md:px-8 py-4 rounded-[8px] text-white font-thin text-nowrap "
      >
        View Project
      </DialogTrigger>
      <DialogContent className="  border-none     md:rounded-2xl p-0 md:min-w-[650px] lg:min-w-[900px] 2xl:min-w-[940px] ">
        <div className=" w-full flex flex-col max-h-[100svh] md:max-h-[90svh] md:rounded-2xl overflow-y-auto [scroll]  [scrollbar-width:none]   ">
          <div
            className=" w-full flex flex-col items-center pt-16 gap-4 bg-cover bg-center h-[500px]"
            style={{
              backgroundImage: "url(" + heroBg + ")",
              // backgroundImage: "url(/projectModal/orangeBg.webp)",
            }}
          >
            {/* <h2
              className={` ${recoleta.className} text-5xl 2xl:text-7xl text-white `}
            >
              Efandex
            </h2> */}
            <div className="w-[100px] h-[100px] md:w-[130px] md:h-[120px] 2xl:w-[190px] 2xl:h-[100px] ">
              <Image
                src={heroLogo}
                // src={"/projectModal/logo1.svg"}
                width={130}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                height={100}
                priority
                alt="efandex"
                className="w-full h-full object-contain object-center"
              />
            </div>

            <p className="text-xl 2xl:text-2xl text-white text-center tracking-wide ">
              The <span className=" underline font-bold ">Ultimate</span> Key to
              Fluent <br /> Communication
            </p>
            <div className=" w-[370px] h-[200px] md:w-[600px] md:h-[250px] 2xl:w-[600px] 2xl:h-[340px] ">
              <Image
                // src="/projectModal/modalHero1.webp"
                src={heroImg}
                unoptimized
                width={600}
                height={340}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="efandex"
                priority
                className=" w-full h-full object-contain object-center "
              />
            </div>
          </div>
          <div className=" pt-10 md:pt-16 space-y-14 2xl:pt-20 ">
            <div className="flex gap-5 px-8 2xl:px-10 md:py-12 relative">
              <Image
                src={
                  color === "blue"
                    ? "/images/arrow-blue1.svg"
                    : color === "pink"
                    ? "/images/arrow-pink1.svg"
                    : "/images/arrow-orange1.svg"
                }
                width={790}
                height={790}
                alt="shape"
                className="absolute  w-[340px] rotate-12 md:rotate-0 sm:w-[450px] md:w-[790px]  left-4 -bottom-20  md:-bottom-32 md:left-12 2xl:left-16 z-50
              "
              />
              <div
                className={`
              ${
                color === "blue"
                  ? "bg-[#1281DB1A] "
                  : color === "pink"
                  ? "bg-[#F712841A]"
                  : "bg-[#FF76681A]"
              }
                 2xl:w-20 2xl:h-20 w-16 h-16  rounded-full flex items-center justify-center   p-2 2xl:p-3`}
              >
                <p
                  className={`
                    ${
                      color === "blue"
                        ? "bg-[#1281DB] "
                        : color === "pink"
                        ? "bg-[#F71284]"
                        : "bg-[#FF7668]"
                    }
                  text-2xl  2xl:w-16 2xl:h-14 w-14 h-12 text-center font-semibold text-white rounded-full flex items-center justify-center `}
                >
                  1
                </p>
              </div>
              <div className=" space-y-3">
                <p className=" text-[#5956E9] font-bold text-sm 2xl:text-base">
                  Challenge
                </p>
                <h2
                  className={`text-3xl 2xl:text-5xl font-bold ${recoleta.className}`}
                >
                  Title Goes Here
                </h2>
                <p className="  max-w-lg ">
                  "Stay ahead of the game. Monitor your marketing campaigns in
                  real-time with our intuitive tools, and make data-driven
                  decisions for optimal results." "Stay ahead of the game.
                  Monitor your marketing campaigns in real-time with our
                  intuitive tools, and make data-driven decisions for optimal
                  results."
                </p>
              </div>
            </div>
            <div className="flex ml-auto w-full  dark:bg-slate-900 py-16 2xl:px-10 px-8 justify-end gap-5 relative">
              <Image
                src={
                  color === "blue"
                    ? "/images/arrow-blue2.svg"
                    : color === "pink"
                    ? "/images/arrow-pink2.svg"
                    : "/images/arrow-orange2.svg"
                }
                width={780}
                height={780}
                alt="shape"
                className="absolute  w-[330px] -rotate-12 md:rotate-0 sm:w-[450px] md:w-[790px] right-7  bottom-0  md:-bottom-28 md:right-12 2xl:right-16 z-50
              "
              />
              <div className=" space-y-3 text-right">
                <p className=" text-[#5956E9] font-bold text-sm 2xl:text-base">
                  Challenge
                </p>
                <h2
                  className={`text-3xl 2xl:text-5xl font-bold ${recoleta.className}`}
                >
                  Title Goes Here
                </h2>
                <p className="  max-w-lg ">
                  "Stay ahead of the game. Monitor your marketing campaigns in
                  real-time with our intuitive tools, and make data-driven
                  decisions for optimal results." "Stay ahead of the game.
                  Monitor your marketing campaigns in real-time with our
                  intuitive tools, and make data-driven decisions for optimal
                  results."
                </p>
              </div>
              <div
                className={`
              ${
                color === "blue"
                  ? "bg-[#1281DB1A] "
                  : color === "pink"
                  ? "bg-[#F712841A]"
                  : "bg-[#FF76681A]"
              }
                 2xl:w-20 2xl:h-20 w-16 h-16  rounded-full flex items-center justify-center   p-2 2xl:p-3`}
              >
                <p
                  className={`
                    ${
                      color === "blue"
                        ? "bg-[#1281DB] "
                        : color === "pink"
                        ? "bg-[#F71284]"
                        : "bg-[#FF7668]"
                    }
                  text-2xl  2xl:w-16 2xl:h-14 w-14 h-12 text-center font-semibold text-white rounded-full flex items-center justify-center `}
                >
                  {" "}
                  2
                </p>
              </div>
            </div>
            <div className="flex gap-5 px-8 2xl:px-10 pb-12 md:py-12">
              <div
                className={`
              ${
                color === "blue"
                  ? "bg-[#1281DB1A] "
                  : color === "pink"
                  ? "bg-[#F712841A]"
                  : "bg-[#FF76681A]"
              }
                 2xl:w-20 2xl:h-20 w-16 h-16  rounded-full flex items-center justify-center   p-2 2xl:p-3`}
              >
                <p
                  className={`
                    ${
                      color === "blue"
                        ? "bg-[#1281DB] "
                        : color === "pink"
                        ? "bg-[#F71284]"
                        : "bg-[#FF7668]"
                    }
                  text-2xl  2xl:w-16 2xl:h-14 w-14 h-12 text-center font-semibold text-white rounded-full flex items-center justify-center `}
                >
                  {" "}
                  3
                </p>
              </div>
              <div className=" space-y-3">
                <p className=" text-[#5956E9] font-bold text-sm 2xl:text-base">
                  Challenge
                </p>
                <h2
                  className={`text-3xl 2xl:text-5xl font-bold ${recoleta.className}`}
                >
                  Title Goes Here
                </h2>
                <p className="  max-w-lg ">
                  "Stay ahead of the game. Monitor your marketing campaigns in
                  real-time with our intuitive tools, and make data-driven
                  decisions for optimal results." "Stay ahead of the game.
                  Monitor your marketing campaigns in real-time with our
                  intuitive tools, and make data-driven decisions for optimal
                  results."
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-md  max-w-4xl 2xl:max-w-5xl my-3 flex flex-col  bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center ">
            {/* <InfiniteMovingCards
              items={images}
              direction="right"
              speed="slow"
            /> */}
            <div className="relative w-full overflow-hidden">
              {/* Wrapping div for seamless looping */}
              <motion.div
                className="flex -space-x-5"
                animate={{
                  x: ["-100%", "0%"], // Pause the animation on hover
                  transition: {
                    ease: "linear",
                    duration: 40,
                    repeat: Infinity,
                  },
                }}
              >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                  <div key={index} className="flex-shrink-0 w-[200px] z-50">
                    <Image
                      src={slide}
                      width={500}
                      height={500}
                      alt="project"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="px-4 py-12 flex flex-col items-center w-full  space-y-3">
            <h2
              className={`${recoleta.className}  text-custom-text-secondary  font-bold text-3xl 2xl:text-4xl`}
            >
              Tools Used
            </h2>

            <div className="flex flex-wrap justify-center gap-y-4 gap-x-2.5 py-5  md:gap-y-10">
              <Image
                src="/projects/flutter-icon.svg"
                alt="Tech"
                width={180}
                className=" border border-slate-200 dark:border-slate-700 py-3.5 px-8 rounded-md"
                height={150}
              />
              <Image
                src="/projects/angular-icon.svg"
                alt="Tech"
                width={180}
                className=" border border-slate-200 dark:border-slate-700 py-3.5 px-8 rounded-md"
                height={150}
              />
              <Image
                src="/projects/react-icon.svg"
                alt="Tech"
                width={180}
                className=" border border-slate-200 dark:border-slate-700 py-3.5 px-8 rounded-md"
                height={150}
              />
              <Image
                src="/projects/django-icon.svg"
                alt="Tech"
                width={180}
                className=" border  border-slate-200 dark:border-slate-700 py-3.5 px-8 rounded-md"
                height={150}
              />
            </div>
          </div>
          <div
            className={` ${testimonialBg}    relative    flex flex-col lg:flex-row pt-16 md:pt-8   items-center lg:gap-8  justify-center  px-12 md:px-20 border-none `}
          >
            <Image
              src="/images/arrow3.svg"
              width={140}
              height={390}
              alt="shape"
              className="absolute w-[135px] md:w-[115px] 2xl:w-[140px]  rotate-12 md:rotate-0   left-0 top-0   z-20
              "
            />
            <div className="flex flex-col gap-4 md:pb-8 ">
              <h2
                className={`text-4xl text-white font-bold  ${recoleta.className}`}
              >
                Hear it from our client
              </h2>
              <p className="text-[14px] 2xl:text-sm  max-w-lg text-white  ">
                "Working with Raja and Splenify has been incredible. They
                quickly grasped our business model and vision, transforming our
                landing page and creating stellar social media assets, pitch
                decks, and more. Their versatility and expertise are unmatched."
              </p>
              <div className="flex pl-6 pt-1 z-50 items-center gap-3">
                <Image
                  src="/images/avatar.png"
                  width={100}
                  height={100}
                  alt="profile"
                  className="w-[50px] h-[50px] rounded-[72px]"
                />
                <div>
                  <h1 className="font-bold text-base text-white">
                    Ruslan Babar
                  </h1>
                  <p className="text-xs text-white">Co-Founder of RecruitU</p>
                </div>
              </div>
            </div>
            <Image
              src="/images/testimonial2.svg"
              layout="intrinsic"
              width={10}
              height={10}
              alt="review-img"
              className="2xl:w-[350px] 2xl:h-[239px] mt-auto w-[300px] h-[189px] rounded-[16px]"
            />
          </div>
          <div
            style={{
              // backgroundImage: `url(${ModalFooterBg.src})`,
              // backgroundPosition: "center",

              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
              width: "100%",
              overflow: "hidden",
              height: "auto",
              minHeight: "calc(100vh - 400px)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              position: "relative",
            }}
            className=" pt-48 pb-40  bg-[#161C2D] "
          >
            <div className=" flex flex-col items-center  space-y-3">
              <h2
                className={`${recoleta.className} font-bold font-mulish px-6  text-4xl text-white`}
              >
                Have A Project In Mind? Let's Get Start.
              </h2>
              <p className="text-center font-mulish text-gray-400  text-sm 2xl:text-base font-medium max-w-sm md:max-w-lg  ">
                You're looking for a solid partner for the project having in
                your mind. Connect with us to make your work easier.
              </p>

              <DialogClose className="w-full max-w-[260px]" asChild>
                <Link href="#contact" className="w-full max-w-[260px]">
                  <Button className="bg-[#6447F9] rounded-[8px] text-white hover:bg-[#6447F9]/80 font-mulish text-sm font-bold px-9 py-4    ">
                    Get Started
                    <ArrowUpRight className="w-5 h-5 ml-2  text-white " />
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

const images = [
  {
    img: "/projects/example1.svg",
  },
  {
    img: "/projects/example2.svg",
  },
  {
    img: "/projects/example3.svg",
  },
];
