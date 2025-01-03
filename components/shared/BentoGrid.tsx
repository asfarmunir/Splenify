import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "@/public/newBento/1.webp";
import img2 from "@/public/newBento/2.webp";
import img3 from "@/public/newBento/3.webp";
import img4 from "@/public/newBento/4.webp";
import img5 from "@/public/newBento/5.webp";
import img6 from "@/public/newBento/6.webp";

const BentoGrid = () => {
  return (
    <div className=" w-full bg-red-700 my-8 flex justify-center items-center  md:gap-6">
      <div className="flex flex-col gap-4">
        <Image
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
          src={img1}
          alt="hero"
          width={450}
          height={450}
          objectFit="cover"
          className=" shadow-sm
          min-w-[350px] -ml-56 
          "
          objectPosition="center"
        />
        <Image
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
          src={img2}
          alt="hero"
          width={450}
          height={450}
          objectFit="cover"
          className=" shadow-sm
            min-w-[250px]
            -ml-12
            "
          objectPosition="center"
        />
      </div>
      <Image
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        unoptimized
        src={img3}
        alt="hero"
        width={280}
        height={280}
        objectFit="cover"
        className=" shadow-sm  w-[150px] sm:w-[190px] md:w-[250px] lg:w-[280px] xl:w-[300px]       "
        objectPosition="center"
      />
      <div className="flex flex-col gap-4">
        <Image
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
          src={img4}
          alt="hero"
          width={500}
          height={500}
          objectFit="cover"
          className=" shadow-sm"
          objectPosition="center"
        />
        <div className="flex items-center gap-4">
          <Image
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
            src={img5}
            alt="hero"
            width={150}
            height={150}
            objectFit="cover"
            className=" shadow-sm
                w-[90px] sm:w-[120px] md:w-[150px] lg:w-[150px] xl:w-[150px]
            "
            objectPosition="center"
          />
          <Image
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
            src={img6}
            alt="hero"
            width={340}
            height={340}
            objectFit="cover"
            className=" shadow-sm"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
