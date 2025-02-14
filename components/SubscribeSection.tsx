"use client";
import React, { useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import gsap from "gsap";

const SubscribeSection = () => {
  const subscribeContainerRef = useRef<HTMLDivElement | null>(null);
  const onScreen = useIntersectionObserver(subscribeContainerRef, 0.5);

  useEffect(() => {
    const tl = gsap.timeline();
    if (onScreen) {
      tl.fromTo(
        subscribeContainerRef.current && subscribeContainerRef.current,
        {
          background: "white",
        },
        {
          borderRadius: "20px",
          background:
            "linear-gradient(-144deg,#fff -278.56%,#6d6d6d -78.47%,#11101d 91.61% )",
          ease: "power3.inOut",
          duration: 1.2,
          opacity: 1,
        }
      );
    } else {
      gsap.set(subscribeContainerRef.current && subscribeContainerRef.current, {
        background: "none",
      });
    }

    if (subscribeContainerRef.current) {
      gsap.set(subscribeContainerRef.current?.children[0].children, {
        opacity: 0,
      });
      gsap.fromTo(
        subscribeContainerRef.current &&
          subscribeContainerRef.current?.children[0].children,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.5,
          delay: 1,
          scrollTrigger: {
            trigger: subscribeContainerRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: 3,
          },
        }
      );
    }
  }, [onScreen]);

  return (
    <>
      <div
        className="blurBackground
 py-[4.5rem] px-[6.25rem] flex items-center justify-between "
        ref={subscribeContainerRef}
      >
        <div
          className="flex flex-col
      gap-[1.5rem] max-h-max overflow-hidden "
        >
          <h1 className="titleText">Let’s try our service now!</h1>
          <p className="paragraphText max-w-[28rem]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button>Get Started</button>
      </div>
    </>
  );
};

export default SubscribeSection;
