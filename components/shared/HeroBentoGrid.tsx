import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function BentoGridDemo() {
  return (
    <>
      <div className=" w-full     h-fit hidden md:flex items-start my-8   justify-center gap-24">
        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="hidden md:block"
        >
          <Image
            src="/images/hero_img1.svg"
            alt="hero"
            width={230}
            height={230}
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div> */}
        <div className="flex  flex-col items-start gap-4">
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.65,
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <Image
                src="/bento grid/1.svg"
                alt="hero"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.65,
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <Image
                src="/bento grid/2.svg"
                alt="hero"
                width={150}
                height={100}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.25,
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <Image
                src="/bento grid/3.svg"
                alt="hero"
                width={380}
                height={330}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.45,
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <Image
                src="/bento grid/4.svg"
                alt="hero"
                width={280}
                height={330}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.35,
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <Image
                src="/bento grid/5.svg"
                alt="hero"
                width={150}
                height={330}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
          </div>

          <div className="flex gap-4 ml-20 -mt-16 ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/bento grid/6.svg"
                alt="hero"
                width={140}
                height={200}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>

            <div className="flex flex-col justify-between  gap-1 ">
              <div className="flex w-full -mt-8 items-start justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 150, rotate: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    transition: {
                      duration: 1.1,
                      delay: 0.2,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  className=" z-40"
                >
                  <Image
                    src="/bento grid/star1.svg"
                    alt="hero"
                    width={130}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>

                <Image
                  src="/bento grid/star2.svg"
                  alt="hero"
                  width={120}
                  height={400}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>

              <div className="flex gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 1,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {" "}
                  <Image
                    src="/bento grid/7.svg"
                    alt="hero"
                    width={450}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
                {/* <motion.div
                  initial={{ rotate: 50 }}
                  whileInView={{
                    rotate: 0,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {" "}
                  <Image
                    src="/images/star2.svg"
                    alt="hero"
                    width={120}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div> */}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src="/bento grid/10.svg"
                alt="hero"
                width={150}
                height={200}
                objectFit="cover"
                className=" -mt-4"
                objectPosition="center"
              />
            </motion.div>

            <div className="flex flex-col justify-between -mt-4  gap-1 ">
              <Image
                src="/bento grid/toggle.svg"
                alt="hero"
                width={90}
                height={400}
                objectFit="cover"
                objectPosition="center"
              />

              <div className="flex gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 1,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {" "}
                  <Image
                    src="/bento grid/8.svg"
                    alt="hero"
                    width={370}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
                {/* <motion.div
                  initial={{ rotate: 50 }}
                  whileInView={{
                    rotate: 0,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {" "}
                  <Image
                    src="/images/star2.svg"
                    alt="hero"
                    width={120}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div> */}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-14  gap-4 ">
              <Image
                src="/bento grid/9.svg"
                alt="hero"
                width={130}
                height={400}
                objectFit="cover"
                objectPosition="center"
              />

              <motion.div
                initial={{ opacity: 0, y: 100, rotate: 60 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: {
                    delay: 0.1,
                    duration: 1,
                    ease: "easeOut",
                  },
                }}
                viewport={{
                  once: true,

                  amount: 0.01,
                }}
              >
                {" "}
                <Image
                  src="/bento grid/star1.svg"
                  alt="hero"
                  width={80}
                  height={400}
                  objectFit="cover"
                  objectPosition="center"
                />
              </motion.div>
            </div>
          </div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="hidden md:flex flex-col gap-1 -ml-72"
        >
          <Image
            src="/images/volume1.svg"
            alt="hero"
            width={260}
            height={260}
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/volume2.svg"
            alt="hero"
            width={260}
            height={260}
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/volume3.svg"
            alt="hero"
            width={260}
            height={260}
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/images/hero_img8.svg"
            alt="hero"
            width={310}
            height={100}
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
              delay: 0.2,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <Image
            src="/images/hero_img7.svg"
            alt="hero"
            width={250}
            height={200}
            objectFit="cover"
            className=" mt-12"
            objectPosition="center"
          />
        </motion.div> */}
      </div>
      <Image
        src="/bento grid/group.svg"
        alt="hero"
        width={200}
        height={200}
        objectFit="cover"
        priority
        objectPosition="center"
        className="md:hidden w-full px-4"
      />
    </>
  );
}
