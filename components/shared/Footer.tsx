"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "./Navbar";

const Footer = () => {
  return (
    <footer className=" w-[90%] mx-auto  max-w-6xl 2xl:max-w-7xl mb-6 ms:mb-8 rounded-[16px] md:mb-16 bg-[#161C2D] py-16 px-4 md:px-[70px] pt-[70px] 2xl:pt-[90px]">
      <div className="flex flex-col  gap-8 items-center px-3 md:px-0   pb-16 border-b border-gray-600">
        <div className="flex flex-col items-center lg:items-start  gap-3">
          <Image
            src="/images/logoWhite.png"
            alt="Splenify"
            width={160}
            className=" mx-auto mb-2"
            height={160}
          />
          <h2 className=" text-3xl mb-4 text-center  md:text-3xl  text-white font-semibold">
            Ready to launch your next project?
          </h2>
          <p className=" text-white xl:text-[16px] max-w-lg text-center  my-2 md:my-0 leading-loose md:leading-6 tracking-wide">
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
      <div className="flex items-center flex-col gap-8 px-3 md:px-0 pt-9 md:pt-12">
        <ul className=" flex items-center justify-center gap-10 text-start">
          <li
            onClick={() => scrollToSection("home")}
            className=" text-sm xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className=" text-sm xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            About Us
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className=" text-sm xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            Project
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className=" text-sm xl:text-[16px] text-[#FFFFFFE0] hover:cursor-pointer"
          >
            Contact Us
          </li>
        </ul>
        <div className="flex  flex-col items-start  pt-8 md:pt-0  max-w-xs gap-3">
          <div className="flex gap-6 mb-8">
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
                src="/icons/insta.svg"
                alt="Splenify"
                width={22}
                height={22}
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
