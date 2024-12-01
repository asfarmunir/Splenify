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

  const [start, setStart] = useState(false);
  const [isFast, setIsFast] = useState(true); // State to track temporary speed boost

  useEffect(() => {
    addAnimation();
  }, []);

  useEffect(() => {
    if (isFast) {
      // Revert speed back to normal after 1.5 seconds
      const timeout = setTimeout(() => {
        setIsFast(false);
      }, 200);
      return () => clearTimeout(timeout); // Cleanup on unmount
    }
  }, [isFast]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

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
      let duration;
      if (isFast) {
        duration = "0.4s"; // Speed increased by 100x
      } else if (speed === "fast") {
        duration = "40s";
      } else if (speed === "normal") {
        duration = "60s";
      } else {
        duration = "80s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  useEffect(() => {
    getSpeed();
  }, [isFast, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 gap-4 py-4 w-max flex-nowrap",
          "animate-scroll",
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
