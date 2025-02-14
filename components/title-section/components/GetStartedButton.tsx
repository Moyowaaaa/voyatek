"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ArrowUp } from "react-iconly";

const GetStartedButton = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.set(buttonRef.current, {
        yPercent: 200,
        opacity: 0,
      });
      gsap.to(buttonRef.current, {
        yPercent: 0,
        duration: 1,
        delay: 2,
        ease: "power3.inOut",
        opacity: 1,
      });
    }
  }, []);

  return (
    <>
      <div
        className="absolute top-20 right-24 h-[8.75rem] max-h-[8.75rem] w-[8.75rem] max-w-[8.75rem] border-2 border-[#5CE1E6] hover:border-[white] hover:!text-[#5CE1E6] cursor-pointer rounded-full
      flex items-center justify-center
      
      "
        ref={buttonRef}
      >
        <p className="paragraphText font-[500] gradientText mx-auto self-center max-w-[5rem]">
          Get Started
        </p>

        <div className="absolute top-10 right-10 rotate-[50deg]">
          <ArrowUp />
        </div>
      </div>
    </>
  );
};

export default GetStartedButton;
