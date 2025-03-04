"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import ContactUs from "@/components/shared/ContactUs";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Story } from "@/components/shared/Story";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

interface RoadmapItem {
  number: number;
  items: string[];
}

const values = [
  {
    title: "Innovation",
    description:
      "We thrive on pushing boundaries and exploring new ideas. By embracing the latest technologies and creative approaches, we ensure that every app we build is not only functional but also future-ready.",
    icon: "inovation.svg",
  },
  {
    title: "Client-Centricity",
    description:
      "Our clients are at the heart of everything we do. We take the time to understand your vision, goals, and challenges, crafting mobile solutions that deliver real value to your business and your users.",
    icon: "client.svg",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering work of the highest quality, no compromises. From design to development, every detail is carefully refined to ensure outstanding performance, usability, and scalability.",
    icon: "excellence.svg",
  },
  {
    title: "Adaptability",
    description:
      "The tech world moves fast, and so do we. Our team embraces change with an agile mindset, ensuring we stay flexible and ready to evolve with your needs and industry trends.",
    icon: "adaptbility.svg",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best results come from working together. By blending our diverse skills, talents, and experiences, we create synergized solutions that exceed expectations and bring visions to life.",
    icon: "collaboration.svg",
  },
  {
    title: "Ownership",
    description:
      "Every project we take on is our project. We own every step of the process—celebrating successes, solving challenges, and staying accountable until we deliver a solution you’re proud of.",
    icon: "ownership.svg",
  },
];

const page = () => {
  const [ref1, inView1, entry1] = useInView({ threshold: 0.8 });
  const [ref2, inView2, entry2] = useInView({ threshold: 0.8 });
  const [ref3, inView3, entry3] = useInView({ threshold: 0.8 });
  const [ref4, inView4, entry4] = useInView({ threshold: 0.8 });

  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    if (inView1) {
      setHeight(0);
    }
  }, [inView1, entry1]);

  useEffect(() => {
    if (inView2) {
      setHeight(27);
    }
  }, [inView2, entry2]);

  useEffect(() => {
    if (inView3) {
      setHeight(56);
    }
  }, [inView3, entry3]);

  useEffect(() => {
    if (inView4) {
      setHeight(81);
    }
    // } else {
    //   setHeight(0);
    // }
  }, [inView4, entry4]);
  return (
    <div className=" w-full px-[18px] sm:px-0 flex flex-col gap-[64px] lg:gap-[112px] xl:gap-[224px] pt-[48px]   items-center overflow-x-hidden sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto ">
      <div className=" w-full mx-auto gap-8 xl:gap-[48px]    flex flex-col lg:flex-row items-start xl:items-center justify-between  max-w-6xl 2xl:max-w-7xl">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="space-y-5 xl:space-y-7 w-full "
        >
          <h3
            className={`${recoleta.className} text-[32px] leading-[35px] sm:text-[57px] sm:leading-[59px]  `}
          >
            Top-tier{" "}
            <span className={`text-[#5956E9] `}>mobile development</span>{" "}
            company that serves global entrepreneurs.
          </h3>
          <p className="text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px] tracking-wide ">
            The heart of Splenify is a true-passion for all things tech. We’re a
            cross-platform, hybrid mobile development company that has created a
            series of world-class solutions for our clients, and consistently
            work to make the app marketplace a better place.
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className=" w-full"
        >
          <Image
            src="/about/1.webp"
            alt="about"
            width={450}
            className=" w-full lg:h-[401px] xl:h-[548px] rounded-[24px] "
            height={450}
          />
        </motion.div>
      </div>

      <div className=" w-full gap-12 2xl:gap-20 mx-auto flex flex-col lg:flex-row xl:flex-row-reverse items-start xl:items-center justify-between  max-w-6xl 2xl:max-w-7xl">
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className="space-y-5 w-full "
        >
          {" "}
          <p className="text-[18px] font-bold text-[#5956E9]">
            From Zero to Hero
          </p>
          <h3
            className={`${recoleta.className} text-[32px] leading-[35px] sm:text-[57px] sm:leading-[59px]  max-w-xl 2xl:max-w-2xl`}
          >
            Building Your App’s Success Story
          </h3>
          <p className="text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px]  2xl:text-lg   ">
            At Splenify, we transform your ideas into powerful, high-performing
            mobile apps that stand out in a crowded digital world. Starting from
            ground zero, we guide your app through every stage of its
            journey—from concept to launch and beyond—ensuring it reaches its
            full potential. <br /> <br />{" "}
            <span className="block lg:hidden xl:block">
              Our team of expert developers, designers, and strategists combine
              cutting-edge technology with a deep understanding of user needs.{" "}
              <br />
              <br />
              Whether it’s crafting flawless interfaces, building seamless
              functionality, or optimizing performance, we create apps that
              deliver real impact. <br /> <br /> Start your success story with
              Splenify, today.{" "}
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          viewport={{
            once: true,
          }}
          className=" w-full h-max"
        >
          <Image
            src="/about/2.webp"
            alt="about"
            width={450}
            className=" w-full lg:h-[391px]  xl:h-[634px] rounded-[24px] "
            height={450}
          />
        </motion.div>
      </div>
      <p className="text-[16px] hidden -mt-[112px]  lg:block xl:hidden leading-[24px] sm:text-[20px] sm:leading-[30px]  2xl:text-lg tracking-wide  ">
        Our team of expert developers, designers, and strategists combine
        cutting-edge technology with a deep understanding of user needs. <br />
        <br />
        Whether it’s crafting flawless interfaces, building seamless
        functionality, or optimizing performance, we create apps that deliver
        real impact. <br /> <br /> Start your success story with Splenify,
        today.{" "}
      </p>
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl ">
        <h1 className={`text-[36px]  sm:text-[57px]  ${recoleta.className} `}>
          Our <span className="text-[#5956E9]">Story</span>
        </h1>{" "}
        <div className="flex gap-6 xl:gap-0 py-6 sm:py-12 2xl:py-16 w-full">
          <div className="bg-[#5956E9] bg-opacity-[12%] ml-4 sm:mx-12 lg:mx-10 xl:mx-20 w-2 rounded-full mt-10 lg:mt-16 relative">
            <motion.div
              className="absolute top-0 transition-all duration-700 ease-out   w-full rounded-full  bg-[#5956E9] " /* roadmapProgressBar */
              style={{
                height: `${height}%`,
              }}
            >
              {/* <div className=" absolute w-5 h-5 2xl:w-6 2xl:h-6 2xl:-left-[0.51rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0 -left-[0.4rem] "></div> */}
            </motion.div>
            <div className="z-[1] absolute top-[0%] left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
            {/* item 2 number circle */}
            <div className="z-[1] absolute top-[27%] left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
            {/* item 3 number circle */}
            <div className="z-[1] absolute top-[56%]  left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
            {/* item 4 number circle */}
            <div className="z-[1] absolute top-[81%]  left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] sm:gap-[64px] w-full">
            <div
              ref={ref1}
              className=" w-full gap-5 sm:gap-8 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between  max-w-6xl 2xl:max-w-7xl"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="space-y-5 w-full flex flex-col justify-start lg:justify-center  max-w-2xl relative"
              >
                {" "}
                {/* <div className=" absolute w-8 h-8  -left-[5rem] md:-left-[12rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full   "></div> */}
                <h3
                  className={`${recoleta.className} text-[28px] sm:text-[40px] sm:leading-[54px]  max-w-2xl`}
                >
                  Four graduates,{" "}
                  <span className="text-[#DB14F1]">one shared vision</span>
                </h3>
                <p className="text-[16px] sm:text-[20px]  leading-snug sm:leading-[30px] ">
                  Splenify was born in 2019, when four software graduate
                  students came together with a shared passion for technology
                  and a mission to build applications that deliver real
                  value—for businesses and their customers alike. What started
                  as a dream quickly turned into a purpose: to create mobile
                  solutions that make an impact.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className=" w-full sm:w-fit lg:w-[600px] xl:w-[295px] h-full xl:h-[295px]"
              >
                <Image
                  src="/images/about.png"
                  alt="about"
                  width={300}
                  className=" w-full h-full "
                  height={300}
                />
              </motion.div>
            </div>
            <div
              ref={ref2}
              className=" w-full gap-5 sm:gap-10 mx-auto flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between  max-w-6xl 2xl:max-w-7xl"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="space-y-5 w-full max-w-2xl"
              >
                {" "}
                <h3
                  className={`${recoleta.className} text-[28px] sm:text-[40px] sm:leading-[54px]  max-w-2xl`}
                >
                  A place to learn, grow, and thrive
                </h3>
                <p className="text-[16px] sm:text-[20px] tracking-wide leading-snug sm:leading-[30px] ">
                  At Splenify, we believe that success is a team effort. Our
                  growing family of 25+ developers, designers, strategists, and
                  creatives is united by a drive to learn, improve, and innovate
                  together. <br /> <br /> We foster a culture of collaboration
                  and growth, where every challenge is an opportunity to elevate
                  ourselves and our work.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className=" w-full sm:w-fit lg:w-[495px] xl:w-[295px] h-[295px]"
              >
                <Image
                  src="/about/story1.webp"
                  alt="about"
                  width={300}
                  className=" w-full h-full rounded-[10px] "
                  height={300}
                />
              </motion.div>
            </div>
            <div
              ref={ref3}
              className=" w-full gap-5 sm:gap-10 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between  max-w-6xl 2xl:max-w-7xl"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="space-y-5 w-full max-w-2xl"
              >
                {" "}
                <h3
                  className={`${recoleta.className} text-[28px] sm:text-[40px] sm:leading-[54px]  max-w-2xl`}
                >
                  {" "}
                  <span className="text-[#DB14F1] px-1 pr-2 ">
                    {" "}
                    45+ applications
                  </span>
                  and counting
                </h3>
                <p className="text-[16px] sm:text-[20px] tracking-wide leading-snug sm:leading-[30px] ">
                  Last year, we’ve designed and developed 45+ applications for
                  passionate entrepreneurs. <br /> <br /> From seamless user
                  experiences to robust, scalable solutions, we’ve helped
                  businesses across industries bring their ideas to life and
                  achieve their goals.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className=" w-full sm:w-fit lg:w-[495px] xl:w-[295px] h-[295px]"
              >
                <Image
                  src="/about/story2.webp"
                  alt="about"
                  width={300}
                  className=" w-full h-full rounded-[10px] "
                  height={300}
                />
              </motion.div>
            </div>
            <div
              ref={ref4}
              className=" w-full gap-5 sm:gap-10 mx-auto flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between  max-w-6xl 2xl:max-w-7xl"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="space-y-5 w-full max-w-2xl"
              >
                {" "}
                <h3
                  className={`${recoleta.className} text-[28px] sm:text-[40px] sm:leading-[54px]  max-w-2xl`}
                >
                  Splenify:{" "}
                  <span className="text-[#7165FF]">
                    Turning visions into reality
                  </span>
                </h3>
                <p className="text-[16px] sm:text-[20px] tracking-wide leading-snug sm:leading-[30px] ">
                  Our name reflects what we aim to do: "Splenify"—to transform
                  and elevate. Every app we develop is more than just code—it’s
                  a blend of strategy, design, and technology, crafted to bring
                  our clients’ visions to life. <br /> <br /> We measure success
                  by the value we create, the impact we deliver, and the dreams
                  we help realize.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                viewport={{
                  once: true,
                }}
                className=" w-full sm:w-fit lg:w-[495px] xl:w-[295px] h-[295px]"
              >
                <Image
                  src="/about/story3.webp"
                  alt="about"
                  width={300}
                  className=" w-full h-full rounded-[10px] "
                  height={300}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* <Story /> */}
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl  space-y-[28px]">
        <h1 className={`text-[28px] sm:text-[48px] ${recoleta.className} `}>
          Our <span className="text-[#CA67FC]">Core Values</span>
        </h1>
        <p className=" text-[16px] sm:text-[24px] ">
          At Splenify, our core values guide everything we do, shaping our
          culture, work ethic, and commitment to delivering exceptional mobile
          solutions.
        </p>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 pt-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex items-start  gap-5"
              initial={{ opacity: 0, y: 20 }} // Start with 0 opacity and slight offset on Y-axis
              whileInView={{ opacity: 1, y: 0 }} // End with full opacity and original position
              transition={{
                delay: index * 0.15, // Stagger the delay for each item
                duration: 0.5, // Duration for fade-in
                ease: "easeOut", // Easing for smooth animation
              }}
              viewport={{ once: true }} // Trigger the animation once the item comes into view
            >
              <Image
                src={`/images/${value.icon}`}
                alt="quality"
                width={50}
                height={50}
              />
              <div>
                <h2 className="text-[24px] capitalize mb-1 sm:text-[24px] font-semibold">
                  {value.title}
                </h2>
                <p className="text-[16px] sm:text-[20px] max-w-2xl">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl  space-y-4">
        <h1 className={`text-[28px] sm:text-[48px] ${recoleta.className} `}>
          Meet the heart of <span className="text-[#CA67FC]">Splenify</span>
        </h1>

        <div className=" w-full grid grid-cols-2   lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-3    gap-y-12 pt-7">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start with 0 opacity and slight offset on Y-axis
              whileInView={{ opacity: 1, y: 0 }} // End with full opacity and original position
              transition={{
                delay: index * 0.1, // Stagger the delay for each item
                duration: 0.5, // Duration for fade-in
                ease: "easeOut", // Easing for smooth animation
              }}
              viewport={{ once: true }} // Trigger the animation once the item comes into view
              className="flex flex-col items-center sm:items-start"
            >
              <div className="   w-full  xl:h-[298px] mb-5 rounded-2xl">
                <Image
                  src="/images/about.png"
                  alt="quality"
                  width={100}
                  className=" w-full h-full object-cover object-center rounded-[16px]"
                  height={100}
                />
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h2 className="text-[24px] font-bold ">Olivia Rhye</h2>
                <div className=" hidden sm:inline-flex lg:hidden items-center gap-4">
                  <Image
                    src="/images/x.svg"
                    alt="quality"
                    width={22}
                    height={22}
                  />
                  <Image
                    src="/images/in.svg"
                    alt="quality"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
              <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-center sm:text-start text-[#747576] dark:text-slate-300 mb-4">
                Co-founder splenidy. <br className=" lg:hidden" /> Senior
                Graphics Designer
              </p>
              <div className=" inline-flex sm:hidden lg:inline-flex items-center gap-4">
                <Image
                  src="/images/x.svg"
                  alt="quality"
                  width={22}
                  height={22}
                />
                <Image
                  src="/images/in.svg"
                  alt="quality"
                  width={22}
                  height={22}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="">
        <ContactUs />
      </div>
    </div>
  );
};

export default page;
