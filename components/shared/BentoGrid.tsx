import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "@/public/bento/1.webp";
import img2 from "@/public/bento/2.webp";
import img3 from "@/public/bento/3.webp";
import img4 from "@/public/bento/4.webp";
import img5 from "@/public/bento/5.webp";
import img6 from "@/public/bento/6.webp";

const BentoGrid = () => {
  return (
    <div className=" w-full flex  justify-center items-start  ">
      <div className="flex flex-col -space-y-4 sm:-space-y-6 -ml-32 sm:-ml-16 md:ml-0   ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.8,
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
            width={450}
            height={450}
            objectFit="cover"
            className=" w-full"
            objectPosition="center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
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
            width={450}
            height={450}
            objectFit="cover"
            className=" w-full"
            // className=" shadow-sm
            //   min-w-[250px]
            //   -ml-12
            //   "
            objectPosition="center"
          />
        </motion.div>
      </div>
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
        {" "}
        <Image
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
          src={img3}
          alt="hero"
          width={280}
          height={280}
          className=" w-full min-w-[140px]"
          objectFit="cover"
          // className=" shadow-sm  w-[150px] sm:w-[190px] md:w-[250px] lg:w-[280px] xl:w-[300px]       "
          objectPosition="center"
        />
      </motion.div>
      <div className="flex flex-col  -space-y-4 sm:-space-y-6 -mr-32 sm:-mr-16 md:-mr-0  ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.7,
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
            width={500}
            height={500}
            objectFit="cover"
            className="  w-full"
            objectPosition="center"
          />
        </motion.div>
        <div className="flex items-center ">
          <motion.img
            initial={{ opacity: 0, y: 50, x: 50, rotate: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              rotate: 0,
              transition: {
                delay: 0.1,
                duration: 1,
                ease: "easeOut",
              },
            }}
            viewport={{
              once: true,
            }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={"/bento/5.webp"}
            alt="hero"
            width={100}
            height={100}
            className=" 
                w-[50px] sm:w-[60px] md:w-[80px] lg:w-[80px] xl:w-[110px]
            "
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
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
              src={img6}
              alt="hero"
              width={180}
              height={140}
              objectFit="cover"
              className=" 
            w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px] xl:w-[340px] "
              objectPosition="center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
