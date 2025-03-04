"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import TestimonialModal from "./TestimonialModal";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const Testimonials = () => {
  return (
    <motion.div
      id="about"
      initial={{
        opacity: 0,
      }}
      viewport={{
        amount: 0.05,
        once: true,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.9,
          delay: 0.1,
          ease: "easeInOut",
        },
      }}
      className={`flex flex-col px-[18px] sm:px-0 mx-auto  w-full relative   items-center gap-3 2xl:gap-5 max-w-6xl 2xl:max-w-7xl  `}
    >
      <div className="space-y-1 sm:space-y-3 bg w-full">
        <p className="text-center text-[16px] sm:text-[32px] font-normal">
          Don&apos;t take our word for it!
        </p>
        <div className="flex md:space-x-4 w-full justify-between max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  mx-auto lg:justify-center items-center whitespace-nowrap">
          <Image
            src={"/images/leafl.svg"}
            width={10}
            height={10}
            alt="leaf"
            className=" w-[30px] xs1:w-[40px] h-[70px] sm:w-[55px] sm:h-[84px] dark:invert block"
          />

          <h1
            className={`text-[25px] text-wrap relative max-w-lg md:max-w-5xl  sm:text-[48px]  ${recoleta.className}    text-center `}
          >
            Here’s what our 100+ <br className="  sm:hidden" />
            <span className="text-[#7165FF] ">clients</span> say
            <Image
              src="/images/line_vector2.svg"
              alt="Splenify"
              width={380}
              height={380}
              className="  dark:invert sm:hidden lg:block lg:bottom-0 w-[70px]  lg:w-[150px] right-24 bottom-1  xl:w-[150px] absolute lg:right-[5rem] xl:right-[5rem]  -rotate-4 "
            />
          </h1>

          <Image
            src={"/images/leafr.svg"}
            width={10}
            height={10}
            alt="leaf"
            className="w-[30px] xs1:w-[40px] h-[70px] sm:w-[55px] sm:h-[84px] dark:invert block"
          />
        </div>
      </div>
      <div className="grid max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  grid-cols-1 md:grid-cols-2 lg:px-12 xl:px-0 xl:grid-cols-3 gap-6 mt-4 md:mt-[60px]">
        <div className="flex flex-col space-y-10">
          <TestimonialModal
            logo="/images/recruitu.svg"
            userImage="/images/client1.svg"
            profileImage="/images/avatar.png"
            name="Ruslan Babar"
            delayDuration={0.1}
            role="Co-Founder of RecruitU"
            review='"Working with Splenify has been incredible. They quickly grasped our business model and vision, transforming our landing page and creating stellar social media assets, pitch decks, and more. Their versatility and expertise are unmatched."'
          />
          <TestimonialModal
            logo={"/images/lightdash.svg"}
            profileImage={"/images/avatar.png"}
            name={"Ruslan Babar"}
            delayDuration={0.2}
            role={"Co-Founder of RecruitU"}
            review="Splenify is the partner you dream of when embarking on a project like this. They listened to our needs, worked with our team, and delivered an app that not only looks great but performs flawlessly. Splenify didn’t just build our app—they helped us shape it into something truly awesome"
          />
          <div className="hidden sm:block xl:hidden">
            <TestimonialModal
              logo={"/images/recruitu.svg"}
              userImage="/images/client3.svg"
              profileImage={"/images/avatar.png"}
              name="Ruslan Babar"
              delayDuration={0.4}
              role="Co-Founder of RecruitU"
              review="Working with Splenify felt like having an extension of our own team. They cared deeply about our success, and their work resulted in an app that has taken our business to new heights. The team at Splenify transformed our vague idea into a polished app that’s received rave reviews from our users. Their creativity and technical skill are unparalleled."
            />
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <TestimonialModal
            logo={"/images/lightdash.svg"}
            profileImage={"/images/avatar.png"}
            name={"Ruslan Babar"}
            delayDuration={0.6}
            role={"Co-Founder of RecruitU"}
            review='"Splenify nailed it! They took our idea and turned it into an app we’re proud of. Couldn’t ask for a better team. The app they built for us blew us away. Simple, sleek, and exactly what we needed. Working with Splenify was a breeze. They got our vision instantly and delivered beyond expectations. This team is incredible. They made the whole process easy and gave us an app that’s getting rave reviews. Splenify didn’t just build our app—they helped us shape it into something truly awesome" '
          />
          <TestimonialModal
            logo={"/images/growtha.svg"}
            userImage={"/images/client2.svg"}
            profileImage={"/images/avatar.png"}
            name={"Ruslan Babar"}
            delayDuration={0.1}
            role={"Co-Founder of RecruitU"}
            review="Collaborating with Splenify was an absolute pleasure. Their team was always one step ahead, offering solutions and ideas that made our app more functional and impactful than we initially planned."
          />
          <div className="hidden sm:block xl:hidden">
            <TestimonialModal
              logo={"/images/genex.svg"}
              profileImage={"/images/avatar.png"}
              name={"Ruslan Babar"}
              delayDuration={0.35}
              role={"Co-Founder of RecruitU"}
              review="“Our experience with Splenify was nothing short of amazing. They turned our complex requirements into a smooth, user-friendly app while ensuring every milestone was delivered on time”. Their proactive communication, innovative solutions, and technical prowess made the entire process seamless."
            />
          </div>
        </div>
        <div className="flex sm:hidden xl:flex flex-col lg:flex-row-reverse xl:flex-col col-span-1 lg:col-span-2 gap-0 lg:gap-4 xl:gap-0  xl:col-span-1 space-y-10">
          <TestimonialModal
            logo={"/images/genex.svg"}
            profileImage={"/images/avatar.png"}
            name={"Ruslan Babar"}
            delayDuration={0.35}
            role={"Co-Founder of RecruitU"}
            review="“Our experience with Splenify was nothing short of amazing. They turned our complex requirements into a smooth, user-friendly app while ensuring every milestone was delivered on time”. Their proactive communication, innovative solutions, and technical prowess made the entire process seamless."
          />
          <TestimonialModal
            logo={"/images/recruitu.svg"}
            userImage="/images/client3.svg"
            profileImage={"/images/avatar.png"}
            name="Ruslan Babar"
            delayDuration={0.4}
            role="Co-Founder of RecruitU"
            review="Working with Splenify felt like having an extension of our own team. They cared deeply about our success, and their work resulted in an app that has taken our business to new heights. The team at Splenify transformed our vague idea into a polished app that’s received rave reviews from our users. Their creativity and technical skill are unparalleled."
          />
        </div>
      </div>
      {/* <div className="hidden md:flex flex-col md:flex-row max-w-2xl lg:hidden  items-start gap-4  ">
        <TestimonialModal
          logo={"/images/genex.svg"}
          profileImage={"/images/avatar.png"}
          name={"Ruslan Babar"}
          delayDuration={0.35}
          role={"Co-Founder of RecruitU"}
          review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
        />
        <TestimonialModal
          logo={"/images/recruitu.svg"}
          userImage="/images/client3.svg"
          profileImage={"/images/avatar.png"}
          name="Ruslan Babar"
          delayDuration={0.4}
          role="Co-Founder of RecruitU"
          review="&quot;Working with Raja and Splenify has been incredible. They &lt;span class='font-bold'&gt;quickly grasped our business model&lt;/span&gt;, transforming our landing page and creating stellar social media assets, pitch decks, and more. &lt;span class='font-bold'&gt;Their versatility and expertise are unmatched&lt;/span&gt;.&quot;"
        />
      </div> */}
    </motion.div>
  );
};

export default Testimonials;
