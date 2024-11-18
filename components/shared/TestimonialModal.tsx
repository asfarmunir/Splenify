import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import localFont from "next/font/local";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const TestimonialModal = ({
  logo,
  userImage,
  review,
  profileImage,
  name,
  role,
  delayDuration,
}: {
  logo: string;
  userImage?: string;
  review: string;
  profileImage: string;
  name: string;
  role: string;
  delayDuration: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <TestimonialCard
          logo={logo}
          userImage={userImage}
          review={review}
          profileImage={profileImage}
          name={name}
          role={role}
          delayDuration={delayDuration}
        />
      </DialogTrigger>
      <DialogContent className=" overflow-hidden max-h-[85svh] md:max-h-[90svh] md:min-w-[900px] 2xl:min-w-[1000px] p-0   bg-gradient-to-r from-[#CB71F2]  to-[#5C0F97]   border-none ">
        <div className="    relative flex flex-col md:flex-row pt-20 md:pt-8   items-center gap-8  justify-center px-12 md:px-20 border-none ">
          <Image
            src="/images/arrow3.svg"
            width={140}
            height={390}
            alt="shape"
            className="absolute w-[140px] md:w-[115px] 2xl:w-[140px]  rotate-12 md:rotate-0   left-0 top-0   z-20
              "
          />
          <div className="flex flex-col gap-4 md:pb-8 ">
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
            <div className="flex pl-6 pt-1 z-50 items-center gap-3">
              <Image
                src="/images/avatar.png"
                width={100}
                height={100}
                alt="profile"
                className="w-[50px] h-[50px] rounded-[72px]"
              />
              <div>
                <h1 className="font-bold text-base text-white">Ruslan Babar</h1>
                <p className="text-xs text-white">Co-Founder of RecruitU</p>
              </div>
            </div>
          </div>
          <Image
            src="/images/testimonial2.svg"
            layout="intrinsic"
            width={10}
            priority
            height={10}
            alt="review-img"
            className="2xl:w-[350px] 2xl:h-[239px] mt-auto w-[300px] h-[189px] rounded-[16px]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialModal;
