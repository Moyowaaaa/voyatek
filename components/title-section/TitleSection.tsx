"use client";

import React, { useEffect, useRef } from "react";
import ComponentWrapper from "../../layouts/ComponentWrapper";
import DiscountBar from "./components/DiscountBar";
import GetStartedButton from "./components/GetStartedButton";
import { stats } from "../../constants/data";
import gsap from "gsap";
import Image from "next/image";

import transparent from "../../public/images/transparentCard.png";
import card from "../../public/images/card.png";
import opaque from "../../public/images/opaqueCard.png";

const TitleSection = () => {
  const titleSectionRef = useRef<HTMLElement | null>(null);
  const titleContentRef = useRef<HTMLDivElement | null>(null);
  const paragraphTextRef = useRef<HTMLDivElement | null>(null);
  const titleImageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const children = titleSectionRef.current?.children;
    if (children) {
      gsap.set([children[0], children[1]], { opacity: 0 });

      const tl = gsap.timeline({
        delay: 2,
        defaults: { duration: 2, ease: "power4.inOut" },
      });
      tl.fromTo(
        [children[0], children[1]],
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
      ).fromTo(
        paragraphTextRef.current && paragraphTextRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      if (titleImageContainerRef.current) {
        tl.fromTo(
          titleImageContainerRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.6"
        );
      }

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <ComponentWrapper>
      <section
        className="relative text-white min-h-screen  flex flex-col justify-center"
        id="titleSection"
        ref={titleSectionRef}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[4rem] max-w-[80rem] mx-auto">
          <div className="flex flex-col gap-[2.5rem] min-w-max z-10">
            <div className=" max-h-max  flex flex-col gap-[0.75rem] relative">
              <DiscountBar />
              <div className="max-h-max overflow-hidden " ref={titleContentRef}>
                <h1 className=" largeTitleText min-w-[45rem] max-w-[45rem]">
                  The Next <span className="gradientText">Generation</span>{" "}
                  Payment Method.
                </h1>
              </div>

              <GetStartedButton />
            </div>
            <div className="min-h-max w-full ">
              <p className="paragraphText max-w-[30rem]" ref={paragraphTextRef}>
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs.
                <br /> We examine annual percentage rates, annual fees.
              </p>
            </div>
          </div>
          <div></div>
        </div>

        <div className="w-full flex justify-center absolute bottom-10">
          <div className="w-full max-w-[80rem] flex justify-between">
            {stats?.map((stat, index) => (
              <div
                className="flex items-center w-[25rem] justify-between"
                key={index}
              >
                <div className="flex items-center gap-[1.563rem] self-end">
                  <h1 className="text-[40px] font-[600]">{stat.count}</h1>
                  <p className="gradientText text-[1.25rem] min-w-max">
                    {stat.title.toUpperCase()}
                  </p>
                </div>
                {stat.hasBorder && (
                  <div className="h-[13px] self-center border border-[rgba(255, 255, 255, 0.60)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="  w-full overflow-hidden absolute -right-0 h-full flex items-end pl-[10rem] "
          id="titleImageContainer"
          ref={titleImageContainerRef}
        >
          <div className="absolute !top-[10vh] !left-[55%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="101"
              viewBox="0 0 101 101"
              fill="none"
            >
              <path
                d="M47.2192 100.884C19.3322 99.0093 -1.75885 74.8718 0.115905 47.2192C2.22501 19.3322 26.1282 -1.75885 54.0152 0.115905C81.6678 2.22501 102.759 26.1282 100.884 54.0152C99.0093 81.6678 74.8718 102.759 47.2192 100.884Z"
                fill="url(#paint0_radial_38_950)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_38_950"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(71.8682 36.0489) rotate(93.8705) scale(64.9684)"
                >
                  <stop offset="0.00887753" stopColor="#DEF9FA" />
                  <stop offset="0.1723" stopColor="#BEF3F5" />
                  <stop offset="0.4204" stopColor="#9DEDF0" />
                  <stop offset="0.5512" stopColor="#7DE7EB" />
                  <stop offset="0.7154" stopColor="#5CE1E6" />
                  <stop offset="1" stopColor="#33BBCF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute !top-[55vh] !left-[58%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 101 101"
              fill="none"
            >
              <path
                d="M47.2192 100.884C19.3322 99.0093 -1.75885 74.8718 0.115905 47.2192C2.22501 19.3322 26.1282 -1.75885 54.0152 0.115905C81.6678 2.22501 102.759 26.1282 100.884 54.0152C99.0093 81.6678 74.8718 102.759 47.2192 100.884Z"
                fill="url(#paint0_radial_38_950)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_38_950"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(71.8682 36.0489) rotate(93.8705) scale(64.9684)"
                >
                  <stop offset="0.00887753" stopColor="#DEF9FA" />
                  <stop offset="0.1723" stopColor="#BEF3F5" />
                  <stop offset="0.4204" stopColor="#9DEDF0" />
                  <stop offset="0.5512" stopColor="#7DE7EB" />
                  <stop offset="0.7154" stopColor="#5CE1E6" />
                  <stop offset="1" stopColor="#33BBCF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute !top-[50vh] !left-[85%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              viewBox="0 0 101 101"
              fill="none"
            >
              <path
                d="M47.2192 100.884C19.3322 99.0093 -1.75885 74.8718 0.115905 47.2192C2.22501 19.3322 26.1282 -1.75885 54.0152 0.115905C81.6678 2.22501 102.759 26.1282 100.884 54.0152C99.0093 81.6678 74.8718 102.759 47.2192 100.884Z"
                fill="url(#paint0_radial_38_950)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_38_950"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(71.8682 36.0489) rotate(93.8705) scale(64.9684)"
                >
                  <stop offset="0.00887753" stopColor="#DEF9FA" />
                  <stop offset="0.1723" stopColor="#BEF3F5" />
                  <stop offset="0.4204" stopColor="#9DEDF0" />
                  <stop offset="0.5512" stopColor="#7DE7EB" />
                  <stop offset="0.7154" stopColor="#5CE1E6" />
                  <stop offset="1" stopColor="#33BBCF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <Image
            src={card}
            alt=""
            fill
            className="rotate-[20deg] !w-[450px] !h-[400px] object-contain absolute !top-[5vh] !left-[60%] "
          />

          <Image
            src={opaque}
            alt=""
            fill
            className="rotate-[20deg] !w-[450px] !h-[400px] object-contain absolute !top-[15vh] !left-[60%] "
          />
          <Image
            src={transparent}
            alt=""
            fill
            className="rotate-[20deg] !w-[290px] !h-[200px] object-contain absolute !top-[35vh] !left-[65%] "
          />
        </div>
      </section>
    </ComponentWrapper>
  );
};

export default TitleSection;
