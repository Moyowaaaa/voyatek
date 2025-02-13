import React from "react";
import ComponentWrapper from "../layouts/ComponentWrapper";
import TestimonialCard from "./TestimonialCard";

export type testimonial = {
  author: string;

  desc: string;
};

const TestimonialSection = () => {
  const testimonials: testimonial[] = [
    {
      author: "Herman Jensen",

      desc: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    },
    {
      author: "Steve Mark",
      desc: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    },
    {
      author: "Kenn Gallagher",
      desc: "It is usually people in the money business, finance, and international trade that are really rich.",
    },
  ];

  return (
    <ComponentWrapper>
      <div
        className="relative text-white
  min-h-screen max-h-max
  flex flex-col justify-center
  gap-[10rem]
  py-[11.25rem]"
        id="testimonialSection"
      >
        <div
          className="flex flex-col gap-[5rem] w-full gap-[4rem] max-w-[80rem]
      mx-auto "
        >
          <div className="flex items-center gap-[8rem]">
            <h1 className="titleText">What people are saying about us</h1>
            <p className="paragraphText">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 justify-between">
            {testimonials?.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TestimonialSection;
