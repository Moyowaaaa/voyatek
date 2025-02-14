"use client";

import React, { useEffect, useRef } from "react";
import ComponentWrapper from "../../layouts/ComponentWrapper";
import TestimonialCard from "./TestimonialCard";
import TestimonialClients from "./TestimonialClients";
import SubscribeSection from "../SubscribeSection";
import { testimonials } from "../../constants/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const pageHeaderContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageHeaderContainer.current,
          start: "top 50%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      if (pageHeaderContainer.current)
        tl.from(pageHeaderContainer.current?.children, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
    }, pageHeaderContainer);

    return () => ctx.revert();
  }, []);

  return (
    <ComponentWrapper>
      <div
        className="relative text-white min-h-screen max-h-max flex flex-col justify-center gap-[10rem] py-[11.25rem]"
        id="testimonialSection"
      >
        <div className="flex flex-col gap-[5rem] w-full max-w-[80rem] mx-auto">
          <div
            className="max-h-max overflow-hidden flex items-center gap-[8rem]"
            ref={pageHeaderContainer}
          >
            <h1 className="titleText max-w-[30rem]">
              What people are saying about us
            </h1>
            <p className="paragraphText max-w-[28rem]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>

          <div className="flex items-center justify-between">
            {testimonials?.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          <TestimonialClients />
          <SubscribeSection />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TestimonialSection;
