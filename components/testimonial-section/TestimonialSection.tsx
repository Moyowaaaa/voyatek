import React from "react";
import ComponentWrapper from "../../layouts/ComponentWrapper";
import TestimonialCard from "./TestimonialCard";
import TestimonialClients from "./TestimonialClients";
import SubscribeSection from "../SubscribeSection";
import { testimonials } from "../../constants/data";

const TestimonialSection = () => {
  return (
    <ComponentWrapper>
      <div
        className="relative text-white
  min-h-screen max-h-max
  flex flex-col justify-center
  gap-[10rem]
  py-[11.25rem] "
        id="testimonialSection"
      >
        <div
          className="flex flex-col gap-[5rem] w-full gap-[4rem] max-w-[80rem]
      mx-auto "
        >
          <div className="flex items-center gap-[8rem]">
            <h1 className="titleText max-w-[30rem]">
              What people are saying about us
            </h1>
            <p className="paragraphText max-w-[28rem]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>

          <div className="flex items-center justify-between ">
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
