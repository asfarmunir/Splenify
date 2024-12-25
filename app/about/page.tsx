"use client";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });

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
  return (
    <div className=" w-full flex flex-col items-center">
      <div className=" w-full mx-auto flex flex-col md:flex-row items-center justify-evenly py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl">
        <div className="space-y-5 w-full max-w-lg">
          <h3
            className={`${recoleta.className} text-4xl 2xl:text-5xl  max-w-lg`}
          >
            Top-tier{" "}
            <span className={`text-[#5956E9] `}>mobile development</span>{" "}
            company that serves global entrepreneurs.
          </h3>
          <p className="text-sm 2xl:text-lg tracking-wide ">
            The heart of Splenify is a true-passion for all things tech. We’re a
            cross-platform, hybrid mobile development company that has created a
            series of world-class solutions for our clients, and consistently
            work to make the app marketplace a better place.
          </p>
        </div>
        <div className="">
          <Image src="/images/about.png" alt="about" width={450} height={450} />
        </div>
      </div>
      <div className=" w-full mx-auto flex flex-col md:flex-row-reverse items-center justify-evenly py-10 2xl:py-16 max-w-6xl 2xl:max-w-7xl">
        <div className="space-y-5 w-full max-w-lg">
          <p className="text-sm font-bold text-[#5956E9]">From Zero to Hero</p>
          <h3
            className={`${recoleta.className} text-4xl 2xl:text-5xl  max-w-lg`}
          >
            Building Your App’s Success Story
          </h3>
          <p className="text-sm 2xl:text-lg tracking-wide leading-snug ">
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
        </div>
        <div className="">
          <Image src="/images/about.png" alt="about" width={450} height={450} />
        </div>
      </div>
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl py-10 2xl:py-16 space-y-4">
        <h1 className={`text-4xl 2xl:text-5xl ${recoleta.className} `}>
          Our <span className="text-[#CA67FC]">Core Values</span>
        </h1>
        <p className="text-sm 2xl:text-base max-w-xl">
          At Splenify, our core values guide everything we do, shaping our
          culture, work ethic, and commitment to delivering exceptional mobile
          solutions.
        </p>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10 py-6">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4">
              <div className=" bg-[#E9E8FF] flex items-center justify-center rounded-full w-[50px] p-3 h-[50px]">
                <Image
                  src={`/images/${value.icon}`}
                  alt="quality"
                  width={50}
                  className="  object-contain object-center"
                  height={50}
                />
              </div>
              <div>
                <h2
                  className={`text-lg capitalize 2xl:text-xl font-semibold ${recoleta.className}`}
                >
                  {value.title}
                </h2>
                <p className="text-sm 2xl:text-base max-w-2xl">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full mx-auto max-w-6xl 2xl:max-w-7xl py-10 2xl:py-16 space-y-4">
        <h1 className={`text-4xl 2xl:text-5xl ${recoleta.className} `}>
          Meet the heart of <span className="text-[#CA67FC]">Splenify</span>
        </h1>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 lg:gap-7  gap-y-12 py-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="" key={index}>
              <div className="   w-full mb-5 rounded-2xl">
                <Image
                  src="/images/about.png"
                  alt="quality"
                  width={100}
                  className=" w-full h-full object-cover object-center rounded-2xl"
                  height={100}
                />
              </div>
              <h2 className="text-lg font-bold mb-2">Olivia Rhye</h2>
              <p className="text-sm text-[#747576] mb-4">
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
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
