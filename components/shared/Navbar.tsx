"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "@/components/shared/ToggleTheme";
import { RiMenu3Line } from "react-icons/ri";
import { FiX } from "react-icons/fi"; // Import Cross Icon

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navlinks = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const mobLinks = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Projects",
    link: "mobile-projects",
  },
  {
    name: "About",
    link: "mobileServices",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export const scrollToSection = (section: string, offset = 100) => {
  const el = document.getElementById(section);
  if (el) {
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu state
  };

  return (
    <>
      <div className="w-full relative z-40  bg-background items-center flex justify-between shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/60 px-8 md:px-12 py-4 2xl:py-5">
        <Image
          src="/images/logoWhite.png"
          alt="Splenify"
          width={150}
          height={50}
          priority
          unoptimized
          className="hidden dark:block"
        />
        <Image
          src="/images/logoBlack.png"
          alt="Splenify"
          width={150}
          height={50}
          priority
          unoptimized
          className="dark:hidden"
        />
        <div className="hidden lg:inline-flex items-center gap-10">
          {navlinks.map((item, index) => (
            <button
              onClick={() => scrollToSection(item.link)}
              key={index}
              className="text-sm 2xl:text-lg flex flex-col"
            >
              <p
                className={`${
                  item.link === "#"
                    ? "text-black font-semibold "
                    : "text-[#878787] dark:text-slate-300"
                }`}
              >
                {item.name}
              </p>
              {item.link === "#" && (
                <span className="w-[45%] border-2 rounded-md border-[#00FAFE]"></span>
              )}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <ToggleTheme />

          <Link
            href={"https://www.cal.com/splenify"}
            className="bg-white dark:bg-transparent text-sm 2xl:text-base text-[#7165FF] font-semibold rounded-[20px] px-5 2xl:px-6 py-2.5 2xl:py-3 border-[3px] text-center border-[#7165FF]"
          >
            Schedule a call
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`p-2 text-2xl transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            } relative z-20`}
          >
            {isMenuOpen ? (
              <FiX className="transition-transform duration-500" />
            ) : (
              <RiMenu3Line className="transition-transform duration-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
      </div>
      <div
        className={` absolute shadow-sm rounded-xl   top-[6rem] left-1/2  -translate-x-1/2     min-h-[300px] w-[290px]  bg-white/95 dark:bg-slate-950/95 transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } z-10`}
      >
        <div className="flex flex-col items-center gap-5 py-9">
          {mobLinks.map((item, index) => (
            <button
              onClick={() => {
                scrollToSection(item.link);
                toggleMenu();
              }}
              key={index}
              className=" font-semibold text-gray-800 dark:text-white"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center gap-3">
            <Link
              href={"https://www.cal.com/splenify"}
              className="bg-white dark:bg-transparent text-[#7165FF] text-sm 2xl:text-base font-semibold rounded-[20px] px-5 2xl:px-6 py-2.5 2xl:py-3 border-[3px] text-center border-[#7165FF]"
            >
              Schedule a call
            </Link>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
