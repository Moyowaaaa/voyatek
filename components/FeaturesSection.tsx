"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ComponentWrapper from "../layouts/ComponentWrapper";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import transaction from "../public/images/transactionsImage.png";
import paypal from "../public/images/paypalImage.png";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  useEffect(() => {
    const titles = document.querySelectorAll("#featureTitle");
    const images = document.querySelectorAll("#featureImage");
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

    images.forEach((image) => {
      gsap.fromTo(
        image,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: image,
            start: "top 150%",
            end: "top 50%",
            scrub: 2,
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
          <div className="w-full min-h-[500px] relative flex flex-col justify-center ">
            <div className="max-h-[255px] overflow-hidden">
              <Image
                src={transaction}
                alt=""
                className="h-[250px] w-[300px]"
                id="featureImage"
              />
            </div>
            <div className="max-h-[255px] overflow-hidden">
              <Image
                src={paypal}
                alt=""
                className="h-[217px] w-[227px] absolute top-0 left-[15rem]"
                id="featureImage"
              />
            </div>

            <div
              className=" absolute bottom-20 left-60 rounded-[10px] bg-white w-max p-[1rem]  flex items-center gap-[7px]"
              id="featureImage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_2009_135)">
                  <path
                    d="M12 0C5.36761 0 0 5.36705 0 12C0 18.6324 5.36705 24 12 24C18.6324 24 24 18.633 24 12C24 5.36761 18.633 0 12 0ZM18.3522 8.7218L10.6645 16.4095C10.3522 16.7218 9.84548 16.7219 9.53311 16.4095L5.64778 12.5242C5.33536 12.2118 5.33536 11.7052 5.64778 11.3928C5.96016 11.0804 6.46673 11.0804 6.77916 11.3928L10.0988 14.7125L17.2209 7.59037C17.5333 7.27795 18.0399 7.27795 18.3523 7.59037C18.6646 7.90289 18.6646 8.40938 18.3522 8.7218Z"
                    fill="#00AE1C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2009_135">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className=" text-[14px] text-black">
                Great! Your Payment is succesfully.
              </p>
            </div>
          </div>

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

          <div className="w-[58rem] relative  ">
            <div className="h-full relative w-[28rem] h-[28rem]">
              <Image
                src={"/images/multipleEllipse.png"}
                fill
                alt=""
                loading="eager"
              />
            </div>

            <div className="w-full absolute top-20 -left-16 ">
              <div className="relative h-[158px] w-[191px] max-h-[160px] overflow-hidden">
                <Image
                  src={"/images/scan1.png"}
                  alt=""
                  fill
                  className="mx-auto object-cover"
                  id="featureImage"
                />
              </div>

              <div className="w-full absolute top-[18rem] left-[2.5rem] max-h-[150px] overflow-hidden">
                <Image
                  src={"/images/method.png"}
                  alt=""
                  height={140}
                  width={262}
                  className="mx-auto"
                  id="featureImage"
                />
              </div>

              <div className="w-full absolute -top-[2rem] -right-[12rem] max-h-[240px] overflow-hidden">
                <Image
                  src={"/images/analysis.png"}
                  alt=""
                  height={238}
                  width={256}
                  id="featureImage"
                  className="mx-auto object-contain lg:!w-[250px]  lg:!h-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FeaturesSection;
