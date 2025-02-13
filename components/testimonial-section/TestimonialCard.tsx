import Image from "next/image";
import React from "react";
import { testimonial } from "./TestimonialSection";

const TestimonialCard = ({ testimonial }: { testimonial: testimonial }) => {
  return (
    <>
      <div
        className="
      testimonialCard
      flex flex-col py-[3.75rem] gap-[40px] px-[2.525rem] justify-between"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="28"
          viewBox="0 0 43 28"
          fill="none"
        >
          <path
            d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z"
            fill="url(#paint0_linear_2009_55)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2009_55"
              x1="28.8615"
              y1="-24.7969"
              x2="41.7939"
              y2="24.1471"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00887753" stopColor="#DEF9FA" />
              <stop offset="0.1723" stopColor="#BEF3F5" />
              <stop offset="0.4204" stopColor="#9DEDF0" />
              <stop offset="0.5512" stopColor="#7DE7EB" />
              <stop offset="0.7154" stopColor="#5CE1E6" />
              <stop offset="1" stopColor="#33BBCF" />
            </linearGradient>
          </defs>
        </svg>

        <div className=" min-h-[8rem]">
          <p className="paragraphText max-w-[18rem] self-start">
            {testimonial.desc}
          </p>
        </div>

        <div className="flex items-center gap-[1rem]">
          <div className="w-[48px] h-[48px]  rounded-full relative">
            <Image
              src={`/images/${testimonial.author
                .split(" ")[0]
                .toLowerCase()}.png`}
              className="h-auto w-auto cover"
              fill
              alt=""
              id="logo"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <p
              className="paragraphText
            !text-[20px] !text-white
            "
            >
              {testimonial.author}
            </p>
            <p
              className="paragraphText
            !text-[16px]
            "
            >
              Founder & Leader
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
