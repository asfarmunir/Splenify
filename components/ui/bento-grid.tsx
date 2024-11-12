import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[28rem] grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  header,
  img,
  width,
  height,
}: {
  className?: string;
  header?: React.ReactNode;
  img: string | StaticImport;
  width: number;
  height: number;
}) => {
  return (
    <div
      className={cn(
        " rounded-xl group/bento  transition duration-200  ",
        className
      )}
    >
      <Image
        src={img}
        alt="hero"
        width={width}
        height={height}
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
