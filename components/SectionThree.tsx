import React, { SetStateAction, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import gsap from "gsap";
import ScrollTrigger from "gsap";
gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const onScreen = useIntersectionObserver(pageRef, 0.1);

  useEffect(() => {
    const tl = gsap.timeline();
    if (onScreen) {
      tl.to(headerRef.current, {
        textDecoration: "line-through",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.8,
      }).from(
        textRef.current,
        {
          opacity: 0,
          ease: "power3.inOut",
          delay: 0.1,
          duration: 1,
        },
        "<0.5"
      );
    }
  }, [onScreen]);

  useEffect(() => {
    const sectionTwoTl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top center",
        end: "top +=10",
        scrub: 0.7,
      },
    });
    sectionTwoTl.to(pageRef.current, {
      backgroundColor: "black",
      duration: 1.2,
      color: "white",
      ease: "power4.inOut",
    });
  });

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-[red] text-white"
      ref={pageRef}
      id="sectionTwo"
    >
      <div>
        <h1 className="self-start" ref={headerRef}>
          Intersection Observer Test
        </h1>

        <p className="text-4xl" ref={textRef}>
          I'm in your view boiiii
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
