"use client";

import React, { useEffect } from "react";
import ComponentWrapper from "../layouts/ComponentWrapper";
import Image from "next/image";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const features = [
    {
      name: "Rewards",
      desc: "The best credit cards offer some tantalizing combinations of promotions and prizes",
      icon: "/images/rewards.svg",
    },
    {
      name: "100% Secured",
      desc: "We take proactive steps make sure your information and transactions are secure.",
      icon: "/images/secure.svg",
    },
    {
      name: "Balance Transfer",
      desc: "A balance transfer credit card can save you a lot of money in interest charges.",
      icon: "/images/transfer.svg",
    },
  ];

  useEffect(() => {
    const heroCards = Array.from(document.querySelectorAll("#heroCard"));
    const titleHeads = Array.from(document.querySelectorAll("#titleText"));
    const titleHeaderText = new SplitType("#titleText", { types: "lines" });
    const descParagraphText = new SplitType("#paragraphText", {
      types: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pageContents",
        start: "top 70%",
        end: "+=60%",
        scrub: 2,
      },
    });

    descParagraphText.lines?.forEach((line, index) => {
      gsap.from(line, {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.15,
        delay: 0.15 + index * 0.02,
        scrollTrigger: {
          trigger: line,
          start: "100% +=100%",
          end: "+=10%",
          scrub: 2,
        },
      });
    });

    titleHeads.forEach((title) => {
      gsap.from(title.children, {
        yPercent: 200,
        ease: "power3.inOut",
        duration: 1.8,
        opacity: 0,
        scrollTrigger: {
          trigger: title,
          scrub: 2,
          start: "top bottom+=20%",
          end: "center top+=20%",
        },
      });
    });

    const heroCardTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 2,
      },
    });

    heroCards.forEach((card) => {
      heroCardTl.to(card, {
        background:
          "linear-gradient(153deg, rgba(255, 255, 255, 0.00) -341.94%, #14101D 95.11%)",
        boxShadow: "0px 10px 5px -10px rgba(66, 71, 91, 0.10)",
        duration: 1,
        ease: "power3.inOut",
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      titleHeaderText.revert();
    };
  }, []);

  return (
    <ComponentWrapper>
      <div
        className="relative text-white flex flex-col justify-center gap-[10rem] min-h-screen "
        id="hero-section"
      >
        <div
          className="flex items-center justify-between w-full max-w-[80rem] mx-auto"
          id="pageContents"
        >
          <div className="flex flex-col gap-[3rem] w-7/12">
            <div className="flex flex-col gap-[1.5rem]">
              <div className="max-h-max overflow-hidden">
                <h1 className="titleText" id="titleText">
                  You do the business,
                  <br /> we’ll handle the money.
                </h1>
              </div>
              <div className="overflow-hidden max-w-max">
                <p className="paragraphText max-w-[35rem]" id="paragraphText">
                  With the right credit card, you can improve your financial
                  life by building credit, earning rewards and saving money.
                </p>
              </div>
            </div>
            <button>Get Started</button>
          </div>

          <div className="w-max self-end flex flex-col gap-[2.5rem]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-[1.25rem] rounded-[20px]  p-[1.25rem] w-[32rem]"
                id="heroCard"
              >
                <div className="relative min-h-[64px] min-w-[64px] rounded-full">
                  <Image src={feature.icon} fill alt="" loading="eager" />
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                  <p className="paragraphText !text-white">{feature.name}</p>
                  <p className="paragraphText text-base max-w-[22rem]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default HeroSection;
