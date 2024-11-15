import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { containerVariants, fadeInVariants } from "@/lib/animations";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const Specialization = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      viewport={{
        once: true,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      }}
      className="flex flex-col w-full  items-center gap-5  my-[20px] md:my-[30px]"
    >
      <h2 className=" text-base   2xl:xl tracking-wide ">
        Here’s what we help you do.
      </h2>
      <h1
        className={` text-2xl max-w-4xl px-3.5 relative md:text-3xl 2xl:text-5xl tracking-wide text-center mb-5 md:mb-16 ${recoleta.className}`}
      >
        Navigate the digital landscape with our app{" "}
        <span className=" text-[#7165FF] ">building excellence</span>
        <Image
          src="/images/line_vector2.svg"
          alt="Splenify"
          width={380}
          height={380}
          className="  dark:invert hidden md:block  w-[270px] 2xl:w-[380px] absolute right-28 2xl:right-52  -rotate-4 "
        />
      </h1>
      <div className="grid grid-cols-1 max-w-6xl 2xl:max-w-7xl lg:grid-cols-2 gap-8 px-6 md:px-12 2xl:px-0  p-2 w-full">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col-reverse md:flex-row w-full   overflow-hidden  rounded-2xl "
        >
          <div className=" py-5 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl text-center md:text-start md:text-lg 2xl:text-2xl font-semibold mb-2 px-8">
              Mobile App Development
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              We create custom, adaptable apps tailored to your business and
              audience growth.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full object-cover object-center "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col-reverse md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-center md:text-start text-2xl md:text-lg 2xl:text-2xl px-8 font-semibold mb-2">
              Software Development
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              We help businesses develop custom software and update systems to
              boost efficiency and drive innovation.
            </p>
          </div>
          <div className=" w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={325}
              className=" w-full h-full object-cover  object-center  "
              height={323}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col-reverse md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              UI/UX Design
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              Deliver WOW with designs that captivate. Our experts create apps
              and dashboards that boost engagement, growth, and sales.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full object-cover object-center "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col-reverse md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              QA & Testing
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              We deliver flawless solutions with rigorous quality assurance,
              ensuring top performance and efficiency.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900  ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full object-cover"
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          className="flex flex-col-reverse md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className="text-center md:text-start text-2xl md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              Digital Transformation
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              Modernize legacy systems to attract customers, increase revenue,
              and boost social engagement.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full object-cover object-center "
              height={123}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{
            x: 0,
            opacity: 1,

            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col-reverse md:flex-row w-full  overflow-hidden  rounded-2xl "
        >
          <div className=" py-4 pb-6 md:py-6 w-full md:w-[50%]  bg-[#F3F3F9] dark:bg-slate-900  flex flex-col items-center md:items-start justify-center">
            <h2 className=" text-2xl md:text-lg 2xl:text-2xl   font-semibold mb-2 px-8">
              IT Consultation
            </h2>
            <p className=" md:max-w-[17.5rem] 2xl:max-w-[20rem] px-8 text-sm md:text-xs 2xl:text-sm text-center md:text-start ">
              Get expert guidance to make the best tech decisions for your
              business.
            </p>
          </div>
          <div className=" w-full md:w-[50%] bg-[#F3F3F9] dark:bg-slate-900 ">
            <Image
              src="/images/portfolio1.jpg"
              alt="Splenify"
              width={225}
              className=" w-full h-full object-cover"
              height={123}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Specialization;
