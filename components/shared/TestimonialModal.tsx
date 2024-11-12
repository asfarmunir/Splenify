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
      <DialogContent className=" max-h-[90svh] md:min-w-[900px] 2xl:min-w-[1000px] bg-gradient-to-r from-[#900EF7] flex flex-col md:flex-row items-center gap-12 2xl:gap-20 justify-center to-[#D677FE] p-20 border-none ">
        <div className="flex flex-col gap-4">
          <h2
            className={`text-2xl 2xl:text-4xl text-white font-bold  ${recoleta.className}`}
          >
            Hear it from our client
          </h2>
          <p className="2xl:text-base text-sm max-w-sm text-white  ">
            "Working with Raja and Splenify has been incredible. They quickly
            grasped our business model and vision, transforming our landing page
            and creating stellar social media assets, pitch decks, and more.
            Their versatility and expertise are unmatched."
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
          src="/images/testimonial.svg"
          layout="intrinsic"
          width={10}
          height={10}
          alt="review-img"
          className="2xl:w-[350px] hidden md:block 2xl:h-[239px] w-[290px] h-[179px] rounded-[16px]"
        />
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialModal;
