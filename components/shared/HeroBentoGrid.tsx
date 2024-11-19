import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import img1 from "@/public/images/test.png";
import img2 from "@/public/bento grid/2.png";
import img3 from "@/public/bento grid/3.png";
import img4 from "@/public/bento grid/4.png";
import img5 from "@/public/bento grid/5.png";
import img6 from "@/public/bento grid/6.png";
import img7 from "@/public/bento grid/7.png";
import img8 from "@/public/bento grid/8.png";
import img9 from "@/public/bento grid/9.png";
import img10 from "@/public/bento grid/10.png";
import img11 from "@/public/bento grid/11.png";
import star1 from "@/public/bento grid/star1.png";
import star2 from "@/public/bento grid/star2.png";
export default function BentoGridDemo() {
  return (
    <>
      <div className=" w-full     h-fit hidden md:flex items-start my-8   justify-center gap-24">
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
              }}
            >
              <Image
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img1}
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img2}
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img3}
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img4}
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img5}
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img6}
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
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src={star1}
                    alt="hero"
                    width={130}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 100, rotate: 30 }}
                  whileInView={{
                    opacity: 1,
                    rotate: 0,
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
                  <Image
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src={star2}
                    alt="hero"
                    width={120}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
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
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src={img7}
                    alt="hero"
                    width={450}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img10}
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
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
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src={img8}
                    alt="hero"
                    width={370}
                    height={400}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-14  gap-4 ">
              <Image
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img9}
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
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                  src={star1}
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
      </div>
      {/* <Image
        
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        unoptimized
        src="/bento grid/group.svg"
        alt="hero"
        width={200}
        height={200}
        objectFit="cover"
        objectPosition="center"
        className="md:hidden w-full px-4"
      /> */}
      <div className=" w-full     h-fit flex md:hidden  items-start my-8   justify-center ">
        <div className="flex  w-full flex-col items-start gap-4">
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
              }}
            >
              <Image
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img1}
                alt="hero"
                width={490}
                height={400}
                className=" -ml-4 -mt-3"
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
              }}
            >
              <Image
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img2}
                alt="hero"
                width={230}
                className=" -mt-1 -ml-2"
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
              }}
            >
              <Image
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img3}
                alt="hero"
                width={450}
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
              }}
            >
              <Image
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img4}
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
              }}
            >
              <Image
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img5}
                alt="hero"
                width={150}
                height={330}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
          </div>

          <div className="flex gap-4 ml-4 -mt-4 ">
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img6}
                alt="hero"
                width={120}
                height={40}
                className=" -ml-6 -mt-8 "
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>

            <div className="flex flex-col justify-start gap-8   ">
              <div className="flex w-full -mt-2 items-start justify-between">
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
                  }}
                  className=" z-40"
                >
                  <Image
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src={star1}
                    alt="hero"
                    width={50}
                    height={40}
                    className=" -ml-1"
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
                      delay: 0.1,
                      duration: 1,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <Image
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src={star2}
                    alt="hero"
                    width={50}
                    height={50}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
              </div>

              <div className="flex -mt-8">
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
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src="/bento grid/11.svg"
                    alt="hero"
                    width={190}
                    height={150}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
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
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                src={img10}
                alt="hero"
                width={50}
                height={50}
                objectFit="cover"
                className=" -mt-4"
                objectPosition="center"
              />
            </motion.div>

            <div className="flex flex-col justify-between -mt-2  gap-1 ">
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
                <Image
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                  src="/bento grid/toggle.svg"
                  alt="hero"
                  width={30}
                  height={40}
                  objectFit="cover"
                  objectPosition="center"
                />
              </motion.div>

              <div className="flex gap-12 -mr-4">
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
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    src={img8}
                    alt="hero"
                    width={200}
                    height={200}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
