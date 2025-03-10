import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialModal from "./TestimonialModal";

interface TestimonialCardProps {
  logo: string;
  userImage?: string;
  review: string;
  profileImage: string;
  name: string;
  role: string;
  delayDuration: number;
}

const TestimonialCard = ({
  logo,
  userImage,
  review,
  profileImage,
  name,
  delayDuration,
  role,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      viewport={{ once: true }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: delayDuration,
          ease: "easeOut",
        },
      }}
      className="bg-white w-full dark:bg-slate-900  shadow-[0_2px_20px_10px_rgba(0,0,0,0.03)]   dark:shadow-none rounded-[16px] gap-4 xl:gap-5 p-6 border-[1px] border-white dark:border-slate-800 space-y-4"
    >
      {/* <Image
        src={logo}
        width={10}
        height={10}
        alt="review-img"
        className="w-[86px] h-[28px] dark:invert"
      /> */}
      {userImage && (
        <div className="w-full">
          <Image
            src={userImage}
            layout="responsive"
            width={10}
            height={10}
            alt="review-img"
            className="w-full md:w-[350px] md:h-[239px] rounded-[16px]"
          />
        </div>
      )}
      <h1 className=" font-normal pb-2 text-start text-[12px] sm:text-[20px] dark:text-slate-400">
        <p dangerouslySetInnerHTML={{ __html: review }} />
      </h1>
      <div className="flex justify-start  items-center space-x-4">
        <Image
          src={profileImage}
          width={100}
          height={100}
          alt="profile"
          className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] rounded-[72px]"
        />
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-[14px] sm:text-[20px] dark:text-slate-200">
            {name}
          </h1>
          <p className="font-roboto font-normal text-[12px] sm:text-[16px] text-center dark:text-slate-200">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
