"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ComponentWrapper from "../layouts/ComponentWrapper";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  useEffect(() => {
    const titles = document.querySelectorAll("#featureTitle");
    const heroTexts = document.querySelectorAll(".about-hero-text"); // Changed to class selector

    titles.forEach((title) => {
      gsap.fromTo(
        title,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    heroTexts.forEach((heroText) => {
      const splitText = new SplitType(heroText as unknown as HTMLElement, {
        types: "words,chars",
        tagName: "span",
      });

      gsap.fromTo(
        splitText.chars,
        {
          opacity: 0.1,
        },
        {
          opacity: 1,
          stagger: 0.01,
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: heroText,
            start: "top 90%",
            end: "top 60%",
            scrub: 4,
          },
        }
      );
    });
  }, []);

  return (
    <ComponentWrapper>
      <div
        className="relative text-white max-h-max flex flex-col justify-center gap-[10rem] py-[11.25rem]"
        id="section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[4rem] max-w-[80rem] mx-auto">
          <div className="w-full min-h-[500px] relative flex flex-col justify-center border-2 border-[red]"></div>

          <div className="flex flex-col gap-[1.5rem] items-end">
            <div className="w-max flex flex-col">
              <div className="min-h-max overflow-hidden">
                <h1 className="titleText text-right pr-4" id="featureTitle">
                  Easily control your
                  <br /> billing & invoicing.
                </h1>
              </div>

              <p className="paragraphText self-end max-w-[28.5rem] about-hero-text">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>

              <div className="w-full flex gap-[2rem] mt-[1.563rem]">
                <Image
                  src={"/images/appStoreIcon.svg"}
                  className="h-auto w-auto cover"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                />
                <Image
                  src={"/images/playstoreIcon.svg"}
                  className="h-auto w-auto cover"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start w-full gap-[4rem] max-w-[80rem] mx-auto">
          <div className="w-full flex flex-col gap-[3rem]">
            <div className="flex flex-col gap-[1.5rem]">
              <div className="min-h-max overflow-hidden">
                <h1 className="titleText max-w-[35rem]" id="featureTitle">
                  Find a better card deal in few easy steps.
                </h1>
              </div>

              <p className="paragraphText max-w-[30rem] about-hero-text">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
              </p>
            </div>
            <button>Get Started</button>
          </div>

          <div className="w-[55rem] relative">
            <div className="h-full relative w-[28rem] h-[28rem]">
              <Image
                src={"/images/multipleEllipse.png"}
                fill
                alt=""
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FeaturesSection;
