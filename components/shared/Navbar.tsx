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

  {
    name: "Contact",
    link: "/",
    tab: "contact",
  },
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

  {
    name: "Contact",
    link: "/",
    tab: "contact",
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
      <div className="w-full max-w-6xl  2xl:max-w-7xl rounded-xl drop-shadow-sm  relative z-40 my-4   bg-background items-center flex justify-between shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/60 px-8 md:px-12 py-4 2xl:py-5">
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
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <ToggleTheme />

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
        className={` absolute shadow-sm rounded-xl   top-[6rem] left-1/2  -translate-x-1/2     min-h-[330px] w-[290px]  bg-white/95 dark:bg-slate-950/95 transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[120%]"
        } z-10`}
      >
        <div className="flex flex-col items-center gap-5 py-9">
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
          <div className="flex items-center gap-3">
            <Link
              href={"https://www.cal.com/splenify"}
              className="text-white  text-sm 2xl:text-base bg-[#7165FF] font-semibold rounded-[8px] px-5 2xl:px-6 py-2.5 2xl:py-3 border-[3px] text-center border-[#7165FF]"
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
