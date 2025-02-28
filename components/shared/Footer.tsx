"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "./Navbar";
import logo from "../../public/icons/Logo.svg";

const Footer = () => {
  return (
    <footer className=" mx-[18px] sm:mx-auto sm:max-w-2xl  lg:max-w-5xl xl:max-w-6xl mb-6 ms:mb-8 rounded-[21px] md:mb-16 bg-[#161C2D] py-[42px] xl:py-[52px]  px-2.5 md:px-[70px] ">
      <div className="flex flex-col  gap-8 items-center px-3 md:px-0  w-fit mx-auto  pb-10  border-b border-[#272B39]">
        <div className="flex flex-col items-center lg:items-start  gap-3">
          <Image
            src={logo}
            alt="Splenify"
            width={160}
            className=" mx-auto mb-3"
            height={160}
          />
          <h2 className=" text-[28px] xl:text-[32px] sm:text-3xl mb-4 text-center  md:text-3xl  text-white font-semibold">
            Ready to launch your next project?
          </h2>
          <p className=" text-white text-[16px] max-w-lg text-center  my-2 md:my-0 leading-loose md:leading-6 tracking-wide">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <Link
          href={"https://www.cal.com/splenify"}
          className=" bg-[#7165FF] mx-auto sm:mx-0 w-full text-center sm:w-fit rounded-[10px] text-white py-5 px-6 2xl:px-12  2xl:text-lg"
        >
          Get Started with Splenify
        </Link>
      </div>
      <div className="flex items-center flex-col gap-8 px-3 md:px-0 pt-9 md:pt-10">
        <ul className=" flex items-center justify-center gap-5 sm:gap-10 text-start">
          <li
            onClick={() => scrollToSection("home")}
            className=" text-xs text-center text-nowrap xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className=" text-xs text-center text-nowrap xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            About Us
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className=" text-xs text-center text-nowrap xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            Project
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className=" text-xs text-center text-nowrap xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            Contact Us
          </li>
        </ul>
        <div className="flex  flex-col items-start  sm:pt-8 md:pt-0  max-w-xs gap-3">
          <div className="flex gap-6 ">
            <Link
              href={"https://www.facebook.com/profile.php?id=61557079645268"}
            >
              <Image
                src="/icons/fb.svg"
                alt="Splenify"
                width={22}
                height={22}
              />
            </Link>
            <Link href={"https://www.instagram.com/splenify/"}>
              <Image
                src="/icons/insta3.svg"
                alt="Splenify"
                width={28}
                height={25}
              />
            </Link>
            <Link href={"https://www.linkedin.com/company/splenify"}>
              <Image
                src="/icons/linkedin.svg"
                alt="Splenify"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
