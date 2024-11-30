"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  // function addAnimation() {
  //   if (containerRef.current && scrollerRef.current) {
  //     const scrollerContent = Array.from(scrollerRef.current.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       if (scrollerRef.current) {
  //         scrollerRef.current.appendChild(duplicatedItem);
  //       }
  //     });

  //     getDirection();
  //     getSpeed();
  //     setStart(true);
  //   }
  // }
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate the items
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      // Calculate total width and set it explicitly
      const totalWidth = scrollerContent.reduce((acc, item) => {
        const itemWidth = (item as HTMLElement).offsetWidth || 0;
        return acc + itemWidth + 16; // Add the gap (16px)
      }, 0);

      scrollerRef.current.style.width = `${totalWidth * 2}px`; // Account for duplicated items

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full    overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full items-center justify-center shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Image
            key={idx}
            src={item.img}
            alt=""
            width={200}
            height={200}
            className="rounded-lg"
          />
        ))}
      </ul>
    </div>
  );
};
