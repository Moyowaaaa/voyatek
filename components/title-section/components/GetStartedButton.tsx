import React from "react";
import { ArrowUp } from "react-iconly";

const GetStartedButton = () => {
  return (
    <>
      <div
        className="absolute top-20 right-24 h-[140px] max-h-[140px] w-[140px] max-w-[140px] border-2 border-[#5CE1E6] rounded-full
      flex items-center justify-center
      "
      >
        <p className="paragraphText font-[500] gradientText mx-auto self-center max-w-[5rem]">
          Get Started
        </p>

        <div className="absolute top-10 right-10 rotate-[50deg]">
          <ArrowUp />
        </div>
      </div>
    </>
  );
};

export default GetStartedButton;
