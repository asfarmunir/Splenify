import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import ModalFooterBg from "@/public/projects/modal-footer.svg";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { InfiniteMovingCards } from "../ui/moving-images";
const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger
        className="bg-[#7165FF] text-xs md:text-base
        px-6    md:px-8 py-4 rounded-2xl text-white font-thin "
      >
        View Project
      </DialogTrigger>
      <DialogContent className=" border-none max-h-[95svh] overflow-y-auto [scroll]  [scrollbar-width:none]    md:rounded-2xl p-0 md:min-w-[900px] 2xl:min-w-[930px] ">
        <div
          className=" w-full flex flex-col items-center pt-20 gap-4"
          style={{
            backgroundImage: "url(/images/projectBg.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <h2
            className={` ${recoleta.className} text-5xl 2xl:text-7xl text-white `}
          >
            Efandex
          </h2>
          <p className="text-xl 2xl:text-2xl text-white text-center tracking-wide ">
            The <span className=" underline font-bold ">Ultimate</span> Key to
            Fluent <br /> Communication
          </p>
          <Image
            src="/images/modalHero.svg"
            width={10}
            priority
            height={10}
            alt="efandex"
            className="w-[550px] h-[550px] 2xl:w-[600px] 2xl:h-[600px]"
          />
        </div>

        <div className=" md:pt-16 space-y-14 2xl:pt-20 ">
          <div className="flex gap-5 px-8 2xl:px-10 md:py-12 relative">
            <Image
              src="/images/arrow1.svg"
              width={790}
              height={790}
              alt="shape"
              className="absolute hidden md:block   -bottom-32 left-12 2xl:left-16 z-50
              "
            />
            <div className="  2xl:w-20 2xl:h-20 w-16 h-16  rounded-full flex items-center justify-center bg-[#EDCCFE]  p-2 2xl:p-3">
              <p className="text-2xl  2xl:w-16 2xl:h-14 w-14 h-12 text-center font-semibold text-white rounded-full flex items-center justify-center bg-[#CA67FC]">
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
                decisions for optimal results." "Stay ahead of the game. Monitor
                your marketing campaigns in real-time with our intuitive tools,
                and make data-driven decisions for optimal results."
              </p>
            </div>
          </div>
          <div className="flex ml-auto w-full bg-[#FCF7FF] dark:bg-slate-900 py-16 2xl:px-10 px-8 justify-end gap-5 relative">
            <Image
              src="/images/arrow2.svg"
              width={780}
              height={780}
              alt="shape"
              className="absolute hidden md:block   -bottom-28 right-12 2xl:right-16 z-50
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
                decisions for optimal results." "Stay ahead of the game. Monitor
                your marketing campaigns in real-time with our intuitive tools,
                and make data-driven decisions for optimal results."
              </p>
            </div>
            <div className=" 2xl:w-20 2xl:h-20 w-16 h-16  rounded-full flex items-center justify-center bg-[#EDCCFE]  p-2 2xl:p-3">
              <p className="text-2xl  2xl:w-16 2xl:h-14 w-14 h-12 text-center font-semibold text-white rounded-full flex items-center justify-center bg-[#CA67FC]">
                2
              </p>
            </div>
          </div>
          <div className="flex gap-5 px-8 2xl:px-10 pb-12 md:py-12">
            <div className=" 2xl:w-20 2xl:h-20 w-16 h-16  rounded-full flex items-center justify-center bg-[#EDCCFE]  p-2 2xl:p-3">
              <p className="text-2xl  2xl:w-16 2xl:h-14 w-14 h-12 text-center font-semibold text-white rounded-full flex items-center justify-center bg-[#CA67FC]">
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
                decisions for optimal results." "Stay ahead of the game. Monitor
                your marketing campaigns in real-time with our intuitive tools,
                and make data-driven decisions for optimal results."
              </p>
            </div>
          </div>
        </div>

        {/* <div className=" w-full">
          <Image
            src="/images/projectMockups.svg"
            width={10}
            height={10}
            alt="efandex"
            className="w-full"
          />
        </div> */}

        <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={images} direction="right" speed="slow" />
        </div>

        <div className="px-4 py-12 flex flex-col items-center w-full  space-y-3">
          <h2
            className={`${recoleta.className}  text-custom-text-secondary  font-bold text-3xl 2xl:text-4xl`}
          >
            Tools Used
          </h2>

          <div className="flex flex-wrap justify-center gap-y-4 gap-x-6 py-5  md:gap-y-10">
            <Image
              src="/projects/flutter-icon.svg"
              alt="Tech"
              width={180}
              className=" border border-slate-300 dark:border-slate-700 py-3.5 px-8 rounded-xl"
              height={150}
            />
            <Image
              src="/projects/angular-icon.svg"
              alt="Tech"
              width={180}
              className=" border border-slate-300 dark:border-slate-700 py-3.5 px-8 rounded-xl"
              height={150}
            />
            <Image
              src="/projects/react-icon.svg"
              alt="Tech"
              width={180}
              className=" border border-slate-300 dark:border-slate-700 py-3.5 px-8 rounded-xl"
              height={150}
            />
            <Image
              src="/projects/django-icon.svg"
              alt="Tech"
              width={180}
              className=" border  border-slate-300 dark:border-slate-700 py-3.5 px-8 rounded-xl"
              height={150}
            />
          </div>
        </div>
        <div className="  bg-gradient-to-r from-[#CB71F2] flex flex-col md:flex-row pt-12 md:pt-0 items-center gap-8  justify-center to-[#5C0F97] px-20 border-none ">
          <div className="flex flex-col gap-4">
            <h2
              className={`text-3xl 2xl:text-4xl text-white font-bold  ${recoleta.className}`}
            >
              Hear it from our client
            </h2>
            <p className="text-xs 2xl:text-sm  max-w-lg text-white  ">
              "Working with Raja and Splenify has been incredible. They quickly
              grasped our business model and vision, transforming our landing
              page and creating stellar social media assets, pitch decks, and
              more. Their versatility and expertise are unmatched."
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar.png"
                width={100}
                height={100}
                alt="profile"
                className="w-[50px] h-[50px] rounded-[72px]"
              />
              <div>
                <h1 className="font-bold text-base text-white">Ruslan Babar</h1>
                <p className="text-sm text-white">Co-Founder of RecruitU</p>
              </div>
            </div>
          </div>
          <Image
            src="/images/testimonial2.svg"
            layout="intrinsic"
            width={10}
            height={10}
            alt="review-img"
            className="2xl:w-[350px] 2xl:h-[239px] mt-auto w-[290px] h-[179px] rounded-[16px]"
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${ModalFooterBg.src})`,
            backgroundPosition: "center",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
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
          className=" py-20 2xl:py-32 -mt-8 "
        >
          <div className=" flex flex-col items-center  space-y-3">
            <h2
              className={`${recoleta.className} font-bold font-mulish px-3 text-2xl 2xl:text-4xl text-black`}
            >
              Have A Project In Mind? Let's Get Start.
            </h2>
            <p className="text-center font-mulish text-[#525665]  text-sm 2xl:text-base font-medium  ">
              You're looking for a solid partner for the project having in your
              mind. <br /> Connect with us to make your work easier.
            </p>

            <DialogClose className="w-full max-w-[260px]" asChild>
              <Link href="#contact" className="w-full max-w-[260px]">
                <Button className="bg-[#6447F9] rounded-full text-white hover:bg-[#6447F9]/80 font-mulish text-sm font-bold px-7 py-4    ">
                  Get Started
                  <ArrowUpRight className="w-5 h-5 ml-2  text-white " />
                </Button>
              </Link>
            </DialogClose>
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
