"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
const DiscountBar = () => {
  const discountBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (discountBarRef.current) {
      const children = discountBarRef.current?.children;
      gsap.set(children, { opacity: 0 });

      const tl = gsap.timeline({
        delay: 2,
        defaults: { duration: 2, ease: "power4.inOut" },
      });

      tl.fromTo(
        [children],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          ease: "power3.inOut",
          stagger: 0.1,
          delay: 0.5,
          duration: 1,
          opacity: 1,
        },
        "-=1"
      );

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <div
      className="max-h-max overflow-hidden rounded-[10px] bg-gradient-to-br from-[#272727] to-[#11101D] w-max py-[7px] px-[10px] flex items-center gap-[0.813rem]"
      ref={discountBarRef}
    >
      <Image
        src={"/images/discount.svg"}
        className="h-auto w-auto cover"
        width={32}
        height={32}
        alt=""
        id="logo"
        loading="eager"
      />

      <h1 className="paragraphText">
        <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
      </h1>
    </div>
  );
};

export default DiscountBar;
