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
      "Every project we take on is our project. We own every step of the process—celebrating successes, solving challenges, and staying accountable until we deliver a solution you’re proud of",
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
      setHeight(11);
    }
  }, [inView1, entry1]);

  useEffect(() => {
    if (inView2) {
      setHeight(38);
    }
  }, [inView2, entry2]);

  useEffect(() => {
    if (inView3) {
      setHeight(61);
    }
  }, [inView3, entry3]);

  useEffect(() => {
    if (inView4) {
      setHeight(89);
    }
    // } else {
    //   setHeight(0);
    // }
  }, [inView4, entry4]);
  return (
    <div className=" w-full flex flex-col px-6 sm:px-12 items-center overflow-x-hidden  ">
      <div className=" w-full gap-12 2xl:gap-20 mx-auto flex flex-col md:flex-row items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl">
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
          className="space-y-5 w-full "
        >
          <h3
            className={`${recoleta.className} text-5xl  max-w-lg 2xl:max-w-2xl`}
          >
            Top-tier{" "}
            <span className={`text-[#5956E9] `}>mobile development</span>{" "}
            company that serves global entrepreneurs.
          </h3>
          <p className="text-lg md:text-base 2xl:text-lg tracking-wide ">
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
            src="/images/about.png"
            alt="about"
            width={450}
            className=" w-full "
            height={450}
          />
        </motion.div>
      </div>
      <div className=" w-full gap-12 2xl:gap-20 mx-auto flex flex-col md:flex-row-reverse items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl">
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
          <p className="text-sm font-bold text-[#5956E9]">From Zero to Hero</p>
          <h3
            className={`${recoleta.className} text-5xl  max-w-xl 2xl:max-w-2xl`}
          >
            Building Your App’s Success Story
          </h3>
          <p className="text-lg md:text-base 2xl:text-lg tracking-wide  ">
            At <strong>Splenify,</strong> we transform your ideas into powerful,
            <strong>high-performing</strong> mobile apps that stand out in a
            crowded digital world. Starting from ground zero, we guide your app
            through every stage of its journey—from concept to launch and
            beyond—ensuring it reaches its <strong>full potential.</strong>{" "}
            <br /> Our team of expert developers, designers, and{" "}
            <strong>strategists</strong> combine cutting-edge{" "}
            <strong>technology</strong> with a deep understanding of user needs.
            Whether it’s crafting flawless interfaces, building seamless
            functionality, or <strong>optimizing</strong> performance, we create
            apps that deliver real impact. <br /> Start your success story with
            Splenify, today.
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
          className=" w-full"
        >
          <Image
            src="/images/about.png"
            alt="about"
            width={450}
            className=" w-full "
            height={450}
          />
        </motion.div>
      </div>
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl py-10 2xl:py-16 ">
        <h1
          className={`text-3xl md:text-4xl 2xl:text-5xl ${recoleta.className} `}
        >
          Our <span className="text-[#5956E9]">Story</span>
        </h1>{" "}
        <div className="flex gap-9 sm:gap-12 2xl:gap-20 py-6 md:py-12 2xl:py-16 w-full">
          <div className="bg-[#5956E9] bg-opacity-[12%] ml-4 sm:mx-12 2xl:mx-20 w-2 rounded-full relative">
            <motion.div
              className="absolute top-0 transition-all duration-700 ease-out   w-full rounded-full  bg-[#5956E9] " /* roadmapProgressBar */
              style={{
                height: `${height}%`,
              }}
            >
              {/* <div className=" absolute w-5 h-5 2xl:w-6 2xl:h-6 2xl:-left-[0.51rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0 -left-[0.4rem] "></div> */}
            </motion.div>
            <div className="z-[1] absolute top-[11%] left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
            {/* item 2 number circle */}
            <div className="z-[1] absolute top-[38%] left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
            {/* item 3 number circle */}
            <div className="z-[1] absolute top-[61%]  left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
            {/* item 4 number circle */}
            <div className="z-[1] absolute top-[89%]  left-1/2 transform -translate-x-1/2">
              <div className="glassContainerContainerRoundHowToBuy">
                <div className="howToBuyOrangeCircle">
                  <div className=" absolute w-8 h-8   -left-[1rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full bottom-0  "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div
              ref={ref1}
              className=" w-full gap-5 mx-auto flex flex-col md:flex-row items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl"
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
                className="space-y-5 w-full flex flex-col justify-center  max-w-2xl relative"
              >
                {" "}
                {/* <div className=" absolute w-8 h-8  -left-[5rem] md:-left-[12rem] progressPointer bg-[#5956E9] border-4 border-white dark:border-white/10 rounded-full   "></div> */}
                <h3
                  className={`${recoleta.className} text-4xl md:text-3xl 2xl:text-4xl  max-w-2xl`}
                >
                  Four graduates,{" "}
                  <span className="text-[#DB14F1]">one shared vision</span>
                </h3>
                <p className="text-sm 2xl:text-lg tracking-wide leading-snug ">
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
                className=" w-full sm:w-fit"
              >
                <Image
                  src="/images/about.png"
                  alt="about"
                  width={300}
                  className=" w-full"
                  height={300}
                />
              </motion.div>
            </div>
            <div
              ref={ref2}
              className=" w-full gap-5 mx-auto flex flex-col md:flex-row-reverse items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl"
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
                  className={`${recoleta.className} text-4xl md:text-3xl 2xl:text-4xl  max-w-2xl`}
                >
                  A place to learn, grow, and thrive
                </h3>
                <p className="text-sm 2xl:text-lg tracking-wide leading-snug ">
                  At Splenify, we believe that success is a team effort. Our
                  growing family of 25+ developers, designers, strategists, and
                  creatives is united by a drive to learn, improve, and innovate
                  together. We foster a culture of collaboration and growth,
                  where every challenge is an opportunity to elevate ourselves
                  and our work.
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
                className=" w-full sm:w-fit"
              >
                <Image
                  src="/images/about.png"
                  alt="about"
                  width={300}
                  height={300}
                />
              </motion.div>
            </div>
            <div
              ref={ref3}
              className=" w-full gap-5 mx-auto flex flex-col md:flex-row items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl"
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
                  className={`${recoleta.className} text-4xl md:text-3xl 2xl:text-4xl  max-w-2xl`}
                >
                  100+ applications and counting
                </h3>
                <p className="text-sm 2xl:text-lg tracking-wide leading-snug ">
                  Over the years, we’ve designed, developed, and launched 100+
                  applications, each tailored to deliver real results. From
                  seamless user experiences to robust, scalable solutions, we’ve
                  helped businesses across industries bring their ideas to life
                  and achieve their goals.
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
                className=" w-full sm:w-fit"
              >
                <Image
                  src="/images/about.png"
                  alt="about"
                  width={300}
                  height={300}
                />
              </motion.div>
            </div>
            <div
              ref={ref4}
              className=" w-full gap-5 mx-auto flex flex-col md:flex-row-reverse items-center justify-between py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl"
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
                  className={`${recoleta.className} text-4xl md:text-3xl 2xl:text-4xl  max-w-2xl`}
                >
                  Splenify:{" "}
                  <span className="text-[#7165FF]">
                    Turning visions into reality
                  </span>
                </h3>
                <p className="text-sm 2xl:text-lg tracking-wide leading-snug ">
                  Our name reflects what we aim to do: "Splenify"—to transform
                  and elevate. Every app we develop is more than just code—it’s
                  a blend of strategy, design, and technology, crafted to bring
                  our clients’ visions to life. We measure success by the value
                  we create, the impact we deliver, and the dreams we help
                  realize.
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
                className=" w-full sm:w-fit"
              >
                <Image
                  src="/images/about.png"
                  alt="about"
                  width={300}
                  height={300}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* <Story /> */}
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl py-10 2xl:py-16 space-y-4">
        <h1
          className={`text-5xl md:text-4xl 2xl:text-5xl ${recoleta.className} `}
        >
          Our <span className="text-[#CA67FC]">Core Values</span>
        </h1>
        <p className=" 2xl:text-lg max-w-xl">
          At Splenify, our core values guide everything we do, shaping our
          culture, work ethic, and commitment to delivering exceptional mobile
          solutions.
        </p>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10 py-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex items-start  gap-4"
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
                <h2 className="text-lg capitalize mb-1 2xl:text-xl font-semibold">
                  {value.title}
                </h2>
                <p className="text-base max-w-2xl">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl py-10 2xl:py-16 space-y-4">
        <h1
          className={`text-5xl md:text-4xl 2xl:text-5xl ${recoleta.className} `}
        >
          Meet the heart of <span className="text-[#CA67FC]">Splenify</span>
        </h1>

        <div className=" w-full grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 lg:gap-7  gap-y-12 py-6">
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
              <div className="   w-full mb-5 rounded-2xl">
                <Image
                  src="/images/about.png"
                  alt="quality"
                  width={100}
                  className=" w-full h-full object-cover object-center rounded-[16px]"
                  height={100}
                />
              </div>
              <h2 className="text-lg font-bold mb-2">Olivia Rhye</h2>
              <p className="text-sm text-center sm:text-start text-[#747576] dark:text-slate-300 mb-4">
                Co-founder splenidy. Senior Graphics Designer
              </p>
              <div className=" inline-flex items-center gap-4">
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
      <ContactUs />
    </div>
  );
};

export default page;
