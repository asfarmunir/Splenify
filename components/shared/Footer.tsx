import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "./Navbar";

const Footer = () => {
  return (
    <footer className=" w-full bg-[#161C2D] py-16 px-4 md:px-[70px] pt-[70px] 2xl:pt-[90px]">
      <div className="flex flex-col md:flex-row gap-8 items-start px-3 md:px-0  md:items-center justify-between pb-16 border-b border-gray-600">
        <div className="flex flex-col items-center md:items-start max-w-md gap-3">
          <h2 className=" text-2xl text-center md:text-start md:text-xl 2xl:text-3xl text-white font-semibold">
            Ready to launch your next project?
          </h2>
          <p className=" text-gray-400 text-center md:text-start my-2 md:my-0 leading-loose md:leading-6 tracking-wide">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <Link
          href={"https://www.cal.com/splenify"}
          className=" bg-[#7165FF] mx-auto md:mx-0 text-white py-5 px-6 rounded-[20px] 2xl:text-lg"
        >
          Get Started with Splenify
        </Link>
      </div>
      <div className="flex items-center flex-col-reverse gap-8 md:flex-row justify-between px-3 md:px-0 pt-9 md:pt-16">
        <div className="flex flex-col items-center md:items-start pt-8 md:pt-0  max-w-xs gap-3">
          <h2 className=" text-3xl md:text-xl 2xl:text-3xl text-white font-semibold">
            Splenify
          </h2>
          <p className=" text-gray-400 my-3 md:my-0 leading-loose text-center md:text-start md:leading-6 tracking-wide text-sm">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <div className="flex gap-6 mt-4 mb-8">
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
          <p className=" text-lg font-thin text-gray-400">
            Copyright © Splenify
          </p>
        </div>
        <ul className=" space-y-4 md:space-y-3 text-center md:text-start">
          <li
            onClick={() => scrollToSection("home")}
            className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer"
          >
            Services
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer"
          >
            Portfolio
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
