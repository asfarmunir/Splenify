"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const faqs = [
  {
    question: "What kind of apps can Splenify build?",
    answer:
      "We specialize in building high-performance mobile applications using Flutter. Whether you need an e-commerce app, social networking platform, booking system, fintech solution, or any custom app idea, we can bring it to life",
  },
  {
    question: "Will my app be scalable for future updates and features?",
    answer:
      "Absolutely! We build apps with scalability in mind, allowing easy integration of new features and upgrades as your business grows.",
  },
  {
    question: "Will my app work on both iOS and Android?",
    answer:
      "Yes! Since we use Flutter, your app will be cross-platform, meaning it will run smoothly on both iOS and Android devices.",
  },
  {
    question: "Do you offer app maintenance and support after launch?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and bug fixes to ensure your app runs smoothly post-launch.",
  },
  {
    question: "How do I get started with Splenify for my app idea?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and bug fixes to ensure your app runs smoothly post-launch.",
  },
];

const Faqs = () => {
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
      id="contact"
      className="flex  flex-col px-[18px] sm:px-0 max-w-2xl md:max-w-[85rem] mx-auto  w-full items-center overflow-x-hidden  justify-center    gap-4 md:px-2  mt"
    >
      <h1
        className={`text-[28px]   sm:text-[47px] mb-4 md:mb-[60px] md:text-[40px] lg:text-[46px]  ${recoleta.className}    text-center `}
      >
        Frequently Asked <span className="text-[#7165FF]">Questions</span>
      </h1>

      <div className=" flex flex-col gap-5 w-full pb-8 max-w-2xl lg:max-w-5xl xl:max-w-[74rem] 2xl:max-w-[85rem]  items-start  justify-center">
        {faqs.map((faq, index) => (
          <Accordion
            type="single"
            key={index}
            collapsible
            className=" w-full mx-auto p-2 px-4 rounded-md shadow-custom xl:max-w-[72rem] 2xl:max-w-[80rem] "
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[14px] text-start xl:text-[20px]  xl:leading-[30px] ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t pt-[16px] xl:text-[20px] text-[#575757] xl:leading-[30px] border-[#E0E0E0]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </motion.div>
  );
};

export default Faqs;
