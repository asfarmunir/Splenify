import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import ProjectModal from "./ProjectModal";
import Modal from "./Modal";
const recoleta = localFont({ src: "../../app/recoleta.ttf" });
const Projects = () => {
  return (
    <>
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
        id="projects"
        className="hidden md:flex flex-col w-full relative  items-center gap-3 2xl:gap-5   my-[20px] md:my-[30px]"
      >
        <Image
          src="/images/left-arrow.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" absolute hidden md:block   top-1 rotate-1 right-0 
          w-[34 0px] 2xl:w-[420px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className=" absolute left-0 hidden md:block -top-7 2xl:-top-10 rotate-1  
          w-[340px] 2xl:w-[410px] dark:invert
          "
        />
        <h2 className=" text-base   2xl:xl tracking-wide ">Catch the latest</h2>
        <h1
          className={` text-3xl relative capitalize md:text-4xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          Browse our most recent projects{" "}
        </h1>
        <div
          style={styles.gridContainer}
          className=" w-full max-w-5xl mt-8 justify-items-start  2xl:max-w-7xl gap-12 2xl:gap-16 "
        >
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item1 }}
            className="flex flex-col -mt-11 2xl:-mt-8 "
          >
            <Image
              src="/images/p1.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4 justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Mobile Application</p>
                <h2 className="text-xl font-bold ">Aura IOS | Android</h2>
              </div>
              <Modal />
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item2 }}
            className=" flex flex-col "
          >
            <Image
              src="/images/p2.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-6 justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Video Animation</p>
                <h2 className="text-xl font-bold ">AB.S Snack Animation</h2>
              </div>
              {/* <ProjectModal
                title="AB.S Snack Animation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                projectData=""
              /> */}
              <Modal />
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item3 }}
            className="flex flex-col -mt-1"
          >
            <Image
              src="/images/p3.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Web Development</p>
                <h2 className="text-xl font-bold ">
                  Gradient Website <br /> Development
                </h2>
              </div>
              {/* <ProjectModal
                title="AB.S Snack Animation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                projectData=""
              /> */}
              <Modal />
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            style={{ ...styles.gridItem, ...styles.item4 }}
            className=" flex flex-col"
          >
            <Image
              src="/images/p4.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-6  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">
                  Full Stack Web Development
                </p>
                <h2 className="text-xl font-bold ">Dashboard Teamify</h2>
              </div>
              {/* <ProjectModal
                title="AB.S Snack Animation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                projectData=""
              /> */}
              <Modal />
            </div>
          </motion.div>
        </div>
      </motion.div>
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
        id="projects"
        className="flex flex-col md:hidden w-full relative  items-center  px-6 gap-4 2xl:gap-5   my-[20px] md:my-[30px]"
      >
        <h2 className=" text-base   2xl:xl tracking-wide ">
          and we go beyond just visuals…
        </h2>
        <h1
          className={` text-3xl relative md:text-4xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          See our latest projects
        </h1>
        <div className=" w-full max-w-5xl 2xl:max-w-7xl space-y-8  2xl:gap-16 ">
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className="flex flex-col "
          >
            <Image
              src="/images/p1.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4 justify-between">
              <div className="flex flex-col">
                <p className=" text-sm font-thin md:text-base">
                  Mobile Application{" "}
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  Aura IOS | Android{" "}
                </h2>
              </div>
              {/* <ProjectModal
                title="AB.S Snack Animation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                projectData=""
              /> */}
              <Modal />
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className=" flex flex-col "
          >
            <Image
              src="/images/p2.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4 justify-between">
              <div className="flex flex-col">
                <p className=" text-sm font-thin md:text-base">
                  Video Animation
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  AB.S Snack Animation
                </h2>
              </div>
              {/* <ProjectModal
                title="AB.S Snack Animation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                projectData=""
              /> */}
              <Modal />
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className="flex flex-col"
          >
            <Image
              src="/images/p3.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-sm md:text-base">
                  Web Development
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  Gradient Website <br /> Development
                </h2>
              </div>

              {/* <ProjectModal
                title="AB.S Snack Animation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                projectData=""
              /> */}
              <Modal />
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            viewport={{ amount: 0.15, once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className=" flex flex-col"
          >
            <Image
              src="/images/p4.svg"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-sm md:text-base">
                  Full Stack Web Development
                </p>
                <h2 className="text-base md:text-xl font-bold ">
                  Dashboard Teamify
                </h2>
              </div>
              {/* <ProjectModal
                title="AB.S Snack Animation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                projectData=""
              /> */}
              <Modal />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateRows: "repeat(5, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "10px",
    // rowGap: "40px",
    // columnGap: "70px",
  },
  gridItem: {
    display: "flex",
    // backgroundColor: "#F3F3F9",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "20px",
    fontWeight: "bold",
  },
  item1: {
    gridRow: "1 / span 3",
    gridColumn: "1 / span 2",
  },
  item2: {
    gridRow: "1 / span 2",
    gridColumn: "3 / span 2",
  },
  item3: {
    gridRow: "4 / span 2",
    gridColumn: "1 / span 2",
  },
  item4: {
    gridRow: "3 / span 3",
    gridColumn: "3 / span 2",
  },
};
