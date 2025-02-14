"use client";

import React, { useEffect, useRef } from "react";
import ComponentWrapper from "../../layouts/ComponentWrapper";
import DiscountBar from "./components/DiscountBar";
import GetStartedButton from "./components/GetStartedButton";
import { stats } from "../../constants/data";
import gsap from "gsap";
import Image from "next/image";

const TitleSection = () => {
  const titleSectionRef = useRef<HTMLElement | null>(null);
  const titleContentRef = useRef<HTMLDivElement | null>(null);
  const paragraphTextRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const children = titleSectionRef.current?.children;
  //   if (children) {
  //     gsap.set(children, { opacity: 0 });

  //     const tl = gsap.timeline({
  //       delay: 2,
  //       defaults: { duration: 2, ease: "power4.inOut" },
  //     });
  //     tl.fromTo(
  //       [children],
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         ease: "power3.inOut",
  //         stagger: 0.1,
  //         delay: 0.5,
  //         duration: 1,
  //         opacity: 1,
  //       },
  //       "-=1"
  //     ).fromTo(
  //       paragraphTextRef.current && paragraphTextRef.current,
  //       { y: 100, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
  //       "-=0.6"
  //     );

  //     return () => {
  //       tl.kill();
  //     };
  //   }
  // }, []);

  return (
    <ComponentWrapper>
      <section
        className="relative text-white min-h-screen flex flex-col justify-center"
        id="titleSection"
        ref={titleSectionRef}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[4rem] max-w-[80rem] mx-auto">
          <div className="flex flex-col gap-[2.5rem] min-w-max">
            <div
              className="
            max-h-max 
            flex flex-col gap-[0.75rem] relative"
            >
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

        <div className="w-full flex justify-center absolute bottom-0">
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
          className=" 
     w-screen
        overflow-hidden
        absolute -right-0 h-full flex items-end
        pl-[10rem] "
        >
          <img
            src={"/images/titleHand.png"}
            alt=""
            className="h-full w-full object-cover absolute "
          />
        </div>
      </section>
    </ComponentWrapper>
  );
};

export default TitleSection;
