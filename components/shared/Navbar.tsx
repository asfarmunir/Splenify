"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "@/components/shared/ToggleTheme";
import { RiMenu3Line } from "react-icons/ri";
import { FiX } from "react-icons/fi"; // Import Cross Icon
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const navlinks = [
  {
    name: "Home",
    link: "/",
    tab: "home",
  },
  {
    name: "Projects",
    link: "/",
    tab: "projects",
  },

  // {
  //   name: "Contact",
  //   link: "/",
  //   tab: "contact",
  // },
];

const mobLinks = [
  {
    name: "Home",
    link: "/",
    tab: "home",
  },
  {
    name: "Projects",
    link: "/",
    tab: "mobile-projects",
  },

  // {
  //   name: "Contact",
  //   link: "/",
  //   tab: "contact",
  // },
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
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState(
    pathname === "/" ? "home" : ""
  );
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu state
  };

  return (
    <>
      <div className="w-full mx-[18px] lg:mx-0 sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl rounded-[8px] drop-shadow-sm relative z-40 my-4 bg-[#F8F4FE] bg-opacity-55 backdrop-blur-lg items-center flex justify-between  dark:shadow-gray-900/60 px-4 sm:px-8 md:pl-12 md:pr-8 py-3 ">
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
              onClick={() => {
                if (pathname === "/") {
                  scrollToSection(item.tab);
                } else {
                  router.push(item.link);
                  scrollToSection(item.tab);
                }
                setCurrentSection(item.tab);
              }}
              key={index}
              className="text-sm 2xl:text-lg flex flex-col"
            >
              <p
                className={`${
                  item.tab === currentSection
                    ? "text-black font-semibold "
                    : "text-black dark:text-slate-300"
                }`}
              >
                {item.name}
              </p>
              {item.tab === currentSection && (
                <span className="w-[45%] border-2 rounded-md border-[#7165FF]"></span>
              )}
            </button>
          ))}
          <button
            onClick={() => {
              router.push("/about");
              setCurrentSection("");
            }}
            className="text-sm 2xl:text-lg flex flex-col"
          >
            <p
              className={`${
                pathname === "/about"
                  ? "text-black font-semibold "
                  : "text-black dark:text-slate-300"
              }`}
            >
              About
            </p>
            {pathname === "/about" && (
              <span className="w-[45%] border-2 rounded-md border-[#7165FF]"></span>
            )}
          </button>
          <button
            onClick={() => {
              router.push("/contact");
              setCurrentSection("");
            }}
            className="text-sm 2xl:text-lg flex flex-col"
          >
            <p
              className={`${
                pathname === "/contact"
                  ? "text-black font-semibold "
                  : "text-black dark:text-slate-300"
              }`}
            >
              Contact
            </p>
            {pathname === "/contact" && (
              <span className="w-[45%] border-2 rounded-md border-[#7165FF]"></span>
            )}
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          {/* <ToggleTheme /> */}

          <Link
            href={"https://www.cal.com/splenify"}
            className="text-white  text-sm 2xl:text-base bg-[#7165FF] font-semibold rounded-[8px] px-5 2xl:px-6 py-2.5 2xl:py-3 border-[3px] text-center border-[#7165FF]"
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
        className={`absolute shadow-sm rounded-[14px] drop-shadow-md top-[7rem] left-1/2 -translate-x-1/2 w-[350px] bg-white/95 dark:bg-slate-950/95 transition-all duration-500 ease-out transform ${
          isMenuOpen
            ? "max-h-[450px] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-16 opacity-100"
        } z-10 overflow-hidden`}
      >
        <div className="flex flex-col items-start gap-4 w-full  px-6 py-9">
          {mobLinks.map((item, index) => (
            <button
              onClick={() => {
                if (pathname === "/") {
                  scrollToSection(item.tab);
                } else {
                  router.push(item.link);
                  scrollToSection(item.tab);
                }
                setCurrentSection(item.tab);
                toggleMenu();
              }}
              key={index}
              className="text-sm 2xl:text-lg flex flex-col"
            >
              <p
                className={`${
                  item.tab === currentSection
                    ? "text-black font-semibold "
                    : "text-[#878787] dark:text-slate-300"
                }`}
              >
                {item.name}
              </p>
              {item.tab === currentSection && (
                <span className="w-[45%] border-2 rounded-md border-[#7165FF]"></span>
              )}
            </button>
          ))}
          <button
            onClick={() => {
              router.push("/about");
              setCurrentSection("");
              toggleMenu();
            }}
            className="text-sm 2xl:text-lg flex flex-col"
          >
            <p
              className={`${
                pathname === "/about"
                  ? "text-black font-semibold "
                  : "text-[#878787] dark:text-slate-300"
              }`}
            >
              About
            </p>
            {pathname === "/about" && (
              <span className="w-[45%] border-2 rounded-md border-[#7165FF]"></span>
            )}
          </button>
          <button
            onClick={() => {
              router.push("/contact");
              setCurrentSection("");
            }}
            className="text-sm 2xl:text-lg flex flex-col"
          >
            <p
              className={`${
                pathname === "/contact"
                  ? "text-black font-semibold "
                  : "text-black dark:text-slate-300"
              }`}
            >
              Contact
            </p>
            {pathname === "/contact" && (
              <span className="w-[45%] border-2 rounded-md border-[#7165FF]"></span>
            )}
          </button>
          <div className="flex items-center gap-3 w-full">
            <Link
              href={"https://www.cal.com/splenify"}
              className="text-white w-full  text-sm 2xl:text-base bg-[#7165FF] font-semibold rounded-[8px] px-5 2xl:px-6 py-3 2xl:py-3.5 border-[3px] text-center border-[#7165FF]"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
