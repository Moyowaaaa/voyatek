import React from "react";

const SubscribeSection = () => {
  return (
    <>
      <div
        className="
         blurBackground
       py-[4.5rem]
       px-[6.25rem]
       flex items-center justify-between 
       "
      >
        <div
          className="flex flex-col
      gap-[1.5rem]"
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
